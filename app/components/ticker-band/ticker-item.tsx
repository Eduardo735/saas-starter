"use client"

// import type { TickerData } from "@/components/ticker-band"
import { Card } from "@/app/components/ui/card"
import { ArrowDown, ArrowUp, ExternalLink } from "lucide-react"
import { useEffect, useRef } from "react"
import { TickerData } from "./ticker-band"

interface TickerItemProps {
  data: TickerData
}

export default function TickerItem({ data }: TickerItemProps) {
  const { symbol, price, change, percentChange, sparklineData } = data
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const isPositive = percentChange >= 0

  useEffect(() => {
    if (canvasRef.current && sparklineData && sparklineData.length > 0) {
      const canvas = canvasRef.current
      const ctx = canvas.getContext("2d")

      if (ctx) {
        const width = canvas.width
        const height = canvas.height

        // Clear canvas
        ctx.clearRect(0, 0, width, height)

        // Find min and max for scaling
        const min = Math.min(...sparklineData)
        const max = Math.max(...sparklineData)
        const range = max - min || 1

        // Draw sparkline
        ctx.beginPath()
        ctx.strokeStyle = isPositive ? "#10b981" : "#ef4444"
        ctx.lineWidth = 1.5

        sparklineData.forEach((value, index) => {
          const x = (index / (sparklineData.length - 1)) * width
          const y = height - ((value - min) / range) * height

          if (index === 0) {
            ctx.moveTo(x, y)
          } else {
            ctx.lineTo(x, y)
          }
        })

        ctx.stroke()
      }
    }
  }, [sparklineData, isPositive])

  return (
    <Card className="flex-shrink-0 p-3 w-40 hover:bg-accent transition-colors cursor-pointer group">
      <div className="flex flex-col gap-1">
        <div className="flex justify-between items-center">
          <span className="font-medium text-sm">{symbol}</span>
          <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>

        <div className="flex justify-between items-end">
          <span className="text-lg font-bold">${price.toLocaleString()}</span>
          <div className={`flex items-center text-xs ${isPositive ? "text-green-500" : "text-red-500"}`}>
            {isPositive ? <ArrowUp className="w-3 h-3" /> : <ArrowDown className="w-3 h-3" />}
            <span>{Math.abs(percentChange).toFixed(2)}%</span>
          </div>
        </div>

        {sparklineData && <canvas ref={canvasRef} width={100} height={20} className="mt-1" />}
      </div>
    </Card>
  )
}
