export interface Trader {
  id: string
  name: string
  avatar: string
  bio: string
  winRate: number
  followers: number
  totalTrades: number
  isActive: boolean
}

export interface Operation {
  id: string
  trader: {
    id: string
    name: string
    avatar: string
  }
  timestamp: string
  market: string
  type: "BUY" | "SELL"
  asset: string
  amount: number
  status: "LIVE" | "COMPLETED" | "PENDING"
}
