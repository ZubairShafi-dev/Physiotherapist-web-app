import { FaSquare } from "react-icons/fa";
import TherapistsCards from "../Components/TherapistsCards";

interface Therapistlist{
  name:string,
  title:string,
  img:string,
  status:string
}
const TherapistArray: Therapistlist[] = [
  {
    name: 'Dr. Aysha',
    title: "Cognitive Therapist",
    img: "https://img.freepik.com/free-photo/pleased-young-female-doctor-wearing-medical-robe-stethoscope-around-neck-standing-with-closed-posture_409827-254.jpg?t=st=1740497061~exp=1740500661~hmac=251e556a2b86687c3fe148301c9dda603c5d74f3484f7a235e79f2e487cc35a0&w=1800",
    status: 'active'
  },
  {
    name: 'Dr. Daniel',
    title: "Clinical Psychologist",
    img: "https://img.freepik.com/free-photo/pleased-young-female-doctor-wearing-medical-robe-stethoscope-around-neck-standing-with-closed-posture_409827-254.jpg?t=st=1740497061~exp=1740500661~hmac=251e556a2b86687c3fe148301c9dda603c5d74f3484f7a235e79f2e487cc35a0&w=1800",
    status: 'pending'
  },
  {
    name: 'Dr. Maria',
    title: "Child Psychologist",
    img: "https://img.freepik.com/free-photo/pleased-young-female-doctor-wearing-medical-robe-stethoscope-around-neck-standing-with-closed-posture_409827-254.jpg?t=st=1740497061~exp=1740500661~hmac=251e556a2b86687c3fe148301c9dda603c5d74f3484f7a235e79f2e487cc35a0&w=1800",
    status: 'deactive'
  },
  {
    name: 'Dr. Robert',
    title: "Behavioral Therapist",
    img: "https://img.freepik.com/free-photo/doctor-with-his-arms-crossed-white-background_1368-5790.jpg?t=st=1740496968~exp=1740500568~hmac=89fb67e4746df30481212b097bec9d544682a4c875c0a2fb8ed8baeaefcac697&w=1060",
    status: 'active'
  },
  {
    name: 'Dr. Sophia',
    title: "Marriage Counselor",
    img: "https://img.freepik.com/free-photo/pleased-young-female-doctor-wearing-medical-robe-stethoscope-around-neck-standing-with-closed-posture_409827-254.jpg?t=st=1740497061~exp=1740500661~hmac=251e556a2b86687c3fe148301c9dda603c5d74f3484f7a235e79f2e487cc35a0&w=1800",
    status: 'pending'
  },
  {
    name: 'Dr. William',
    title: "Mental Health Specialist",
    img: "https://img.freepik.com/free-photo/doctor-with-his-arms-crossed-white-background_1368-5790.jpg?t=st=1740496968~exp=1740500568~hmac=89fb67e4746df30481212b097bec9d544682a4c875c0a2fb8ed8baeaefcac697&w=1060",
    status: 'deactive'
  },
  {
    name: 'Dr. Olivia',
    title: "Addiction Counselor",
    img: "https://img.freepik.com/free-photo/pleased-young-female-doctor-wearing-medical-robe-stethoscope-around-neck-standing-with-closed-posture_409827-254.jpg?t=st=1740497061~exp=1740500661~hmac=251e556a2b86687c3fe148301c9dda603c5d74f3484f7a235e79f2e487cc35a0&w=1800",
    status: 'active'
  },
  {
    name: 'Dr. Ethan',
    title: "Rehabilitation Therapist",
    img: "https://img.freepik.com/free-photo/doctor-with-his-arms-crossed-white-background_1368-5790.jpg?t=st=1740496968~exp=1740500568~hmac=89fb67e4746df30481212b097bec9d544682a4c875c0a2fb8ed8baeaefcac697&w=1060",
    status: 'pending'
  },
  {
    name: 'Dr. Emma',
    title: "Trauma Therapist",
    img: "https://img.freepik.com/free-photo/pleased-young-female-doctor-wearing-medical-robe-stethoscope-around-neck-standing-with-closed-posture_409827-254.jpg?t=st=1740497061~exp=1740500661~hmac=251e556a2b86687c3fe148301c9dda603c5d74f3484f7a235e79f2e487cc35a0&w=1800",
    status: 'deactive'
  },
  {
    name: 'Dr. Noah',
    title: "Neuropsychologist",
    img: "https://img.freepik.com/free-photo/doctor-with-his-arms-crossed-white-background_1368-5790.jpg?t=st=1740496968~exp=1740500568~hmac=89fb67e4746df30481212b097bec9d544682a4c875c0a2fb8ed8baeaefcac697&w=1060",
    status: 'active'
  },
  {
    name: 'Dr. Charlotte',
    title: "Grief Counselor",
    img: "https://img.freepik.com/free-photo/cheerful-young-female-doctor-wearing-white-coat_171337-1204.jpg",
    status: 'pending'
  },
  {
    name: 'Dr. James',
    title: "Grief Counselor",
    img: "https://img.freepik.com/free-photo/doctor-with-his-arms-crossed-white-background_1368-5790.jpg?t=st=1740496968~exp=1740500568~hmac=89fb67e4746df30481212b097bec9d544682a4c875c0a2fb8ed8baeaefcac697&w=1060",
    status: 'deactive'
  }
];



const TherapistsScreen = () => {
  return (
    <div className="p-3 mb-3 mt-[1vh]">
      <h1 className="text-[20px] font-semibold">Therapists</h1>
      <div className="flex items-center gap-4 lg:flex-row sm:flex-col xs:flex-col">
      <p className="text-[14px]">It's okay to not be okay—let's work on it together</p>
      <div className="grid gap-3 lg:grid-cols-4 sm:grid-cols-2 xs:grid-cols-2">
      <div className="flex gap-1 items-center text-[14px] font-semibold"><FaSquare size={5} color="#E07706"/><span className="text-[#E07706]">Total</span><p className="ml-4">42</p></div>
      <div className="flex gap-1 items-center text-[14px] font-semibold"><FaSquare size={5} color="#FFC300"/><span className="text-[#FFC300]">Pending</span><p className="ml-4">42</p></div>
      <div className="flex gap-1 items-center text-[14px] font-semibold"><FaSquare size={5} color="#189200"/><span className="text-[#189200]">Active</span><p className="ml-4">42</p></div>
      <div className="flex gap-1 items-center text-[14px] font-semibold"><FaSquare size={5} color="#FF0000"/><span className="text-[#FF0000]">De-active</span><p className="ml-4">42</p></div>
      </div>
    
      </div>
     <div className=" w-[100%] grid gap-y-[100px]  gap-x-3 lg:grid-cols-4 sm:grid-cols-1 xs:grid-cols-1 mt-11">
      {TherapistArray.map((item,index)=>(
        <TherapistsCards  key={index} name={item.name} title={item.title} img={item.img} status={item.status} />
      ))}
     </div>
    </div>
  )
}

export default TherapistsScreen