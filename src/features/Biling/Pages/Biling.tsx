
import { Info } from "lucide-react"
import PaymentCards from "../components/PaymentCards"

import Transactions from "../components/Transactions"
import AddCard from "../components/AddCard"
import PaymentRequest from "../components/PaymentRequest"

const Biling = () => {
  interface PaymentCard{
    title:string,
imgurl:string,
    balance:string,
    account_number:string,
    account_name:string
  }
  const PaymentCardArray:PaymentCard[]=[
    {
      title:'EasyPaisa',
      imgurl:"./easypaisalogo.png",
      balance:"50,000",
      account_number:"0328 6538148",
      account_name:" Muhammad Farhan"
    }
    ,  {
      title:'JaazCash',
   
      imgurl:"jazzcashlogo.png",
      balance:"60,000",
      account_number:"0328 6538148",
      account_name:" Muhammad Ali Ahmed"
    },
    {
      title:'Habib Bank',
      imgurl:"jazzcashlogo.png",
      balance:"90,000",
      account_number:"201023459675894923",
      account_name:" Muhammad Zohaib Ramzan"
    }
  ]
  return (
  
<div className='mt-[1vh] p-3'>
  <div className="flex justify-between">
  <div>
  <h1 className="text-[20px] font-semibold">Billings</h1>
  <p className="text-[14px]">Overview of all of your incomes and appointments</p>
  </div>
<PaymentRequest />
  </div>
  <h1 className="text-[#000000] text-opacity-45 font-semibold mt-4 text-[20px] flex items-center gap-2">Total Balance <Info size={10}/></h1>
  <h1 className=" font-semibold text-[36px]">16,00,000 RS</h1>
  <h3 className="text-[#000000] text-opacity-45 font-semibold mt-4 text-[20px] ">My Account</h3>
  <div className="flex gap-3 mt-3 lg:flex-row sm:flex-col xs:flex-col">
    {PaymentCardArray.map((item,_)=>(
            <PaymentCards title={item.title} balance={item.balance} account_name={item.account_name}  account_number={item.account_number} imgurl={item.imgurl}/>
    ))}
    <AddCard />
  </div>
  <Transactions />
</div>

  )
}

export default Biling