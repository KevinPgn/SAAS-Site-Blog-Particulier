import { Button } from "@/components/ui/button"

export const Hero = () => {
  return <section className="max-w-[1500px] flex flex-col items-center justify-center mx-auto mt-10">
    <div className="p-1 rounded-full text-blue-500 w-fit mx-auto text-md font-semibold bg-[#E8EAFC] px-5">
        <span>Ultimate Blogging SaaS for Startups</span>
    </div>

    <h1 className="text-center text-8xl w-[60%] mt-10 font-medium">Setup your Blog <span className="text-blue-500 font-semibold">in Minutes!</span></h1>
    <p className="text-center text-xl w-[45%] text-gray-500 mt-5">Setting up your blog is hard and time consuming. We make it easy for you to create a blog in minutes</p>
    <div className="flex items-center gap-4 mt-10">
        <Button className="border-gray-300 border font-bold p-5" variant="ghost">Get Started</Button>
        <Button variant="blue" className="p-5">Try for Free</Button>
    </div>
  </section>
}