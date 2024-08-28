import { Button } from "@/components/ui/button"

export const Hero = () => {
  return (
    <section className="max-w-[1500px] mb-10 overflow-hidden flex flex-col items-center justify-center mx-auto mt-10 relative px-4 sm:px-6 lg:px-8">
      {/* Ajout de l'effet de lueur */}
      
      {/* Contenu existant */}
      <div className="p-1 rounded-full text-blue-500 w-fit mx-auto text-xs sm:text-sm md:text-md font-semibold bg-[#E8EAFC] px-3 sm:px-5">
        <span>Ultimate Blogging SaaS for Startups</span>
      </div>

      <h1 className="text-center text-4xl sm:text-6xl md:text-7xl lg:text-8xl w-full sm:w-[80%] md:w-[70%] lg:w-[70%] mt-6 sm:mt-10 font-medium">Setup your Blog <span className="text-blue-500 font-semibold">in Minutes!</span></h1>
      <p className="text-center text-base sm:text-lg md:text-xl w-full sm:w-[70%] md:w-[60%] lg:w-[45%] text-gray-500 mt-3 sm:mt-5">Setting up your blog is hard and time consuming. We make it easy for you to create a blog in minutes</p>
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-6 sm:mt-10">
        <Button className="border-gray-300 border font-bold p-4 sm:p-5 w-full sm:w-auto" variant="ghost">Get Started</Button>
        <Button variant="blue" className="p-4 sm:p-5 w-full sm:w-auto">Try for Free</Button>
      </div>

      <div className="relative w-full mt-10">
        {/* Ajout de l'effet de lueur */}
        <div className="absolute top-0 left-0 rounded-full w-full h-full bg-gradient-to-b from-blue-400 to-blue-500 blur-3xl z-10"></div>
        <img src="/hero.png" alt="hero" loading="lazy" className="relative w-full shadow-2xl border border-gray-300 rounded-xl mx-auto z-20" />
      </div>
    </section>
  )
}