import TherapistsScreen from "../pages/TherapistsScreen"

import {Routes,Route} from 'react-router-dom'
export const Therapistroute = () => {
  return (
    <Routes>
     <Route path='/therapist' element={<TherapistsScreen />}/>
    </Routes>
  )
}
