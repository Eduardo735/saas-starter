"use client"

import { useEffect, useState } from "react"
// import SlimTickerItem from "@/components/slim-ticker-item"
// import { fetchMarketData } from "@/lib/trading-view-api"
import SlimTickerItem from "./slim-ticket-item"
import { fetchMarketData } from "@/app/lib/api/trading-view-api"

export type TickerData = {
    symbol: string
    price: number
    change: number
    percentChange: number
}

export default function SlimTickerBand() {
    const [tickerData, setTickerData] = useState<TickerData[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const loadData = async () => {
            try {
                // console.log('data :>> ');
                const data = await fetchMarketData()
                // console.log('data :>> ', data);
                setTickerData([...data, ...data]) // Duplicate for seamless loop
            } catch (error) {
                console.error("Failed to fetch market data:", error)
            } finally {
                setLoading(false)
            }
        }

        loadData()
        const intervalId = setInterval(loadData, 30000)
        return () => clearInterval(intervalId)
    }, [])

    if (loading) {
        return (
            <div className="w-full h-16 bg-gradient-to-r from-muted/50 via-muted/30 to-muted/50 border-y border-border/50">
                <div className="flex items-center h-full">
                    <div className="animate-pulse flex space-x-8 px-4">
                        {Array.from({ length: 8 }).map((_, i) => (
                            <div key={i} className="flex items-center space-x-2">
                                <div className="h-3 w-12 bg-muted-foreground/20 rounded"></div>
                                <div className="h-3 w-16 bg-muted-foreground/20 rounded"></div>
                                <div className="h-3 w-8 bg-muted-foreground/20 rounded"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="w-full h-16 bg-gradient-to-r from-muted/50 via-muted/30 to-muted/50 border-y border-border/50 overflow-hidden relative">
            {/* Gradient overlays for fade effect */}
            <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-background to-transparent z-10"></div>
            <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-background to-transparent z-10"></div>

            <div className="ticker-wrapper h-full">
                <div className="ticker-content flex items-center h-full">
                    {tickerData.map((item, index) => (
                        <SlimTickerItem key={`${item.symbol}-${index}`} data={item} />
                    ))}
                </div>
            </div>

            <style jsx>{`
        .ticker-wrapper {
          overflow: hidden;
        }
        
        .ticker-content {
          animation: scroll-left 120s linear infinite;
          white-space: nowrap;
        }
        
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .ticker-wrapper:hover .ticker-content {
          animation-play-state: paused;
        }
      `}</style>
        </div>
    )
}
