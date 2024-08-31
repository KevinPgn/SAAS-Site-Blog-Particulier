import { ReadMore } from "./ReadMore"
import { SubscribeToTheSite } from "./SubscribeToTheSite"

export const VisitSite = ({ site }: { site: any }) => {
  console.log(site)
  return <>
    <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
        <img src="/logo.svg" alt="logo" className="w-10 h-10" />
        <span className="text-2xl font-bold">{site.name}</span>
        </div>
        <SubscribeToTheSite siteId={site.id} />
    </div>

    <div className="flex items-start justify-center gap-5 flex-wrap mt-10">
        {site.posts.map((post: any) => (
            <div key={post.id} className="w-[400px] shadow-lg rounded-lg">
                <img src={post.imageUrl} loading="lazy" alt={post.title} className="w-full h-[200px] object-cover rounded-t-lg" />
                <div className="p-4 py-6 px-7">
                    <h2 className="text-2xl font-bold">{post.title}</h2>
                    <div className="text-gray-500 mt-2"
                    dangerouslySetInnerHTML={{ __html: post.content.slice(0, 100) }}
                    ></div>
                    <ReadMore siteUrl={site.url} postId={post.id} />
                </div>
            </div>
        ))}
    </div>
  </>
}