import type React from "react"
import Link from "next/link"
import { BarChart3, Home, LineChart, Users } from "lucide-react"

import { cn } from "@/lib/utils"

export function MainNav({ className, ...props }: React.HTMLAttributes<HTMLElement>) {
  const items = [
    {
      name: "Dashboard",
      href: "/",
      icon: Home,
    },
    {
      name: "Portfolio",
      href: "/portfolio",
      icon: BarChart3,
    },
    {
      name: "Traders",
      href: "/traders",
      icon: Users,
    },
    {
      name: "Performance",
      href: "/performance",
      icon: LineChart,
    },
  ]

  return (
    <nav className={cn("flex items-center space-x-4 lg:space-x-6", className)} {...props}>
      {items.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          className="flex items-center text-sm font-medium transition-colors hover:text-primary"
        >
          <item.icon className="mr-2 h-4 w-4" />
          {item.name}
        </Link>
      ))}
    </nav>
  )
}
