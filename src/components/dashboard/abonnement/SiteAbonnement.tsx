import { ViewArticle } from "@/components/sites/ViewArticle"

export const SiteAbonnement = ({subscribedSites}: {subscribedSites: any}) => {
  const siteInfo = subscribedSites.map((site: any) => site.site)
  return <>
    <h2 className="text-2xl font-bold">Abonnement Blog</h2>
    <div className="mt-4 flex max-xl:justify-center flex-wrap gap-5">
        {siteInfo.map((site: any) => (
            <div key={site.id} className="w-[400px] shadow-lg rounded-lg">
                <img src={site.imageUrl} loading="lazy" alt={site.name} className="w-full h-[200px] object-cover rounded-t-lg" />
                <div className="p-4 py-6 px-7">
                    <h2 className="text-2xl font-bold">{site.name}</h2>
                    <p className="text-gray-500 mt-2">{site.description}</p>
                    <ViewArticle siteUrl={site.url} />
                </div>
            </div>
        ))}
    </div>
  </>
}