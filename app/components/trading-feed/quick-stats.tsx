"use client"

import { ArrowDown, ArrowUp, TrendingUp } from "lucide-react"
import { useEffect, useState } from "react"

import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card"

export function QuickStats() {
  const [stats, setStats] = useState({
    totalPnL: 2847.65,
    winRate: 68.5,
    activeTrades: 12,
    todaysPnL: 342.18,
  })

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setStats((prev) => ({
        ...prev,
        totalPnL: prev.totalPnL + (Math.random() - 0.5) * 50,
        todaysPnL: prev.todaysPnL + (Math.random() - 0.5) * 20,
        winRate: Math.max(0, Math.min(100, prev.winRate + (Math.random() - 0.5) * 2)),
      }))
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total P&L</CardTitle>
          <TrendingUp className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-green-600">+${stats.totalPnL.toFixed(2)}</div>
          <p className="text-xs text-muted-foreground">All time performance</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Today's P&L</CardTitle>
          {stats.todaysPnL >= 0 ? (
            <ArrowUp className="h-4 w-4 text-green-500" />
          ) : (
            <ArrowDown className="h-4 w-4 text-red-500" />
          )}
        </CardHeader>
        <CardContent>
          <div className={`text-2xl font-bold ${stats.todaysPnL >= 0 ? "text-green-600" : "text-red-600"}`}>
            {stats.todaysPnL >= 0 ? "+" : ""}${stats.todaysPnL.toFixed(2)}
          </div>
          <p className="text-xs text-muted-foreground">Since market open</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Win Rate</CardTitle>
          <div className="h-4 w-4 rounded-full bg-green-500" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{stats.winRate.toFixed(1)}%</div>
          <p className="text-xs text-muted-foreground">Last 30 days</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Active Trades</CardTitle>
          <div className="h-4 w-4 rounded-full bg-blue-500 animate-pulse" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{stats.activeTrades}</div>
          <p className="text-xs text-muted-foreground">Currently open</p>
        </CardContent>
      </Card>
    </div>
  )
}
