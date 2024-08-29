"use client"
import {Home, Globe, DollarSign, User} from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export const SidebarProfile = () => {
  const pathname = usePathname()
  return <div className="w-[290px] p-3 flex flex-col gap-2 h-full border-r border-gray-300">
    <Link href="/profile/dashboard" className={`flex items-center gap-2 px-5 py-3 rounded-lg hover:bg-gray-100 hover:text-blue-500 duration-75 ${pathname === '/profile/dashboard' ? 'bg-gray-100 text-blue-500' : ''}`}>
      <Home size={20} />
      <span className="font-semibold">Dashboard</span>
    </Link>
    <Link href="/profile/sites" className={`flex items-center gap-2 px-5 py-3 rounded-lg hover:bg-gray-100 hover:text-blue-500 duration-75 ${pathname === '/profile/sites' ? 'bg-gray-100 text-blue-500' : ''}`}>
      <Globe size={20} />
      <span className="font-semibold">Sites</span>
    </Link>
    <Link href="/profile/pricing" className={`flex items-center gap-2 px-5 py-3 rounded-lg hover:bg-gray-100 hover:text-blue-500 duration-75 ${pathname === '/profile/pricing' ? 'bg-gray-100 text-blue-500' : ''}`}>
      <DollarSign size={20} />
      <span className="font-semibold">Pricing</span>
    </Link>
    <Link href="/profile/abonnement" className={`flex items-center gap-2 px-5 py-3 rounded-lg hover:bg-gray-100 hover:text-blue-500 duration-75 ${pathname === '/profile/abonnement' ? 'bg-gray-100 text-blue-500' : ''}`}>
      <User size={20} />
      <span className="font-semibold">Abonnement</span>
    </Link>
  </div>
}