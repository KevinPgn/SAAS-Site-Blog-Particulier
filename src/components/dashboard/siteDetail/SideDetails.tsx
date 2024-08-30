import { ArticlesBtn } from "./ArticlesBtn"
import { Ellipsis } from "lucide-react"
export const SideDetails = ({site}: {site: any}) => {
  const posts = site?.posts

  return <>
  <ArticlesBtn />
  <div className="w-full mt-5 border border-gray-200 rounded-md p-5">
    <h2 className="text-2xl font-extrabold">Articles</h2>
    <p className="text-md text-gray-500 font-semibold mt-1 mb-4">Manage your articles in a simple and intuitive interface.</p>
    
    <table className="w-full">
      <thead>
        <tr className="text-left text-gray-500">
          <th className="py-2 text-sm font-normal">Image</th>
          <th className="py-2 text-sm font-normal">Title</th>
          <th className="py-2 text-sm font-normal">Status</th>
          <th className="py-2 text-sm font-normal">Created At</th>
          <th className="py-2 text-sm font-normal">Actions</th>
        </tr>
      </thead>
      <tbody>
        {posts.map((post: any, index: any) => (
          <tr key={index} className="border-t border-gray-200">
            <td className="py-2">
              <img src={post.imageUrl} alt={post.title} className="w-16 h-16 object-cover rounded" />
            </td>
            <td className="py-2">{post.title}</td>
            <td className="py-2">
              <span className={`px-2 py-1 rounded-full text-xs ${post.published ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                {post.published ? 'Published' : 'Draft'}
              </span>
            </td>
            <td className="py-2">
                {new Date(post.createdAt).toLocaleDateString()}
            </td>
            <td className="py-2">
              <button className="text-gray-500"><Ellipsis size={18} /></button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</>
  
}