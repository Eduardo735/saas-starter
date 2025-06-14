"use client"

import { useState, useEffect } from "react"
import { ArrowDown, ArrowUp, Crown, Star, TrendingUp } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/app/components/ui/avatar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/components/ui/card"
import { Badge } from "@/app/components/ui/badge"

type TopTrader = {
  id: string
  name: string
  username: string
  avatar: string
  rank: number
  monthlyReturn: number
  winRate: number
  followers: number
  isFollowing: boolean
  verified: boolean
}

export function TopTraders() {
  const [traders, setTraders] = useState<TopTrader[]>([
    {
      id: "1",
      name: "Emma Wilson",
      username: "emmatrader",
      avatar: "/placeholder.svg?height=40&width=40",
      rank: 1,
      monthlyReturn: 34.7,
      winRate: 78.5,
      followers: 15678,
      isFollowing: true,
      verified: true,
    },
    {
      id: "2",
      name: "Alex Thompson",
      username: "alextrader",
      avatar: "/placeholder.svg?height=40&width=40",
      rank: 2,
      monthlyReturn: 28.3,
      winRate: 72.1,
      followers: 12453,
      isFollowing: true,
      verified: true,
    },
    {
      id: "3",
      name: "Sarah Chen",
      username: "sarahtrader",
      avatar: "/placeholder.svg?height=40&width=40",
      rank: 3,
      monthlyReturn: 25.9,
      winRate: 69.8,
      followers: 8765,
      isFollowing: false,
      verified: true,
    },
    {
      id: "4",
      name: "Michael Rodriguez",
      username: "miketrader",
      avatar: "/placeholder.svg?height=40&width=40",
      rank: 4,
      monthlyReturn: 22.4,
      winRate: 65.3,
      followers: 5432,
      isFollowing: false,
      verified: false,
    },
    {
      id: "5",
      name: "David Kim",
      username: "davidtrader",
      avatar: "/placeholder.svg?height=40&width=40",
      rank: 5,
      monthlyReturn: 19.8,
      winRate: 63.7,
      followers: 3421,
      isFollowing: false,
      verified: false,
    },
  ])

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setTraders((prevTraders) =>
        prevTraders.map((trader) => ({
          ...trader,
          monthlyReturn: trader.monthlyReturn + (Math.random() - 0.5) * 2,
          winRate: Math.max(0, Math.min(100, trader.winRate + (Math.random() - 0.5) * 1)),
        })),
      )
    }, 8000)

    return () => clearInterval(interval)
  }, [])

  const toggleFollow = (id: string) => {
    setTraders((prevTraders) =>
      prevTraders.map((trader) => (trader.id === id ? { ...trader, isFollowing: !trader.isFollowing } : trader)),
    )
  }

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Crown className="h-4 w-4 text-yellow-500" />
      case 2:
        return <Star className="h-4 w-4 text-gray-400" />
      case 3:
        return <Star className="h-4 w-4 text-amber-600" />
      default:
        return <span className="text-sm font-bold text-muted-foreground">#{rank}</span>
    }
  }

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <TrendingUp className="mr-2 h-5 w-5" />
            Top Traders
          </CardTitle>
          <CardDescription>Best performing traders this month</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {traders.map((trader) => (
            <div key={trader.id} className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="flex items-center justify-center w-6">{getRankIcon(trader.rank)}</div>
                <Avatar className="h-8 w-8">
                  <AvatarImage src={trader.avatar || "/placeholder.svg"} alt={trader.name} />
                  <AvatarFallback>{trader.name.substring(0, 2)}</AvatarFallback>
                </Avatar>
                <div>
                  <div className="flex items-center space-x-1">
                    <span className="font-medium text-sm">{trader.name}</span>
                    {trader.verified && (
                      <Badge variant="secondary" className="h-4 px-1 text-xs">
                        ✓
                      </Badge>
                    )}
                  </div>
                  <div className="text-xs text-muted-foreground">@{trader.username}</div>
                </div>
              </div>
              <div className="text-right">
                <div className="flex items-center">
                  {trader.monthlyReturn >= 0 ? (
                    <ArrowUp className="mr-1 h-3 w-3 text-green-500" />
                  ) : (
                    <ArrowDown className="mr-1 h-3 w-3 text-red-500" />
                  )}
                  <span
                    className={`text-sm font-medium ${trader.monthlyReturn >= 0 ? "text-green-600" : "text-red-600"}`}
                  >
                    {trader.monthlyReturn >= 0 ? "+" : ""}
                    {trader.monthlyReturn.toFixed(1)}%
                  </span>
                </div>
                <div className="text-xs text-muted-foreground">{trader.winRate.toFixed(1)}% win rate</div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Trending Strategies</CardTitle>
          <CardDescription>Popular trading approaches</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Options Scalping</span>
            <Badge variant="secondary">+23%</Badge>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Crypto Swing</span>
            <Badge variant="secondary">+18%</Badge>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Futures Day Trading</span>
            <Badge variant="secondary">+15%</Badge>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Tech Stock Momentum</span>
            <Badge variant="secondary">+12%</Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
