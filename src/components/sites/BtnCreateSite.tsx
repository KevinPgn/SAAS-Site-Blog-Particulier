"use client"

import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import { useRouter } from "next/navigation"

export const BtnCreateSite = () => {
  const router = useRouter()
  return <>
    <Button
      variant="blue"
      className="flex items-center gap-2"
      onClick={() => router.push('/profile/sites/create')}
    >
      <Plus size={16} />
      Create Site
    </Button>
  </>
}