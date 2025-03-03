import { Button } from "@/components/ui/button"
import SelectDropdown from "../Components/SelectDropdown"
import { ListFilter } from "lucide-react"
import AppointmentTable from "../Components/AppointmentTable"
import DatePicker from "../Components/DatePicker"


export const Appointment = () => {
    interface Select{
        value:string,
        label:string
      }
    const Months:Select[] = [
        { value: "january", label: "January" },
        { value: "february", label: "February" },
        { value: "march", label: "March" },
        { value: "april", label: "April" },
        { value: "may", label: "May" },
        { value: "june", label: "June" },
        { value: "july", label: "July" },
        { value: "august", label: "August" },
        { value: "september", label: "September" },
        { value: "october", label: "October" },
        { value: "november", label: "November" },
        { value: "december", label: "December" },
      ]
      const Department:Select[] = [
        { value: "Counseling Psychologist", label: "Counseling Psychologist" },
        { value: "Neuropsychologist", label: "Neuropsychologist" },
        { value: "Forensic Psychologist", label: "Forensic Psychologist" },
        { value: "Clinical Psychologist", label: "Clinical Psychologist" },
      ]
      const Doctor:Select[] = [
        { value: "Dr.Charlotte", label: "Dr.Charlotte" },
        { value: "Dr.Noah", label: "Dr.Noah" },
        { value: "Dr.Emma", label: "Dr.Emma" },
        { value: "Dr.Ethan", label: "Dr.Ethan" },
     
      ]
      const Year:Select[] = [
        { value: "2025", label: "2025" },
        { value: "2024", label: "2024" },
        { value: "2023", label: "2023" },
        { value: "2022", label: "2022" },
        { value: "2021", label: "2021" },
      ]
  return (
    <div className="p-3 mt-[1vh]">  
     <h1 className="text-[20px] font-semibold">Appointments</h1>
     <p className="text-[14px]">Overview of all of your incomes and appointments.</p>
     <div className="flex lg:flex-row sm:flex-col xs:flex-col gap-x-3  gap-y-2 mt-5">
    
        <SelectDropdown Data={Doctor} Type='Doctor'/>
       
        <SelectDropdown Data={Department} Type='Department'/>
        <SelectDropdown Data={Year} Type='Year'/>
        <SelectDropdown Data={Months} Type='Months'/>
        <DatePicker />
        <Button variant={'outline'} className="w-[50px]"><ListFilter /></Button>
     </div>
     <AppointmentTable />
     </div>
  )
}
