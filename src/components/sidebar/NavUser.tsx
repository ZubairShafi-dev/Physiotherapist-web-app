"use client"



import {
  Avatar,

  AvatarImage,
} from "../ui/avatar"
import {
  DropdownMenu,

  DropdownMenuTrigger,
} from "../ui/dropdown-menu"
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  // useSidebar,
} from "../ui/sidebar"

export function NavUser({
  user,
}: {
  user: {
    name: string
    email: string
    avatar: string
  }
}) {
  // const { isMobile } = useSidebar()

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <Avatar className="h-8 w-8 rounded-lg  width-[48px] height-[48px]">
                <AvatarImage src={user.avatar} alt={user.name} />
            
              </Avatar>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-semibold  text-[15px]">{user.name}</span>
                <span className="truncate text-xs  text-[12px]">{user.email}</span>
              </div>
      
            </SidebarMenuButton>
          </DropdownMenuTrigger>
       
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}
