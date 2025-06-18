'use client'

// import { Skeleton } from "@../ui/skeleton"
import { Avatar, AvatarFallback, AvatarImage } from "@/app/components/ui/avatar"
import { Button } from "@/app/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/app/components/ui/dropdown-menu"
import { useUser } from "@clerk/nextjs"
import { Settings } from "lucide-react"
import Link from "next/link"
import { Skeleton } from "../ui/skeleton"
import { UserAvatarInfo } from "../user-detail/user-avatar-info"
// import { UserDetail } from "../user-detail/user-detail"

interface UserNavProps {
  collapsed: boolean
}

export function UserNav({ collapsed }: UserNavProps) {
  const { isSignedIn, user, isLoaded } = useUser()

  if (!isLoaded) {
    return (
      <div className="flex items-center">
        <Skeleton className="h-10 w-10 rounded-full bg-gray-400 dark:bg-gray-700" />
        <div className="space-y-2 ml-2">
          <Skeleton className="h-2 w-30 bg-gray-400 dark:bg-gray-700" />
          <Skeleton className="h-2 w-20 bg-gray-400 dark:bg-gray-700" />
        </div>
      </div>
    )
  }

  if (!isSignedIn) {
    return <div>Sign in to view this page</div>
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className={collapsed ? "h-10 w-10 p-0" : "h-10 w-full justify-start px-2"}>
          <Avatar className="h-8 w-8">
            <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
            <AvatarFallback>
              {/* <UserDetail /> */}
              <UserAvatarInfo />
            </AvatarFallback>
          </Avatar>
          {!collapsed && (
            <div className="flex flex-col items-start ml-2 overflow-hidden">
              <span className="text-sm font-medium truncate">{user?.fullName}</span>
              <span className="text-xs text-muted-foreground truncate">{user?.primaryEmailAddress?.emailAddress}</span>
            </div>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>

        <DropdownMenuGroup >
          <Link href="/settings" >
            <DropdownMenuItem className="py-4 hover:bg-gray-200 h-10 p-2 rounded-sm">
              <div className="flex justify-center items-center h-2">
                <div className="mr-2 h-4 w-4 flex justify-center items-center">
                  <Settings />
                </div>
                <span>Settings</span>
              </div>
            </DropdownMenuItem>
          </Link>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
