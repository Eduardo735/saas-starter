"use client"

import { cn } from "@/lib/utils"
import {
  BarChart3,
  Calendar,
  ChevronLeft,
  ChevronRight,
  FileText,
  Home,
  LayoutDashboard,
  Settings,
  Users,
} from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { UserNav } from "./user-nav"

interface SidebarProps {
  collapsed: boolean
  setCollapsed: (collapsed: boolean) => void
  activeItem: string
  setActiveItem: (item: string) => void
}

export function Sidebar({ collapsed, setCollapsed, activeItem, setActiveItem }: SidebarProps) {
  const menuItems = [
    { id: "dashboard", label: "Study", icon: LayoutDashboard },
    { id: "analytics", label: "Live Operations", icon: BarChart3 },
    { id: "analyticds", label: "Operations", icon: BarChart3 },
    { id: "analyticdsss", label: "Analisis Final", icon: BarChart3 },
    { id: "patterns", label: "Patterns", icon: BarChart3 },
    { id: "iundi", label: "Indicators", icon: BarChart3 },
    { id: "projects", label: "Sentiment", icon: Home },
    { id: "team", label: "Watchlist", icon: Users },
    { id: "teamd", label: "My Watchlist", icon: Users },
    { id: "black", label: "Black Swan", icon: Users },
    { id: "risk", label: "Risk Management", icon: Users },
    { id: "news", label: "News", icon: Users },
    { id: "performance", label: "Performance", icon: Users },
    { id: "noteds", label: "Notes", icon: Users },
    { id: "notes", label: "How To Operate", icon: Users },
    { id: "calendar", label: "Calendar", icon: Calendar },
    { id: "macroeconomy", label: "Macroeconomi", icon: FileText },
    // { id: "settings", label: "Settings", icon: Settings },
  ]

  return (
    <div
      className={cn("flex flex-col border-r bg-background transition-all duration-300", collapsed ? "w-16" : "w-64")}
    >
      <div className="flex items-center justify-between h-16 px-4 border-b">
        {!collapsed && (
          <Link href="/" className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-primary" />
            <span className="font-semibold">ToolDash</span>
          </Link>
        )}
        <Button
          variant="ghost"
          size="icon"
          className={cn("h-8 w-8", collapsed && "mx-auto")}
          onClick={() => setCollapsed(!collapsed)}
        >
          {collapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
        </Button>
      </div>

      <div className="flex-1 overflow-auto py-2">
        <nav className="grid gap-1 px-2">
          {menuItems.map((item) => {
            const Icon = item.icon
            return (
              <Button
                key={item.id}
                variant={activeItem === item.id ? "secondary" : "ghost"}
                className={cn("justify-start", collapsed ? "justify-center px-2" : "px-3")}
                onClick={() => setActiveItem(item.id)}
              >
                <Icon className={cn("h-5 w-5", activeItem === item.id ? "text-primary" : "text-muted-foreground")} />
                {!collapsed && <span className="ml-3">{item.label}</span>}
              </Button>
            )
          })}
        </nav>
      </div>

      <div className="mt-auto p-2">
        <Separator className="my-2" />
        {collapsed ? (
          <div className="flex justify-center">
            <UserNav collapsed={collapsed} />
          </div>
        ) : (
          <UserNav collapsed={collapsed} />
        )}
      </div>
    </div>
  )
}
