"use client"

import { useState, useEffect } from "react"
import { Bell, Car, DollarSign, Users, Percent } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/User/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"
import { formatCurrency } from "@/utils/formatCurrency"
import type { OverviewCardData, ChartData, InventoryItem, Inquiry } from "@/types/dashboard"

import OverviewCard from "../../components/ui/Dealer/OverviewCard"
import InventoryTable from "../../components/ui/Dealer/InventoryTable"
import InquiryList from "../../components/ui/Dealer/InquiryList"
import PromotionForm from "../../components/ui/Dealer/PromotionForm"

export default function DealerDashboard() {
  const [notifications, setNotifications] = useState(3)
  const [overviewData, setOverviewData] = useState<OverviewCardData[]>([])
  const [salesData, setSalesData] = useState<ChartData[]>([])
  const [engagementData, setEngagementData] = useState<ChartData[]>([])
  const [inventoryData, setInventoryData] = useState<InventoryItem[]>([])
  const [inquiryData, setInquiryData] = useState<Inquiry[]>([])

  useEffect(() => {
    // Simulating API calls to fetch data
    fetchOverviewData()
    fetchSalesData()
    fetchEngagementData()
    fetchInventoryData()
    fetchInquiryData()
  }, [])

  const fetchOverviewData = () => {
    // Simulated API call
    const data: OverviewCardData[] = [
      { title: "Total Inventory", value: 245, change: "+5 from last month", icon: Car },
      { title: "Total Sales", value: formatCurrency(45231.89), change: "+20.1% from last month", icon: DollarSign },
      { title: "Active Inquiries", value: 573, change: "+201 since last week", icon: Users },
      { title: "Conversion Rate", value: "15.2%", change: "+2.4% from last month", icon: Percent },
    ]
    setOverviewData(data)
  }

  const fetchSalesData = () => {
    // Simulated API call
    const data: ChartData[] = [
      { month: "Jan", value: 65 },
      { month: "Feb", value: 59 },
      { month: "Mar", value: 80 },
      { month: "Apr", value: 81 },
      { month: "May", value: 56 },
      { month: "Jun", value: 55 },
    ]
    setSalesData(data)
  }

  const fetchEngagementData = () => {
    // Simulated API call
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
    // Simulated API call
    const data: InventoryItem[] = [
      { id: "1", model: "Tesla Model 3", year: 2023, price: 45000, status: "Available" },
      { id: "2", model: "Ford Mustang", year: 2022, price: 38500, status: "Pending" },
      { id: "3", model: "Toyota Camry", year: 2023, price: 27000, status: "Available" },
    ]
    setInventoryData(data)
  }

  const fetchInquiryData = () => {
    // Simulated API call
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
    ]
    setInquiryData(data)
  }

  return (
    <div className="min-h-screen theme-bg">
      {/* Header */}
      <header className="theme-header p-8 flex justify-between items-center">
        <h1 className="text-4xl font-bold theme-text">Dealer Dashboard</h1>
        <Button variant="outline" className="theme-button-outline relative p-4">
          <Bell className="h-8 w-8" />
          {notifications > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-lg">
              {notifications}
            </span>
          )}
        </Button>
      </header>

      {/* Main Content */}
      <main className="p-12 space-y-12">
        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {overviewData.map((item, index) => (
            <OverviewCard key={index} data={item} />
          ))}
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Card className="theme-card">
            <CardHeader>
              <CardTitle className="text-2xl">Monthly Sales</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={salesData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" tick={{ fontSize: 14 }} />
                  <YAxis tick={{ fontSize: 14 }} />
                  <Tooltip contentStyle={{ fontSize: 14 }} />
                  <Legend wrapperStyle={{ fontSize: 14 }} />
                  <Bar dataKey="value" name="Sales" fill="var(--chart-1)" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
          <Card className="theme-card">
            <CardHeader>
              <CardTitle className="text-2xl">Customer Engagement</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={engagementData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" tick={{ fontSize: 14 }} />
                  <YAxis tick={{ fontSize: 14 }} />
                  <Tooltip contentStyle={{ fontSize: 14 }} />
                  <Legend wrapperStyle={{ fontSize: 14 }} />
                  <Bar dataKey="value" name="Engagement" fill="var(--chart-2)" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Inventory Table */}
        <InventoryTable data={inventoryData} />

        {/* Inquiries and Promotion Form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <InquiryList data={inquiryData} />
          <PromotionForm />
        </div>
      </main>
    </div>
  )
}

