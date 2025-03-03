import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'


import { SidebarInset, SidebarProvider } from './components/ui/sidebar.tsx'
import MainLayout from './MainLayout.tsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <SidebarProvider>
                <div className="flex min-h-screen w-full">
                <SidebarInset>
                    <main className="flex-1 flex-col">
                    <MainLayout />
                    </main>
                </SidebarInset>
                </div>
 </SidebarProvider>
    </BrowserRouter>
   
  </StrictMode>,
)
