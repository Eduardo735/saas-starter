"use client"

import { useState, useEffect } from "react"
import { ArrowDown, ArrowUp, MoreHorizontal, UserPlus } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

type Trader = {
  id: string
  name: string
  username: string
  avatar: string
  followers: number
  performance: {
    daily: number
    weekly: number
    monthly: number
  }
  isFollowing: boolean
}

export function FollowedTraders() {
  const [traders, setTraders] = useState<Trader[]>([
    {
      id: "1",
      name: "Alex Thompson",
      username: "alextrader",
      avatar: "/placeholder.svg?height=40&width=40",
      followers: 12453,
      performance: {
        daily: 2.34,
        weekly: 8.76,
        monthly: 15.32,
      },
      isFollowing: true,
    },
    {
      id: "2",
      name: "Sarah Chen",
      username: "sarahtrader",
      avatar: "/placeholder.svg?height=40&width=40",
      followers: 8765,
      performance: {
        daily: -0.87,
        weekly: 4.32,
        monthly: 12.54,
      },
      isFollowing: true,
    },
    {
      id: "3",
      name: "Michael Rodriguez",
      username: "miketrader",
      avatar: "/placeholder.svg?height=40&width=40",
      followers: 5432,
      performance: {
        daily: 1.23,
        weekly: -2.45,
        monthly: 9.87,
      },
      isFollowing: true,
    },
    {
      id: "4",
      name: "Emma Wilson",
      username: "emmatrader",
      avatar: "/placeholder.svg?height=40&width=40",
      followers: 3245,
      performance: {
        daily: 3.45,
        weekly: 7.65,
        monthly: 21.43,
      },
      isFollowing: true,
    },
  ])

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setTraders((prevTraders) =>
        prevTraders.map((trader) => {
          // Random fluctuation between -1% and +1%
          const dailyFluctuation = (Math.random() - 0.5) * 2

          return {
            ...trader,
            performance: {
              ...trader.performance,
              daily: trader.performance.daily + dailyFluctuation,
            },
          }
        }),
      )
    }, 8000)

    return () => clearInterval(interval)
  }, [])

  const toggleFollow = (id: string) => {
    setTraders((prevTraders) =>
      prevTraders.map((trader) => (trader.id === id ? { ...trader, isFollowing: !trader.isFollowing } : trader)),
    )
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Followed Traders</CardTitle>
          <CardDescription>Real-time performance of traders you follow</CardDescription>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon">
              <MoreHorizontal className="h-4 w-4" />
              <span className="sr-only">More options</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>View all traders</DropdownMenuItem>
            <DropdownMenuItem>Sort by performance</DropdownMenuItem>
            <DropdownMenuItem>Find new traders</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {traders.map((trader) => (
            <div key={trader.id} className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Avatar>
                  <AvatarImage src={trader.avatar || "/placeholder.svg"} alt={trader.name} />
                  <AvatarFallback>{trader.name.substring(0, 2)}</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium">{trader.name}</div>
                  <div className="text-xs text-muted-foreground">@{trader.username}</div>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="text-right">
                  <div className="flex items-center justify-end">
                    {trader.performance.daily >= 0 ? (
                      <ArrowUp className="mr-1 h-3 w-3 text-green-500" />
                    ) : (
                      <ArrowDown className="mr-1 h-3 w-3 text-red-500" />
                    )}
                    <span
                      className={
                        trader.performance.daily >= 0
                          ? "text-sm font-medium text-green-500"
                          : "text-sm font-medium text-red-500"
                      }
                    >
                      {Math.abs(trader.performance.daily).toFixed(2)}%
                    </span>
                  </div>
                  <div className="text-xs text-muted-foreground">Today</div>
                </div>
                <Button
                  variant={trader.isFollowing ? "outline" : "default"}
                  size="sm"
                  onClick={() => toggleFollow(trader.id)}
                >
                  {trader.isFollowing ? (
                    "Following"
                  ) : (
                    <>
                      <UserPlus className="mr-1 h-3 w-3" />
                      Follow
                    </>
                  )}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
