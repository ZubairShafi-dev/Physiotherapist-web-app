import {Routes,Route} from 'react-router-dom'
import Report from '../Pages/Reports'

const Reportroutes = () => {
  return (
    <Routes>
    <Route path='/reports' element={<Report />}/>
   </Routes>
  )
}

export default Reportroutes