
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { CircleCheck, CircleDot } from 'lucide-react';
import { useState } from 'react';

const Unreadnotification = () => {
    interface Notification{
        id:string,
        status:string,
        name:string,
        days:string

    }
    const NotificationArray: Notification[] = [
        {    id:'1',
            status: "Request Approval",
            name: "Dr. Ali Hamza",
            days: "1 day ago"
        },
        {    id:'2',
            status: "Appointment Booking",
            name: "Dr. Sarah Khan",
            days: "2 days ago"
        },
        {    id:'3',
            status: "Request Approval",
            name: "Dr. John Doe",
            days: "5 hours ago"
        },
 
    ];
    
    const [selectedAll,setAllSelected]=useState(false)
    const [selectedNotification,setSelectedNotification]=useState<string[]>([])
    const handleSelectAll=()=>{
        if(selectedAll){
            setSelectedNotification([])
        }
        else{
            setSelectedNotification(NotificationArray.map((item,_)=>item.id))
        }
        setAllSelected(!selectedAll)
    }
    const handleSelectSingle = (id: string) => {
        if (selectedNotification.includes(id)) {
            setSelectedNotification(selectedNotification.filter(notificationId => notificationId !== id));
        } else {
            setSelectedNotification([...selectedNotification, id]);
        }
    };
    
  return (
<div className='border-[#B8B8B8] border-[1px] rounded-sm mt-4 w-[100%]'>
   

   <Table className='w-[100%]'>
     <TableHeader>
         <TableRow className="bg-[#F6FAF8]">
             <TableHead className='font-semibold flex gap-2 items-center'>
                 <input type='checkbox' onChange={handleSelectAll} checked={selectedAll}/>
                 Select All</TableHead>
      
         </TableRow>
     </TableHeader>
     <TableBody>
         {NotificationArray.length?(NotificationArray.map((item,index)=>(
            <TableRow className="even:bg-[#F6FAF8]" key={index}>
                <TableCell className='flex items-center justify-between'>
                     <div className='flex items-baseline gap-2'>
                        <input type='checkbox' onChange={()=>{handleSelectSingle(item.id)}} checked={selectedNotification.includes(item.id)}/>
                        <div>
                        <p className='text-[12px] flex gap-2 items-center'>
                        {item.status==='Request Approval'?<CircleDot size={12} className='text-[#8250DF]'/>:<CircleCheck size={12} className='text-green-600'/>}
                            {item.status}</p>
                        <p className='flex gap-2 items-center'>
                           
                            {item.name}</p>
                        
                        </div>
                       
                     </div>
                     <p>{item.days}</p>
                </TableCell>
            </TableRow>
         ))) :(<p className='p-3'>No unread notifications</p>)}
     </TableBody>
   </Table>
   </div>
  )
}

export default Unreadnotification