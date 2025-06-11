"use client"

import { useState } from "react"
import { Filter, SlidersHorizontal } from "lucide-react"

import { Button } from "@/app/components/ui/button"
import { Card, CardContent } from "@/app/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/app/components/ui/dropdown-menu"
import { Tabs, TabsList, TabsTrigger } from "@/app/components/ui/tabs"

export function TradingFilters() {
  const [activeTab, setActiveTab] = useState("all")
  const [filters, setFilters] = useState({
    tradeTypes: {
      calls: true,
      puts: true,
      futures: true,
      spot: true,
      swing: true,
    },
    status: {
      open: true,
      closed: true,
      partial: true,
    },
    timeframe: {
      "1D": true,
      "1W": true,
      "1M": true,
    },
  })

  // console.log('filters :>> ', filters);

  return (
    <Card>
      <CardContent className="p-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full sm:w-auto">
            <TabsList className="grid w-full grid-cols-6 sm:w-auto">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="calls">Calls</TabsTrigger>
              <TabsTrigger value="puts">Puts</TabsTrigger>
              <TabsTrigger value="futures">Futures</TabsTrigger>
              <TabsTrigger value="spot">Spot</TabsTrigger>
              <TabsTrigger value="swing">Swing</TabsTrigger>
            </TabsList>
          </Tabs>

          <div className="flex items-center space-x-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm">
                  <Filter className="mr-2 h-4 w-4" />
                  Filters
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>Trade Types</DropdownMenuLabel>
                <DropdownMenuCheckboxItem
                  checked={filters.tradeTypes.calls}
                  onCheckedChange={(checked) =>
                    setFilters((prev) => ({
                      ...prev,
                      tradeTypes: { ...prev.tradeTypes, calls: checked },
                    }))
                  }
                >
                  Calls
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem
                  checked={filters.tradeTypes.puts}
                  onCheckedChange={(checked) =>
                    setFilters((prev) => ({
                      ...prev,
                      tradeTypes: { ...prev.tradeTypes, puts: checked },
                    }))
                  }
                >
                  Puts
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem
                  checked={filters.tradeTypes.futures}
                  onCheckedChange={(checked) =>
                    setFilters((prev) => ({
                      ...prev,
                      tradeTypes: { ...prev.tradeTypes, futures: checked },
                    }))
                  }
                >
                  Futures
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem
                  checked={filters.tradeTypes.spot}
                  onCheckedChange={(checked) =>
                    setFilters((prev) => ({
                      ...prev,
                      tradeTypes: { ...prev.tradeTypes, spot: checked },
                    }))
                  }
                >
                  Spot
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem
                  checked={filters.tradeTypes.swing}
                  onCheckedChange={(checked) =>
                    setFilters((prev) => ({
                      ...prev,
                      tradeTypes: { ...prev.tradeTypes, swing: checked },
                    }))
                  }
                >
                  Swing
                </DropdownMenuCheckboxItem>

                <DropdownMenuSeparator />
                <DropdownMenuLabel>Status</DropdownMenuLabel>
                <DropdownMenuCheckboxItem
                  checked={filters.status.open}
                  onCheckedChange={(checked) =>
                    setFilters((prev) => ({
                      ...prev,
                      status: { ...prev.status, open: checked },
                    }))
                  }
                >
                  Open
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem
                  checked={filters.status.closed}
                  onCheckedChange={(checked) =>
                    setFilters((prev) => ({
                      ...prev,
                      status: { ...prev.status, closed: checked },
                    }))
                  }
                >
                  Closed
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem
                  checked={filters.status.partial}
                  onCheckedChange={(checked) =>
                    setFilters((prev) => ({
                      ...prev,
                      status: { ...prev.status, partial: checked },
                    }))
                  }
                >
                  Partial
                </DropdownMenuCheckboxItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button variant="outline" size="sm">
              <SlidersHorizontal className="mr-2 h-4 w-4" />
              Sort
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
