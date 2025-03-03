
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Allnotification from '../Components/Allnotification'
import Unreadnotification from '../Components/Unreadnotification'


const Notification = () => {
  return (
    <div className="p-3 box-border mt-[1vh]">
      <h1 className="text-[20px] font-semibold">Notification</h1>
      <p>Overview of all of your notifications.</p>
      <Tabs defaultValue="all" className=" mt-3">
  <TabsList>
    <TabsTrigger value="all">All</TabsTrigger>
    <TabsTrigger value="unread">Unread</TabsTrigger>
  </TabsList>
  <TabsContent value="all"><Allnotification /></TabsContent>
  <TabsContent value="unread"><Unreadnotification /></TabsContent>
</Tabs>
      
    
      </div>
  )
}

export default Notification