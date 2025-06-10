import { NextResponse } from "next/server"
// import { fetchMarketData } from "@/lib/trading-view-api"

export async function GET() {
  try {
    // const data = await fetchMarketData()
    return NextResponse.json({})
  } catch (error) {
    console.error("Error fetching market data:", error)
    return NextResponse.json({ error: "Failed to fetch market data" }, { status: 500 })
  }
}
