import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { ListFilter } from "lucide-react"
const Topdepartments = () => {
  return (
    <div className="border-[#B8B8B8] border-[1px] rounded-lg px-3 py-5 mt-2 lg:w-[30%] sm:w-[100%] xs:w-[100%]">
     <div className="flex justify-between">
  <h1 className="text-[20px] font-semibold">Top Departments</h1>

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
     <div className="flex justify-between mt-5">
      <h1 className="text-[#379996] font-medium">01</h1>
      <h1 className="text-[#379996] font-medium">Cognitive Therapists</h1>
      <span className=" px-1 pt-1 border-[0.01rem] bg-[#B3D8D7] border-[#379996] text-[9px] text-[#379996]">46%</span>
     </div>
     <div className="flex justify-between mt-5">
      <h1 className="text-[#007AFC] font-medium">01</h1>
      <h1 className="text-[#007AFC] font-medium">Cognitive Therapists</h1>
      <span className=" px-1 pt-1 border-[0.01rem] bg-[#007AFC] bg-opacity-[12%] border-[#007AFC] text-[9px] text-[#007AFC]">46%</span>
     </div>
     <div className="flex justify-between mt-5">
      <h1 className="text-[#E07706] font-medium">01</h1>
      <h1 className="text-[#E07706] font-medium">Cognitive Therapists</h1>
      <span className=" px-1 pt-1 border-[0.01rem] bg-[#E07706] bg-opacity-[35%] border-[#E07706] text-[9px] text-[#E07706]">46%</span>
     </div>
     <div className="flex justify-between mt-5">
      <h1 className="text-[#189200] font-medium">01</h1>
      <h1 className="text-[#189200] font-medium">Cognitive Therapists</h1>
      <span className=" px-1 pt-1 border-[0.01rem] bg-[#89200] bg-opacity-[22%] border-[#189200] text-[9px] text-[#189200]">46%</span>
     </div>
    </div>
  )
}

export default Topdepartments
