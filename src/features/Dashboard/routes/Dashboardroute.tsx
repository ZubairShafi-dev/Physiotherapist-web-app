import {Routes,Route} from 'react-router-dom'
import Dashboard from '../Pages/Dashboard';
const Dashboardroute = () => {
  return (
  <Routes>
    <Route path='/' element={<Dashboard />}/>
  </Routes>

  )
}

export default Dashboardroute