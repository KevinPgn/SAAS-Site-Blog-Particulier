import { Sites } from '@/components/sites/Sites'
import React from 'react'
import prisma from '@/lib/prisma'

const SitesPage = async () => {
  // recupere moi tous les sites qui existe
  const sites = await prisma.site.findMany({
    select: {
      id: true,
      name: true,
      url: true,
      description: true,
      imageUrl: true,
    },
    take: 10,
    orderBy: {
      createdAt: 'desc'
    }
  })

  return (
    <section className='w-full p-5 flex-1'>
      <Sites sites={sites} />
    </section>
  )
}

export default SitesPage