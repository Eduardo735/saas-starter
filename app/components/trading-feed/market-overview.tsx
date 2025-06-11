"use client"

import { useState, useEffect } from "react"
import { ArrowDown, ArrowUp, RefreshCw } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/components/ui/card"
import { Button } from "@/app/components/ui/button"

type MarketAsset = {
  symbol: string
  name: string
  price: number
  change: number
}

export function MarketOverview() {
  const [assets, setAssets] = useState<MarketAsset[]>([
    { symbol: "SPY", name: "S&P 500 ETF", price: 478.32, change: 0.87 },
    { symbol: "QQQ", name: "Nasdaq ETF", price: 432.56, change: 1.23 },
    { symbol: "BTC", name: "Bitcoin", price: 63245.78, change: -2.34 },
    { symbol: "ETH", name: "Ethereum", price: 3456.89, change: -1.45 },
    { symbol: "EUR/USD", name: "Euro/USD", price: 1.0845, change: 0.32 },
  ])

  const [lastUpdated, setLastUpdated] = useState<Date>(new Date())
  const [isRefreshing, setIsRefreshing] = useState(false)

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      updatePrices()
    }, 15000)

    return () => clearInterval(interval)
  }, [])

  const updatePrices = () => {
    setIsRefreshing(true)

    // Simulate API call delay
    setTimeout(() => {
      setAssets((prevAssets) =>
        prevAssets.map((asset) => {
          // Random fluctuation between -1% and +1%
          const priceFluctuation = (Math.random() - 0.5) * 0.02
          const newPrice = asset.price * (1 + priceFluctuation)

          // Update change percentage
          const newChange = asset.change + priceFluctuation * 100

          return {
            ...asset,
            price: newPrice,
            change: newChange,
          }
        }),
      )

      setLastUpdated(new Date())
      setIsRefreshing(false)
    }, 1000)
  }

  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Market Overview</CardTitle>
            <CardDescription>Real-time market data</CardDescription>
          </div>
          <Button variant="outline" size="icon" onClick={updatePrices} disabled={isRefreshing}>
            <RefreshCw className={`h-4 w-4 ${isRefreshing ? "animate-spin" : ""}`} />
            <span className="sr-only">Refresh</span>
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="text-xs text-muted-foreground">Last updated: {lastUpdated.toLocaleTimeString()}</div>
          <div className="space-y-2">
            {assets.map((asset) => (
              <div key={asset.symbol} className="flex items-center justify-between">
                <div>
                  <div className="font-medium">{asset.symbol}</div>
                  <div className="text-xs text-muted-foreground">{asset.name}</div>
                </div>
                <div className="text-right">
                  <div className="font-medium">
                    {asset.symbol.includes("/")
                      ? asset.price.toFixed(4)
                      : asset.price >= 1000
                        ? `$${asset.price.toLocaleString(undefined, { maximumFractionDigits: 2 })}`
                        : `$${asset.price.toFixed(2)}`}
                  </div>
                  <div className="flex items-center justify-end">
                    {asset.change >= 0 ? (
                      <ArrowUp className="mr-1 h-3 w-3 text-green-500" />
                    ) : (
                      <ArrowDown className="mr-1 h-3 w-3 text-red-500" />
                    )}
                    <span
                      className={
                        asset.change >= 0 ? "text-xs font-medium text-green-500" : "text-xs font-medium text-red-500"
                      }
                    >
                      {Math.abs(asset.change).toFixed(2)}%
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
