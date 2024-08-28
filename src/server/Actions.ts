"use server"
import prisma from "@/lib/prisma"
import {z} from "zod"
import { authenticatedAction } from "@/lib/safe-actions"
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

