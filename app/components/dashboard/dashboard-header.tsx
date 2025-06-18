"use client"

import { Button } from "@/app/components/ui/button"
import { Input } from "@/app/components/ui/input"
import { Bell, Menu, Search } from "lucide-react"
import { UserAvatarInfo } from "../user-detail/user-avatar-info"

interface DashboardHeaderProps {
  collapsed: boolean
  setCollapsed: (collapsed: boolean) => void
}

export function DashboardHeader({ collapsed, setCollapsed }: DashboardHeaderProps) {
  return (
    <header className="flex items-center h-16 gap-4 border-b px-6">
      <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setCollapsed(!collapsed)}>
        <Menu className="h-5 w-5" />
      </Button>

      <div className="relative flex-1 max-w-md">
        {/* <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" /> */}
        {/* <Input type="search" placeholder="Search..." className="pl-8 w-full md:w-64 lg:w-80" /> */}
      </div>

      <div className="flex items-center gap-2 ml-auto">
        {/* <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-primary"></span>
        </Button> */}
      </div>
      <div className="flex items-center w-7 h-7 bg-gray-300 rounded-full">
        <UserAvatarInfo />
      </div>

    </header>
  )
}
