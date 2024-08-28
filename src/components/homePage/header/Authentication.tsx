"use client"
import { Button } from "@/components/ui/button"
import { useSession, signIn, signOut } from "next-auth/react"
export const Authentication = () => {
  const { data: session } = useSession()
  
  return <>
    {!session ? (
        <div className="flex items-center gap-4">
            <Button variant="ghost" className="border-gray-300 border" onClick={() => signIn()}>Sign in</Button>
            <Button variant="blue">Sign up</Button>
        </div>
    ):null}  
  </>
}