
import { AppSidebar } from './components/sidebar/AppSidebar'
import { SidebarInset} from './components/ui/sidebar'
import App from './App'

import Navbar from './components/navbar/Navbar'


const MainLayout = () => {
  return (
    <div className="flex min-h-screen w-full ">
    
      <AppSidebar />
   

    <SidebarInset>

   
      <main className="flex-1 flex-col ">
      <Navbar />
        <App />
      </main>
    </SidebarInset>
 
  </div>
  )
}

export default MainLayout