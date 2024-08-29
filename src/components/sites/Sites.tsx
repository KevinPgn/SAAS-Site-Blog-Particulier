import { BtnCreateSite } from "./BtnCreateSite"

export const Sites = ({ sites }: { sites: any }) => {
  if(sites.length === 0) return <div className="w-full">
    <div className="flex justify-end">
      <BtnCreateSite />
    </div>
    <div className="flex items-center justify-center h-full">
      <div className="flex flex-col items-center justify-center">
        <span>No sites found</span>
        <span>Be The First To Create A Blog Site</span>
      </div>
    </div>
  </div>
  
  return <div className="w-full">
    <div className="flex justify-end">
      <BtnCreateSite />
    </div>
  </div>
}