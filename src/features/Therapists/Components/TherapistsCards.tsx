import { ArrowRight, Circle } from "lucide-react"
import {  useNavigate } from "react-router-dom"


interface TherapistProps{
  name:string,
  title:string,
  img:string,
  status:string
}
const TherapistsCards:React.FC<TherapistProps> = ({name,title,img,status}) => {
  const navigate=useNavigate()
  const handleRoute=()=>{
    navigate('/therapistprofile',{state:{name,title,img}})

  }
  return (
    <div className="rounded-xl relative border-[#B8B8B8] border-[1px] lg:h-[150px] sm:h-[200px] xs:h-[200px]  bg-center 
    " style={{ backgroundImage: `url(${img})` }}>
     <Circle className={`absolute top-[-8%] left-[-2%] ${
  status === "active" ? "text-[#189200] fill-[#189200]" : status === "pending" ? "text-[#FFC300] fill-[#FFC300]" : "text-[#FF0000] fill-[#FF0000]"
}`} />


        <div className="rounded-xl bg-[#C8C8C8] bg-opacity-[71%] absolute lg:w-[200px] sm:w-[250px] xs:w-[250px] h-[100px] lg:bottom-[-45%] sm:bottom-[-50%] xs:bottom-[-30%] lg:left-[10%]  sm:right-6 xs:right-6
        box-border px-7 py-2">
          <h1 className="font-bold text-[20px] text-center">{name}</h1>
          <p className="text-[11px] text-center ">{title}</p>
    <button className=" flex items-center text-[9px] mt-1 bg-red-400 text-white gap-1 p-2 rounded-md font-semibold translate-x-10" onClick={handleRoute}>Explore Profile <ArrowRight  size={15}/></button>
    
         
        </div>
    </div>
  )
}

export default TherapistsCards