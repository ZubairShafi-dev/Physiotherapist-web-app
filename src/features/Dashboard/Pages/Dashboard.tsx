import Cards from "../Components/Cards"

import { Calendar1, RecycleIcon, User2Icon, Wallet2Icon } from "lucide-react"
import Totalsales from "../Components/Totalsales"
import Appointmentlist from "../Components/Appointmentlist"
import BilingHistory from "../Components/BilingHistory"
const Dashboard = () => {
  return (
    <div className="p-3 box-border mt-[1vh]">
      <h1 className="text-[20px] font-semibold">Dashboard</h1>
      <p className="text-[14px]">Overview of all of your incomes and appointments</p>
      <div className="flex gap-2 lg:flex-row xs:flex-col sm:flex-col mt-4">
      <Cards title="Total Patients" desc="579" icon={User2Icon} />
      <Cards title="Total Appointments" desc="1000" icon={Calendar1} />
      <Cards title="Total Income" desc="Rs.8579" icon={Wallet2Icon} />
      <Cards title="Total treatments" desc="270" icon={RecycleIcon} />
      </div>
      <div className="w-[100%] flex lg:flex-row sm:flex-col xs:flex-col gap-2">
   <Totalsales />
   <Appointmentlist />
      </div>
      <BilingHistory />
    </div>
  )
}

export default Dashboard