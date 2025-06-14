export interface TradingSetup {
    ticker: string
    companyName: string
    direction: "LONG" | "SHORT"
    entry: number
    stopLoss: number
    breakEven?: {
        price: number
        instruction: string
    }
    targets: number[]
    riskManagement: {
        maxRisk: string
        positionSize: string
    }
    optionsSetup?: {
        type: "CALL" | "PUT"
        expiration: string
        strike: number
        riskPerContract: number
        potentialMin: number
        potentialMax: number
        notes?: string
    }
}
