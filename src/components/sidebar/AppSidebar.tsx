"use client"

import * as React from "react"
import { NavUser } from "./NavUser"
import {


  Calendar1Icon,

  ChartBar,

  CircleDollarSignIcon,

  Home,

  MessageCircle,

  User2,
} from "lucide-react"
import { NavMain } from "../sidebar/Navmain"

import {
  Sidebar,
  SidebarContent,

  SidebarHeader,

} from "../ui/sidebar"

// This is sample data.
const data = {
  user: {
    name: "Muhammad Ahmed",
    email: "muhammadahmed.com",
    avatar: "https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png",
  },

  navMain: [
    {
      title: "Dashboard",
      url: "/",
      icon: Home,
      isActive: true,
     
    },
    {
      title: "Therapists",
      url: "/therapist",
      icon: User2,
   
    },
    {
      title: "Appointments",
      url: "/appointment",
      icon: Calendar1Icon,
   
    },
    {
      title: "Messages",
      url: "/messages",
      icon: MessageCircle,
     
    },
    {
      title: "Billings",
      url: "/billings",
      icon:CircleDollarSignIcon,
     
    },
    {
      title: "Reports",
      url: "/reports",
      icon: ChartBar,
     
    },
  ],

}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props} >
      <SidebarHeader className="mt-9 ">
      <NavUser user={data.user} />
      </SidebarHeader>
      <SidebarContent className="mt-9 ">
      <NavMain items={data.navMain} />  
      </SidebarContent>
    </Sidebar>
  )
}
