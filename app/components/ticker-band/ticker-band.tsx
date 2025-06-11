"use client"

import { useEffect, useState } from "react"
// import TickerItem from "@/components/ticker-item"
// import { fetchMarketData } from "@/lib/trading-view-api"
import { Skeleton } from "@/app/components/ui/skeleton"
import { fetchMarketData } from "@/app/lib/trading-view.api"
import TickerItem from "./ticker-item"

export type TickerData = {
  symbol: string
  price: number
  change: number
  percentChange: number
  sparklineData?: number[]
}

export default function TickerBand() {
  const [tickerData, setTickerData] = useState<TickerData[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchMarketData()
        setTickerData(data)
      } catch (error) {
        console.error("Failed to fetch market data:", error)
      } finally {
        setLoading(false)
      }
    }

    loadData()

    // Set up polling for real-time updates
    const intervalId = setInterval(loadData, 30000) // Update every 30 seconds

    return () => clearInterval(intervalId)
  }, [])

  if (loading) {
    return (
      <div className="w-full overflow-hidden bg-card border rounded-lg p-2">
        <div className="flex gap-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <Skeleton key={i} className="h-16 w-40" />
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="w-full overflow-hidden bg-card border rounded-lg p-2">
      <div className="ticker-container">
        <div className="ticker-scroll flex gap-4 border">
          {tickerData.map((item) => (
            <TickerItem key={item.symbol} data={item} />
          ))}
        </div>
      </div>

      <style jsx>{`
        .ticker-container {
          overflow-x: auto;
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        
        .ticker-container::-webkit-scrollbar {
          display: none;
        }
        
        .ticker-scroll {
          animation: ticker 60s linear infinite;
          white-space: nowrap;
        }
        
        @keyframes ticker {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        @media (hover: hover) {
          .ticker-container:hover .ticker-scroll {
            animation-play-state: paused;
          }
        }
      `}</style>
    </div>
  )
}
