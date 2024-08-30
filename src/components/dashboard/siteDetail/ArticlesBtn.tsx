"use client"
import { Button } from "@/components/ui/button"
import {Plus, Settings, ExternalLink} from 'lucide-react'

export const ArticlesBtn = () => {
  return <>
     <div className="w-full justify-end px-5 flex items-center gap-5">
        <Button variant='outline' className="gap-2 text-black"><ExternalLink size={18} /> View Blog</Button>
        <Button variant='outline' className="gap-2 text-black"><Settings size={18} /> Settings</Button>
        <Button variant='blue' className="gap-2"><Plus size={18} /> Create Article</Button>
    </div>
  </>
}