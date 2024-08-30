"use client"
import { createNewPost } from "@/server/Actions"
import { useForm } from "react-hook-form"
import {ArrowLeft} from 'lucide-react'
import { Button } from "@/components/ui/button"
import {useRouter} from 'next/navigation'
export const FormCreateArticle = () => {
  const router = useRouter()
  return <div className="w-full">
    <div className="flex items-center gap-5">
        <Button variant="outline" className="px-3 text-black" onClick={() => router.back()}><ArrowLeft size={20} /></Button>
        <h1 className="text-2xl font-bold">Create Article</h1>
    </div>
  </div>
}