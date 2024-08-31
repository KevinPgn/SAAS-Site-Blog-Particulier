import React from 'react'
import prisma from '@/lib/prisma'
import { Article } from '@/components/sitesVisit/Article'
import { auth } from '@/lib/auth'

interface PagePostDetailsProps {
    params: {
        siteUrl: string
        postId: string
    }
}

const PagePostDetails = async ({ params }: PagePostDetailsProps) => {
  const { siteUrl, postId } = params
  const session = await auth()

  const post = await prisma.post.findUnique({
    where: {
        id: postId,
    }
  })

    return (
    <section className='max-w-[1000px] mx-auto mt-2'>
        <Article post={post} session={session}/>
    </section>
  )
}

export default PagePostDetails