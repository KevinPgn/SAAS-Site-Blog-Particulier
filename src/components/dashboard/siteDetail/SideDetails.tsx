import { ArticlesBtn } from "./ArticlesBtn"

export const SideDetails = ({site}: {site: any}) => {
  const posts = site?.posts

  return <>
    <ArticlesBtn />
    <div className="w-full mt-5 border border-gray-200 rounded-md p-5">
        <h2 className="text-xl font-bold">Articles</h2>
        <p className="text-sm text-gray-500">Manage your articles in a simple and intuitive interface.</p>
    </div>
  </>
  
}