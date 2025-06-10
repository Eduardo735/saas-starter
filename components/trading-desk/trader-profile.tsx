"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { LiveTradesTable } from "./live-trades-table"
import { TradingChart } from "./trading-chart"
import { topTraders, liveOperations } from "@/lib/data"

interface TraderProfileProps {
  traderId: string
  marketFilter: string
}

export function TraderProfile({ traderId, marketFilter }: TraderProfileProps) {
  const trader = topTraders.find((t) => t.id === traderId)

  if (!trader) {
    return <div>Trader not found</div>
  }

  const traderOperations = liveOperations
    .filter((op) => op.trader.id === traderId)
    .filter((op) => marketFilter === "all" || op.market === marketFilter)

  return (
    <div className="space-y-4">
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
            <Avatar className="h-20 w-20">
              <AvatarImage src={trader.avatar || "/placeholder.svg"} alt={trader.name} />
              <AvatarFallback>{trader.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <h2 className="text-2xl font-bold">{trader.name}</h2>
                {trader.isActive && <Badge className="bg-green-500">Live</Badge>}
              </div>
              <p className="text-muted-foreground">{trader.bio}</p>
              <div className="flex gap-2 pt-2">
                <Badge variant="outline">Win Rate: {trader.winRate}%</Badge>
                <Badge variant="outline">Followers: {trader.followers}</Badge>
                <Badge variant="outline">Trades: {trader.totalTrades}</Badge>
              </div>
            </div>
            <div className="ml-auto mt-4 md:mt-0">
              <Button>Follow Trader</Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="trades">
        <TabsList>
          <TabsTrigger value="trades">Live Trades</TabsTrigger>
          <TabsTrigger value="history">Trade History</TabsTrigger>
          <TabsTrigger value="performance">Performance</TabsTrigger>
          <TabsTrigger value="stats">Statistics</TabsTrigger>
        </TabsList>
        <TabsContent value="trades" className="space-y-4 pt-4">
          <Card>
            <CardHeader>
              <CardTitle>Live Trading Activity</CardTitle>
              <CardDescription>Real-time operations from {trader.name}</CardDescription>
            </CardHeader>
            <CardContent>
              <LiveTradesTable operations={traderOperations} />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="history" className="pt-4">
          <Card>
            <CardHeader>
              <CardTitle>Trade History</CardTitle>
              <CardDescription>Past trading operations and results</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] rounded-md border border-dashed flex items-center justify-center">
                <p className="text-muted-foreground">Trade history will appear here</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="performance" className="pt-4">
          <Card>
            <CardHeader>
              <CardTitle>Performance Analysis</CardTitle>
              <CardDescription>Trading performance over time</CardDescription>
            </CardHeader>
            <CardContent>
              <TradingChart />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="stats" className="pt-4">
          <Card>
            <CardHeader>
              <CardTitle>Detailed Statistics</CardTitle>
              <CardDescription>Comprehensive trading metrics</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">Win Rate</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{trader.winRate}%</div>
                    <p className="text-xs text-muted-foreground">+2.5% from last month</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">Avg. Profit</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">$1,245</div>
                    <p className="text-xs text-muted-foreground">Per successful trade</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">Risk Score</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">Medium</div>
                    <p className="text-xs text-muted-foreground">Based on volatility and position size</p>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
