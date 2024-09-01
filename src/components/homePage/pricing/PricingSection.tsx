"use client"
import { Button } from "@/components/ui/button"
import { plans } from "../../../../plans"
import { useRouter } from "next/navigation"

export const PricingSection = () => {
  const router = useRouter()
  return <>
    <section className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col mx-auto text-center gap-5 w-[1000px] max-lg:w-full items-center justify-center">
            <h3 className="text-blue-500 font-semibold text-md">Pricing</h3>
            <h2 className="text-5xl font-bold">Pricing Plans for everyone and every budget!</h2>
            <p className="text-gray-500 text-center text-lg font-semibold">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla alias magnam, velit enim ut voluptas? Reiciendis molestiae voluptates reprehenderit consequatur.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
        <div className="bg-white text-black p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold mb-2">Freelancer</h3>
          <p className="text-gray-600 mb-4">The best pricing plan for people starting out.</p>
          <div className="text-4xl font-bold mb-6">Free</div>
          <ul className="space-y-2 mb-8">
            <li className="flex items-center"><span className="text-blue-500 mr-2">✓</span> 1 Site</li>
            <li className="flex items-center"><span className="text-blue-500 mr-2">✓</span> 10 Posts / Site</li>
            <li className="flex items-center"><span className="text-blue-500 mr-2">✓</span> 1000 Visitors</li>
            <li className="flex items-center"><span className="text-blue-500 mr-2">✓</span> Graphs and Analytics</li>
          </ul>
          <Button variant="ghost" className="border border-blue-500 text-blue-500 w-full hover:bg-blue-500 hover:text-white">Try for free</Button>
        </div>
        {plans.map((plan, index) => (
          <div key={index} className="bg-white text-black p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-2">{plan.duration === "/month" ? "Monthly Plan" : "Annual Plan"}</h3>
            <p className="text-gray-600 mb-4">The best pricing plan for {plan.duration === "/month" ? "monthly" : "annual"} subscribers.</p>
            <div className="text-4xl font-bold mb-6">${plan.price} {plan.duration}</div>
            <ul className="space-y-2 mb-8">
              <li className="flex items-center"><span className="text-blue-500 mr-2">✓</span> Unlimited Sites</li>
              <li className="flex items-center"><span className="text-blue-500 mr-2">✓</span> Unlimited Posts</li>
              <li className="flex items-center"><span className="text-blue-500 mr-2">✓</span> Unlimited Visitors</li>
              <li className="flex items-center"><span className="text-blue-500 mr-2">✓</span> Graphs and Analytics</li>
            </ul>
            <Button variant="ghost" className="border border-blue-500 text-blue-500 w-full hover:bg-blue-500 hover:text-white" onClick={() => router.push(plan.link)}>Buy Plan</Button>
          </div>
        ))}
      </div>
    </section>
  </>
}