








//CarListingPage.tsx:

// "use client"

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
// import ProfileMenu from "./ProfileMenu"
// import { carData } from "@/data"

// export default function CarListingPage() {
//   const [searchTerm, setSearchTerm] = useState("")
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
//     <div className={`min-h-screen ${theme === "dark" ? "bg-[#0a0a0a] text-white" : "bg-white text-black"}`}>
//       {/* Header */}
//       <header className={`${theme === "dark" ? "bg-gray-900" : "bg-gray-100"} p-6 sticky top-0 z-20`}>
//         <div className="max-w-[1700px] mx-auto flex justify-between items-center">
//           <div className="flex w-12/12 items-center">
//             <Button
//               variant="outline"
//               size="icon"
//               onClick={toggleSidebar}
//               className={`mr-4 lg:hidden bg-transparent   ${theme === "dark" ? "border-[#f2b705]" : "border-black"}   ${theme === "dark" ? "text-[#f2b705]" : "text-black"} hover:bg-[#f2b705] hover:text-black`}
//             >
//               <Menu className="h-6 w-6" />
//             </Button>
//             <h1 className={` ${theme === "dark" ? "text-[#f2b705]" : "text-black"} sm:text-2xl md:text-4xl font-bold `}>NKRY Cars</h1>
//           </div>
//           <div className="flex items-center space-x-6">

//             {/* dark mode button */}
//             <Button
//               variant="outline"
//               size="icon"
//               onClick={toggleTheme}
//               className={`bg-transparent  ${theme === "dark" ? "border-[#f2b705]" : "border-black"} ${theme === "dark" ? "text-[#f2b705]" : "text-black"}   hover:bg-[#f2b705] hover:text-black`}
//             >
//               {theme === "dark" ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />}
//             </Button>

//             {/* Bell Icon */}
//             <Button
//               variant="outline"
//               size="icon"
//               className={`bg-transparent   ${theme === "dark" ? "border-[#f2b705]" : "border-black"} ${theme === "dark" ? "text-[#f2b705]" : "text-black"}      hover:bg-[#f2b705] hover:text-black`}
//             >
//               <Bell className="h-6 w-6" />
//             </Button>

//             {/* profile icon */}
//             <ProfileMenu  />
//           </div>
//         </div>
//       </header>
  
//       {/* Main Content */}
//       <div className="       max-w-[1600px] mx-auto overflow-y-auto  py-10 px-6 flex flex-col lg:flex-row relative">
//         {/* Sidebar */}
//         <aside
//           className={`
//             lg:w-80 lg:mr-10 
//             fixed lg:static top-0 left-0 h-full z-10 
//             ${theme === "dark" ? "bg-black" : "bg-white"}  
//             transition-transform duration-300 ease-in-out
//             ${sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
//           `}
//         >
//           <div
//             className={`${theme === "dark" ? "bg-gray-800" : "bg-gray-100"}   p-6 overflow-y-auto rounded-lg  sm:h-full lg:h-[calc(100vh-80px)] custom-scrollbar`}

//           >
//             <h2 className={`text-3xl font-semibold mb-6 ${theme === "dark" ? "text-[#f2b705]" : "text-black"} `}>Filters</h2>
//             <Accordion type="single" collapsible className="w-full">
//               <AccordionItem value="item-1">
//                 <AccordionTrigger className={`text-xl ${theme === "dark" ? "text-[#f2b705]" : "text-black"}   hover:text-[#f2b705]/80 `}>Car Type</AccordionTrigger>
//                 <AccordionContent>
//                   <div className="space-y-4">
//                     {["Sedan", "SUV", "Sports Car", "Truck", "Van"].map((type) => (
//                       <label key={type} className="flex items-center space-x-3">
//                         <input type="checkbox" className={`form-checkbox ${theme === "dark" ? "text-[#f2b705]" : "text-black"}`} />
//                         <span className={`text-lg  ${theme === "dark" ? "text-[#f2b705]" : "text-black"} `}>{type}</span>
//                       </label>
//                     ))}
//                   </div>
//                 </AccordionContent>
//               </AccordionItem>
//               <AccordionItem value="item-2">
//                 <AccordionTrigger className= {` text-xl ${theme === "dark" ? "text-[#f2b705]" : "text-black"}   hover:text-[#f2b705]/80   `}>Brand</AccordionTrigger>
//                 <AccordionContent>
//                   <div className="space-y-4">
//                     {["Audi", "BMW", "Mercedes", "Toyota", "Tesla"].map((brand) => (
//                       <label key={brand} className="flex items-center space-x-3">
//                         <input type="checkbox" className={` form-checkbox  ${theme === "dark" ? "text-[#f2b705]" : "text-black"}  `} />
//                         <span className={`text-lg ${theme === "dark" ? "text-[#f2b705]" : "text-black"}`}>{brand}</span>
//                       </label>
//                     ))}
//                   </div>
//                 </AccordionContent>
//               </AccordionItem>
//               <AccordionItem value="item-3">
//                 <AccordionTrigger className= {` text-xl ${theme === "dark" ? "text-[#f2b705]" : "text-black"}    hover:text-[#f2b705]/80  `}>Price Range</AccordionTrigger>
//                 <AccordionContent>
//                   <Slider defaultValue={[200000, 800000]} max={2000000} step={10000} className="mt-4" />
//                   <div className={`flex justify-between mt-4 text-lg  ${theme === "dark" ? "text-[#f2b705]" : "text-black"}    `}>
//                     <span>200,000 SAR</span>
//                     <span>2,000,000 SAR</span>
//                   </div>
//                 </AccordionContent>
//               </AccordionItem>
//               <AccordionItem value="item-4">
//                 <AccordionTrigger className={`text-xl ${theme === "dark" ? "text-[#f2b705]" : "text-black"}   hover:text-[#f2b705]/80   `}>Fuel Type</AccordionTrigger>
//                 <AccordionContent>
//                   <div className="space-y-4">
//                     {["Gasoline", "Diesel", "Electric", "Hybrid"].map((fuel) => (
//                       <label key={fuel} className="flex items-center space-x-3">
//                         <input type="checkbox" className={`form-checkbox ${theme === "dark" ? "text-[#f2b705]" : "text-black"} `} />
//                         <span className={`text-lg  ${theme === "dark" ? "text-[#f2b705]" : "text-black"} `}>{fuel}</span>
//                       </label>
//                     ))}
//                   </div>
//                 </AccordionContent>
//               </AccordionItem>
//             </Accordion>
//             <h2 className={`text-3xl font-semibold my-6 ${theme === "dark" ? "text-[#f2b705]" : "text-black"}`}>Quick Links</h2>
//             <ul className="space-y-4">
//               <li>
//                 <Button variant="link" className={`text-xl ${theme === "dark" ? "text-[#f2b705]" : "text-black"} hover:text-[#f2b705]/80`}>
//                   <Heart className="mr-3 h-6 w-6" /> Wishlist
//                 </Button>
//               </li>
//               <li>
//                 <Button variant="link" className={`text-xl ${theme === "dark" ? "text-[#f2b705]" : "text-black"} hover:text-[#f2b705]/80`}>
//                   <Compare className="mr-3 h-6 w-6" /> Compare Cars
//                 </Button>
//               </li>
//               <li>
//                 <Button variant="link" className={`text-xl ${theme === "dark" ? "text-[#f2b705]" : "text-black"} hover:text-[#f2b705]/80`}>
//                   <DollarSign className="mr-3 h-6 w-6" /> Finance Calculator
//                 </Button>
//               </li>
//               <li>
//                 <Button variant="link" className={`text-xl  ${theme === "dark" ? "text-[#f2b705]" : "text-black"}   hover:text-[#f2b705]/80`}>
//                   <Calendar className="mr-3 h-6 w-6" /> Book Test Drive
//                 </Button>
//               </li>
//             </ul>
//           </div>
//         </aside>
  
//         {/* Car Listings */}
//         <div className="flex-1 ">
//           <div className="mb-8 flex flex-col sm:flex-row items-center">
//             <div className="relative w-full sm:w-auto mb-6 sm:mb-0 sm:mr-4">
//               <Input
//                 type="text"
//                 placeholder="Search cars..."
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 className={`w-full sm:w-96 ${theme === "dark" ? "bg-gray-200" : "bg-gray-100"} text-lg text-[#f2b705] pr-12`}
//               />
//               <Search className={`absolute right-4 top-1/2 transform -translate-y-1/2 ${theme === "dark" ? "text-[#f2b705]" : "text-black"} h-6 w-6`} />
//             </div>
//             <Button className={`w-full sm:w-auto ${theme === "dark" ? "bg-[#f2b705]" : "bg-black"}   ${theme === "dark" ? "text-black" : "text-white"}  text-lg px-6 py-3 hover:bg-[#f2b705]/80`}>Search</Button>
//           </div>
  
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {carData.map((car) => (
//               <Card
//                 key={car.id}
//                 className={`${theme === "dark" ? "bg-gray-800" : "bg-gray-50"} text-lg ${theme === "dark" ? "text-[#f2b705]" : "text-black"} hover-scale overflow-x-hidden`}
//               >
//                 <CardContent className="p-6">
//   <div className="image-zoom rounded-lg overflow-hidden mb-6">
//     <img src={car.image || "/placeholder.svg"} alt={car.name} className="w-full h-64 object-cover" />
//   </div>
//   <h3 className="text-2xl font-semibold mb-4">{car.name}</h3>
//   <p className={`${theme === "dark" ? "text-[#f2b705]" : "text-black"} mb-4 text-lg`}>
//     {car.type} • {car.fuel} • {car.transmission}
//   </p>
//   <p className=" font-bold text-xl">{car.price.toLocaleString()} $</p>
// </CardContent>
// <CardFooter
//   className={`flex justify-between p-6 ${
//     theme === "dark" ? "bg-gray-800" : "bg-gray-50"
//   }`}
// >
//   <Button
//     variant="outline"
//     size="lg"
//     className={`button-hover bg-transparent ${theme === "dark" ? "border-[#f2b705]" : "border-black"} ${theme === "dark" ? "text-[#f2b705]" : "text-black"} hover:bg-[#f2b705] hover:text-black px-6 py-3 text-lg`}
//   >
//     <Car className="mr-3 h-5 w-5" /> AR View
//   </Button>
//   <Button
//     variant="outline"
//     size="lg"
//     className={`button-hover bg-transparent ${theme === "dark" ? "border-[#f2b705]" : "border-black"} ${theme === "dark" ? "text-[#f2b705]" : "text-black"} hover:bg-[#f2b705] hover:text-black px-6 py-3 text-lg`}
//   >
//     Details
//   </Button>
// </CardFooter>

//               </Card>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Overlay for small screens when sidebar is open */}
//       {sidebarOpen && !isLargeScreen && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 z-[5]" onClick={toggleSidebar}></div>
//       )}
//     </div>
//   )
// }
























"use client"

import { useState, useEffect } from "react"
import {
  Search,
  Bell,
  User,
  Heart,
  ContrastIcon as Compare,
  Car,
  DollarSign,
  Calendar,
  Sun,
  Moon,
  Menu,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter } from "@/components/ui/User/card"
import { Slider } from "@/components/ui/slider"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { useTheme } from "@/components/theme-context"
import Link from "next/link"
import ProfileMenu from "../ProfileMenu"
import { carData } from "@/data"
import { signOut } from "next-auth/react"
import PriceRangeSlider from "./PriceRangeSlider"




import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";









export default function CarListingPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const { theme, toggleTheme } = useTheme()
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [isLargeScreen, setIsLargeScreen] = useState(false)

  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1024)
      if (window.innerWidth >= 1024) {
        setSidebarOpen(true)
      }
    }

    checkScreenSize()
    window.addEventListener("resize", checkScreenSize)
    return () => window.removeEventListener("resize", checkScreenSize)
  }, [])


  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "loading") return; // Wait for session to load
    if (!session) router.push("/login"); // Redirect if unauthenticated
  }, [status, session, router]);

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  router.push("/");




  const toggleSidebar = () => {
    if (!isLargeScreen) {
      setSidebarOpen(!sidebarOpen)
    }
  }

  return (
    <div className="min-h-screen theme-bg  theme-text">
      {/* Header */}
      <header className="theme-header p-6 sticky top-0 z-20">
              <div className="max-w-[1700px] mx-auto flex justify-between items-center">
                <div className="flex w-12/12 items-center">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={toggleSidebar}
                    className="mr-4 lg:hidden theme-button-solid theme-button-outline"
                  >
                    <Menu className="h-6 w-6" />
                  </Button>
                  <h1 className="theme-text sm:text-2xl md:text-4xl font-bold">NKRY Cars</h1>
                </div>
                <div className="flex items-center space-x-6">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => signOut({ callbackUrl: "/login" })} // Redirects to login page after sign out
                  className="theme-button-outline theme-button-solid w-40"
                >
                Sign Out
                </Button>


                  <Button
                    variant="outline"
                    size="icon"
                    onClick={toggleTheme}
                    className="theme-button-outline theme-button-solid "
                  >
                    {theme === "dark" ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />}
                  </Button>
                  
                  <Button
                    variant="outline"
                    size="icon"
                    className="theme-button-outline theme-button-solid "
                  >
                    <Bell className="h-6 w-6" />
                  </Button>
      
                  <ProfileMenu />
                </div>
              </div>
            </header>

      {/* Main Content */}
      <div className="max-w-[1600px] mx-auto overflow-y-auto py-10 px-6 flex flex-col lg:flex-row relative">
        {/* Sidebar */}
        <aside className={`
          lg:w-80 lg:mr-10 
          fixed lg:static top-0 left-0 h-full z-10 
          theme-sidebar
          transition-transform duration-300 ease-in-out
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        `}>
          <div className="theme-sidebar-content p-6 overflow-y-auto rounded-lg sm:h-full lg:h-[calc(100vh-80px)] custom-scrollbar">
            <h2 className="text-3xl font-semibold mb-6 theme-text">Filters</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-xl theme-text hover:text-hover">Car Type</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4">
                    {["Sedan", "SUV", "Sports Car", "Truck", "Van"].map((type) => (
                      <label key={type} className="flex items-center space-x-3">
                        <input type="checkbox" className="form-checkbox text-checkbox" />
                        <span className="text-lg theme-text">{type}</span>
                      </label>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-xl theme-text hover:text-hover">Brand</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4">
                    {["Audi", "BMW", "Mercedes", "Toyota", "Tesla"].map((brand) => (
                      <label key={brand} className="flex items-center space-x-3">
                        <input type="checkbox" className="form-checkbox text-checkbox" />
                        <span className="text-lg theme-text">{brand}</span>
                      </label>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-xl theme-text hover:text-hover">Price Range</AccordionTrigger>
                <AccordionContent>

                {/* slider */}
                <PriceRangeSlider/>


                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-xl theme-text hover:text-hover">Fuel Type</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4">
                    {["Gasoline", "Diesel", "Electric", "Hybrid"].map((fuel) => (
                      <label key={fuel} className="flex items-center space-x-3">
                        <input type="checkbox" className="form-checkbox text-checkbox" />
                        <span className="text-lg theme-text">{fuel}</span>
                      </label>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <h2 className="text-3xl font-semibold my-6 theme-text">Quick Links</h2>
            <ul className="space-y-4">
              <li>
                <Button variant="link" className="text-xl theme-text hover:text-hover">
                  <Heart className="mr-3 h-6 w-6" /> Wishlist
                </Button>
              </li>
              <li>
                <Button variant="link" className="text-xl theme-text hover:text-hover">
                  <Compare className="mr-3 h-6 w-6" /> Compare Cars
                </Button>
              </li>
              <li>
                <Button variant="link" className="text-xl theme-text hover:text-hover">
                  <DollarSign className="mr-3 h-6 w-6" /> Finance Calculator
                </Button>
              </li>
              <li>
                <Button variant="link" className="text-xl theme-text hover:text-hover">
                  <Calendar className="mr-3 h-6 w-6" /> Book Test Drive
                </Button>
              </li>
            </ul>
          </div>
        </aside>

        {/* Car Listings */}
        <div className="flex-1">
          <div className="mb-8 flex flex-col sm:flex-row items-center">
            <div className="relative w-full sm:w-auto mb-6 sm:mb-0 sm:mr-4">
              <Input
                type="text"
                placeholder="Search cars..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full sm:w-96 theme-input pr-12"
              />
              <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 theme-search-icon h-6 w-6" />
            </div>
            <Button 
            className="w-full sm:w-auto theme-button-outline text-lg px-6 py-3">Search</Button>
            
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {carData.map((car) => (
              <Card key={car.id} className="theme-card text-lg theme-text hover-scale overflow-x-hidden">
                <CardContent className="p-6">
                  <div className="image-zoom rounded-lg overflow-hidden mb-6">
                    <img src={car.image || "/placeholder.svg"} alt={car.name} className="w-full h-64 object-cover" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">{car.name}</h3>
                  <p className="mb-4 text-lg theme-text">
                    {car.type} • {car.fuel} • {car.transmission}
                  </p>
                  <p className="font-bold text-xl">{car.price.toLocaleString()} $</p>
                </CardContent>
                <CardFooter className="flex justify-between p-6 theme-card theme-footer">
                  <Button
                    variant="outline"
                    size="lg"
                    className="button-hover  theme-button-solid theme-button-outline px-6 py-3 text-lg"
                  >
                    <Car className="mr-3 h-5 w-5" /> AR View
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="button-hover theme-button-outline  theme-button-solid px-6 py-3 text-lg"
                  >
                    Details
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Overlay */}
      {sidebarOpen && !isLargeScreen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-[5]" onClick={toggleSidebar} />
      )}
    </div>
  )
}


