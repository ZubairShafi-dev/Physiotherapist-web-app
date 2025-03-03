
import { Route, Routes } from 'react-router-dom'
import Notification from '../pages/Notification'

const Notificationroute = () => {
  return (
<Routes>
    <Route path='/notification' element={<Notification />} />
</Routes>
  )
}

export default Notificationroute