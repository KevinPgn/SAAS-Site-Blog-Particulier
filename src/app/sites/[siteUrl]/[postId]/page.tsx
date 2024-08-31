import React from 'react'
import prisma from '@/lib/prisma'
import { Article } from '@/components/sitesVisit/Article'

interface PagePostDetailsProps {
    params: {
        siteUrl: string
        postId: string
    }
}

const PagePostDetails = async ({ params }: PagePostDetailsProps) => {
  const { siteUrl, postId } = params

  const post = await prisma.post.findUnique({
    where: {
        id: postId,
    }
  })

    return (
    <section className='max-w-[1000px] mx-auto mt-2'>
        <Article post={post} />
    </section>
  )
}

export default PagePostDetails