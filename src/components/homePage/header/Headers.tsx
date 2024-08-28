import Link from "next/link"

export const Headers = () => {
  return <header className="max-w-[1500px] mx-auto h-16">
    <nav className="flex justify-between items-center h-full">
        <Link href="/" className="flex items-center gap-2">
          <img src="/logo.svg" loading="lazy" alt="logo svg site" className="w-10 h-10" />
          <h1 className="text-3xl font-extrabold">Blog<span className="text-blue-500">Creator</span></h1>
        </Link>
    </nav>
  </header>
}