"use client"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import {createNewComment} from "@/server/Actions"
import { useForm } from "react-hook-form"
import { useState } from "react"

export const CommentForm = ({postId}: {postId: string}) => {
  const {register, handleSubmit} = useForm()

  const onSubmit = handleSubmit(async (data) => {
    const dataComment = {
        postId,
        content: data.content
    }
    try{
        await createNewComment(dataComment)
    }catch(error){
        console.log(error)
    }
  })

  return <form className="w-full mb-3" onSubmit={onSubmit}>
        <Textarea placeholder="Your comment" className="mb-3" {...register("content")} />
        <Button>Submit</Button>
    </form>    
}