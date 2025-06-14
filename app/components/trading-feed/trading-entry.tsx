"use client"

import { Clock, Copy, Heart, MessageCircle, MoreHorizontal, TrendingDown, TrendingUp, Verified } from "lucide-react"
import { useState } from "react"

import { Avatar, AvatarFallback, AvatarImage } from "@/app/components/ui/avatar"
import { Badge as BadgeComponent } from "@/app/components/ui/badge"
import { Button } from "@/app/components/ui/button"
import { Card, CardContent, CardHeader } from "@/app/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/app/components/ui/dropdown-menu"
import { Separator } from "@/app/components/ui/separator"
import type { TradeEntry } from "./trading-feed"

interface TradingEntryProps {
  trade: TradeEntry
}

export function TradingEntry({ trade }: TradingEntryProps) {
  const [isLiked, setIsLiked] = useState(trade.social.isLiked)
  const [isCopied, setIsCopied] = useState(trade.social.isCopied)
  const [likes, setLikes] = useState(trade.social.likes)
  const [copies, setCopies] = useState(trade.social.copies)

  const handleLike = () => {
    setIsLiked(!isLiked)
    setLikes((prev) => (isLiked ? prev - 1 : prev + 1))
  }

  const handleCopy = () => {
    setIsCopied(!isCopied)
    setCopies((prev) => (isCopied ? prev - 1 : prev + 1))
  }

  const getTradeTypeColor = (type: string) => {
    switch (type) {
      case "call":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
      case "put":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
      case "futures":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
      case "spot":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300"
      case "swing":
        return "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300"
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "open":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
      case "closed":
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300"
      case "partial":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300"
    }
  }

  const formatTimeAgo = (date: Date) => {
    const now = new Date()
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60))

    if (diffInHours < 1) {
      const diffInMinutes = Math.floor((now.getTime() - date.getTime()) / (1000 * 60))
      return `${diffInMinutes}m ago`
    } else if (diffInHours < 24) {
      return `${diffInHours}h ago`
    } else {
      const diffInDays = Math.floor(diffInHours / 24)
      return `${diffInDays}d ago`
    }
  }

  return (
    <Card className="w-full">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-3">
            <Avatar className="h-10 w-10">
              <AvatarImage src={trade.trader.avatar || "/placeholder.svg"} alt={trade.trader.name} />
              <AvatarFallback>{trade.trader.name.substring(0, 2)}</AvatarFallback>
            </Avatar>
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-semibold">{trade.trader.name}</span>
                {trade.trader.verified && <Verified className="h-4 w-4 text-blue-500" />}
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <span>@{trade.trader.username}</span>
                <span>•</span>
                <span>{trade.trader.followers.toLocaleString()} followers</span>
                <span>•</span>
                <span>{formatTimeAgo(trade.createdAt)}</span>
              </div>
            </div>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <MoreHorizontal className="h-4 w-4" />
                <span className="sr-only">More options</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>View trader profile</DropdownMenuItem>
              <DropdownMenuItem>Share trade</DropdownMenuItem>
              <DropdownMenuItem>Report</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Trade Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <BadgeComponent className={getTradeTypeColor(trade.tradeType)}>
              {trade.tradeType.toUpperCase()}
            </BadgeComponent>
            <span className="text-xl font-bold">{trade.asset}</span>
            <BadgeComponent variant="outline" className={getStatusColor(trade.status)}>
              {trade.status.toUpperCase()}
            </BadgeComponent>
          </div>
          <div className="text-right">
            <div className={`text-lg font-bold ${trade.pnl >= 0 ? "text-green-600" : "text-red-600"}`}>
              {trade.pnl >= 0 ? "+" : ""}${trade.pnl.toFixed(2)}
            </div>
            <div className={`text-sm ${trade.pnlPercentage >= 0 ? "text-green-600" : "text-red-600"}`}>
              {trade.pnlPercentage >= 0 ? "+" : ""}
              {trade.pnlPercentage.toFixed(2)}%
            </div>
          </div>
        </div>

        {/* Trade Details */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
          <div>
            <div className="text-muted-foreground">Entry Price</div>
            <div className="font-medium">${trade.entry.price.toFixed(2)}</div>
          </div>
          <div>
            <div className="text-muted-foreground">Current Price</div>
            <div className="font-medium flex items-center">
              ${trade.currentPrice.toFixed(2)}
              {trade.currentPrice > trade.entry.price ? (
                <TrendingUp className="ml-1 h-3 w-3 text-green-500" />
              ) : (
                <TrendingDown className="ml-1 h-3 w-3 text-red-500" />
              )}
            </div>
          </div>
          <div>
            <div className="text-muted-foreground">Quantity</div>
            <div className="font-medium">{trade.entry.quantity}</div>
          </div>
          {trade.timeframe && (
            <div>
              <div className="text-muted-foreground">Timeframe</div>
              <div className="font-medium">{trade.timeframe}</div>
            </div>
          )}
        </div>

        {/* Targets */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Stop Loss:</span>
            <span className="font-medium text-red-600">${trade.targets.stopLoss?.toFixed(2) || "N/A"}</span>
          </div>
          {trade.targets.takeProfit && (
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Take Profit:</span>
              <span className="font-medium text-green-600">
                ${trade.targets.takeProfit.map((tp) => tp.toFixed(2)).join(", $")}
              </span>
            </div>
          )}
          {trade.expiryDate && (
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Expiry:</span>
              <span className="font-medium flex items-center">
                <Clock className="mr-1 h-3 w-3" />
                {trade.expiryDate.toLocaleDateString()}
              </span>
            </div>
          )}
        </div>

        <Separator />

        {/* Description */}
        <div>
          <p className="text-sm">{trade.description}</p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {trade.tags.map((tag) => (
            <BadgeComponent key={tag} variant="secondary" className="text-xs">
              #{tag}
            </BadgeComponent>
          ))}
        </div>

        <Separator />

        {/* Social Actions */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" onClick={handleLike} className={isLiked ? "text-red-500" : ""}>
              <Heart className={`mr-2 h-4 w-4 ${isLiked ? "fill-current" : ""}`} />
              {likes}
            </Button>
            <Button variant="ghost" size="sm">
              <MessageCircle className="mr-2 h-4 w-4" />
              {trade.social.comments}
            </Button>
            <Button variant="ghost" size="sm" onClick={handleCopy} className={isCopied ? "text-blue-500" : ""}>
              <Copy className="mr-2 h-4 w-4" />
              {copies}
            </Button>
          </div>
          <Button size="sm" variant={isCopied ? "secondary" : "default"}>
            {isCopied ? "Copied" : "Copy Trade"}
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
