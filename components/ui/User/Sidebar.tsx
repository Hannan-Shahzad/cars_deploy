








// // Sidebar.tsx
// "use client";

// import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
// import { Button } from "@/components/ui/button";
// import { Heart, ContrastIcon as Compare, DollarSign, Calendar } from "lucide-react";
// import PriceRangeSlider from "./PriceRangeSlider";
// import { useRouter } from "next/navigation";

// export default function Sidebar({ setSelectedPage, setSidebarOpen }: { setSelectedPage: (page: "car-listings" | "wishlist") => void, setSidebarOpen: (open: boolean) => void }) {
//   const router = useRouter();

//   const handleButtonClick = (page: any) => {
//     setSelectedPage(page);
//     if (window.innerWidth < 1024) {
//       setSidebarOpen(false); // Close sidebar on small screens
//     }
//   };

//   return (
//     <aside className="lg:w-80 lg:mr-10 fixed lg:static top-0 pt-20 lg:pt-0 left-0 h-full z-10 theme-sidebar transition-transform duration-300 ease-in-out">
//       <div className="theme-sidebar-content p-6 overflow-y-auto rounded-lg h-full lg:h-[calc(100vh-80px)] custom-scrollbar">
//         <h2 className="text-3xl font-semibold mb-6 theme-text">Filters</h2>
//         <Accordion type="single" collapsible className="w-full">
//           <AccordionItem value="item-1">
//             <AccordionTrigger className="text-xl theme-text hover:text-hover">Car Type</AccordionTrigger>
//             <AccordionContent>
//               <div className="space-y-4">
//                 {["Sedan", "SUV", "Sports Car", "Truck", "Van"].map((type) => (
//                   <label key={type} className="flex items-center space-x-3">
//                     <input type="checkbox" className="form-checkbox text-checkbox" />
//                     <span className="text-lg theme-text">{type}</span>
//                   </label>
//                 ))}
//               </div>
//             </AccordionContent>
//           </AccordionItem>
//           <AccordionItem value="item-2">
//              <AccordionTrigger className="text-xl theme-text hover:text-hover">Brand</AccordionTrigger>
//              <AccordionContent>
//                <div className="space-y-4">
//                  {["Audi", "BMW", "Mercedes", "Toyota", "Tesla"].map((brand) => (
//                   <label key={brand} className="flex items-center space-x-3">
//                     <input type="checkbox" className="form-checkbox text-checkbox" />
//                     <span className="text-lg theme-text">{brand}</span>
//                   </label>
//                 ))}
//               </div>
//             </AccordionContent>
//           </AccordionItem>
//           <AccordionItem value="item-3">
//             <AccordionTrigger className="text-xl theme-text hover:text-hover">Price Range</AccordionTrigger>
//             <AccordionContent>
//               <PriceRangeSlider />
//             </AccordionContent>
//           </AccordionItem>
//           <AccordionItem value="item-4">
//             <AccordionTrigger className="text-xl theme-text hover:text-hover">Fuel Type</AccordionTrigger>
//             <AccordionContent>
//               <div className="space-y-4">
//                 {["Gasoline", "Diesel", "Electric", "Hybrid"].map((fuel) => (
//                   <label key={fuel} className="flex items-center space-x-3">
//                     <input type="checkbox" className="form-checkbox text-checkbox" />
//                     <span className="text-lg theme-text">{fuel}</span>
//                   </label>
//                 ))}
//               </div>
//             </AccordionContent>
//           </AccordionItem>
//         </Accordion>

//         <h2 className="text-3xl font-semibold my-6 theme-text">Quick Links</h2>
//         <ul className="space-y-4">
//           <li>
//             <Button
//               variant="link"
//               className="text-xl theme-text hover:text-hover"
//               onClick={() => {
//                 handleButtonClick("wishlist");
//                 router.push('/wishlist');
//               }}
//             >
//               <Heart className="mr-3 h-6 w-6" /> Wishlist
//             </Button>
//           </li>
//           <li>
//             <Button
//               variant="link"
//               className="text-xl theme-text hover:text-hover"
//               onClick={() => {
//                 handleButtonClick("compare");
//                 router.push('/compare');
//               }}
//             >
//               <Compare className="mr-3 h-6 w-6" /> Compare Cars
//             </Button>
//           </li>
//           <li>
//             <Button
//               variant="link"
//               className="text-xl theme-text hover:text-hover"
//               onClick={() => {
//                 handleButtonClick("calculator");
//                 router.push('/calculator');
//               }}
//             >
//               <DollarSign className="mr-3 h-6 w-6" /> Finance Calculator
//             </Button>
//           </li>
//           <li>
//             <Button
//               variant="link"
//               className="text-xl theme-text hover:text-hover"
//               onClick={() => {
//                 handleButtonClick("bookdrive");
//                 router.push('/bookdrive');
//               }}
//             >
//               <Calendar className="mr-3 h-6 w-6" /> Book Test Drive
//             </Button>
//           </li>
//         </ul>
//       </div>
//     </aside>
//   );
// }

















"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Heart, ContrastIcon as Compare, DollarSign, Calendar } from "lucide-react";
import PriceRangeSlider from "./PriceRangeSlider";
import { useRouter } from "next/navigation";

export default function Sidebar({ setSidebarOpen }: { setSidebarOpen: (open: boolean) => void }) {
  const router = useRouter();

  const handleNavigation = (path: string) => {
    router.push(path);
    if (window.innerWidth < 1024) setSidebarOpen(false);
  };

  return (
    <aside className="lg:w-80 lg:mr-10 fixed lg:static top-0 pt-20 lg:pt-0 left-0 h-full z-10 theme-sidebar transition-transform duration-300 ease-in-out">
      <div className="theme-sidebar-content p-6 overflow-y-auto rounded-lg h-full lg:h-[calc(100vh-80px)] custom-scrollbar">
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
              <PriceRangeSlider />
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
            <Button variant="link" className="text-xl theme-text hover:text-hover" onClick={() => handleNavigation('/wishlist')}>
              <Heart className="mr-3 h-6 w-6" /> Wishlist
            </Button>
          </li>
          <li>
            <Button variant="link" className="text-xl theme-text hover:text-hover" onClick={() => handleNavigation('/compare')}>
              <Compare className="mr-3 h-6 w-6" /> Compare Cars
            </Button>
          </li>
          <li>
            <Button variant="link" className="text-xl theme-text hover:text-hover" onClick={() => handleNavigation('/calculator')}>
              <DollarSign className="mr-3 h-6 w-6" /> Finance Calculator
            </Button>
          </li>
          <li>
            <Button variant="link" className="text-xl theme-text hover:text-hover" onClick={() => handleNavigation('/bookdrive')}>
              <Calendar className="mr-3 h-6 w-6" /> Book Test Drive
            </Button>
          </li>
        </ul>
      </div>
    </aside>
  );
}
