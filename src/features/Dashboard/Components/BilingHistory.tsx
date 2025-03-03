import {
    Table,
    TableBody,

    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import { ArrowDown } from "lucide-react"
  
interface History{
    name:String,
    creditamount:string,
    debitamount:string,
    totalamount:string,
    status:string,
}
const BillingArray:History[]=[
  {
   name:'Dr.Usman',
   creditamount:'48000',
   debitamount:'48000',
   totalamount:'48000',
   status:'Active',

  }  ,
  {
    name:'Dr.Hamza',
    creditamount:'48000',
    debitamount:'48000',
    totalamount:'48000',
    status:'De-Active',
 
   }
   ,  {
    name:'Dr.Usman',
    creditamount:'48000',
    debitamount:'48000',
    totalamount:'48000',
    status:'Active',
 
   },
   {
    name:'Dr.Usman',
    creditamount:'48000',
    debitamount:'48000',
    totalamount:'48000',
    status:'De-Active',
 
   }
]
const BilingHistory = () => {
  return (
    <div className="rounded-lg border-[#B8B8B8] border-[1px] mt-2 px-5 py-3 lg:w-[76.5vw] sm:w-[100vw] xs:w-[100vw]">
        <h1 className='font-bold text-[20px]'>Billings History</h1> 
        <Table className="w-full overflow-x-scroll">

  <TableHeader>
    <TableRow>
      <TableHead className="text-[#4D515A] font-semibold min-w-[150px]" >Doctor</TableHead>
      <TableHead className="text-[#4D515A] font-semibold min-w-[150px]">Total Amount</TableHead>
      <TableHead className="text-[#4D515A] font-semibold min-w-[150px]">Credit Amount</TableHead>
      <TableHead className="text-[#4D515A] font-semibold min-w-[150px]">Debit Amount</TableHead>
      <TableHead className="text-[#4D515A] font-semibold min-w-[150px]">Status</TableHead>
      <TableHead className="text-[#4D515A] font-semibold min-w-[150px]"></TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
  {
        BillingArray.map((item,index)=>(
            <TableRow key={index}>
                    <TableCell className="text-[#059691] font-semibold">{item.name}</TableCell>
      <TableCell className="text-[#059691] font-semibold">{item.totalamount} /- PKR</TableCell>
      <TableCell className="text-[#059691] font-semibold">{item.creditamount}/- PKR</TableCell>
      <TableCell className="text-[#059691] font-semibold" >{item.debitamount}/- PKR</TableCell>
      <TableCell className="text-[#059691] ">
      <span
  className={`px-3 rounded-xl font-semibold text-[13px] py-1 ${
    item.status === "Active"
      ? "text-[#379996] bg-[#D2FCF8]"
      : "text-red-500 bg-[#FFC3C3]"
  }`}
>
            {item.status}</span>
      </TableCell>
      <TableCell className="text-[#059691] font-semibold"><ArrowDown className="text-[#059691] font-semibold"/></TableCell>

    </TableRow>
        ))}
  
  </TableBody>
</Table>

    </div>
  )
}

export default BilingHistory