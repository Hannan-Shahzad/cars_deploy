





// "use client"

// import { useState, useEffect } from "react"
// import DealerHeader from "@/components/ui/Dealer/DealerHeader"
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


// const CustomTooltip = ({ active, payload, label }: any) => {
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

  

//   return (
//     <div className="min-h-screen theme-bg">
//       {/* Header */}
//       <DealerHeader/>

//       {/* Main Content */}
//       <main className="container mx-auto py-8 space-y-8">
//         <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
//           <h1 className="text-2xl font-bold theme-text mb-4 md:mb-0">Dealer Dashboard</h1>
//           <div className="relative max-w-md w-full">
//             <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
//             <Input className="pl-9 pr-4 py-2 rounded-full theme-input w-full" placeholder="Search..." />
//           </div>
//         </div>
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
//                   <Bar dataKey="value" name="Sales" className="chart-theme" />
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
//                   <Bar dataKey="value" name="Engagement" className="chart-theme"  />
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

import { useState, useEffect, useMemo } from "react"
import DealerHeader from "@/components/ui/Dealer/DealerHeader"
import { Search } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/User/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"
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

// Add this custom hook after the imports
function useChartColor(element: "line" | "text") {
  const { theme } = useTheme()
  return useMemo(() => {
    if (element === "line") {
      return theme === "dark" ? "#f2b705" : "black"
    } else if (element === "text") {
      return theme === "dark" ? "#f2b705" : "black"
    }
  }, [theme, element])
}

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
  const { theme } = useTheme()
  const lineColor = useChartColor("line")
  const textColor = useChartColor("text")

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
      { month: "Mar", value: 1500 },
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
      <DealerHeader />

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
                  <Legend formatter={(value, entry, index) => <span style={{ color: textColor }}>{value}</span>} />
                  <Bar dataKey="value" name="Sales" fill={lineColor} />
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
                <LineChart data={engagementData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="value"
                    name="Engagement"
                    stroke={lineColor}
                    dot={false}
                    strokeWidth={2}
                  />
                </LineChart>
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

