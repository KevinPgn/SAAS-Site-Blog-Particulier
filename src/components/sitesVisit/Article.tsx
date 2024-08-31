import { BackRouter } from "./BackRouter"
import { CommentForm } from "./CommentForm"

export const Article = ({ post, session }: { post: any, session: any }) => {
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

        {session ? <CommentForm postId={post.id} /> : <div className="text-md text-gray-500 text-center">You need to login to comment</div>}
    </div>

    <div className="flex flex-col gap-5 items-center justify-center mb-3">
        <h1 className="text-5xl font-bold">Comments</h1>
        {post.comments.map((comment: any) => (
            <div key={comment.id} className="flex bg-gray-100 p-3 rounded-lg w-full flex-col gap-2">
                <div className="flex items-center gap-2">
                    <img src={comment.author.image} alt={comment.author.name} className="w-10 h-10 rounded-full" />
                    <span className="text-md text-gray-500">{comment.author.name}</span>
                </div>
                <p className="text-md text-black">{comment.content}</p>
            </div>
        ))}
    </div>
  </>
}