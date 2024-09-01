import { SiteAbonnement } from '@/components/dashboard/abonnement/SiteAbonnement'
import { getUserSubscribedSites } from '@/server/Actions'

const AbonnementPage = async () => {
  const subscribedSites = await getUserSubscribedSites({})

  return (
    <section className='flex-1 w-full p-5'>
      <SiteAbonnement subscribedSites={subscribedSites?.data} />
    </section>
  )
}

export default AbonnementPage