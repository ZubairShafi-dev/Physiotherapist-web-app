import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"
  import { Button } from "@/components/ui/button"
  import { ListFilter } from "lucide-react"
import Earningscharts from "./Earningscharts"
const TotalEarnings = () => {
  return (
    <div className="border-[#B8B8B8] border-[1px] rounded-lg px-3 py-5  lg:w-[30%] sm:w-[100%] xs:w-[100%]">
    <div className="flex justify-between">
 <h1 className="text-[20px] font-semibold">Total Earnings</h1>

   <Popover>
     <PopoverTrigger> <Button variant='outline'>  <ListFilter /></Button>
     </PopoverTrigger>
     <PopoverContent>
     <p className="cursor-pointer bg-white text-left text-[13px] hover:bg-gray-100 p-2 rounded-md w-[70%]">Yearly</p>
     <p className="cursor-pointer bg-white text-left text-[13px] hover:bg-gray-100 p-2 rounded-md w-[70%]">Monthly</p>
     <p className="cursor-pointer bg-white text-left text-[13px] hover:bg-gray-100 p-2 rounded-md w-[70%]">Weekly</p>
     <p className="cursor-pointer bg-white text-left text-[13px] hover:bg-gray-100 p-2 rounded-md w-[70%]">Daily</p>
     </PopoverContent>
   </Popover>

    </div>
    <span className="text-[12px] text-[#87888C]">Total Expense</span>
    <h1 className="text-[25px] font-bold text-[#379996]">RS 6068.8</h1>
    <p className="text-[14px] font-medium text-[#87888C]">Profit is 48% More than last Month</p>
    <Earningscharts />
    </div>
  )
}

export default TotalEarnings