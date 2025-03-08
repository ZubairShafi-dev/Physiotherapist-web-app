
import { Button } from "@/components/ui/button"
  import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
  interface PaymentRequest{
    name:string,
    title:string,
    imageurl:string
  }
const PaymentRequest = () => {
    const PaymentRequestArray:PaymentRequest[]=[
        {
            name:"Muhammad Ahmed",
            title:"Cognitive Therapist",
            imageurl: "https://randomuser.me/api/portraits/men/1.jpg",
        },
        {
            name:"Muhammad Ahmed",
            title:"Cognitive Therapist",
            imageurl: "https://randomuser.me/api/portraits/men/1.jpg",
        }
        ,  {
            name:"Muhammad Ahmed",
            title:"Cognitive Therapist",
            imageurl: "https://randomuser.me/api/portraits/men/2.jpg",
        },
        {
            name:"Muhammad Ahmed",
            title:"Cognitive Therapist",
            imageurl: "https://randomuser.me/api/portraits/men/3.jpg",
        },
        {
            name:"Muhammad Ahmed",
            title:"Cognitive Therapist",
            imageurl: "https://randomuser.me/api/portraits/men/5.jpg",
        }
    ]
  return (
    <Dialog>
    <DialogTrigger>
    <Button className="relative" variant={'outline'}>Payment Request</Button>
    </DialogTrigger>
    <DialogContent >
        <DialogHeader>
            <DialogTitle>Request Approval</DialogTitle>
        </DialogHeader>
        <DialogDescription>
         <div>
            {PaymentRequestArray.map((item,_)=>(
                <div className="flex flex-row items-center justify-between ">
                    <div className="flex items-center gap-2 mt-4 ">
                    <img src={item.imageurl} className="w-[48px] h-[48px] rounded-[50%]"/>
                        <div>
                            <h2 className="text-[15px] font-semibold">{item.name}</h2>
                            <p className="text-[12px]">{item.title}</p>
                        </div>
                    </div>
                    <DialogFooter><Button variant={'outline'}>Decline</Button>
                    <Button className="bg-[#379996]  hover:bg-opacity-[46%]">Approval</Button></DialogFooter>
                </div>
            ))}
         </div>
        </DialogDescription>
 
    </DialogContent>
    
</Dialog>

  )
}

export default PaymentRequest