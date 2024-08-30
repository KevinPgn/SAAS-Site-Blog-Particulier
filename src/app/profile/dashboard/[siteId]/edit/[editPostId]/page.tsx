import { EditFormPost } from '@/components/dashboard/editPost/EditFormPost'
import React from 'react'
import prisma from '@/lib/prisma'

interface EditPostPageProps {
    params: {
        siteId: string
        editPostId: string
    }
}

const EditPostPage = async ({ params }: EditPostPageProps) => {
  const { siteId, editPostId } = params

  const post = await prisma.post.findUnique({
    where: {
        id: editPostId,
        siteId: siteId
    }
  })

  console.log(post)

    return (
    <section className='w-full overflow-auto p-7 flex-1'>
        <EditFormPost />
  </section>
  )
}

export default EditPostPage