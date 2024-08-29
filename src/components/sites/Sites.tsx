import { Button } from "../ui/button"
import { BtnCreateSite } from "./BtnCreateSite"

export const Sites = ({ sites }: { sites: any }) => {
  if(sites.length === 0) return <div className="w-full">
    <div className="flex justify-end">
      <BtnCreateSite />
    </div>
    <div className="flex items-center justify-center h-full">
      <div className="flex flex-col items-center justify-center">
        <span>No sites found</span>
        <span>Be The First To Create A Blog Site</span>
      </div>
    </div>
  </div>
  
  return <div className="w-full">
    <div className="flex justify-end">
      <BtnCreateSite />
    </div>
    <div className="mt-4 flex max-xl:justify-center flex-wrap gap-5">
        {sites.map((site: any) => (
            <div key={site.id} className="w-[400px] shadow-lg rounded-lg">
                <img src={site.imageUrl} loading="lazy" alt={site.name} className="w-full h-[200px] object-cover rounded-t-lg" />
                <div className="p-4 py-6 px-7">
                    <h2 className="text-2xl font-bold">{site.name}</h2>
                    <p className="text-gray-500 mt-2">{site.description}</p>
                    <Button variant="blue" className="mt-4 w-full">View Articles</Button>
                </div>
            </div>
        ))}
    </div>
  </div>
}