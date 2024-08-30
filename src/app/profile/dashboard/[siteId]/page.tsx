import { SideDetails } from '@/components/dashboard/siteDetail/SideDetails'
import { auth } from '@/lib/auth'
import prisma from '@/lib/prisma'

interface SiteDashboardPageProps {
  params: {
    siteId: string
  }
}

const SiteDashboardPage = async ({ params }: SiteDashboardPageProps) => {
  const session = await auth()
  const userId = session?.user?.id

  const site = await prisma.site.findUnique({
    where: {
      id: params.siteId,
      authorId: userId
    },
    select: {
        id: true,
        posts: {
            select:{
                id: true,
                title: true,
                published: true,
                createdAt: true,
                imageUrl: true,
            },
            orderBy: {
                createdAt: 'desc'
            }
        }
    }
  })

  return (
    <section className='w-full overflow-auto p-7 flex-1'>
      <SideDetails site={site} />
    </section>
  )
}

export default SiteDashboardPage