"use client"

import { useState } from "react"
import { DashboardContent } from "./dashboard-content"
import { DashboardHeader } from "./dashboard-header"
import { Sidebar } from "./sidebar"

export function Dashboard() {
  const [collapsed, setCollapsed] = useState(false)
  const [activeItem, setActiveItem] = useState("dashboard")

  return (
    <div className="flex h-screen bg-background">
      <Sidebar
        collapsed={collapsed}
        setCollapsed={setCollapsed}
        activeItem={activeItem}
        setActiveItem={setActiveItem}
      />
      <div className="flex flex-col flex-1 overflow-hidden">
        <DashboardHeader collapsed={collapsed} setCollapsed={setCollapsed} />
        <DashboardContent activeItem={activeItem} />
      </div>
    </div>
  )
}
