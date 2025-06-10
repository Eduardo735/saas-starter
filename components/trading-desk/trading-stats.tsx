"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export function TradingStats() {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <div className="text-sm font-medium">Active Trades</div>
          <div className="text-sm font-medium">24</div>
        </div>
        <Progress value={24} max={100} className="h-2" />
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <div className="text-sm font-medium">Success Rate (Today)</div>
          <div className="text-sm font-medium">78%</div>
        </div>
        <Progress value={78} max={100} className="h-2" />
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <div className="text-sm font-medium">Crypto Market Share</div>
          <div className="text-sm font-medium">45%</div>
        </div>
        <Progress value={45} max={100} className="h-2" />
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <div className="text-sm font-medium">Forex Market Share</div>
          <div className="text-sm font-medium">35%</div>
        </div>
        <Progress value={35} max={100} className="h-2" />
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <div className="text-sm font-medium">Options Market Share</div>
          <div className="text-sm font-medium">20%</div>
        </div>
        <Progress value={20} max={100} className="h-2" />
      </div>

      <Card className="mt-6">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium">Total Profit (24h)</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">+$12,234</div>
          <p className="text-xs text-muted-foreground">+14.5% from yesterday</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium">Most Copied Trade</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-lg font-bold">BTC/USD Long</div>
          <p className="text-xs text-muted-foreground">Copied by 234 traders</p>
        </CardContent>
      </Card>
    </div>
  )
}
