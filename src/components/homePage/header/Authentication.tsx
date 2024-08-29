"use client"
import { Button } from "@/components/ui/button"
import { useSession, signIn, signOut } from "next-auth/react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useRouter } from "next/navigation"
export const Authentication = () => {
  const { data: session } = useSession()
  const router = useRouter()

  return <>
    {!session ? (
        <div className="flex items-center gap-4">
            <Button variant="ghost" className="border-gray-300 border font-bold" onClick={() => signIn()}>Sign in</Button>
            <Button variant="blue" className="cursor-not-allowed">Sign up</Button>
        </div>
    ): (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <img src={session.user?.image || ""} alt="user avatar" className="w-9 h-9 rounded-full" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuItem onClick={() => router.push("/profile/dashboard")}>Profile</DropdownMenuItem>
                <DropdownMenuItem onClick={() => router.push("/profile/pricing")}>Subscription</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => signOut()}>Sign out</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )}  
  </>
}