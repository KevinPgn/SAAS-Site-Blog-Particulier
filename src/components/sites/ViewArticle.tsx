"use client"
import { Button } from "../ui/button"
import { useRouter } from "next/navigation"

export const ViewArticle = ({siteUrl}: {siteUrl: string}) => {
  const router = useRouter()
  return <>
    <Button variant="blue" className="mt-4 w-full" onClick={() => router.push(`/sites/${siteUrl}`)}>View Articles</Button>
  </>
}