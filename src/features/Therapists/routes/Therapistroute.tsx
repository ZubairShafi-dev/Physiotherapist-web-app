import TherapistProfile from "../pages/TherapistProfile"
import TherapistsScreen from "../pages/TherapistsScreen"

import {Routes,Route} from 'react-router-dom'
export const Therapistroute = () => {
  return (
    <Routes>
     <Route path='/therapist' element={<TherapistsScreen />}/>
     <Route path='/therapistProfile' element={<TherapistProfile />}/>
    </Routes>
  )
}
