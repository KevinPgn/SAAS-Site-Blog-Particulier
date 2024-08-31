import { BackRouter } from "./BackRouter"

export const Article = ({ post }: { post: any }) => {
  return <>
    <BackRouter />

    <div className="flex flex-col gap-5 items-center justify-center">
        <span className="text-md mb-5 text-gray-500">{new Date(post.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
        <h1 className="text-5xl font-bold">{post.title}</h1>
        <p className="text-md text-gray-500 mt-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro, nulla.</p>
    
        <img src={post.imageUrl} alt={post.title} className="w-full h-[600px] rounded-lg object-cover mt-5" />
        <div
        dangerouslySetInnerHTML={{ __html: post.content }}
        className="text-md [&_h2]:text-2xl [&_h1]:text-2xl mb-7 [&_h1]:font-extrabold [&_h2]:font-bold [&_p]:text-md [&_a]:text-blue-500 [&_a]:underline mt-5"
        ></div>
    </div>
  </>
}