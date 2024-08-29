"use server"
import prisma from "@/lib/prisma"
import {z} from "zod"
import { authenticatedAction } from "@/lib/safe-actions"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
/*
model User {
  id            String          @id @default(cuid())
  name          String?
  email         String?         @unique
  emailVerified DateTime?
  image         String?
  plan          String?         @default("free")
  accounts      Account[]
  sessions      Session[]
  sites         Site[]
  posts         Post[]
  comments      Comments[]
 
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}
 
model Account {
  id                String  @id @default(cuid())
  userId            String
  type              String
  provider          String
  providerAccountId String
  refresh_token     String?
  access_token      String?
  expires_at        Int?
  token_type        String?
  scope             String?
  id_token          String?
  session_state     String?
 
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
 
  user User @relation(fields: [userId], references: [id], onDelete: Cascade)
 
  @@unique([provider, providerAccountId])
}
 
model Session {
  id           String   @id @default(cuid())
  sessionToken String   @unique
  userId       String
  expires      DateTime
  user         User     @relation(fields: [userId], references: [id], onDelete: Cascade)
 
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}
 
model VerificationToken {
  identifier String
  token      String
  expires    DateTime
 
  @@unique([identifier, token])
}

model Site {
  id        String    @id @default(cuid())
  name      String
  url       String?   @unique
  description String?

  authorId  String
  author    User      @relation(fields: [authorId], references: [id], onDelete: Cascade)
  
  posts     Post[]

  createdAt DateTime  @default(now())
  updatedAt DateTime  @updatedAt
}

model Post {
  id        String    @id @default(cuid())
  imageUrl  String?
  title     String
  content   String 
  slug      String  @unique
  views     Int     @default(0)
  published Boolean   @default(false)

  authorId  String
  author    User      @relation(fields: [authorId], references: [id], onDelete: Cascade)

  siteId    String
  site      Site      @relation(fields: [siteId], references: [id], onDelete: Cascade)

  comments Comments[]

  createdAt DateTime  @default(now())
  updatedAt DateTime  @updatedAt
}

model Comments{
  id        String    @id @default(cuid())
  content   String

  postId    String
  post      Post      @relation(fields: [postId], references: [id], onDelete: Cascade)

  authorId  String
  author    User      @relation(fields: [authorId], references: [id], onDelete: Cascade)

  createdAt DateTime  @default(now())
  updatedAt DateTime  @updatedAt
}
*/

export const createNewSite = authenticatedAction
  .schema(z.object({
    name: z.string().min(3).max(50),
    description: z.string().min(3).max(100),
    imageUrl: z.string()
  }))
  .action(async ({parsedInput: {name, description, imageUrl}, ctx:{userId}}) => {
    const url = name.toLowerCase().replace(/[ /]/g, "-");
    
    // Check if a site with the same URL already exists
    const existingSite = await prisma.site.findUnique({
      where: { url }
    });

    if (existingSite) {
      throw new Error("A site with this name already exists. Please choose a different name.");
    }

    await prisma.site.create({
      data: {
        name,
        url,
        description,
        imageUrl,
        authorId: userId
      }
    })

    revalidatePath("/profile/dashboard")
    redirect("/profile/dashboard")
  })

