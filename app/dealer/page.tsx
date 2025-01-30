// "use client"

// import { useState, useEffect } from "react"
// import { Bell, Car, DollarSign, Users, Percent } from "lucide-react"
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/User/card"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"
// import { formatCurrency } from "@/utils/formatCurrency"
// import type { OverviewCardData, ChartData, InventoryItem, Inquiry } from "@/types/dashboard"
// import {
//   Search,
  
//   User,
//   Heart,
//   ContrastIcon as Compare,
  
//   Calendar,
//   Sun,
//   Moon,
//   Menu,
// } from "lucide-react"

// import OverviewCard from "../../components/ui/Dealer/OverviewCard"
// import InventoryTable from "../../components/ui/Dealer/InventoryTable"
// import InquiryList from "../../components/ui/Dealer/InquiryList"
// import PromotionForm from "../../components/ui/Dealer/PromotionForm"
// import { useTheme } from "@/components/theme-context"




// import { useSession } from "next-auth/react";
// import { useRouter } from "next/navigation";

// import { signOut } from "next-auth/react"


// export default function DealerDashboard() {
//   const [notifications, setNotifications] = useState(3)
//   const [overviewData, setOverviewData] = useState<OverviewCardData[]>([])
//   const [salesData, setSalesData] = useState<ChartData[]>([])
//   const [engagementData, setEngagementData] = useState<ChartData[]>([])
//   const [inventoryData, setInventoryData] = useState<InventoryItem[]>([])
//   const [inquiryData, setInquiryData] = useState<Inquiry[]>([])

//   const { theme, toggleTheme } = useTheme()



//   useEffect(() => {
//     // Simulating API calls to fetch data
//     fetchOverviewData()
//     fetchSalesData()
//     fetchEngagementData()
//     fetchInventoryData()
//     fetchInquiryData()
//   }, [])

//  const router = useRouter()
//   const { data: session, status } = useSession();
//   // useEffect(() => {
//   //   if (session) {
//   //     const role = session?.user?.role;
//   //     if (role === "user1") {
//   //       router.push("/"); // Redirect buyer to home
//   //     } else if (role === "user2") {
//   //       // Do nothing for dealer, no redirect needed
//   //       return;
//   //     }
//   //   } else {
//   //     router.push("/"); // Redirect to home if no user is logged in
//   //   }
//   // }, [session, router]);



  

//    const handleAuthAction = () => {
//       if (session) {
//         signOut({ callbackUrl: "/login" }); // Redirect to login page after signing out
//       } else {
//         router.push("/login"); // Navigate to login page
//       }
//     };
//   const fetchOverviewData = () => {
//     // Simulated API call
//     const data: OverviewCardData[] = [
//       { title: "Total Inventory", value: 245, change: "+5 from last month", icon: Car },
//       { title: "Total Sales", value: formatCurrency(45231.89), change: "+20.1% from last month", icon: DollarSign },
//       { title: "Active Inquiries", value: 573, change: "+201 since last week", icon: Users },
//       { title: "Conversion Rate", value: "15.2%", change: "+2.4% from last month", icon: Percent },
//     ]
//     setOverviewData(data)
//   }

//   const fetchSalesData = () => {
//     // Simulated API call
//     const data: ChartData[] = [
//       { month: "Jan", value: 65 },
//       { month: "Feb", value: 59 },
//       { month: "Mar", value: 80 },
//       { month: "Apr", value: 81 },
//       { month: "May", value: 56 },
//       { month: "Jun", value: 55 },
//     ]
//     setSalesData(data)
//   }

//   const fetchEngagementData = () => {
//     // Simulated API call
//     const data: ChartData[] = [
//       { month: "Jan", value: 4000 },
//       { month: "Feb", value: 3000 },
//       { month: "Mar", value: 5000 },
//       { month: "Apr", value: 4500 },
//       { month: "May", value: 4800 },
//       { month: "Jun", value: 5500 },
//     ]
//     setEngagementData(data)
//   }

//   const fetchInventoryData = () => {
//     // Simulated API call
//     const data: InventoryItem[] = [
//       { id: "1", model: "Tesla Model 3", year: 2023, price: 45000, status: "Available" },
//       { id: "2", model: "Ford Mustang", year: 2022, price: 38500, status: "Pending" },
//       { id: "3", model: "Toyota Camry", year: 2023, price: 27000, status: "Available" },
//     ]
//     setInventoryData(data)
//   }

//   const fetchInquiryData = () => {
//     // Simulated API call
//     const data: Inquiry[] = [
//       {
//         id: "1",
//         name: "John Doe",
//         interest: "Interested in Tesla Model 3",
//         initials: "JD",
//         avatarColor: "bg-blue-500",
//       },
//       {
//         id: "2",
//         name: "Alice Smith",
//         interest: "Requesting test drive for Ford Mustang",
//         initials: "AS",
//         avatarColor: "bg-green-500",
//       },
//     ]
//     setInquiryData(data)
//   }

//   return (
//     <div className="min-h-screen theme-bg">
//       {/* Header */}
//       <header className="theme-header p-8 flex justify-between items-center">
//         <h1 className="md:text-4xl sm:text-2xl font-bold theme-text">Dealer Dashboard</h1>
//         <div className="flex items-center ml-auto space-x-4"> {/* Add ml-auto here */}
//       <Button
//         variant="outline"
//         size="icon"
//         onClick={handleAuthAction}
//         className="theme-button-outline theme-button-solid w-16"
//       >
//         {session ? "Sign Out" : "Sign In"}
//       </Button>
//       <Button
//         variant="outline"
//         size="icon"
//         onClick={toggleTheme}
//         className="theme-button-outline theme-button-solid ">
//           {theme === "dark" ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />}
//         </Button>

//       <Button variant="outline" className="theme-button-outline relative p-4">
//         <Bell className="h-8 w-8" />
//         {notifications > 0 && (
//           <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-lg">
//             {notifications}
//           </span>
//         )}
//       </Button>
//     </div>
//       </header>

//       {/* Main Content */}
//       <main className="p-12 space-y-12">
//         {/* Overview Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {overviewData.map((item, index) => (
//             <OverviewCard key={index} data={item} />
//           ))}
//         </div>

//         {/* Charts */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//           <Card className="theme-card">
//             <CardHeader>
//               <CardTitle className="text-2xl">Monthly Sales</CardTitle>
//             </CardHeader>
//             <CardContent>
//               <ResponsiveContainer width="100%" height={400}>
//                 <BarChart data={salesData}>
//                   <CartesianGrid strokeDasharray="3 3" />
//                   <XAxis dataKey="month" tick={{ fontSize: 14 }} />
//                   <YAxis tick={{ fontSize: 14 }} />
//                   <Tooltip contentStyle={{ fontSize: 14 } } />
//                   <Legend wrapperStyle={{ fontSize: 14 }} />
//                   <Bar dataKey="value" name="Sales" fill="var(--chart-1)" />
//                 </BarChart>
//               </ResponsiveContainer>
//             </CardContent>
//           </Card>
//           <Card className="theme-card">
//             <CardHeader>
//               <CardTitle className="text-2xl">Customer Engagement</CardTitle>
//             </CardHeader>
//             <CardContent>
//               <ResponsiveContainer width="100%" height={400}>
//                 <BarChart data={engagementData}>
//                   <CartesianGrid strokeDasharray="3 3" />
//                   <XAxis dataKey="month" tick={{ fontSize: 14 }} />
//                   <YAxis tick={{ fontSize: 14 }} />
//                   <Tooltip contentStyle={{ fontSize: 14 }} />
//                   <Legend wrapperStyle={{ fontSize: 14 }} />
//                   <Bar dataKey="value" name="Engagement" fill="var(--chart-2)" />
//                 </BarChart>
//               </ResponsiveContainer>
//             </CardContent>
//           </Card>
//         </div>

//         {/* Inventory Table */}
//         <InventoryTable data={inventoryData} />

//         {/* Inquiries and Promotion Form */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//           <InquiryList data={inquiryData} />
//           <PromotionForm />
//         </div>
//       </main>
//     </div>
//   )
// }









// "use client"

// import { useState, useEffect } from "react"
// import { Bell, Search, Sun, Moon, Menu } from "lucide-react"
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/User/card"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu"
// import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"
// import { formatCurrency } from "@/utils/formatCurrency"
// import type { OverviewCardData, ChartData, InventoryItem, Inquiry } from "@/types/dashboard"
// import { FaCar, FaDollarSign, FaUsers, FaPercent } from "react-icons/fa" // Example using Font Awesome icons
// import OverviewCard from "../../components/ui/Dealer/OverviewCard"
// import InventoryTable from "../../components/ui/Dealer/InventoryTable"
// import InquiryList from "../../components/ui/Dealer/InquiryList"
// import PromotionForm from "../../components/ui/Dealer/PromotionForm"
// import QuickActions from "../../components/ui/Dealer/QuickActions"
// import { useTheme } from "@/components/theme-context"
// import { useSession } from "next-auth/react"
// import { useRouter } from "next/navigation"
// import { signOut } from "next-auth/react"

// // Custom Tooltip component (you'll need to define this)
// const CustomTooltip = ({ active, payload, label }) => {
//   if (active && payload && payload.length) {
//     return (
//       <div className="bg-white border border-gray-300 rounded-lg shadow-lg p-2">
//         <p className="text-gray-700 font-bold">{label}</p>
//         <p className="text-gray-700">Sales: {payload[0].value}</p>
//       </div>
//     )
//   }
//   return null
// }

// export default function DealerDashboard() {
//   const [notifications, setNotifications] = useState(1)
//   const [overviewData, setOverviewData] = useState<OverviewCardData[]>([])
//   const [salesData, setSalesData] = useState<ChartData[]>([])
//   const [engagementData, setEngagementData] = useState<ChartData[]>([])
//   const [inventoryData, setInventoryData] = useState<InventoryItem[]>([])
//   const [inquiryData, setInquiryData] = useState<Inquiry[]>([])
//   const { theme, toggleTheme } = useTheme()

//   const { data: session } = useSession()
//   const router = useRouter()

//   useEffect(() => {
//     fetchOverviewData()
//     fetchSalesData()
//     fetchEngagementData()
//     fetchInventoryData()
//     fetchInquiryData()
//   }, [])

//   const fetchOverviewData = () => {
//     const data: OverviewCardData[] = [
//       { title: "Total Inventory", value: 245, change: "+5 from last month", icon: FaCar },
//       { title: "Total Sales", value: formatCurrency(45231.89), change: "+20.1% from last month", icon: FaDollarSign },
//       { title: "Active Inquiries", value: 573, change: "+201 since last week", icon: FaUsers },
//       { title: "Conversion Rate", value: "15.2%", change: "+2.4% from last month", icon: FaPercent },
//     ]
//     setOverviewData(data)
//   }
//   const fetchSalesData = () => {
//     const data: ChartData[] = [
//       { month: "Jan", value: 65000 },
//       { month: "Feb", value: 59000 },
//       { month: "Mar", value: 80000 },
//       { month: "Apr", value: 81000 },
//       { month: "May", value: 56000 },
//       { month: "Jun", value: 55000 },
//     ]
//     setSalesData(data)
//   }

//   const fetchEngagementData = () => {
//     const data: ChartData[] = [
//       { month: "Jan", value: 4000 },
//       { month: "Feb", value: 3000 },
//       { month: "Mar", value: 5000 },
//       { month: "Apr", value: 4500 },
//       { month: "May", value: 4800 },
//       { month: "Jun", value: 5500 },
//     ]
//     setEngagementData(data)
//   }

//   const fetchInventoryData = () => {
//     const data: InventoryItem[] = [
//       { id: "1", model: "Tesla Model 3", year: 2023, price: 45000, status: "Available" },
//       { id: "2", model: "Ford Mustang", year: 2022, price: 38500, status: "Pending" },
//       { id: "3", model: "Toyota Camry", year: 2023, price: 27000, status: "Available" },
//       { id: "4", model: "Honda Civic", year: 2023, price: 22000, status: "Sold" },
//       { id: "5", model: "Chevrolet Silverado", year: 2022, price: 35000, status: "Available" },
//     ]
//     setInventoryData(data)
//   }

//   const fetchInquiryData = () => {
//     const data: Inquiry[] = [
//       {
//         id: "1",
//         name: "John Doe",
//         interest: "Interested in Tesla Model 3",
//         initials: "JD",
//         avatarColor: "bg-blue-500",
//       },
//       {
//         id: "2",
//         name: "Alice Smith",
//         interest: "Requesting test drive for Ford Mustang",
//         initials: "AS",
//         avatarColor: "bg-green-500",
//       },
//       {
//         id: "3",
//         name: "Bob Johnson",
//         interest: "Inquiring about Toyota Camry pricing",
//         initials: "BJ",
//         avatarColor: "bg-yellow-500",
//       },
//     ]
//     setInquiryData(data)
//   }

//   const handleAuthAction = () => {
//     if (session) {
//       signOut({ callbackUrl: "/login" }) // Redirect to login page after signing out
//     } else {
//       router.push("/login") // Navigate to login page
//     }
//   }

//   return (
//     <div className="min-h-screen theme-bg">
//       {/* Header */}
//       <header className="theme-header sticky top-0 z-10 border-b">
//         <div className="container mx-auto px-4 py-4 flex items-center justify-between">
//           <div className="flex items-center space-x-4">
//             <h1 className="text-xl font-bold theme-text md:text-2xl">Dealer Dashboard</h1>
//           </div>

//           <div className="flex items-center space-x-2 md:space-x-4">
//             <div className="relative">
//               <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
//               <Input className="pl-9 pr-4 py-2 rounded-full theme-input w-40 md:w-64" placeholder="Search..." />
//             </div>

//             <Button
//               variant="outline"
//               size="icon"
//               onClick={handleAuthAction}
//               className="theme-button-outline theme-button-solid w-16 "
//             >
//               {session ? "Sign Out" : "Sign In"}
//             </Button>

//             <Button
//               variant="outline"
//               size="icon"
//               onClick={toggleTheme}
//               className="theme-button-outline theme-button-solid "
//             >
//               {theme === "dark" ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />}
//             </Button>

//             {/* <DropdownMenu>
//               <DropdownMenuTrigger asChild>
//                 <Button variant="ghost" size="icon">
//                   <img src="/placeholder-user.jpg" alt="User avatar" className="w-8 h-8 rounded-full" />
//                 </Button>
//               </DropdownMenuTrigger>
//               <DropdownMenuContent align="end">
//                 <DropdownMenuLabel>My Account</DropdownMenuLabel>
//                 <DropdownMenuSeparator />
//                 <DropdownMenuItem>Profile</DropdownMenuItem>
//                 <DropdownMenuItem>Settings</DropdownMenuItem>
//                 <DropdownMenuItem onClick={handleLogout}>Log out</DropdownMenuItem>
//               </DropdownMenuContent>
//             </DropdownMenu> */}

//             <Button variant="outline" size="icon" className="theme-button-outline theme-button-solid ">
//               <Bell className="h-6 w-6" />
//             </Button>
//           </div>
//         </div>
//       </header>

//       {/* Main Content */}
//       <main className="container mx-auto  py-8 space-y-8">
//         <QuickActions />

//         {/* Overview Cards */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
//           {overviewData.map((item, index) => (
//             <OverviewCard key={index} data={item} />
//           ))}
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
//           {/* Charts */}
//           <Card className="theme-card lg:col-span-2">
//             <CardHeader>
//               <CardTitle className="text-xl flex justify-between items-center">
//                 Monthly Sales
//                 <Button className="theme-button-outline theme-button-solid" size="sm">
//                   View Details
//                 </Button>
//               </CardTitle>
//             </CardHeader>
//             <CardContent>
//               <ResponsiveContainer width="100%" height={300}>
//                 <BarChart data={salesData}>
//                   <CartesianGrid strokeDasharray="3 3" />
//                   <XAxis dataKey="month" />
//                   <YAxis />
//                   <Tooltip content={<CustomTooltip />} />
//                   <Legend />
//                   <Bar dataKey="value" name="Sales" fill="var(--chart-1)" />
//                 </BarChart>
//               </ResponsiveContainer>
//             </CardContent>
//           </Card>

//           <Card className="theme-card">
//             <CardHeader>
//               <CardTitle className="text-xl flex justify-between items-center">
//                 Customer Engagement
//                 <Button className="theme-button-outline theme-button-solid" size="sm">
//                   View Details
//                 </Button>
//               </CardTitle>
//             </CardHeader>
//             <CardContent>
//               <ResponsiveContainer width="100%" height={300}>
//                 <BarChart data={engagementData}>
//                   <CartesianGrid strokeDasharray="3 3" />
//                   <XAxis dataKey="month" />
//                   <YAxis />
//                   <Tooltip content={<CustomTooltip />} />
//                   <Legend />
//                   <Bar dataKey="value" name="Engagement" fill="var(--chart-2)" />
//                 </BarChart>
//               </ResponsiveContainer>
//             </CardContent>
//           </Card>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
//           <div className="lg:col-span-2">
//             <InventoryTable data={inventoryData} />
//           </div>
//           <div className="space-y-4">
//             <InquiryList data={inquiryData} />
//             <PromotionForm />
//           </div>
//         </div>
//       </main>
//     </div>
//   )
// }

















"use client"

import { useState, useEffect } from "react"
import DealerHeader from "@/components/ui/Dealer/DealerHeader"
import { Bell, Search, Sun, Moon, Menu } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/User/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"
import { formatCurrency } from "@/utils/formatCurrency"
import type { OverviewCardData, ChartData, InventoryItem, Inquiry } from "@/types/dashboard"
import { FaCar, FaDollarSign, FaUsers, FaPercent } from "react-icons/fa" // Example using Font Awesome icons
import OverviewCard from "../../components/ui/Dealer/OverviewCard"
import InventoryTable from "../../components/ui/Dealer/InventoryTable"
import InquiryList from "../../components/ui/Dealer/InquiryList"
import PromotionForm from "../../components/ui/Dealer/PromotionForm"
import QuickActions from "../../components/ui/Dealer/QuickActions"
import { useTheme } from "@/components/theme-context"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { signOut } from "next-auth/react"


const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white border border-gray-300 rounded-lg shadow-lg p-2">
        <p className="text-gray-700 font-bold">{label}</p>
        <p className="text-gray-700">Sales: {payload[0].value}</p>
      </div>
    )
  }
  return null
}

export default function DealerDashboard() {
  const [notifications, setNotifications] = useState(1)
  const [overviewData, setOverviewData] = useState<OverviewCardData[]>([])
  const [salesData, setSalesData] = useState<ChartData[]>([])
  const [engagementData, setEngagementData] = useState<ChartData[]>([])
  const [inventoryData, setInventoryData] = useState<InventoryItem[]>([])
  const [inquiryData, setInquiryData] = useState<Inquiry[]>([])
  const { theme, toggleTheme } = useTheme()

  const { data: session } = useSession()
  const router = useRouter()

  useEffect(() => {
    fetchOverviewData()
    fetchSalesData()
    fetchEngagementData()
    fetchInventoryData()
    fetchInquiryData()
  }, [])

  const fetchOverviewData = () => {
    const data: OverviewCardData[] = [
      { title: "Total Inventory", value: 245, change: "+5 from last month", icon: FaCar },
      { title: "Total Sales", value: formatCurrency(45231.89), change: "+20.1% from last month", icon: FaDollarSign },
      { title: "Active Inquiries", value: 573, change: "+201 since last week", icon: FaUsers },
      { title: "Conversion Rate", value: "15.2%", change: "+2.4% from last month", icon: FaPercent },
    ]
    setOverviewData(data)
  }
  const fetchSalesData = () => {
    const data: ChartData[] = [
      { month: "Jan", value: 65000 },
      { month: "Feb", value: 59000 },
      { month: "Mar", value: 80000 },
      { month: "Apr", value: 81000 },
      { month: "May", value: 56000 },
      { month: "Jun", value: 55000 },
    ]
    setSalesData(data)
  }

  const fetchEngagementData = () => {
    const data: ChartData[] = [
      { month: "Jan", value: 4000 },
      { month: "Feb", value: 3000 },
      { month: "Mar", value: 5000 },
      { month: "Apr", value: 4500 },
      { month: "May", value: 4800 },
      { month: "Jun", value: 5500 },
    ]
    setEngagementData(data)
  }

  const fetchInventoryData = () => {
    const data: InventoryItem[] = [
      { id: "1", model: "Tesla Model 3", year: 2023, price: 45000, status: "Available" },
      { id: "2", model: "Ford Mustang", year: 2022, price: 38500, status: "Pending" },
      { id: "3", model: "Toyota Camry", year: 2023, price: 27000, status: "Available" },
      { id: "4", model: "Honda Civic", year: 2023, price: 22000, status: "Sold" },
      { id: "5", model: "Chevrolet Silverado", year: 2022, price: 35000, status: "Available" },
    ]
    setInventoryData(data)
  }

  const fetchInquiryData = () => {
    const data: Inquiry[] = [
      {
        id: "1",
        name: "John Doe",
        interest: "Interested in Tesla Model 3",
        initials: "JD",
        avatarColor: "bg-blue-500",
      },
      {
        id: "2",
        name: "Alice Smith",
        interest: "Requesting test drive for Ford Mustang",
        initials: "AS",
        avatarColor: "bg-green-500",
      },
      {
        id: "3",
        name: "Bob Johnson",
        interest: "Inquiring about Toyota Camry pricing",
        initials: "BJ",
        avatarColor: "bg-yellow-500",
      },
    ]
    setInquiryData(data)
  }

  

  return (
    <div className="min-h-screen theme-bg">
      {/* Header */}
      <DealerHeader/>

      {/* Main Content */}
      <main className="container mx-auto py-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
          <h1 className="text-2xl font-bold theme-text mb-4 md:mb-0">Dealer Dashboard</h1>
          <div className="relative max-w-md w-full">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input className="pl-9 pr-4 py-2 rounded-full theme-input w-full" placeholder="Search..." />
          </div>
        </div>
        <QuickActions />

        {/* Overview Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {overviewData.map((item, index) => (
            <OverviewCard key={index} data={item} />
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Charts */}
          <Card className="theme-card lg:col-span-2">
            <CardHeader>
              <CardTitle className="text-xl flex justify-between items-center">
                Monthly Sales
                <Button className="theme-button-outline theme-button-solid" size="sm">
                  View Details
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={salesData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend />
                  <Bar dataKey="value" name="Sales" className="chart-theme" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card className="theme-card">
            <CardHeader>
              <CardTitle className="text-xl flex justify-between items-center">
                Customer Engagement
                <Button className="theme-button-outline theme-button-solid" size="sm">
                  View Details
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={engagementData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend />
                  <Bar dataKey="value" name="Engagement" className="chart-theme"  />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="lg:col-span-2">
            <InventoryTable data={inventoryData} />
          </div>
          <div className="space-y-4">
            <InquiryList data={inquiryData} />
            <PromotionForm />
          </div>
        </div>
      </main>
    </div>
  )
}



