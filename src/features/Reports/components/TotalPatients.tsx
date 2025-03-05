import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"
  import { Button } from "@/components/ui/button"
  import { ListFilter } from "lucide-react"

import MyAreaChart from "@/features/Dashboard/Components/AreaCharts"
const data = [
  { date: "Jan", value: 5000 },
  { date: "Feb", value: 6000 },
  { date: "March", value: 3000 },
  { date: "April", value: 8000 },
  { date: "May", value: 9000 },
  { date: "June", value: 4000 },
  { date: "July", value: 11000 },
  { date: "Aug", value: 7000 },
  { date: "Sep", value: 13000 },
  { date: "Oct", value: 9000 },
  { date: "Nov", value: 15000 },
  { date: "Dec", value: 5000 },

];
const TotalPatients = () => {
  return (
    <div className="border-[#B8B8B8] border-[1px] rounded-lg px-3 py-5  sm:w-[100%] xs:w-[100%]">
    <div className="flex justify-between">
 <h1 className="text-[20px] font-semibold">Total Patients</h1>

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
<MyAreaChart data={data} yaxis={true}/>
    </div>
  )
}

export default TotalPatients