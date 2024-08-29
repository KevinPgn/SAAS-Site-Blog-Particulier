import { Button } from "../ui/button"

export const Pricing = () => {
  return <div className="w-full p-5 border border-gray-200 rounded-lg">
    <h2 className="text-2xl font-bold">Edit Subscription</h2>
    <p className="text-gray-500 mt-2">Click on the button below. this will give you the oppoturnity to change your payment details and view your statement at the same time.</p>
    <Button variant="blue" className="mt-4 w-fit px-5">View Subscription Details</Button>
  </div>
}