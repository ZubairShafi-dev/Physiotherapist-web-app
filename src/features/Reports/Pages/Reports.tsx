import { Button } from "@/components/ui/button"
import { Calendar, ListFilter, RefreshCcwDot, User, Wallet } from "lucide-react"
import Cards from "../components/Cards"
import Topdepartments from "../components/Topdepartments"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import TotalEarnings from "../components/TotalEarnings"
import TotalPatients from "../components/TotalPatients"
import TherapistTable from "../components/TherapistTable"

const Report= () => {
  return (
  <>
  <div className='mt-[1vh] p-3 relative'>
<h1 className="text-[20px] font-semibold">Reports</h1>
<p className="text-[14px]">Overview of all of your incomes and appointments</p>
<div className="flex gap-2 lg:flex-row sm:flex-col xs:flex-col ">
<div className=" lg:w-[70%] sm:w-[100%] xs:w-[100%] border-[#B8B8B8] border-[1px] rounded-lg px-3 py-5 mt-2">
  <div className="flex justify-between">
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
<Topdepartments />
</div>
<div className="flex gap-2 lg:flex-row sm:flex-col xs:flex-col ">
<TotalEarnings />
<TotalPatients />
</div>
<TherapistTable />
</div>

  </>

  )
}

export default Report