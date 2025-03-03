import {
    Card,

    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import {  ArrowRight, ArrowUpCircle,  } from "lucide-react"
  
interface CardProps{
    title:string,
    desc:string,
    icon: React.ElementType;
}
const Cards:React.FC<CardProps> = ({title,desc,icon:Icon}) => {
  return (
    <Card className="border-[#B8B8B8] lg:w-[30%] sm:w-[100%] xs:w-[100%] p-0">
    <CardHeader className="text-[#379996] px-1 ">
        <div className="flex justify-between">
        <div className="flex gap-2">
            <Icon size={30} className="text-[#379996] rounded-md border-2 p-1 border-[#379996]"/>
            <div className="text-[#379996]">
            <CardTitle className="font-normal text-[14px]">{title}</CardTitle>
            <CardDescription className="font-semibold text-[#379996] text-[16px]">{desc}</CardDescription>
            </div>

      
        </div>
        <span className="flex gap-1 text-[10px]"><ArrowUpCircle  size={15}/>10.5%</span>
        </div>
       
 
    </CardHeader>

    <CardFooter className="border-t-[1px] border-[#B8B8B8] py-1">
      <p className="flex items-center gap-1 w-[100%] font-semibold mt-1 text-[14px] ">See Details <ArrowRight size={18}/></p>
    </CardFooter>
  </Card>
  
  )
}

export default Cards