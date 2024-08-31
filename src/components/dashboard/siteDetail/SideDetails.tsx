import { ArticlesBtn } from "./ArticlesBtn"
import { Ellipsis } from "lucide-react"
import { Ellipsiss } from "./Ellipsis"

export const SideDetails = ({site}: {site: any}) => {
  const posts = site?.posts

  return <>
    <ArticlesBtn siteId={site?.id} siteUrl={site?.url} />
    <div className="w-full mt-5 border border-gray-200 rounded-md p-3 sm:p-5">
      <h2 className="text-xl sm:text-2xl font-extrabold">Articles</h2>
      <p className="text-sm sm:text-md text-gray-500 font-semibold mt-1 mb-4">Manage your articles in a simple and intuitive interface.</p>
      
      <div className="overflow-x-auto">
        <table className="w-full min-w-full">
          <thead>
            <tr className="text-left text-gray-500">
              <th className="py-2 text-xs sm:text-sm font-normal">Image</th>
              <th className="py-2 text-xs sm:text-sm font-normal">Title</th>
              <th className="py-2 text-xs sm:text-sm font-normal">Status</th>
              <th className="py-2 text-xs sm:text-sm font-normal hidden sm:table-cell">Created At</th>
              <th className="py-2 text-xs sm:text-sm font-normal">Actions</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post: any, index: any) => (
              <tr key={index} className="border-t border-gray-200">
                <td className="py-2">
                  <img src={post.imageUrl} alt={post.title} className="w-12 h-12 sm:w-16 sm:h-16 object-cover rounded" />
                </td>
                <td className="py-2 text-sm sm:text-base">{post.title}</td>
                <td className="py-2">
                  <span className={`px-2 py-1 rounded-full text-xs ${post.published ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                    {post.published ? 'Published' : 'Draft'}
                  </span>
                </td>
                <td className="py-2 hidden sm:table-cell text-sm">
                  {new Date(post.createdAt).toLocaleDateString()}
                </td>
                <td className="py-2">
                  <Ellipsiss postId={post.id} siteId={site.id}/>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </>
}