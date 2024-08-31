"use client"
import { Button } from "../ui/button"
import { subscribeToSite } from "@/server/Actions"

export const SubscribeToTheSite = ({ siteId }: { siteId: string }) => {
  console.log(siteId)
  return <>
    <Button
    onClick={async() => await subscribeToSite({ siteId })}
    variant="outline">Subscribe</Button>
  </>
}