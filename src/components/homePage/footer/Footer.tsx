export const Footer = () => {
  return <footer className="bg-gray-900 text-white py-10">
    <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 py-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col gap-4">
          <h3 className="text-2xl font-bold flex items-center gap-2">
            <img src="/logo.svg" alt="Blog Faster" className="w-14 h-14" />
            <span className="text-white">Blog<span className="text-blue-500">Faster</span></span>
          </h3>
          <p className="text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
        </div>
      </div>

      <p className="text-gray-400 text-center mt-10">Make with ❤️ by KevinPgn</p>
    </div>
  </footer>
}