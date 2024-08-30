"use client"
import { useRouter } from "next/navigation"
import { Button } from "../ui/button"

export const BtnViewArticleDashboard = ({siteId}: {siteId: string}) => {
  const router = useRouter()

  return <>
    <Button variant="blue" className="mt-4 w-full" onClick={() => router.push(`/profile/dashboard/${siteId}`)}>View Articles</Button>
  </>
}