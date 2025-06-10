"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LiveTradesTable } from "./live-trades-table"
import { TradingStats } from "./trading-stats"
import { TradingChart } from "./trading-chart"
import { liveOperations } from "@/lib/data"

interface MainDashboardProps {
  marketFilter: string
}

export function MainDashboard({ marketFilter }: MainDashboardProps) {
  const [activeTab, setActiveTab] = useState("live")

  const filteredOperations =
    marketFilter === "all" ? liveOperations : liveOperations.filter((op) => op.market === marketFilter)

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
      <Card className="lg:col-span-5">
        <CardHeader>
          <CardTitle>Live Trading Activity</CardTitle>
          <CardDescription>Real-time operations from top traders</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="mb-4">
              <TabsTrigger value="live">Live Trades</TabsTrigger>
              <TabsTrigger value="history">Trade History</TabsTrigger>
              <TabsTrigger value="performance">Performance</TabsTrigger>
            </TabsList>
            <TabsContent value="live" className="space-y-4">
              <LiveTradesTable operations={filteredOperations} />
            </TabsContent>
            <TabsContent value="history">
              <div className="h-[300px] rounded-md border border-dashed flex items-center justify-center">
                <p className="text-muted-foreground">Trade history will appear here</p>
              </div>
            </TabsContent>
            <TabsContent value="performance">
              <TradingChart />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
      <Card className="lg:col-span-2">
        <CardHeader>
          <CardTitle>Trading Stats</CardTitle>
          <CardDescription>Overall performance metrics</CardDescription>
        </CardHeader>
        <CardContent>
          <TradingStats />
        </CardContent>
      </Card>
    </div>
  )
}
