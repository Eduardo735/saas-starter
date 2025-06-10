"use client"

import { useState } from "react"
import { MainDashboard } from "./main-dashboard"
// import { DashboardSidebar } from "./dashboard-sidebar"
import { TraderProfile } from "./trader-profile"
import { MarketSelector } from "./market-selector"
import { DashboardSidebar } from "./dashboard-sidebar"

export default function Dashboard() {
  const [selectedTrader, setSelectedTrader] = useState<string | null>(null)
  const [selectedMarket, setSelectedMarket] = useState<string>("all")

  return (
    <div className="flex h-screen bg-background">
      <DashboardSidebar onTraderSelect={setSelectedTrader} selectedTrader={selectedTrader} />
      <div className="flex flex-col flex-1 overflow-hidden">
        <div className="border-b">
          <div className="flex h-16 items-center px-4">
            <h1 className="text-xl font-bold">Copy Trading Dashboard</h1>
            <div className="ml-auto flex items-center space-x-4">
              <MarketSelector selectedMarket={selectedMarket} onMarketChange={setSelectedMarket} />
            </div>
          </div>
        </div>
        <div className="flex-1 overflow-auto p-4">
          {selectedTrader ? (
            <TraderProfile traderId={selectedTrader} marketFilter={selectedMarket} />
          ) : (
            <MainDashboard marketFilter={selectedMarket} />
          )}
        </div>
      </div>
    </div>
  )
}
