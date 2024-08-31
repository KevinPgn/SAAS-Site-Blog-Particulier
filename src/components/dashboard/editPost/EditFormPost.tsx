"use client"
import { editPost } from "@/server/Actions"
import { useForm } from "react-hook-form"
import {ArrowLeft} from 'lucide-react'
import { Button } from "@/components/ui/button"
import {useRouter} from 'next/navigation'
import { Input } from "@/components/ui/input"
import { Editor } from "../createArticle/Editor"
import { useState } from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"  
import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const EditFormPost = ({siteId, post}: {siteId: string, post: any}) => {
  const router = useRouter()
  const {register, handleSubmit, formState: {errors}} = useForm()
  const [content, setContent] = useState(post.content)
  const [published, setPublished] = useState(post.published)

  const onSubmit = async (data: any) => {
    try {
      await editPost({...data, content, siteId, published, postId: post.id})
      toast.success('Article edited successfully')
    } catch (error) {
      toast.error((error as Error).message)
    }
  }

  return <div className="w-full">
    <div className="flex items-center gap-5">
        <Button variant="outline" className="px-3 text-black" onClick={() => router.back()}><ArrowLeft size={20} /></Button>
        <h1 className="text-2xl font-bold">Edit Article</h1>
    </div>
    <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-2 mt-3">
            <label htmlFor="title" className="text-sm font-semibold">Title</label>
            <Input {...register('title')} required placeholder="Title" defaultValue={post.title} />
            {errors.title && <span className="text-red-500">This field is required</span>}
        </div>
        <div className="flex flex-col gap-2 mt-3 mb-16">
            <label htmlFor="content" className="text-sm font-semibold">Content</label>
            <Editor value={content} onChange={setContent} />
            {errors.content && <span className="text-red-500">This field is required</span>}
        </div>
        <div className="flex flex-col gap-2 mt-3">
            <label htmlFor="imageUrl" className="text-sm font-semibold">Image URL</label>
            <Input {...register('imageUrl')} required placeholder="Image URL" defaultValue={post.imageUrl} />
            {errors.imageUrl && <span className="text-red-500">This field is required</span>}
        </div>
        <div className="flex flex-col gap-2 mt-3">
            <label htmlFor="published" className="text-sm font-semibold">Published</label>
            <Select
            onValueChange={(value) => setPublished(value === 'true')}
            {...register('published')}>
                <SelectTrigger className="text-black">
                    <SelectValue placeholder="Publish now?" className="text-black" defaultValue={published ? 'true' : 'false'} />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="true">Yes</SelectItem>
                    <SelectItem value="false">No</SelectItem>
                </SelectContent>
            </Select>
        </div>
      <Button variant="blue" type="submit" className="mt-5">Edit</Button>
    </form>
    <ToastContainer />
  </div>
}