"use client"
import { Button } from "@/components/ui/button"
import {Plus, Settings, ExternalLink} from 'lucide-react'
import { useRouter } from "next/navigation"

export const ArticlesBtn = ({siteId, siteUrl}: {siteId: string, siteUrl: string}) => {
  const router = useRouter()
  return <div className="w-full">
     <div className="w-full justify-end flex items-center gap-5">
        <Button variant='outline'
        onClick={() => router.push(`/sites/${siteUrl}`)}
        className="gap-2 text-black"><ExternalLink size={18} /> View Blog</Button>
        <Button variant='outline'
        onClick={() => router.push(`/profile/dashboard/${siteId}/settings`)}
        className="gap-2 text-black"><Settings size={18} /> Settings</Button>
        <Button 
        onClick={() => router.push(`/profile/dashboard/${siteId}/create`)}
        variant='blue' className="gap-2"><Plus size={18} /> Create Article</Button>
    </div>
  </div>
}