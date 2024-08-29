import { Dashboard } from '@/components/dashboard/Dashboard'
import React from 'react'
import prisma from '@/lib/prisma'
import { auth } from '@/lib/auth'
import { UserProps } from '@/lib/types'

const DashboardPage = async () => {
  const session = await auth()
  const user = session?.user as UserProps
  const userId = user.id
  const sites = await prisma.site.findMany({
    where: {
      authorId: userId
    },
    select: {
      id: true,
      imageUrl: true,
      name: true,
      url: true,
      description: true,
    },
    orderBy: {
      createdAt: 'desc'
    }
  })

  const getRecentsPosts = await prisma.post.findMany({
    where: {
      site: {
        authorId: userId
      }
    },
    orderBy: {
      createdAt: 'desc'
    },
    take: 5
  })

  return (
    <section className='w-full overflow-auto flex-1'>
      <Dashboard sites={sites} getRecentsPosts={getRecentsPosts} />
    </section>
  )
}

export default DashboardPage