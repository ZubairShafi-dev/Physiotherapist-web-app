import TotalPatients from "@/features/Reports/components/TotalPatients"
import TherapistInfo from "../Components/TherapistInfo"
import { Button } from "@/components/ui/button"
import { Calendar, ListFilter, RefreshCcwDot, User, Wallet } from "lucide-react"
import Cards from "@/features/Reports/components/Cards"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"
import Feedback from "../Components/Feedback"

const TherapistProfile = () => {
  return (
    <div className="p-3 mb-3 mt-[1vh]">
      <h1 className="text-[20px] font-semibold">Therapists</h1>
      <p className="text-[14px]">It's okay to not be okay—let's work on it together</p>
      <div className="flex gap-3 mt-5 lg:flex-row sm:flex-col xs:flex-col">
         <TherapistInfo />
         <div className="lg:w-[70%] sm:w-[100%] xs:w-[100%]">
            <TotalPatients />
            <div className="  border-[#B8B8B8] border-[1px] rounded-lg px-3 py-5 mt-2">
  <div className="flex justify-between ">
  <h1 className="text-[20px] font-semibold">Today's Sale</h1>

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
            <div className="flex gap-2 lg:w-[100%]  sm:w-[100%] xs:w-[100%] lg:flex-row py-3 sm:flex-col xs:flex-col">  
    <Cards total='579' icons={User} desc='+10.5% from yesterday' head='Total Patients'/>
    <Cards total='579' icons={Calendar} desc='+10.5% from yesterday' head='Total Appointments'/>
    <Cards total='579' icons={RefreshCcwDot} desc='+10.5% from yesterday' head='Total Treatment '/>
    <Cards total='579' icons={Wallet} desc='+10.5% from yesterday' head='Total Income'/>
  </div>
  </div>
         </div>
      </div>
      <Feedback />
      </div>
  )
}

export default TherapistProfile