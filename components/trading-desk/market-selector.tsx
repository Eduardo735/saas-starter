"use client"

import { Check, ChevronsUpDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { cn } from "@/lib/utils"
import { useState } from "react"

const markets = [
  { value: "all", label: "All Markets" },
  { value: "crypto", label: "Cryptocurrency" },
  { value: "forex", label: "Forex" },
  { value: "options", label: "Options" },
  { value: "stocks", label: "Stocks" },
  { value: "futures", label: "Futures" },
]

interface MarketSelectorProps {
  selectedMarket: string
  onMarketChange: (market: string) => void
}

export function MarketSelector({ selectedMarket, onMarketChange }: MarketSelectorProps) {
  const [open, setOpen] = useState(false)

  const selectedMarketLabel = markets.find((market) => market.value === selectedMarket)?.label || "Select Market"

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline" role="combobox" aria-expanded={open} className="w-[180px] justify-between">
          {selectedMarketLabel}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[180px] p-0">
        <Command>
          <CommandInput placeholder="Search market..." />
          <CommandList>
            <CommandEmpty>No market found.</CommandEmpty>
            <CommandGroup>
              {markets.map((market) => (
                <CommandItem
                  key={market.value}
                  value={market.value}
                  onSelect={(currentValue) => {
                    onMarketChange(currentValue)
                    setOpen(false)
                  }}
                >
                  <Check
                    className={cn("mr-2 h-4 w-4", selectedMarket === market.value ? "opacity-100" : "opacity-0")}
                  />
                  {market.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
