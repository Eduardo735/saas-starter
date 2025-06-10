"use client"

import { useState } from "react"
import { ArrowUpDown, MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import type { Operation } from "@/lib/types"

interface LiveTradesTableProps {
  operations: Operation[]
}

export function LiveTradesTable({ operations }: LiveTradesTableProps) {
  const [sortBy, setSortBy] = useState<string | null>(null)
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc")

  const handleSort = (column: string) => {
    if (sortBy === column) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc")
    } else {
      setSortBy(column)
      setSortOrder("desc")
    }
  }

  const sortedOperations = [...operations].sort((a, b) => {
    if (!sortBy) return 0

    if (sortBy === "timestamp") {
      return sortOrder === "asc"
        ? new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime()
        : new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
    }

    if (sortBy === "amount") {
      return sortOrder === "asc" ? a.amount - b.amount : b.amount - a.amount
    }

    return 0
  })

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Trader</TableHead>
            <TableHead>
              <div className="flex items-center space-x-1">
                <span>Time</span>
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0" onClick={() => handleSort("timestamp")}>
                  <ArrowUpDown className="h-4 w-4" />
                </Button>
              </div>
            </TableHead>
            <TableHead>Market</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Asset</TableHead>
            <TableHead>
              <div className="flex items-center space-x-1">
                <span>Amount</span>
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0" onClick={() => handleSort("amount")}>
                  <ArrowUpDown className="h-4 w-4" />
                </Button>
              </div>
            </TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sortedOperations.map((operation) => (
            <TableRow key={operation.id}>
              <TableCell>
                <div className="flex items-center space-x-2">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={operation.trader.avatar || "/placeholder.svg"} alt={operation.trader.name} />
                    <AvatarFallback>{operation.trader.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <span className="font-medium">{operation.trader.name}</span>
                </div>
              </TableCell>
              <TableCell>{new Date(operation.timestamp).toLocaleTimeString()}</TableCell>
              <TableCell>
                <Badge variant="outline">{operation.market}</Badge>
              </TableCell>
              <TableCell>
                <Badge variant={operation.type === "BUY" ? "default" : "destructive"}>{operation.type}</Badge>
              </TableCell>
              <TableCell>{operation.asset}</TableCell>
              <TableCell>${operation.amount.toLocaleString()}</TableCell>
              <TableCell>
                <Badge
                  variant={
                    operation.status === "LIVE" ? "default" : operation.status === "COMPLETED" ? "success" : "secondary"
                  }
                >
                  {operation.status}
                </Badge>
              </TableCell>
              <TableCell className="text-right">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>Copy Trade</DropdownMenuItem>
                    <DropdownMenuItem>View Details</DropdownMenuItem>
                    <DropdownMenuItem>Add to Watchlist</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
