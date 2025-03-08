import { Button } from "@/components/ui/button"
import {  ArrowDownLeft, ListFilter,} from "lucide-react"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"

const Transactions = () => {
    interface Transaction{
        from:string,
        date:string,
        payment_way:string,
        balance:string
    }
    const TransactionArray:Transaction[]=[
       {from:"Dr.Hamza Sabir",
        date:"Today:2:48PM",
        payment_way:"easypaisalogo.png",
        balance:"6700"

       } ,
       {from:"Dr.Ali Ahmed",
        date:"Today:2:48PM",
        payment_way:"jazzcashlogo.png",
        balance:"6700"

       } 
       ,    {from:"Dr.Hamza Sabir",
        date:"Today:2:48PM",
        payment_way:"hbllogo.png",
        balance:"4700"

       } ,
       {from:"Dr.Hamza Sabir",
        date:"Today:2:48PM",
        payment_way:"easypaisalogo.png",
        balance:"2700"

       } ,
       {from:"Dr.Hamza Sabir",
        date:"Today:2:48PM",
        payment_way:"jazzcashlogo.png",
        balance:"1700"

       } 
       ,    {from:"Dr.Hamza Sabir",
        date:"Today:2:48PM",
        payment_way:"hbllogo.png",
        balance:"2700"

       } 
    ]
  return (
    <div className="mt-4 " >
   <div className="flex justify-between">
   <h1 className="text-[#000000] text-opacity-45 font-semibold text-[20px]">Transactions</h1>
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
   <div>
    {TransactionArray.map((item,_)=>(
        <div className="flex items-center justify-between mt-4">
            <div className="flex gap-1 items-center" >
            <ArrowDownLeft color='white' size={30}  className="rounded-[50%] inline right-5 p-2 bg-[#31605D]"/>
            <div>
            <p className="text-[14px]">From:{item.from}</p>
            <p className="text-[12px]">    {item.date}</p>
            </div>
         
        
            </div>
            <div className="flex gap-4 items-center">
                <img src={item.payment_way} width={25}/>
                <p className="font-bold">{item.balance}Rs</p>
            </div>
        </div>
    ))}
   </div>
   </div>
  )
}

export default Transactions