"use client"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export const CommentForm = ({postId}: {postId: string}) => {
  return <form className="w-full mb-3">
        <Textarea placeholder="Your comment" className="mb-3" />
        <Button>Submit</Button>
    </form>    
}