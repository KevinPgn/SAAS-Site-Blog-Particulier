import { BtnCreateSite } from "../sites/BtnCreateSite"
import { ReadMore } from "../sitesVisit/ReadMore"
import { BtnViewArticleDashboard } from "./BtnViewArticleDashboard"

export const Dashboard = ({ sites, getRecentsPosts }: { sites: any, getRecentsPosts: any }) => {
  console.log(getRecentsPosts)
  
  if(sites.length === 0) return <main className="p-4 w-full">
    <div className="flex items-center justify-between px-2">
        <h2 className="text-2xl font-bold">Your Sites</h2>
        <BtnCreateSite />
    </div>

    <div className="flex items-center justify-center h-full">
        <div className="flex flex-col items-center justify-center">
            <span>No sites found</span>
            <span>Create your first site</span>
        </div>
    </div>
  </main>
  
  return <main className="p-4 w-full">
    <div className="flex items-center justify-between px-2">
        <h2 className="text-2xl font-bold">Your Sites</h2>
        <BtnCreateSite />
    </div>

    <div className="mt-4 flex max-xl:justify-center flex-wrap gap-5">
        {sites.map((site: any) => (
            <div key={site.id} className="w-[400px] shadow-lg rounded-lg">
                <img src={site.imageUrl} loading="lazy" alt={site.name} className="w-full h-[200px] object-cover rounded-t-lg" />
                <div className="p-4 py-6 px-7">
                    <h2 className="text-2xl font-bold">{site.name}</h2>
                    <p className="text-gray-500 mt-2">{site.description}</p>
                    <BtnViewArticleDashboard siteId={site.id} />
                </div>
            </div>
        ))}
    </div>

    <h2 className="text-2xl font-bold mt-10 px-2">Recents Articles</h2>

    <div className="mt-4 flex max-xl:justify-center flex-wrap gap-5">
        {getRecentsPosts.map((post: any) => (
            <div key={post.id} className="w-[400px] shadow-lg rounded-lg">
                <img src={post.imageUrl} loading="lazy" alt={post.name} className="w-full h-[200px] object-cover rounded-t-lg" />
                <div className="p-4 py-6 px-7">
                    <h2 className="text-2xl font-bold">{post.title}</h2>
                    <ReadMore siteUrl={post.site.url} postId={post.id} />
                </div>
            </div>
        ))}
    </div>
  </main>
}