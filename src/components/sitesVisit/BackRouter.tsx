"use client"
import { useRouter } from "next/navigation"
import { Button } from "../ui/button"
import { ArrowLeft } from "lucide-react"

export const BackRouter = () => {
  const router = useRouter()
  return <div className="flex items-center gap-2">
    <Button variant="ghost" onClick={() => router.back()} className="cursor-pointer p-3 border border-gray-300 rounded-md">
      <ArrowLeft size={16} />
    </Button>
    <span className="text-lg font-bold">Go Back</span>
  </div>
}