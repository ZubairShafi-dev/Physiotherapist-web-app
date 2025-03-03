import {
    Table,
    TableBody,

    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  import {
    Avatar,
 AvatarImage,
  } from "../../../components/ui/avatar"

import Option from "./Option";
  interface Appointment {
    imageurl: string;
    name: string;
    gender: string;
    age: string;
    doctor: string;
    date: string;
    department: string;
    pateintId: string;
  }
  
  const AppointmentArray: Appointment[] = [
    {
      imageurl: "https://randomuser.me/api/portraits/men/1.jpg",
      name: "John Doe",
      gender: "Male",
      age: "32",
      doctor: "Dr. Emily Carter",
      date: "2024-03-15",
      department: "Cardiology",
      pateintId: "PAT-001",
    },
    {
      imageurl: "https://randomuser.me/api/portraits/women/2.jpg",
      name: "Sophia Williams",
      gender: "Female",
      age: "28",
      doctor: "Dr. Michael Brown",
      date: "2024-03-18",
      department: "Dermatology",
      pateintId: "PAT-002",
    },
    {
      imageurl: "https://randomuser.me/api/portraits/men/3.jpg",
      name: "David Smith",
      gender: "Male",
      age: "45",
      doctor: "Dr. Sarah Johnson",
      date: "2024-03-20",
      department: "Neurology",
      pateintId: "PAT-003",
    },
    {
      imageurl: "https://randomuser.me/api/portraits/women/4.jpg",
      name: "Olivia Martinez",
      gender: "Female",
      age: "36",
      doctor: "Dr. William Anderson",
      date: "2024-03-22",
      department: "Orthopedics",
      pateintId: "PAT-004",
    },
    {
      imageurl: "https://randomuser.me/api/portraits/men/5.jpg",
      name: "James Taylor",
      gender: "Male",
      age: "50",
      doctor: "Dr. Jessica Wilson",
      date: "2024-03-25",
      department: "Gastroenterology",
      pateintId: "PAT-005",
    },
  ];
  


const AppointmentTable = () => {
  return (
    <div className="rounded-lg  mt-7 px-5 py-3 lg:w-[76.5vw] sm:w-[100vw] xs:w-[100vw]">
    
    <Table className="w-full overflow-x-scroll">

<TableHeader className="bg-[#F3FFFE]">
<TableRow>
  <TableHead className="text-[#4D515A]  font-semibold min-w-[250px]" >Name</TableHead>
  <TableHead className="text-[#4D515A]  font-semibold min-w-[150px]">Gender</TableHead>
  <TableHead className="text-[#4D515A]  font-semibold min-w-[150px]">Doctor</TableHead>
  <TableHead className="text-[#4D515A]  font-semibold min-w-[150px]">Age</TableHead>
  <TableHead className="text-[#4D515A]  font-semibold min-w-[150px]">Time&Date</TableHead>
  <TableHead className="text-[#4D515A]  font-semibold min-w-[250px]">Department</TableHead>
  <TableHead className="text-[#4D515A]  font-semibold min-w-[150px]">Patient ID</TableHead>
  <TableHead></TableHead>
</TableRow>
</TableHeader>
<TableBody>
{
    AppointmentArray.map((item,index)=>(
        <TableRow key={index}>
  <TableCell className=" font-semibold flex items-center gap-2">
  <Avatar className="h-8 w-8 rounded-[50%]  width-[48px] height-[48px]">
                <AvatarImage src={item.imageurl} alt={item.name} />
              
              </Avatar>
              <p > {item.name}</p>
   </TableCell>
  <TableCell >{item.gender}</TableCell>
  <TableCell >{item.doctor}</TableCell>
  <TableCell >{item.age}</TableCell>
  <TableCell >{item.date}</TableCell>
  <TableCell >{item.department}</TableCell>
  <TableCell >{item.pateintId}</TableCell>
  <TableCell ><Option /></TableCell>

 

</TableRow>
    ))}

</TableBody>
    </Table>

</div>
  )
}

export default AppointmentTable