import React from 'react'
import prisma from '@/lib/prisma'
import { VisitSite } from '@/components/sitesVisit/VisitSite'

interface SiteUrlPageProps {
  params: {
    siteUrl: string
  }
}

const SiteUrlPage = async ({ params }: SiteUrlPageProps) => {
  const { siteUrl } = params
  
  const site = await prisma.site.findUnique({
    where: {
      url: siteUrl,
    },
    select: {
        url: true,
        name: true,
        posts: {
            where: {
                published: true
            },
            select: {
                id: true,
                title: true,
                content: true,
                imageUrl: true,
                createdAt: true,
            }
        }
    }
  })

  return (
    <section className='max-w-[1400px] mx-auto mt-2'>
      <VisitSite site={site} />
    </section>
  )
}

export default SiteUrlPage