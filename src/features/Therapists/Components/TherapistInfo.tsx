
import { Building, Clock, Mail, PhoneCall } from 'lucide-react'
import { useLocation } from 'react-router-dom'


const TherapistInfo = () => {
    const location=useLocation()
    const {name,title,img}=location.state||{}
  return (
    <div className='border-[#B8B8B8] border-[1px] rounded-lg px-3 py-5 lg:w-[30%] sm:w-[100%] xs:w-[100%]'>

       <img className="rounded-[50%] w-[135px] h-[135px] m-auto object-cover" src={img} />
 
     <h1 className='font-bold text-center'>{name}</h1>
     <p className='text-[12px] text-center'>{title}</p>
     <p className='text-[12px] text-[#7E7E7E] font-semibold mt-1'>Specialist</p>
     <p className='font-medium text-[11px]'>{title}</p>
     <p className='text-[12px] text-[#7E7E7E] font-semibold mt-1'>About</p>
     <p className='font-medium text-[11px]'>{name}<br></br>Experienced Cardiologist specializing in heart conditions such as angina and arrhythmia, with over 15 years of expertise in advanced cardiprocedures.Dr. John Doe Experienced Cardiologist specializing in heart conditions such as angina and arrhythmia, with over 15 years of expertise in advanced cardiac procedures.</p>
     <div className='flex gap-3 mt-4 text-[#383838] items-center text-[11px]'  >
        <PhoneCall size={15}/>   Phone: +92 300 000 000 0
     </div>
     <div className='flex gap-3 mt-4 text-[#383838] items-center text-[11px]'  >
        <Mail size={15}/> Email: {name}@gmail.com
     </div>
     <div className='flex gap-3 mt-4 text-[#383838] items-center text-[11px]'  >
        <Building size={15}/>      Office: Building A, Room 102, City Hospital
     </div>
     <div className='flex gap-3 mt-4 text-[#383838] items-center text-[11px]'  >
        <Clock size={15}/>       Availability: Mon-Fri, 9:00 AM - 5:00 PM
     </div>
    </div>
  )
}

export default TherapistInfo