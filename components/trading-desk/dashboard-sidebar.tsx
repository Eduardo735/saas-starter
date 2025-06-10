"use client"

import { useState } from "react"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { topTraders } from "@/lib/data"

interface DashboardSidebarProps {
    onTraderSelect: (traderId: string | null) => void
    selectedTrader: string | null
}

export function DashboardSidebar({ onTraderSelect, selectedTrader }: DashboardSidebarProps) {
    const [searchQuery, setSearchQuery] = useState("")

    const filteredTraders = topTraders.filter((trader) => trader.name.toLowerCase().includes(searchQuery.toLowerCase()))

    return (
        <div className="hidden border-r bg-muted/40 md:block md:w-72 lg:w-80">
            <div className="flex h-full flex-col">
                <div className="border-b p-4">
                    <div className="relative">
                        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input
                            type="search"
                            placeholder="Search traders..."
                            className="w-full appearance-none bg-background pl-8"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                </div>
                <ScrollArea className="flex-1 p-4">
                    <div className="space-y-2">
                        <Button
                            variant={selectedTrader === null ? "secondary" : "ghost"}
                            className="w-full justify-start"
                            onClick={() => onTraderSelect(null)}
                        >
                            All Traders
                        </Button>
                        <div className="pt-2">
                            <h4 className="mb-2 px-2 text-sm font-semibold">Top Traders</h4>
                            {filteredTraders.map((trader) => (
                                <Button
                                    key={trader.id}
                                    variant={selectedTrader === trader.id ? "secondary" : "ghost"}
                                    className="w-full justify-start"
                                    onClick={() => onTraderSelect(trader.id)}
                                >
                                    <Avatar className="mr-2 h-6 w-6">
                                        <AvatarImage src={trader.avatar || "/placeholder.svg"} alt={trader.name} />
                                        <AvatarFallback>{trader.name.charAt(0)}</AvatarFallback>
                                    </Avatar>
                                    <div className="flex flex-1 items-center justify-between">
                                        <span>{trader.name}</span>
                                        <Badge variant="outline" className="ml-2">
                                            {trader.winRate}%
                                        </Badge>
                                    </div>
                                </Button>
                            ))}
                        </div>
                    </div>
                </ScrollArea>
                <div className="border-t p-4">
                    <div className="flex items-center justify-between">
                        <div className="text-sm text-muted-foreground">
                            <p>Active Traders: {topTraders.filter((t) => t.isActive).length}</p>
                        </div>
                        <Button variant="outline" size="sm">
                            Settings
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
