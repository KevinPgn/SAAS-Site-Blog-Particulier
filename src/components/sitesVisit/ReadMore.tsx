"use client"
import { useRouter } from "next/navigation"
import { Button } from "../ui/button"

export const ReadMore = ({ siteUrl, postId }: { siteUrl: string, postId: string }) => {
  const router = useRouter()
  return <>
    <Button
    onClick={() => router.push(`/sites/${siteUrl}/${postId}`)}
    className="mt-5 w-full">Read More</Button>
  </>
}