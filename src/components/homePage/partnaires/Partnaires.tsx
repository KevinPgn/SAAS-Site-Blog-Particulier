//img : prisma.svg, next.svg, auth.png

export const Partnaires = () => {
  return <section className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
    <h2 className="text-2xl font-bold text-center mb-10">Trusted by the best companies in the world</h2>
    <div className="flex flex-wrap justify-between items-center gap-4">
      <img src="/prisma.svg" alt="prisma" className="w-32 h-32 cursor-pointer hover:scale-110 transition-all duration-300" />
      <img src="/next.svg" alt="next" className="w-32 h-32 cursor-pointer hover:scale-110 transition-all duration-300" />
      <img src="/auth.png" alt="auth" className="w-24 h-24 cursor-pointer hover:scale-110 transition-all duration-300" />
      <img src="/prisma.svg" alt="prisma" className="w-32 h-32 cursor-pointer hover:scale-110 transition-all duration-300" />
      <img src="/next.svg" alt="next" className="w-32 h-32 cursor-pointer hover:scale-110 transition-all duration-300" />
      <img src="/auth.png" alt="auth" className="w-24 h-24 cursor-pointer hover:scale-110 transition-all duration-300" />
    </div>
  </section>
}