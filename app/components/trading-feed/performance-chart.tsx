"use client"

import { Calendar, ChevronDown } from "lucide-react"
import { useState } from "react"

import { Button } from "@/app/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/app/components/ui/dropdown-menu"

export function PerformanceChart() {
  const [timeframe, setTimeframe] = useState("1M")

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Performance</CardTitle>
          <CardDescription>Your portfolio performance over time</CardDescription>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm" className="h-8">
            <Calendar className="mr-2 h-3 w-3" />
            <span>Apr 1 - Apr 30</span>
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="h-8">
                {timeframe}
                <ChevronDown className="ml-2 h-3 w-3" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTimeframe("1W")}>1W</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTimeframe("1M")}>1M</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTimeframe("3M")}>3M</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTimeframe("1Y")}>1Y</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTimeframe("ALL")}>ALL</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-[300px] w-full rounded-md bg-gradient-to-r from-primary/10 via-primary/5 to-transparent relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-sm text-muted-foreground">Performance chart visualization</span>
          </div>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <div className="rounded-lg border p-3">
            <div className="text-xs font-medium text-muted-foreground">Starting</div>
            <div className="mt-1 text-sm font-medium">$18,245.32</div>
          </div>
          <div className="rounded-lg border p-3">
            <div className="text-xs font-medium text-muted-foreground">Ending</div>
            <div className="mt-1 text-sm font-medium">$24,563.78</div>
          </div>
          <div className="rounded-lg border p-3">
            <div className="text-xs font-medium text-muted-foreground">Return</div>
            <div className="mt-1 text-sm font-medium text-green-500">+34.63%</div>
          </div>
          <div className="rounded-lg border p-3">
            <div className="text-xs font-medium text-muted-foreground">vs. S&P 500</div>
            <div className="mt-1 text-sm font-medium text-green-500">+12.87%</div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
