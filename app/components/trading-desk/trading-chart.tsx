"use client"

import { useEffect, useRef } from "react"
import { Card } from "@/app/components/ui/card"

export function TradingChart() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const setDimensions = () => {
      const parent = canvas.parentElement
      if (!parent) return

      canvas.width = parent.clientWidth
      canvas.height = 300
    }

    setDimensions()
    window.addEventListener("resize", setDimensions)

    // Generate random data for the chart
    const generateData = () => {
      const dataPoints = 30
      const data = []
      let value = 10000

      for (let i = 0; i < dataPoints; i++) {
        // Random walk with slight upward bias
        const change = (Math.random() - 0.45) * 500
        value += change
        value = Math.max(value, 8000) // Ensure value doesn't go too low
        data.push(value)
      }

      return data
    }

    const data = generateData()

    // Draw the chart
    const drawChart = () => {
      if (!ctx) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const maxValue = Math.max(...data) * 1.1
      const minValue = Math.min(...data) * 0.9
      const range = maxValue - minValue

      const xStep = canvas.width / (data.length - 1)
      const yScale = canvas.height / range

      // Draw grid lines
      ctx.strokeStyle = "#e5e7eb"
      ctx.lineWidth = 1

      // Horizontal grid lines
      for (let i = 0; i <= 5; i++) {
        const y = canvas.height - (i / 5) * canvas.height
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(canvas.width, y)
        ctx.stroke()
      }

      // Draw the line
      ctx.beginPath()
      ctx.moveTo(0, canvas.height - (data[0] - minValue) * yScale)

      for (let i = 1; i < data.length; i++) {
        const x = i * xStep
        const y = canvas.height - (data[i] - minValue) * yScale
        ctx.lineTo(x, y)
      }

      ctx.strokeStyle = "#3b82f6"
      ctx.lineWidth = 2
      ctx.stroke()

      // Fill area under the line
      ctx.lineTo(canvas.width, canvas.height)
      ctx.lineTo(0, canvas.height)
      ctx.closePath()
      ctx.fillStyle = "rgba(59, 130, 246, 0.1)"
      ctx.fill()

      // Draw value labels
      ctx.fillStyle = "#6b7280"
      ctx.font = "12px sans-serif"
      ctx.textAlign = "right"

      for (let i = 0; i <= 5; i++) {
        const value = minValue + (i / 5) * range
        const y = canvas.height - (i / 5) * canvas.height
        ctx.fillText(`$${Math.round(value).toLocaleString()}`, canvas.width - 10, y - 5)
      }
    }

    drawChart()

    return () => {
      window.removeEventListener("resize", setDimensions)
    }
  }, [])

  return (
    <Card className="p-4">
      <canvas ref={canvasRef} className="w-full h-[300px]" aria-label="Trading performance chart"></canvas>
    </Card>
  )
}
