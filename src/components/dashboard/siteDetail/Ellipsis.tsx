"use client"
import { Ellipsis } from "lucide-react"
import { deletePost } from "@/server/Actions"
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuSeparator} from "@/components/ui/dropdown-menu"
import { useRouter } from "next/navigation"

export const Ellipsiss = ({ postId, siteId }: { postId: string, siteId: string }) => {
  const router = useRouter()

  return <>
    <DropdownMenu>
      <DropdownMenuTrigger className="text-gray-500"><Ellipsis size={18} /></DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Actions</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => router.push(`/profile/dashboard/${siteId}/edit/${postId}`)}>Edit</DropdownMenuItem>
        <DropdownMenuItem onClick={() => deletePost({ postId, siteId })}>Delete</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  </>
}