import { EnTeteProfile } from "@/components/profile/EnTeteProfile"
import { SidebarProfile } from "@/components/profile/SidebarProfile"
import { auth } from "@/lib/auth"
import Auth from "@/lib/middleware"
import { redirect } from "next/navigation"

export default async function ProfileLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    const calcHeight = 'calc(100vh - 64px)'
    const session = await auth()

    if(!session){
      redirect('/')
    }
    
    return <div>
        <Auth>
            <EnTeteProfile />
            <div className="flex" style={{height: calcHeight}}>
                <SidebarProfile />
                {children}
            </div>
        </Auth>
</div>

}