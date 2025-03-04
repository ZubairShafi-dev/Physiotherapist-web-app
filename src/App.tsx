import Dashboardroute from "./features/Dashboard/routes/Dashboardroute"
import './index.css'
import { Therapistroute } from "./features/Therapists/routes/Therapistroute"
import Bilingroutes from "./features/Biling/routes/Bilingroutes"
import Appointmentroutes from "./features/Appointments/routes/Appointmentroutes"
import Reportroutes from "./features/Reports/routes/Reportsroutes"
import Notificationroute from "./features/Notification/routes/Notificationroute"
import Messageroutes from "./features/Messages/routes/Messageroutes"

const App = () => {
  return (
 <>

 <Dashboardroute />
 <Therapistroute />
<Appointmentroutes />
<Bilingroutes />
<Reportroutes />
<Notificationroute />
<Messageroutes />
 </>
  )
}

export default App