"use client"

import { TrendingUp, TrendingDown } from "lucide-react"
import { TickerData } from "./slim-ticker-band"
// import type { TickerData } from "@/components/slim-ticker-band"

interface SlimTickerItemProps {
    data: TickerData
}

export default function SlimTickerItem({ data }: SlimTickerItemProps) {
    const { symbol, price, percentChange } = data
    const isPositive = percentChange >= 0

    return (
        <div className="flex items-center space-x-6 px-6 h-full group cursor-pointer transition-all duration-300 hover:bg-accent/30">
            <div className="flex items-center space-x-3">
                {/* Symbol */}
                <span className="font-semibold text-sm text-foreground/90 group-hover:text-foreground transition-colors">
                    {symbol}
                </span>

                {/* Price */}
                <span className="font-mono text-sm text-foreground/80">
                    $
                    {price.toLocaleString(undefined, {
                        minimumFractionDigits: price < 1 ? 4 : 2,
                        maximumFractionDigits: price < 1 ? 4 : 2,
                    })}
                </span>

                {/* Change indicator */}
                <div className={`flex items-center space-x-1 ${isPositive ? "text-green-500" : "text-red-500"}`}>
                    {isPositive ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                    <span className="font-mono text-xs font-medium">
                        {isPositive ? "+" : ""}
                        {percentChange.toFixed(2)}%
                    </span>
                </div>
            </div>

            {/* Subtle separator */}
            <div className="w-px h-6 bg-border/30"></div>
        </div>
    )
}
