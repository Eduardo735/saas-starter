"use client"

import { useState, useEffect } from "react"
import { TradingEntry } from "./trading-entry"

export type TradeType = "call" | "put" | "futures" | "spot" | "swing"

export type TradeEntry = {
  id: string
  trader: {
    name: string
    username: string
    avatar: string
    verified: boolean
    followers: number
  }
  tradeType: TradeType
  asset: string
  entry: {
    price: number
    quantity: number
    timestamp: Date
  }
  targets: {
    stopLoss?: number
    takeProfit?: number[]
  }
  currentPrice: number
  pnl: number
  pnlPercentage: number
  status: "open" | "closed" | "partial"
  timeframe?: string
  expiryDate?: Date
  description: string
  tags: string[]
  social: {
    likes: number
    comments: number
    copies: number
    isLiked: boolean
    isCopied: boolean
  }
  createdAt: Date
}

export function TradingFeed() {
  const [trades, setTrades] = useState<TradeEntry[]>([
    {
      id: "1",
      trader: {
        name: "Alex Thompson",
        username: "alextrader",
        avatar: "/placeholder.svg?height=40&width=40",
        verified: true,
        followers: 12453,
      },
      tradeType: "call",
      asset: "AAPL",
      entry: {
        price: 175.5,
        quantity: 10,
        timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 hours ago
      },
      targets: {
        stopLoss: 170.0,
        takeProfit: [180.0, 185.0],
      },
      currentPrice: 178.25,
      pnl: 275.0,
      pnlPercentage: 15.67,
      status: "open",
      timeframe: "1D",
      expiryDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days from now
      description:
        "Strong bullish momentum on AAPL. Breaking above resistance with high volume. Expecting continuation to $185.",
      tags: ["momentum", "breakout", "tech"],
      social: {
        likes: 45,
        comments: 12,
        copies: 23,
        isLiked: false,
        isCopied: false,
      },
      createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000),
    },
    {
      id: "2",
      trader: {
        name: "Sarah Chen",
        username: "sarahtrader",
        avatar: "/placeholder.svg?height=40&width=40",
        verified: true,
        followers: 8765,
      },
      tradeType: "put",
      asset: "SPY",
      entry: {
        price: 478.5,
        quantity: 5,
        timestamp: new Date(Date.now() - 4 * 60 * 60 * 1000), // 4 hours ago
      },
      targets: {
        stopLoss: 485.0,
        takeProfit: [470.0, 465.0],
      },
      currentPrice: 475.8,
      pnl: -135.0,
      pnlPercentage: -5.64,
      status: "open",
      timeframe: "2D",
      expiryDate: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000), // 14 days from now
      description: "Market showing signs of weakness. RSI overbought, expecting pullback to 470 level.",
      tags: ["bearish", "overbought", "spy"],
      social: {
        likes: 32,
        comments: 8,
        copies: 15,
        isLiked: true,
        isCopied: false,
      },
      createdAt: new Date(Date.now() - 4 * 60 * 60 * 1000),
    },
    {
      id: "3",
      trader: {
        name: "Michael Rodriguez",
        username: "miketrader",
        avatar: "/placeholder.svg?height=40&width=40",
        verified: false,
        followers: 5432,
      },
      tradeType: "futures",
      asset: "ES",
      entry: {
        price: 4785.25,
        quantity: 2,
        timestamp: new Date(Date.now() - 6 * 60 * 60 * 1000), // 6 hours ago
      },
      targets: {
        stopLoss: 4770.0,
        takeProfit: [4800.0, 4815.0],
      },
      currentPrice: 4792.5,
      pnl: 362.5,
      pnlPercentage: 7.58,
      status: "partial",
      timeframe: "4H",
      description: "ES futures looking strong above 4780. First target hit, letting runners go to 4815.",
      tags: ["futures", "es", "scalp"],
      social: {
        likes: 28,
        comments: 5,
        copies: 11,
        isLiked: false,
        isCopied: true,
      },
      createdAt: new Date(Date.now() - 6 * 60 * 60 * 1000),
    },
    {
      id: "4",
      trader: {
        name: "Emma Wilson",
        username: "emmatrader",
        avatar: "/placeholder.svg?height=40&width=40",
        verified: true,
        followers: 15678,
      },
      tradeType: "spot",
      asset: "BTC/USD",
      entry: {
        price: 63245.78,
        quantity: 0.5,
        timestamp: new Date(Date.now() - 8 * 60 * 60 * 1000), // 8 hours ago
      },
      targets: {
        stopLoss: 61000.0,
        takeProfit: [65000.0, 67000.0],
      },
      currentPrice: 64125.5,
      pnl: 439.86,
      pnlPercentage: 1.39,
      status: "open",
      description: "BTC breaking above key resistance. Expecting move to 65k-67k range. Strong institutional buying.",
      tags: ["crypto", "btc", "breakout"],
      social: {
        likes: 67,
        comments: 23,
        copies: 34,
        isLiked: true,
        isCopied: false,
      },
      createdAt: new Date(Date.now() - 8 * 60 * 60 * 1000),
    },
    {
      id: "5",
      trader: {
        name: "David Kim",
        username: "davidtrader",
        avatar: "/placeholder.svg?height=40&width=40",
        verified: false,
        followers: 3421,
      },
      tradeType: "swing",
      asset: "NVDA",
      entry: {
        price: 875.25,
        quantity: 25,
        timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000), // 1 day ago
      },
      targets: {
        stopLoss: 850.0,
        takeProfit: [920.0, 950.0],
      },
      currentPrice: 892.75,
      pnl: 437.5,
      pnlPercentage: 2.0,
      status: "open",
      timeframe: "1W",
      description: "NVDA setting up for another leg higher. AI momentum continues, targeting 920-950 zone.",
      tags: ["ai", "nvda", "swing"],
      social: {
        likes: 41,
        comments: 15,
        copies: 19,
        isLiked: false,
        isCopied: false,
      },
      createdAt: new Date(Date.now() - 24 * 60 * 60 * 1000),
    },
  ])

  // Simulate real-time price updates
  useEffect(() => {
    const interval = setInterval(() => {
      setTrades((prevTrades) =>
        prevTrades.map((trade) => {
          // Random price fluctuation between -0.5% and +0.5%
          const fluctuation = (Math.random() - 0.5) * 0.01
          const newPrice = trade.currentPrice * (1 + fluctuation)

          // Calculate new P&L
          const priceDiff = newPrice - trade.entry.price
          const newPnl = priceDiff * trade.entry.quantity
          const newPnlPercentage = (priceDiff / trade.entry.price) * 100

          return {
            ...trade,
            currentPrice: newPrice,
            pnl: newPnl,
            pnlPercentage: newPnlPercentage,
          }
        }),
      )
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Trading Feed</h2>
        <div className="text-sm text-muted-foreground">Live updates • {trades.length} active trades</div>
      </div>

      <div className="space-y-4">
        {trades.map((trade) => (
          <TradingEntry key={trade.id} trade={trade} />
        ))}
      </div>
    </div>
  )
}
