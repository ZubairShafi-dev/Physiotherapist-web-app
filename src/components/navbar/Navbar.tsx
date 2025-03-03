import { FaBell } from "react-icons/fa6";
import {  SunIcon } from 'lucide-react'
import { SidebarTrigger } from '../../components/ui/sidebar'
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
<header className="bg-[#F3FFFE] relative z-10 lg:w-[100%] sm:w-[100%] xs:w-[100%] p-4 flex items-center   top-0"> 
    <div className='flex gap-2 items-center'>
    <SidebarTrigger className="-ml-1" />
    <SunIcon className='text-yellow-300'/>
    <h1 className='font-bold lg:text-[26px] sm:text-[10px]'>Good Morning,Dr.Rafia!</h1>
    </div>
     <Link to='/notification'>
     <FaBell color='white' size={35}  className="rounded-[50%] bottom-5 absolute  right-5 p-2 bg-[#31605D]"/>
     </Link>

  
</header>
  )
}

export default Navbar