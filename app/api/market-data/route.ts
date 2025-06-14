import { NextResponse } from "next/server"

export async function GET() {
  try {
    return NextResponse.json({})
  } catch (error) {
    console.error("Error fetching market data:", error)
    return NextResponse.json({ error: "Failed to fetch market data" }, { status: 500 })
  }
}
