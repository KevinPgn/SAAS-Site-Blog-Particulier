import Link from "next/link"
import Image from "next/image"
import { Authentication } from "../homePage/header/Authentication"
import { ThemeController } from "../homePage/header/ThemeController"

export const EnTeteProfile = () => {
  return <header className="h-16 border-b border-gray-300">
    <nav className="flex items-center justify-between h-full">
        <Link href="/" className="flex items-center h-full w-[290px] border-r border-gray-300 gap-2 px-5">
            <Image src="/logo.svg" alt="logo" width={40} height={40} />
            <h1 className="text-2xl font-extrabold">Blog<span className="text-blue-500">Creator</span></h1>
        </Link>
        <div className="flex px-3 items-center gap-5">
            <ThemeController />
            <Authentication />
        </div>
    </nav>
  </header>
}