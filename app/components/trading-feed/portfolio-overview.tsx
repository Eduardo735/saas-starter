"use client"

import { ArrowDown, ArrowUp, DollarSign } from "lucide-react"
import { useState, useEffect } from "react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/app/components/ui/tabs"

export function PortfolioOverview() {
  const [portfolioValue, setPortfolioValue] = useState(24563.78)
  const [change, setChange] = useState(2.34)

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      // Random fluctuation between -0.5% and +0.5%
      const fluctuation = (Math.random() - 0.5) * 0.01
      const newValue = portfolioValue * (1 + fluctuation)
      setPortfolioValue(newValue)

      // Update change percentage
      const newChange = change + fluctuation * 100
      setChange(newChange)
    }, 5000)

    return () => clearInterval(interval)
  }, [portfolioValue, change])

  return (
    <Card className="col-span-2">
      <CardHeader>
        <CardTitle>Portfolio Overview</CardTitle>
        <CardDescription>Your real-time portfolio performance</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="total" className="space-y-4">
          <TabsList>
            <TabsTrigger value="total">Total</TabsTrigger>
            <TabsTrigger value="stocks">Stocks</TabsTrigger>
            <TabsTrigger value="crypto">Crypto</TabsTrigger>
            <TabsTrigger value="forex">Forex</TabsTrigger>
          </TabsList>
          <TabsContent value="total" className="space-y-4">
            <div className="flex flex-col space-y-3">
              <div className="flex items-end justify-between">
                <div className="flex flex-col">
                  <span className="text-2xl font-bold">${portfolioValue.toFixed(2)}</span>
                  <div className="flex items-center">
                    {change >= 0 ? (
                      <ArrowUp className="mr-1 h-4 w-4 text-green-500" />
                    ) : (
                      <ArrowDown className="mr-1 h-4 w-4 text-red-500" />
                    )}
                    <span className={change >= 0 ? "text-green-500" : "text-red-500"}>
                      {Math.abs(change).toFixed(2)}% today
                    </span>
                  </div>
                </div>
                <div className="flex items-center rounded-md bg-muted p-2">
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                  <span className="ml-1 text-xs font-medium">USD</span>
                </div>
              </div>
              <div className="h-[120px] w-full bg-gradient-to-r from-primary/20 to-primary/5 rounded-md relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-sm text-muted-foreground">Portfolio chart visualization</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="rounded-lg border p-3">
                <div className="text-xs font-medium text-muted-foreground">Daily Gain/Loss</div>
                <div className="mt-1 flex items-center">
                  {change >= 0 ? (
                    <ArrowUp className="mr-1 h-4 w-4 text-green-500" />
                  ) : (
                    <ArrowDown className="mr-1 h-4 w-4 text-red-500" />
                  )}
                  <span className={`text-sm font-medium ${change >= 0 ? "text-green-500" : "text-red-500"}`}>
                    ${((portfolioValue * change) / 100).toFixed(2)}
                  </span>
                </div>
              </div>
              <div className="rounded-lg border p-3">
                <div className="text-xs font-medium text-muted-foreground">Monthly Return</div>
                <div className="mt-1 flex items-center">
                  <ArrowUp className="mr-1 h-4 w-4 text-green-500" />
                  <span className="text-sm font-medium text-green-500">8.32%</span>
                </div>
              </div>
              <div className="rounded-lg border p-3">
                <div className="text-xs font-medium text-muted-foreground">YTD Return</div>
                <div className="mt-1 flex items-center">
                  <ArrowUp className="mr-1 h-4 w-4 text-green-500" />
                  <span className="text-sm font-medium text-green-500">21.45%</span>
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="stocks" className="space-y-4">
            <div className="flex items-center">
              <span className="text-2xl font-bold">$16,842.50</span>
              <div className="ml-3 flex items-center">
                <ArrowUp className="mr-1 h-4 w-4 text-green-500" />
                <span className="text-green-500">1.87% today</span>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="crypto" className="space-y-4">
            <div className="flex items-center">
              <span className="text-2xl font-bold">$5,721.28</span>
              <div className="ml-3 flex items-center">
                <ArrowUp className="mr-1 h-4 w-4 text-green-500" />
                <span className="text-green-500">3.42% today</span>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="forex" className="space-y-4">
            <div className="flex items-center">
              <span className="text-2xl font-bold">$2,000.00</span>
              <div className="ml-3 flex items-center">
                <ArrowDown className="mr-1 h-4 w-4 text-red-500" />
                <span className="text-red-500">0.32% today</span>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
