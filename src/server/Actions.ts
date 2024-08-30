"use server"
import prisma from "@/lib/prisma"
import {z} from "zod"
import { authenticatedAction } from "@/lib/safe-actions"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import { auth } from "@/lib/auth"
import { UserProps } from "@/lib/types"
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
    const session = await auth()
    const user = session?.user as UserProps

    // if the user plan is false, he can't create more than 1 site
    if(user.plan !== false && user.sites.length >= 1){
      throw new Error("You can't create more than 1 site.");
    }

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

// Create new post for the site, but, the user must be the author of the site
export const createNewPost = authenticatedAction
  .schema(z.object({
    siteId: z.string(),
    title: z.string().min(3).max(50),
    content: z.string().min(3).max(100),
    imageUrl: z.string(),
    published: z.boolean()
  }))
  .action(async ({parsedInput: {title, content, imageUrl, siteId, published}, ctx:{userId}}) => {
    const session = await auth()
    const user = session?.user as UserProps

    const site = await prisma.site.findUnique({
      where: { id: siteId }
    });

    if(!site){
      throw new Error("Site not found");
    }

    if(site.authorId !== userId){
      throw new Error("You are not the author of this site");
    }

    const slug = title.toLowerCase().replace(/[ /]/g, "-");

    const existingPostInSite = await prisma.post.findUnique({
      where: { slug, siteId }
    });

    if(existingPostInSite){
      throw new Error("A post with this title already exists. Please choose a different title.");
    }

    // The creator of the site, can create 10 posts in free plan and 100 in premium plan

    if(user?.plan === false && user.posts.length >= 10){
      throw new Error("You can't create more than 10 posts in free plan.");
    }
    if(user?.plan === true && user.posts.length >= 100){
      throw new Error("You can't create more than 100 posts in premium plan.");
    }

    await prisma.post.create({
      data: {
        title,
        content,
        imageUrl,
        slug,
        published,
        authorId: userId,
        siteId
      }
    })

    revalidatePath(`/profile/dashboard/${siteId}`)
  })

export const createNewComment = authenticatedAction
  .schema(z.object({
    postId: z.string(),
    content: z.string().min(3).max(100),
  }))
  .action(async ({parsedInput: {postId, content}, ctx:{userId}}) => {
    const post = await prisma.post.findUnique({
      where: { id: postId }
    });

    if(!post){
      throw new Error("Post not found");
    }

    await prisma.comments.create({
      data: {
        content,
        postId,
        authorId: userId
      }
    })

    revalidatePath(`/site/${post.siteId}`)
    redirect(`/site/${post.siteId}`)
  })

export const deletePost = authenticatedAction
  .schema(z.object({
    postId: z.string(),
    siteId: z.string(),
  }))
  .action(async ({ parsedInput: { postId, siteId }, ctx: { userId } }) => {
    const post = await prisma.post.findUnique({
      where: { id: postId, authorId: userId },
      include: { site: {
        include: {
          author: true
        }
      }},
    });

    if (!post) {
      throw new Error("Post not found");
    }

    if (post.site.authorId !== userId) {
      throw new Error("You don't have permission to delete this post");
    }

    await prisma.post.delete({
      where: { id: postId },
    });

    revalidatePath(`/profile/dashboard/${siteId}`);
    redirect(`/profile/dashboard/${siteId}`);
  });