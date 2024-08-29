"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export const FormCreateSite = () => {
  return <div className="w-[500px] border mt-20 border-gray-200 rounded-md mx-auto p-5">
    <h2 className="text-2xl font-extrabold mb-2">Create Site</h2>
    <span className="text-md text-gray-500">Create your Site here. Click the button below one your done...</span>
    <form className="flex flex-col gap-5 mt-5">
        <div className="flex flex-col gap-1">
            <label htmlFor="name" className="text-md font-medium">Site name <span className="text-red-500">*</span>
            <span className="text-xs ml-2 text-gray-500">(The site name will be the url)</span>
            </label>
            <Input className="bg-transparent" id="name" name="name" placeholder="Site name" />
        </div>
        <div className="flex flex-col gap-1">
            <label htmlFor="description" className="text-md font-medium">Description <span className="text-red-500">*</span></label>
            <Textarea className="bg-transparent" id="description" name="description" placeholder="e.g. This is a site about Manga/Anime" />
        </div>
        <div className="flex flex-col gap-1">
            <label htmlFor="imageUrl" className="text-md font-medium">ImageUrl
                <span className="text-xs ml-2 text-gray-500">(Put a image url via imgur or unsplash etc...)</span>
            </label>
            <Input className="bg-transparent" id="imageUrl" name="imageUrl" placeholder="e.g. https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg" />
        </div>

        <Button variant="blue" className="w-fit px-5 py-2 mt-5" type="submit">Create Site</Button>
    </form>
  </div>
}