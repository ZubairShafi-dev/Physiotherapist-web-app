import { Button } from "@/components/ui/button"
import {
    Card,

    CardDescription,
    CardFooter,
    CardHeader,

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
import { Pencil } from "lucide-react"
import { useState } from "react"
interface PaymentCard{
    title:string,
     imgurl:string,
    balance:string,
    account_number:string,
    account_name:string
  }
const PaymentCards:React.FC<PaymentCard> = ({title,account_name,account_number,balance,imgurl}) => {
     const [bank,setBank]=useState('')
        const [accountnumber,setaccount_number]=useState('')
        const [accountname,setaccount_name]=useState('')
  return (
<Card className="lg:w-[25%] sm:w-[100%] xs:w-[100%]">
    <CardHeader className="font-semibold px-2  py-1 ">
        <div className="flex justify-between items-center">
            <div className="flex gap-2 items-center">     <img src={imgurl} width={25}/>
            <h1> {title}</h1></div>
       
            <Dialog>
        <DialogTrigger>
        <Button variant={'none'} className="w-[50px] p-0 text-[#379996] font-semibold text-[14px]">Edit 
        <Pencil  className="text-[3px] border-none" size={2}/></Button>
        </DialogTrigger>
        <DialogContent>
            <DialogHeader>
                <DialogTitle>Add Account</DialogTitle>
            </DialogHeader>
            <DialogDescription>
                <h2 className="text-[12px] font-semibold mt-1">Bank/ App</h2>
                <input value={bank} onChange={(e)=>{setBank(e.target.value)}} placeholder="Easypaisa" className="p-2 w-[99%] rounded-md mt-1 border-[2px] border-[#]"/>
                <h2 className="text-[12px] font-semibold mt-1">Account Number</h2>
                <input value={accountnumber} onChange={(e)=>{setaccount_number(e.target.value)}} placeholder="Enter account number" className="p-2 w-[99%] rounded-md mt-1 border-[2px] border-[#]"/>
                <h2 className="text-[12px] font-semibold mt-1">Account Name</h2>
                <input value={accountname} onChange={(e)=>{setaccount_name(e.target.value)}} placeholder="Enter Your name" className="p-2 w-[99%] rounded-md mt-1 border-[2px] border-[#]"/>
            </DialogDescription>
            <DialogFooter><Button variant={'outline'}>Cancel</Button>
        <Button className="bg-[#379996]  hover:bg-opacity-[46%]">Update</Button></DialogFooter>
        </DialogContent>
        
    </Dialog>
   
        </div>
      
    </CardHeader>
    <CardDescription className="text-[10px] px-2 font-semibold text-black ">
        <p>Account  Number: {account_number}</p>
        <p>Account  Name: {account_name}</p></CardDescription>
    <CardFooter className="font-semibold text-[#379996] px-2">Balance:<br/>{balance}Rs
    </CardFooter>
</Card>
  )
}

export default PaymentCards