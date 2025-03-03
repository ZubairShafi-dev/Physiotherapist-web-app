
interface List {
    id: number;  // Added 'id' property
    name: string;
    title: string;
    date: string;
    time: string;
    image: string;
}
import {
    Avatar,
 AvatarImage,
  } from "../../../components/ui/avatar"
const appointmentArray: List[] = [  
    {
        id: 1,
        name: "John Doe", 
        title: "Doctor Appointment",
        date: "2025-02-25",
        time: "10:00 AM",
        image: "https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png"
    },
    {
        id: 2,
        name: "John Doe", 
        title: "Doctor Appointment",
        date: "2025-02-25",
        time: "10:00 AM",
        image: "https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png"   
    },
    {
        id: 3,
        name: "John Doe", 
        title: "Doctor Appointment",
        date: "2025-02-25",
        time: "10:00 AM",
        image: "https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png"
    },{
        id: 4,
        name: "John Doe", 
        title: "Doctor Appointment",
        date: "2025-02-25",
        time: "10:00 AM",
        image: "https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png"
    }
];

console.log(appointmentArray);

const Appointmentlist = () => {
  return (
    <div className='lg:w-[40%] sm:w-[100%] xs:w-[100%]  rounded-lg border-[#B8B8B8] border-[1px] mt-2 px-5 py-3'>
           <h1 className='font-bold text-[20px]'>Appointment List</h1>
       {appointmentArray.map((item,index)=>(
        <div key={index}>
            <div className='flex gap-3 py-3'>
            <Avatar className="h-8 w-8 rounded-lg  width-[48px] height-[48px]">
                <AvatarImage src={item.image} alt={item.name} />
              
              </Avatar>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-semibold  text-[15px]">{item.name}</span>
                <span className="truncate text-xs  text-[12px]">{item.title}</span>
              </div>
              <div>
            <p className="text-[12px]">{item.date}</p>
            <p className="text-[14px] font-semibold">{item.time}</p>
           </div>
            </div>
          
        </div>
       ))}
    </div>
  )
}

export default Appointmentlist