"use client";

import { Button } from "@/components/ui/button";
import { Sun, Moon, Menu, Bell } from "lucide-react";
import { useTheme } from "@/components/theme-context";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const { data: session } = useSession();
  const router = useRouter();

  const handleAuthAction = () => {
    if (session) {
      signOut({ callbackUrl: "/login" });
    } else {
      router.push("/login");
    }
  };

  return (
    <header className="theme-header p-6 sticky top-0 z-20">
      <div className="max-w-[1700px] mx-auto flex justify-between items-center">
        <div className="flex w-12/12 items-center">
          
          <Link href="/" className="theme-text sm:text-2xl md:text-4xl font-bold ">
            NKRY Cars
          </Link>
        </div>
        <div className="flex items-center space-x-6">
          <Button
            variant="outline"
            size="icon"
            onClick={handleAuthAction}
            className="theme-button-outline theme-button-solid w-16"
          >
            {session ? "Sign Out" : "Sign In"}
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={toggleTheme}
            className="theme-button-outline theme-button-solid"
          >
            {theme === "dark" ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />}
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="theme-button-outline theme-button-solid"
          >
            <Bell className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </header>
  );
}