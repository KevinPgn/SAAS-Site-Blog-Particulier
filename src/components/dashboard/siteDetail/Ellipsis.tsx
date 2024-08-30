"use client"
import { Ellipsis } from "lucide-react"
import { deletePost } from "@/server/Actions"
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuSeparator} from "@/components/ui/dropdown-menu"

export const Ellipsiss = ({ postId, siteId }: { postId: string, siteId: string }) => {
  return <>
    <DropdownMenu>
      <DropdownMenuTrigger className="text-gray-500"><Ellipsis size={18} /></DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Actions</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => deletePost({ postId, siteId })}>Delete</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  </>
}