"use client"

import { useState } from "react"
import { User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useTheme } from "@/components/theme-context"
import Link from "next/link"

export default function ProfileMenu() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const { theme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className={`    theme-button-outline   theme-button-solid   `}
        >
          <User className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className={`
  ${theme === "dark" ? "bg-gray-800 " : "bg-white"}
`}
 >
        {isLoggedIn ? (
          <>
            <DropdownMenuItem>
              <Link href="/profile" className={`w-full  `}>
                Profile
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <button onClick={() => setIsLoggedIn(false)} className="w-full text-left">
                Sign Out
              </button>
            </DropdownMenuItem>
          </>
        ) : (
          <>
            <DropdownMenuItem>
              <Link href="/login" className="w-full">
                Sign In
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/signup" className="w-full">
                Sign Up
              </Link>
            </DropdownMenuItem>
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

