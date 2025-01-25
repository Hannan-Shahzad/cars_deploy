// import React from 'react'

// import { useState, useEffect } from "react"
// import {
//   Search,
//   Bell,
//   User,
//   Heart,
//   ContrastIcon as Compare,
//   Car,
//   DollarSign,
//   Calendar,
//   Sun,
//   Moon,
//   Menu,
// } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Card, CardContent, CardFooter } from "@/components/ui/card"
// import { Slider } from "@/components/ui/slider"
// import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
// import { useTheme } from "@/components/theme-context"
// import Link from "next/link"
// import ProfileMenu from "../ProfileMenu"
// import { carData } from "@/data"
// import '../../app/globals.css';
// import PriceRangeSlider from "../ui/PriceRangeSlider"

// function NavBar() {

//     const [searchTerm, setSearchTerm] = useState("")
//   const { theme, toggleTheme } = useTheme()
//   const [sidebarOpen, setSidebarOpen] = useState(false)
//   const [isLargeScreen, setIsLargeScreen] = useState(false)

//   useEffect(() => {
//     const checkScreenSize = () => {
//       setIsLargeScreen(window.innerWidth >= 1024)
//       if (window.innerWidth >= 1024) {
//         setSidebarOpen(true)
//       }
//     }

//     checkScreenSize()
//     window.addEventListener("resize", checkScreenSize)
//     return () => window.removeEventListener("resize", checkScreenSize)
//   }, [])

//   const toggleSidebar = () => {
//     if (!isLargeScreen) {
//       setSidebarOpen(!sidebarOpen)
//     }
//   }


//   return (
//     <div>
//       <header className="theme-header p-6 sticky top-0 z-20">
//         <div className="max-w-[1700px] mx-auto flex justify-between items-center">
//           <div className="flex w-12/12 items-center">
//             <Button
//               variant="outline"
//               size="icon"
//               onClick={toggleSidebar}
//               className="mr-4 lg:hidden theme-button-solid theme-button-outline"
//             >
//               <Menu className="h-6 w-6" />
//             </Button>
//             <h1 className="theme-text sm:text-2xl md:text-4xl font-bold">NKRY Cars</h1>
//           </div>
//           <div className="flex items-center space-x-6">
//             <Button
//               variant="outline"
//               size="icon"
//               onClick={toggleTheme}
//               className="theme-button-outline theme-button-solid "
//             >
//               {theme === "dark" ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />}
//             </Button>
            
//             <Button
//               variant="outline"
//               size="icon"
//               className="theme-button-outline theme-button-solid "
//             >
//               <Bell className="h-6 w-6" />
//             </Button>

//             <ProfileMenu />
//           </div>
//         </div>
//       </header>
//     </div>
//   )
// }

// export default NavBar


