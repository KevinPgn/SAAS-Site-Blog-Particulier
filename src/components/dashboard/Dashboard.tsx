import { BtnCreateSite } from "../sites/BtnCreateSite"
import { Button } from "../ui/button"
import { Plus } from "lucide-react"

export const Dashboard = ({ sites, getRecentsPosts }: { sites: any, getRecentsPosts: any }) => {
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
        <Button variant="blue" className="gap-2 font-semibold">
            <Plus size={20} />
            <span>Create Site</span>
        </Button>
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

    <h2 className="text-2xl font-bold mt-10 px-2">Recents Articles</h2>

    <div className="mt-4 flex max-xl:justify-center flex-wrap gap-5">
        <div className="w-[400px] shadow-lg rounded-lg">
            <div className="w-full h-[200px] rounded-t-lg bg-purple-800"></div>
            <div className="p-4 py-6 px-7">
                <h2 className="text-2xl font-bold">KevinPgn</h2>
                <p className="text-gray-500 mt-2">Hey, I'm KevinPgn, I'm a web developer and I love to code</p>
                <Button variant="blue" className="mt-4 w-full">View this article</Button>
            </div>
        </div>

        <div className="w-[400px] shadow-lg rounded-lg">
            <div className="w-full h-[200px] rounded-t-lg bg-blue-800"></div>
            <div className="p-4 py-6 px-7">
                <h2 className="text-2xl font-bold">KevinPgn</h2>
                <p className="text-gray-500 mt-2">Hey, I'm KevinPgn, I'm a web developer and I love to code</p>
                <Button variant="blue" className="mt-4 w-full">View this article</Button>
            </div>
        </div>

        <div className="w-[400px] shadow-lg rounded-lg">
            <div className="w-full h-[200px] rounded-t-lg bg-pink-800"></div>
            <div className="p-4 py-6 px-7">
                <h2 className="text-2xl font-bold">KevinPgn</h2>
                <p className="text-gray-500 mt-2">Hey, I'm KevinPgn, I'm a web developer and I love to code</p>
                <Button variant="blue" className="mt-4 w-full">View this article</Button>
            </div>
        </div>
    </div>
  </main>
}