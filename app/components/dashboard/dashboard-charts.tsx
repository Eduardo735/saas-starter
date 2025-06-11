"use client"

import { useEffect, useRef } from "react"
// import { Chart, registerables } from "chart.js"

// Chart.register(...registerables)

export function DashboardCharts() {
  const chartRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!chartRef.current) return

    const ctx = chartRef.current.getContext("2d")
    if (!ctx) return

    // const chart = new Chart(ctx, {
    //   type: "bar",
    //   data: {
    //     labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    //     datasets: [
    //       {
    //         label: "Revenue",
    //         data: [18000, 22000, 19500, 24000, 28000, 32000],
    //         backgroundColor: "rgba(99, 102, 241, 0.5)",
    //         borderColor: "rgb(99, 102, 241)",
    //         borderWidth: 1,
    //         borderRadius: 4,
    //       },
    //       {
    //         label: "Users",
    //         data: [1200, 1500, 1800, 2100, 2400, 2700],
    //         backgroundColor: "rgba(14, 165, 233, 0.5)",
    //         borderColor: "rgb(14, 165, 233)",
    //         borderWidth: 1,
    //         borderRadius: 4,
    //       },
    //     ],
    //   },
    //   options: {
    //     responsive: true,
    //     maintainAspectRatio: false,
    //     scales: {
    //       y: {
    //         beginAtZero: true,
    //         grid: {
    //           display: true,
    //           color: "rgba(0, 0, 0, 0.05)",
    //         },
    //       },
    //       x: {
    //         grid: {
    //           display: false,
    //         },
    //       },
    //     },
    //     plugins: {
    //       legend: {
    //         position: "top",
    //         align: "end",
    //       },
    //     },
    //   },
    // })

    // return () => {
    //   chart.destroy()
    // }
  }, [])

  return (
    <div className="h-[300px] w-full">
      <canvas ref={chartRef} />
    </div>
  )
}
