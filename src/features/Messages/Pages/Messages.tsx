
import { Avatar, AvatarImage } from "@radix-ui/react-avatar"
import { Paperclip, Send } from "lucide-react"
import { useRef, useState } from "react"

const Messages=()=>{

  const [message, setMessage] = useState("");
  const [msgs, setMessages] = useState<string[]>([]);

  const handleMessage = () => {
    if (message.trim() !== "") {
      setMessages([...msgs, message]); // Add new message to state
      setMessage(""); // Clear input after sending
    }
  };
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const FileUpload=()=>{
 fileInputRef.current?.click()
  }
  interface User{
    name:string,
    imgurl:string,
    msg:string
  }
  const UserArray:User[]=[
    {
    name:"Ali Hamza",
    imgurl:"https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-174669.jpg?ga=GA1.1.1637944868.1720108750&semt=ais_hybrid",
    msg:"How are you?"
    },{
       name:"Ahmed Raza",
    imgurl:"https://img.freepik.com/free-vector/smiling-redhaired-boy-illustration_1308-176664.jpg?ga=GA1.1.1637944868.1720108750&semt=ais_hybrid",
     msg:"How are you?"
    },{
  name:"John Doe",
     imgurl:"https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-174669.jpg?ga=GA1.1.1637944868.1720108750&semt=ais_hybrid",
      msg:"How are you?"
    },
    {
      name:"Kane Joseph",
        imgurl:"https://img.freepik.com/premium-vector/simple-cute-black-boy-ith-beard-icon-vector_960391-429.jpg?w=1060",
         msg:"How are you?"
        },

  ]
  return (
    <div className="p-3 box-border mt-[1vh]">
    <h1 className="text-[20px] font-semibold">Messages</h1>
    <div className="flex ">
      <div className="w-[30%] lg:block sm:hidden xs:hidden border-[#B8B8B8] border-r-[1px] p-3 min-h-[100vh]">
        {UserArray.map((item,index)=>(
          <div key={index} className="flex items-center p-3 border-[#dfdede] border-opacity-100 border-b-[1px] gap-5">
             <Avatar className="h-8 w-8 rounded-[50%]  width-[48px] height-[48px]">
                <AvatarImage src={item.imgurl} alt={item.imgurl} className="rounded-[50%]" />
            </Avatar>
            <div>
            <h3 className="font-semibold text-[15px]">{item.name}</h3>
            <p className="text-[12px]">{item.msg}</p>
            </div>
             
          </div>
        ))}
     
      </div>
      <div className="w-[70%] p-3 relative">
        <div className="flex gap-3">
        <Avatar className="h-8 w-8 rounded-[100%]  width-[48px] height-[48px]">
                <AvatarImage src='https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png' />
         </Avatar>
      <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-semibold  text-[15px]">Ali Hamza</span>
                <span className="truncate text-xs  text-[12px]">online</span>
        </div>
        </div>
         <div className="w-full  mt-10">
          <div className="flex flex-col">
          
            
             <div className="self-start relative  left-[4%]">
             <Avatar className="h-8 w-8 rounded-[100%]  width-[48px] height-[48px] absolute top-2 left-[-22%]">
                <AvatarImage className="rounded-[50%]" src='https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png' />
         </Avatar>
              <p className="px-2 py-1 w-[150px] rounded-lg bg-[#f1f1f1] mt-2 test-[14px] ">This is amazing</p>
              <p className="px-2 py-1 w-[150px] rounded-lg bg-[#f1f1f1] mt-2 test-[14px] ">Perfect Idea</p>
              <p className="px-2 py-1 w-[150px] rounded-lg bg-[#f1f1f1] mt-2 test-[14px] ">Lets hit the plan</p>
             </div>
             {msgs.length>0? (
               <div className="self-end relative  left-[-2%]">
               <Avatar className="h-8 w-8 rounded-[100%]  width-[48px] height-[48px] absolute top-2 right-[-22%]">
                  <AvatarImage className="rounded-[50%]" src='https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png' />
           </Avatar>
                <div>
                  {msgs.map((item,_)=>(
                     <p className="px-2 py-1 w-[150px]  rounded-lg text-white bg-[#615EF0] mt-2 test-[14px]">{item}</p>
                  ))}
                </div>
               
             
               </div>
            ):(<p></p>)}
          </div>
          <div className="flex  lg:w-[52vw] sm:w-[100vw] xs:w-[90vw] gap-2 items-center fixed bottom-[5%] bg-white ">
          <div className="flex items-center gap-2">
 
      <input
        type="file"
        ref={fileInputRef}
        className="hidden"
      />

      <button  className="p-2 rounded-full hover:bg-gray-200" onClick={FileUpload}>
        <Paperclip className="w-6 h-6 text-gray-600" />
      </button>

           </div>
                <div className="w-[100%] border-[1px] p-2 border-[#f1eaea] flex items-center justify-between">
                  <input placeholder="Type a message"  className="outline-none w-[90%]" value={message} onChange={(e)=>setMessage(e.target.value)} />
                  <Send className="text-[#6151FE] cursor-pointer" onClick={handleMessage}/>
                </div>
          </div>
           
         </div>

      </div>
    </div>
   </div>
  )
}

export default Messages