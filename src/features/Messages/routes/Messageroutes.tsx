
import { Route, Routes } from 'react-router-dom'
import Messages from '../Pages/Messages'

const Messageroutes = () => {
  return (
  <Routes>
    <Route path='/messages' element={<Messages />}/>
  </Routes>
  )
}

export default Messageroutes