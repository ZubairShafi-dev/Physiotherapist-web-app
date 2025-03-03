import {Routes,Route} from 'react-router-dom'
import Biling from '../Pages/Biling'
const Bilingroutes = () => {
  return (
    <Routes>
    <Route path='/billings' element={<Biling />}/>
   </Routes>
  )
}

export default Bilingroutes