import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
export const BtnCreateSite = () => {
  return <>
    <Button variant="blue" className="flex items-center gap-2">
      <Plus size={16} />
      Create Site
    </Button>
  </>
}