import { Routes ,Route} from "react-router-dom"
import { Appointment } from "../Pages/Appointment"


const Appointmentroutes = () => {
  return (
<Routes>
  <Route path="/appointment" element={<Appointment />}/>
</Routes>
  )
}

export default Appointmentroutes