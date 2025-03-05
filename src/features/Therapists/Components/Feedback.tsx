import { Star } from "lucide-react"

interface Feedback{
    id:string
    imgurl:string,
    desc:string
}
const FeedbackArray:Feedback[]=[
    {
        id:'1',
       desc:"Rated 5.0/5.0 by user",
       imgurl:"https://plus.unsplash.com/premium_photo-1689551670902-19b441a6afde?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fHww"
    },
    {
        id:'2',
       desc:"Rated 5.0/5.0 by user",
       imgurl:"https://plus.unsplash.com/premium_photo-1689551670902-19b441a6afde?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fHww"
    }, {
        id:'3',
       desc:"Rated 5.0/5.0 by user",
       imgurl:"https://plus.unsplash.com/premium_photo-1689551670902-19b441a6afde?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fHww"
    },
    {
        id:'4',
       desc:"Rated 5.0/5.0 by user",
       imgurl:"https://plus.unsplash.com/premium_photo-1689551670902-19b441a6afde?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fHww"
    },
    {
        id:'5',
       desc:"Rated 5.0/5.0 by user",
       imgurl:"https://plus.unsplash.com/premium_photo-1689551670902-19b441a6afde?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fHww"
    },
]
const Feedback = () => {
  return (
    <div className="border-[#B8B8B8] border-[1px] rounded-lg px-3 py-5 mt-2 ">
         <h1 className="text-[20px] font-semibold"> Patient Feedback</h1>
    <div className="grid lg:grid-cols-5 mt-3 sm:grid-cols-1 xs:grid-cols-1">
       {FeedbackArray.map((item,_)=>(
                <div className="flex  items-center gap-2"><img src={item.imgurl} className="rounded-[50%] w-[30px] h-[31px]"/><div> {[...Array(5)].map((_, index) => (
                    <Star key={index} size={11} className="text-[#379996] fill-[#379996] inline ml-1" />
                  ))}<p className=" text-[11px] mt-1 text-[#6A6A6A]">{item.desc}</p></div></div>
       ))}
   
    </div>
    </div>
  )
}

export default Feedback