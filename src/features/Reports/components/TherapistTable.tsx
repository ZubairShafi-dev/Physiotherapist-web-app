import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"
  import { Button } from "@/components/ui/button"
  import { ListFilter } from "lucide-react"
  import {
    Table,
    TableBody,

    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
const TherapistTable = () => {
    interface Therapist {
        id: string;
        name: string;
        total_buisness: string;
        performance: string;
        department: string;
        total_pateint: string;
      }
      
      const TherapistArray: Therapist[] = [
        {
          id: "1",
          name: "John Doe",
          department: "Cardiology",
          total_buisness: "500,000",
          total_pateint: "56",
          performance: "100",
        },
        {
          id: "2",
          name: "Jane Smith",
          department: "Neurology",
          total_buisness: "320,000",
          total_pateint: "42",
          performance: "85",
        },
        {
          id: "3",
          name: "Robert Brown",
          department: "Physiotherapy",
          total_buisness: "210,000",
          total_pateint: "30",
          performance: "78",
        },
        {
          id: "4",
          name: "Emily Johnson",
          department: "Pediatrics",
          total_buisness: "450,000",
          total_pateint: "60",
          performance: "92",
        },
        {
          id: "5",
          name: "Michael Davis",
          department: "Orthopedics",
          total_buisness: "280,000",
          total_pateint: "35",
          performance: "80",
        },
        {
          id: "6",
          name: "Sarah Wilson",
          department: "Psychiatry",
          total_buisness: "390,000",
          total_pateint: "50",
          performance: "88",
        },
        {
          id: "7",
          name: "David Martinez",
          department: "Dermatology",
          total_buisness: "200,000",
          total_pateint: "25",
          performance: "75",
        },
        {
          id: "8",
          name: "Olivia Taylor",
          department: "Gynecology",
          total_buisness: "350,000",
          total_pateint: "48",
          performance: "90",
        },
      ];
      
  return (
    <div className="rounded-lg border-[#B8B8B8] border-[1px] mt-7 px-5 py-3 lg:w-[76.5vw] sm:w-[100vw] xs:w-[100vw]">
         <div className="flex justify-between">
    <h1 className="text-[20px] font-semibold">Top Department</h1>
  
      <Popover>
        <PopoverTrigger> <Button variant='outline'>  <ListFilter /></Button>
        </PopoverTrigger>
        <PopoverContent>
        <p className="cursor-pointer bg-white text-left text-[13px] hover:bg-gray-100 p-2 rounded-md w-[70%]">Yearly</p>
        <p className="cursor-pointer bg-white text-left text-[13px] hover:bg-gray-100 p-2 rounded-md w-[70%]">Monthly</p>
        <p className="cursor-pointer bg-white text-left text-[13px] hover:bg-gray-100 p-2 rounded-md w-[70%]">Weekly</p>
        <p className="cursor-pointer bg-white text-left text-[13px] hover:bg-gray-100 p-2 rounded-md w-[70%]">Daily</p>
        </PopoverContent>
      </Popover>
  
       </div>
       <Table className="w-full overflow-x-scroll">

<TableHeader className="bg-[#F3FFFE]">
<TableRow>
<TableHead className="text-[#4D515A]  font-semibold min-w-[50px]" >#</TableHead>
  <TableHead className="text-[#4D515A]  font-semibold min-w-[200px]" >Name</TableHead>


  <TableHead className="text-[#4D515A]  font-semibold min-w-[200px]">Department</TableHead>
  <TableHead className="text-[#4D515A]  font-semibold min-w-[150px]">Total Patients</TableHead>
  
  <TableHead className="text-[#4D515A]  font-semibold min-w-[150px]">Total Business</TableHead>
  <TableHead className="text-[#4D515A]  font-semibold min-w-[180px]">Overall Performance</TableHead>
  <TableHead></TableHead>
</TableRow>
</TableHeader>
<TableBody>
{
    TherapistArray.map((item,index)=>(
        <TableRow key={index}>
  <TableCell >
 
              <p > {item.id}</p>
   </TableCell>
  <TableCell >{item.name}</TableCell>
  <TableCell >{item.department}</TableCell>
  <TableCell >{item.total_pateint}</TableCell>
  <TableCell >Rs-/{item.total_buisness}</TableCell>
  <TableCell >{item.performance}%</TableCell>



 

</TableRow>
    ))}

</TableBody>
    </Table>
    </div>
  )
}

export default TherapistTable