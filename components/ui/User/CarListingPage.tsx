
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
// import { Card, CardContent, CardFooter } from "@/components/ui/User/card"
// import { Slider } from "@/components/ui/slider"
// import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
// import { useTheme } from "@/components/theme-context"
// import Link from "next/link"
// import ProfileMenu from "../ProfileMenu"
// import { carData } from "@/data"
// import { signOut } from "next-auth/react"
// import PriceRangeSlider from "./PriceRangeSlider"


// import { useSession } from "next-auth/react";
// import { useRouter } from "next/navigation";





// export default function CarListingPage() {
//   const [searchTerm, setSearchTerm] = useState("")
//   const { theme, toggleTheme } = useTheme()
//   const [sidebarOpen, setSidebarOpen] = useState(false)
//   const [isLargeScreen, setIsLargeScreen] = useState(false)

//   const { data: session } = useSession();
//   const router = useRouter();

//   useEffect(() => {
//     const checkScreenSize = () => {
//       setIsLargeScreen(window.innerWidth >= 1024)
//       if (window.innerWidth >= 1024) {
//         setSidebarOpen(false)
//       }
//     }

//     checkScreenSize()
//     window.addEventListener("resize", checkScreenSize)
//     return () => window.removeEventListener("resize", checkScreenSize)
//   }, [])


//   useEffect(() => {
//     if (sidebarOpen) {
//       document.body.style.overflow = "hidden"; // Disable scrolling
//     } else {
//       document.body.style.overflow = ""; // Re-enable scrolling
//     }

//     return () => {
//       document.body.style.overflow = ""; // Cleanup on unmount
//     };
//   }, [sidebarOpen]);
  
//   const handleAuthAction = () => {
//     if (session) {
//       signOut({ callbackUrl: "/login" }); // Redirect to login page after signing out
//     } else {
//       router.push("/login"); // Navigate to login page
//     }
//   };


//   const toggleSidebar = () => {
//     if (!isLargeScreen) {
//       setSidebarOpen(!sidebarOpen)
//     }
//   }


//   // useEffect(() => {
//   //   if (session) {
//   //     const role = session?.user?.role;
//   //     if (role === "user2") {
//   //       router.push("/dealer"); // Redirect buyer to home
//   //     } else if (role === "user1") {
//   //       // Do nothing for dealer, no redirect needed
//   //       return;
//   //     }
//   //   } else {
//   //     return; // Redirect to home if no user is logged in
//   //   }
//   // }, [session, router]);


//   return (
//     <div className="min-h-screen theme-bg  theme-text">
//       {/* Header */}
//       <header className="theme-header p-6 sticky top-0 z-20">
//               <div className="max-w-[1700px] mx-auto flex justify-between items-center">
//                 <div className="flex w-12/12 items-center">
//                   <Button
//                     variant="outline"
//                     size="icon"
//                     onClick={toggleSidebar}
//                     className="mr-4 lg:hidden theme-button-solid theme-button-outline"
//                   >
//                     <Menu className="h-6 w-6" />
//                   </Button>
//                   <h1 className="theme-text sm:text-2xl md:text-4xl font-bold">NKRY Cars</h1>
//                 </div>
//                 <div className="flex items-center space-x-6">
//                 <Button
//               variant="outline"
//               size="icon"
//               onClick={handleAuthAction}
//               className="theme-button-outline theme-button-solid w-16 "
//             >
//               {session ? "Sign Out" : "Sign In"}
//             </Button>

//                   <Button
//                     variant="outline"
//                     size="icon"
//                     onClick={toggleTheme}
//                     className="theme-button-outline theme-button-solid "
//                   >
//                     {theme === "dark" ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />}
//                   </Button>
                  
//                   <Button
//                     variant="outline"
//                     size="icon"
//                     className="theme-button-outline theme-button-solid "
//                   >
//                     <Bell className="h-6 w-6" />
//                   </Button>
      
//                   {/* <ProfileMenu /> */}
//                 </div>
//               </div>
//             </header>

//       {/* Main Content */}
//       <div className="max-w-[1600px] mx-auto overflow-y-auto py-10 px-6 flex flex-col lg:flex-row relative">
//         {/* Sidebar */}
//         <aside className={`
//           lg:w-80  lg:mr-10 
//           fixed lg:static top-0 pt-20 lg:pt-0 left-0 h-full z-10 
//           theme-sidebar
//           transition-transform duration-300 ease-in-out
//           ${sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
//         `}>
//           <div className="theme-sidebar-content p-6 overflow-y-auto rounded-lg h-full lg:h-[calc(100vh-80px)] custom-scrollbar">
//             <h2 className="text-3xl font-semibold mb-6 theme-text">Filters</h2>
//             <Accordion type="single" collapsible className="w-full">
//               <AccordionItem value="item-1">
//                 <AccordionTrigger className="text-xl theme-text hover:text-hover">Car Type</AccordionTrigger>
//                 <AccordionContent>
//                   <div className="space-y-4">
//                     {["Sedan", "SUV", "Sports Car", "Truck", "Van"].map((type) => (
//                       <label key={type} className="flex items-center space-x-3">
//                         <input type="checkbox" className="form-checkbox text-checkbox" />
//                         <span className="text-lg theme-text">{type}</span>
//                       </label>
//                     ))}
//                   </div>
//                 </AccordionContent>
//               </AccordionItem>
//               <AccordionItem value="item-2">
//                 <AccordionTrigger className="text-xl theme-text hover:text-hover">Brand</AccordionTrigger>
//                 <AccordionContent>
//                   <div className="space-y-4">
//                     {["Audi", "BMW", "Mercedes", "Toyota", "Tesla"].map((brand) => (
//                       <label key={brand} className="flex items-center space-x-3">
//                         <input type="checkbox" className="form-checkbox text-checkbox" />
//                         <span className="text-lg theme-text">{brand}</span>
//                       </label>
//                     ))}
//                   </div>
//                 </AccordionContent>
//               </AccordionItem>
//               <AccordionItem value="item-3">
//                 <AccordionTrigger className="text-xl theme-text hover:text-hover">Price Range</AccordionTrigger>
//                 <AccordionContent>

//                 {/* slider */}
//                 <PriceRangeSlider/>


//                 </AccordionContent>
//               </AccordionItem>
//               <AccordionItem value="item-4">
//                 <AccordionTrigger className="text-xl theme-text hover:text-hover">Fuel Type</AccordionTrigger>
//                 <AccordionContent>
//                   <div className="space-y-4">
//                     {["Gasoline", "Diesel", "Electric", "Hybrid"].map((fuel) => (
//                       <label key={fuel} className="flex items-center space-x-3">
//                         <input type="checkbox" className="form-checkbox text-checkbox" />
//                         <span className="text-lg theme-text">{fuel}</span>
//                       </label>
//                     ))}
//                   </div>
//                 </AccordionContent>
//               </AccordionItem>
//             </Accordion>

//             <h2 className="text-3xl font-semibold my-6 theme-text">Quick Links</h2>
//             <ul className="space-y-4">
//               <li>
//                 <Button variant="link" className="text-xl theme-text hover:text-hover">
//                   <Heart className="mr-3 h-6 w-6" /> Wishlist
//                 </Button>
//               </li>
//               <li>
//                 <Button variant="link" className="text-xl theme-text hover:text-hover">
//                   <Compare className="mr-3 h-6 w-6" /> Compare Cars
//                 </Button>
//               </li>
//               <li>
//                 <Button variant="link" className="text-xl theme-text hover:text-hover">
//                   <DollarSign className="mr-3 h-6 w-6" /> Finance Calculator
//                 </Button>
//               </li>
//               <li>
//                 <Button variant="link" className="text-xl theme-text hover:text-hover">
//                   <Calendar className="mr-3 h-6 w-6" /> Book Test Drive
//                 </Button>
//               </li>
//             </ul>
//           </div>
//         </aside>

//         {/* Car Listings */}
//         <div className="flex-1">
//           <div className="mb-8 flex flex-col sm:flex-row items-center">
//             <div className="relative w-full sm:w-auto mb-6 sm:mb-0 sm:mr-4">
//               <Input
//                 type="text"
//                 placeholder="Search cars..."
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 className="w-full sm:w-96 theme-input pr-12"
//               />
//               <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 theme-search-icon h-6 w-6" />
//             </div>
//             <Button 
//             className="w-full sm:w-auto theme-button-outline text-lg px-6 py-3">Search</Button>
            
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {carData.map((car) => (
//               <Card 
//               key={car.id} 
//               className="theme-card text-lg theme-text hover-scale flex flex-col overflow-x-hidden"
//             >
//               <CardContent className="p-6 flex-grow">
//                 {/* Image Container */}
//                 <div className="image-zoom rounded-lg overflow-hidden mb-6">
//                   <img 
//                     src={car.image || "/placeholder.svg"} 
//                     alt={car.name} 
//                     className="w-full object-cover h-40 sm:h-48 md:h-56 lg:h-64 xl:h-72" 
//                   />
//                 </div>
                
//                 {/* Car Name */}
//                 <h3 className="text-2xl font-semibold mb-4 text-center lg:text-left">
//                   {car.name}
//                 </h3>
              
//                 {/* Car Details */}
//                 <p className="mb-4 text-lg theme-text text-center lg:text-left">
//                   {car.type} • {car.fuel} • {car.transmission}
//                 </p>
              
//                 {/* Price */}
//                 <p className="font-bold text-xl text-center lg:text-left">
//                   {car.price.toLocaleString()} $
//                 </p>
//               </CardContent>
              
//               <CardFooter 
//                 className="flex flex-col sm:flex-col md:flex-col lg:flex-col xl:flex-row justify-center xl:justify-between items-center gap-4 p-6 theme-card theme-footer mt-auto"
//               >
//                 {/* AR View Button */}
//                 <Button
//                   variant="outline"
//                   size="lg"
//                   className="button-hover theme-button-solid theme-button-outline px-6 py-3 text-lg w-full xl:w-auto"
//                 >
//                   <Car className="mr-3 h-5 w-5" /> AR View
//                 </Button>
            
//                 {/* Details Button */}
//                 <Button
//                   variant="outline"
//                   size="lg"
//                   className="button-hover theme-button-outline theme-button-solid px-6 py-3 text-lg w-full xl:w-auto"
//                 >
//                   Details
//                 </Button>
//               </CardFooter>
//             </Card>
            
            
            
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Overlay */}
//       {sidebarOpen && !isLargeScreen && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 z-[5]" onClick={toggleSidebar} />
//       )}
//     </div>
//   )
// }








"use client";

import { useState } from "react";
import { Search, Car } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter } from "@/components/ui/User/card";
import { carData } from "@/data";

export default function CarListingPage() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
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
        <Button className="w-full sm:w-auto theme-button-outline text-lg px-6 py-3">Search</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {carData.map((car) => (
          <Card key={car.id} className="theme-card text-lg theme-text hover-scale flex flex-col overflow-x-hidden">
            <CardContent className="p-6 flex-grow">
              <div className="image-zoom rounded-lg overflow-hidden mb-6">
                <img src={car.image || "/placeholder.svg"} alt={car.name} className="w-full object-cover h-40 sm:h-48 md:h-56 lg:h-64 xl:h-72" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-center lg:text-left">{car.name}</h3>
              <p className="mb-4 text-lg theme-text text-center lg:text-left">
                {car.type} • {car.fuel} • {car.transmission}
              </p>
              <p className="font-bold text-xl text-center lg:text-left">{car.price.toLocaleString()} $</p>
            </CardContent>
            <CardFooter className="flex flex-col sm:flex-col md:flex-col lg:flex-col xl:flex-row justify-center xl:justify-between items-center gap-4 p-6 theme-card theme-footer mt-auto">
              <Button variant="outline" size="lg" className="button-hover theme-button-solid theme-button-outline px-6 py-3 text-lg w-full xl:w-auto">
                <Car className="mr-3 h-5 w-5" /> AR View
              </Button>
              <Button variant="outline" size="lg" className="button-hover theme-button-outline theme-button-solid px-6 py-3 text-lg w-full xl:w-auto">
                Details
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}