"use client"

import { ArrowDown, ArrowUp, Clock, Filter } from "lucide-react"
import { useState } from "react"

import { Avatar, AvatarFallback, AvatarImage } from "@/app/components/ui/avatar"
import { Button } from "@/app/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/app/components/ui/dropdown-menu"

type Activity = {
  id: string
  type: "buy" | "sell" | "follow" | "unfollow" | "deposit" | "withdraw"
  user: {
    name: string
    avatar: string
  }
  details: string
  asset?: string
  amount?: number
  time: string
}

export function RecentActivity() {
  const [activities] = useState<Activity[]>([
    {
      id: "1",
      type: "buy",
      user: {
        name: "You",
        avatar: "/placeholder.svg?height=32&width=32",
      },
      details: "Purchased AAPL",
      asset: "AAPL",
      amount: 5,
      time: "2 minutes ago",
    },
    {
      id: "2",
      type: "follow",
      user: {
        name: "You",
        avatar: "/placeholder.svg?height=32&width=32",
      },
      details: "Started following Sarah Chen",
      time: "15 minutes ago",
    },
    {
      id: "3",
      type: "sell",
      user: {
        name: "Alex Thompson",
        avatar: "/placeholder.svg?height=32&width=32",
      },
      details: "Sold BTC",
      asset: "BTC",
      amount: 0.25,
      time: "32 minutes ago",
    },
    {
      id: "4",
      type: "buy",
      user: {
        name: "Sarah Chen",
        avatar: "/placeholder.svg?height=32&width=32",
      },
      details: "Purchased TSLA",
      asset: "TSLA",
      amount: 10,
      time: "1 hour ago",
    },
    {
      id: "5",
      type: "deposit",
      user: {
        name: "You",
        avatar: "/placeholder.svg?height=32&width=32",
      },
      details: "Deposited funds",
      amount: 1000,
      time: "3 hours ago",
    },
  ])

  const getActivityIcon = (type: Activity["type"]) => {
    switch (type) {
      case "buy":
        return <ArrowUp className="h-4 w-4 text-green-500" />
      case "sell":
        return <ArrowDown className="h-4 w-4 text-red-500" />
      case "follow":
      case "unfollow":
        return (
          <Avatar className="h-4 w-4">
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
        )
      case "deposit":
        return <ArrowDown className="h-4 w-4 text-green-500" />
      case "withdraw":
        return <ArrowUp className="h-4 w-4 text-red-500" />
      default:
        return <Clock className="h-4 w-4" />
    }
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Recent Activity</CardTitle>
          <CardDescription>Latest activities from you and traders you follow</CardDescription>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm" className="h-8">
              <Filter className="mr-2 h-3 w-3" />
              Filter
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuCheckboxItem checked>Show my activity</DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem checked>Show followed traders</DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem checked>Trades</DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem checked>Follows</DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem checked>Deposits/Withdrawals</DropdownMenuCheckboxItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => (
            <div key={activity.id} className="flex items-start space-x-4">
              <div className="mt-1 rounded-full bg-muted p-1">{getActivityIcon(activity.type)}</div>
              <div className="flex-1 space-y-1">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Avatar className="h-6 w-6">
                      <AvatarImage src={activity.user.avatar || "/placeholder.svg"} alt={activity.user.name} />
                      <AvatarFallback>{activity.user.name.substring(0, 2)}</AvatarFallback>
                    </Avatar>
                    <span className="font-medium">{activity.user.name}</span>
                  </div>
                  <span className="text-xs text-muted-foreground">{activity.time}</span>
                </div>
                <p className="text-sm">
                  {activity.details}
                  {activity.asset && activity.amount && (
                    <span className="font-medium">
                      {" "}
                      ({activity.amount} {activity.asset})
                    </span>
                  )}
                  {!activity.asset && activity.amount && (
                    <span className="font-medium"> (${activity.amount.toLocaleString()})</span>
                  )}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
