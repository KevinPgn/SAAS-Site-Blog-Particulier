"use client"
import { Ellipsis } from "lucide-react"
import { deletePost } from "@/server/Actions"

export const Ellipsiss = ({ postId, siteId }: { postId: string, siteId: string }) => {
  return <>
    <button
      onClick={async () => {
        await deletePost({ postId, siteId })
      }}
      className="text-gray-500"><Ellipsis size={18} /></button>
  </>
}