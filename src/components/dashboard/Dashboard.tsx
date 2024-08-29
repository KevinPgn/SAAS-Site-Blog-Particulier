import { Button } from "../ui/button"
import { Plus } from "lucide-react"

export const Dashboard = () => {
  return <main className="p-4 w-full">
    <div className="flex items-center justify-between px-2">
        <h2 className="text-2xl font-bold">Your Sites</h2>
        <Button variant="blue" className="gap-2 font-semibold">
            <Plus size={20} />
            <span>Create Site</span>
        </Button>
    </div>

    <div className="mt-4 flex gap-5">
        <div className="w-[400px] shadow-lg rounded-lg">
            <div className="w-full h-[200px] rounded-t-lg bg-purple-800"></div>
            <div className="p-4 py-6 px-7">
                <h2 className="text-2xl font-bold">KevinPgn</h2>
                <p className="text-gray-500 mt-2">Hey, I'm KevinPgn, I'm a web developer and I love to code</p>
                <Button variant="blue" className="mt-4 w-full">View Articles</Button>
            </div>
        </div>

        <div className="w-[400px] shadow-lg rounded-lg">
            <div className="w-full h-[200px] rounded-t-lg bg-blue-800"></div>
            <div className="p-4 py-6 px-7">
                <h2 className="text-2xl font-bold">KevinPgn Blog</h2>
                <p className="text-gray-500 mt-2">Hey, this is a super blog about web development</p>
                <Button variant="blue" className="mt-4 w-full">View Articles</Button>
            </div>
        </div>
    </div>
  </main>
}