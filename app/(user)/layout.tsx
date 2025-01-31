


// //app/(user)/layout.tsx
// "use client";

// import { useState, useEffect } from "react";
// import Header from "@/components/ui/User/Header";
// import Sidebar from "@/components/ui/User/Sidebar";


// export default function UserLayout({ children }: { children: React.ReactNode }) {
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [isLargeScreen, setIsLargeScreen] = useState(false);
//   const [selectedPage, setSelectedPage] = useState<"car-listings" | "wishlist">("car-listings"); // Manage active page

//   useEffect(() => {
//     const checkScreenSize = () => {
//       setIsLargeScreen(window.innerWidth >= 1024);
//     };
    
//     checkScreenSize();
//     window.addEventListener("resize", checkScreenSize);
//     return () => window.removeEventListener("resize", checkScreenSize);
//   }, []);

  
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
  
//   return (
//     <div className="min-h-screen theme-bg theme-text">
//       <Header toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
//       <div className="max-w-[1600px] mx-auto overflow-y-auto py-10 px-6 flex flex-col lg:flex-row relative">
//         {isLargeScreen || sidebarOpen ? <Sidebar setSelectedPage={setSelectedPage} setSidebarOpen={setSidebarOpen} />
// : null}
//         {/* <div className="flex-1">
//           {selectedPage === "car-listings" ? <CarListingPage /> : <WishlistPage />}
//         </div> */}
//         {children}
//       </div>
//       {sidebarOpen && !isLargeScreen && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 z-[5]" onClick={() => setSidebarOpen(false)} />
//       )}
//     </div>
//   );
// }












"use client";

import { useState, useEffect } from "react";
import Header from "@/components/ui/User/Header";
import Sidebar from "@/components/ui/User/Sidebar";

export default function UserLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => setIsLargeScreen(window.innerWidth >= 1024);
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = sidebarOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [sidebarOpen]);

  return (
    <div className="min-h-screen theme-bg theme-text">
      <Header toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
      <div className="max-w-[1600px] mx-auto overflow-y-auto py-10 px-6 flex flex-col lg:flex-row relative">
        {isLargeScreen || sidebarOpen ? <Sidebar setSidebarOpen={setSidebarOpen} /> : null}
        {children}
      </div>
      {sidebarOpen && !isLargeScreen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-[5]" onClick={() => setSidebarOpen(false)} />
      )}
    </div>
  );
}
