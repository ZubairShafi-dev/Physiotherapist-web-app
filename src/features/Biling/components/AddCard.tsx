
import { Button } from "@/components/ui/button"
import {
    Card,

    CardDescription,


  } from "@/components/ui/card"
  import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"


import { Plus } from "lucide-react"
import { useState } from "react"
const AddCard = () => {
    const [bank,setBank]=useState('')
    const [account_number,setaccount_number]=useState('')
    const [account_name,setaccount_name]=useState('')
  return (
   <Card className="flex items-center justify-center lg:w-[25%] sm:w-[100%] xs:w-[100%] sm:h-[159px] xs:h-[159px]">
    <Dialog>
        <DialogTrigger>
        <CardDescription><Plus size={44} className="cursor-pointer"/></CardDescription>
        </DialogTrigger>
        <DialogContent>
            <DialogHeader>
                <DialogTitle>Add Account</DialogTitle>
            </DialogHeader>
            <DialogDescription>
                <h2 className="text-[12px] font-semibold mt-1">Bank/ App</h2>
                <input value={bank} onChange={(e)=>{setBank(e.target.value)}} placeholder="Easypaisa" className="p-2 w-[99%] rounded-md mt-1 border-[2px] border-[#]"/>
                <h2 className="text-[12px] font-semibold mt-1">Account Number</h2>
                <input value={account_number} onChange={(e)=>{setaccount_number(e.target.value)}} placeholder="Enter account number" className="p-2 w-[99%] rounded-md mt-1 border-[2px] border-[#]"/>
                <h2 className="text-[12px] font-semibold mt-1">Account Name</h2>
                <input value={account_name} onChange={(e)=>{setaccount_name(e.target.value)}} placeholder="Enter Your name" className="p-2 w-[99%] rounded-md mt-1 border-[2px] border-[#]"/>
            </DialogDescription>
            <DialogFooter><Button variant={'outline'}>Cancel</Button>
        <Button className="bg-[#379996]  hover:bg-opacity-[46%]">Add</Button></DialogFooter>
        </DialogContent>
        
    </Dialog>

   </Card>
  )
}

export default AddCard