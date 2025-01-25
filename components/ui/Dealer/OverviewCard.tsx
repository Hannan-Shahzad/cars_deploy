import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/User/card"
import type { OverviewCardData } from "@/types/dashboard"

interface OverviewCardProps {
  data: OverviewCardData
}

export default function OverviewCard({ data }: OverviewCardProps) {
  return (
    <Card className="theme-card">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
        <CardTitle className="text-xl font-medium">{data.title}</CardTitle>
        <data.icon className="h-8 w-8 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-4xl font-bold">{data.value}</div>
        <p className="text-lg text-muted-foreground mt-2">{data.change}</p>
      </CardContent>
    </Card>
  )
}

