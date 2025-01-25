export interface OverviewCardData {
    title: string
    value: string | number
    change: string
    icon: React.ElementType
  }
  
  export interface ChartData {
    month: string
    value: number
  }
  
  export interface InventoryItem {
    id: string
    model: string
    year: number
    price: number
    status: "Available" | "Pending" | "Sold"
  }
  
  export interface Inquiry {
    id: string
    name: string
    interest: string
    initials: string
    avatarColor: string
  }
  
  