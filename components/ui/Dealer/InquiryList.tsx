import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/User/card"
import type { Inquiry } from "@/types/dashboard"

interface InquiryListProps {
  data: Inquiry[]
}

export default function InquiryList({ data }: InquiryListProps) {
  return (
    <Card className="theme-card">
      <CardHeader>
        <CardTitle className="text-3xl">Recent Inquiries</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-8">
          {data.map((inquiry) => (
            <div key={inquiry.id} className="flex items-center space-x-6">
              <div
                className={`rounded-full ${inquiry.avatarColor} w-16 h-16 flex items-center justify-center text-white text-2xl font-bold`}
              >
                {inquiry.initials}
              </div>
              <div>
                <p className="font-medium text-xl">{inquiry.name}</p>
                <p className="text-lg text-muted-foreground">{inquiry.interest}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

