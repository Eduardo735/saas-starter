"use client"

import { useState, useEffect } from "react"
import { ArrowRight, TrendingUp } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export function TradingStats() {
  const [winRate, setWinRate] = useState(68)

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      // Random fluctuation between -2 and +2
      const fluctuation = Math.floor(Math.random() * 5) - 2
      setWinRate((prev) => {
        const newValue = prev + fluctuation
        return Math.min(Math.max(newValue, 0), 100) // Keep between 0-100
      })
    }, 10000)

    return () => clearInterval(interval)
  }, [])

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle>Trading Stats</CardTitle>
        <CardDescription>Your trading performance metrics</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <div className="mb-1 flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Win Rate</span>
            <span className="font-medium">{winRate}%</span>
          </div>
          <Progress value={winRate} className="h-2" />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1">
            <p className="text-xs text-muted-foreground">Total Trades</p>
            <p className="text-lg font-medium">142</p>
          </div>
          <div className="space-y-1">
            <p className="text-xs text-muted-foreground">Avg. Holding</p>
            <p className="text-lg font-medium">5.3 days</p>
          </div>
          <div className="space-y-1">
            <p className="text-xs text-muted-foreground">Profit Factor</p>
            <p className="text-lg font-medium">2.4</p>
          </div>
          <div className="space-y-1">
            <p className="text-xs text-muted-foreground">Sharpe Ratio</p>
            <p className="text-lg font-medium">1.87</p>
          </div>
        </div>
        <div className="rounded-md bg-muted p-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="rounded-full bg-primary p-1">
                <TrendingUp className="h-3 w-3 text-primary-foreground" />
              </div>
              <span className="text-sm font-medium">Best Performing Asset</span>
            </div>
            <ArrowRight className="h-4 w-4 text-muted-foreground" />
          </div>
          <div className="mt-2 pl-6">
            <div className="text-sm font-medium">NVDA</div>
            <div className="text-xs text-muted-foreground">+42.3% return</div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
