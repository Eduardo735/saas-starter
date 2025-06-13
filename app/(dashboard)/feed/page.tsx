'use client'

import { DashboardContent } from "@/app/components/dashboard/dashboard-content";
import { DashboardHeader } from "@/app/components/dashboard/dashboard-header";
import { Sidebar } from "@/app/components/dashboard/sidebar";
import { useState } from "react";

export default function Dashboard() {
  const [collapsed, setCollapsed] = useState(false)
  const [activeItem, setActiveItem] = useState("dashboard")
  return <div className="flex h-screen bg-background">
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
}
