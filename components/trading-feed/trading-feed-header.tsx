"use client"

import { Bell, Menu, Plus, Search, TrendingUp, User } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function TradingFeedHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center px-4">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="mr-2 md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="pr-0">
            <nav className="flex flex-col space-y-4">
              <Link href="/" className="flex items-center space-x-2">
                <TrendingUp className="h-6 w-6" />
                <span className="font-bold">TradeFeed</span>
              </Link>
              <div className="space-y-2">
                <Link href="/feed" className="block px-2 py-1 text-sm">
                  Feed
                </Link>
                <Link href="/portfolio" className="block px-2 py-1 text-sm">
                  Portfolio
                </Link>
                <Link href="/traders" className="block px-2 py-1 text-sm">
                  Traders
                </Link>
                <Link href="/analytics" className="block px-2 py-1 text-sm">
                  Analytics
                </Link>
              </div>
            </nav>
          </SheetContent>
        </Sheet>

        <Link href="/" className="mr-6 flex items-center space-x-2">
          <TrendingUp className="h-6 w-6" />
          <span className="font-bold hidden sm:inline-block">TradeFeed</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <Link href="/feed" className="transition-colors hover:text-foreground/80">
            Feed
          </Link>
          <Link href="/portfolio" className="transition-colors hover:text-foreground/80">
            Portfolio
          </Link>
          <Link href="/traders" className="transition-colors hover:text-foreground/80">
            Traders
          </Link>
          <Link href="/analytics" className="transition-colors hover:text-foreground/80">
            Analytics
          </Link>
        </nav>

        <div className="ml-auto flex items-center space-x-2">
          <div className="relative hidden md:flex">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Search trades, traders..." className="w-[200px] pl-8 md:w-[300px]" />
          </div>

          <Button size="sm" className="hidden sm:flex">
            <Plus className="mr-2 h-4 w-4" />
            New Trade
          </Button>

          <Button variant="outline" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <span className="absolute right-1 top-1 flex h-2 w-2 rounded-full bg-red-600"></span>
            <span className="sr-only">Notifications</span>
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon" className="rounded-full">
                <User className="h-5 w-5" />
                <span className="sr-only">User menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Portfolio</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Log out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}
