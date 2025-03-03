import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
  import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"
import { EllipsisVertical } from "lucide-react"
  

const Option = () => {
  return (

<Popover >
  <PopoverTrigger asChild>
    <EllipsisVertical />
  </PopoverTrigger>
  <PopoverContent>
  <p className="cursor-pointer bg-white text-left text-[13px] hover:bg-gray-100 p-2 rounded-md w-[70%]">Pending Appointments</p>
        <p className="cursor-pointer bg-white text-left text-[13px] hover:bg-gray-100 p-2 rounded-md w-[70%]">Cleared Appointments</p>
        <Dialog>
    <DialogTrigger className="text-left cursor-pointer text-[13px] bg-white hover:bg-gray-100 p-2 rounded-md w-[70%]">  <p className="cu">Cancel Appointments</p></DialogTrigger>
    <DialogContent>
      <DialogHeader>
      <DialogTitle> Appointment</DialogTitle>
        <DialogDescription className="p-4">
        You really want to cancel appointment?.
        <div className="mt-6 relative justify-items-start">
        <Button variant='outline'>No</Button>
        <Button variant='outline' className="bg-[#059691] text-white ml-3">Yes</Button>
        </div>

        </DialogDescription>
        </DialogHeader>
    </DialogContent>
  </Dialog>
  </PopoverContent>
 


</Popover>

      
    
  
  )
}

export default Option