// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/User/card"
// import type { Inquiry } from "@/types/dashboard"

// interface InquiryListProps {
//   data: Inquiry[]
// }

// export default function InquiryList({ data }: InquiryListProps) {
//   return (
//     <Card className="theme-card">
//       <CardHeader>
//         <CardTitle className="text-3xl">Recent Inquiries</CardTitle>
//       </CardHeader>
//       <CardContent>
//         <div className="space-y-8">
//           {data.map((inquiry) => (
//             <div key={inquiry.id} className="flex items-center space-x-6">
//               <div
//                 className={`rounded-full ${inquiry.avatarColor} w-16 h-16 flex items-center justify-center text-white text-2xl font-bold`}
//               >
//                 {inquiry.initials}
//               </div>
//               <div>
//                 <p className="font-medium text-xl">{inquiry.name}</p>
//                 <p className="text-lg text-muted-foreground">{inquiry.interest}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </CardContent>
//     </Card>
//   )
// }








import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/User/card"
import type { Inquiry } from "@/types/dashboard"
import { Button } from "@/components/ui/button"

interface InquiryListProps {
  data: Inquiry[]
}

export default function InquiryList({ data }: InquiryListProps) {
  return (
    <Card className="theme-card">
      <CardHeader>
        <CardTitle className="text-lg sm:text-xl flex justify-between items-center">
          Recent Inquiries
          <Button className="theme-button-outline theme-button-solid" size="sm">
            View All
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {data.map((inquiry) => (
            <div key={inquiry.id} className="flex items-center space-x-2 sm:space-x-4">
              <div
                className={`rounded-full ${inquiry.avatarColor} w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center text-white font-bold text-xs sm:text-sm`}
              >
                {inquiry.initials}
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-medium text-xs sm:text-sm truncate">{inquiry.name}</p>
                <p className="text-xs text-muted-foreground truncate">{inquiry.interest}</p>
              </div>
              <Button  size="sm" className="text-xs theme-button-outline theme-button-solid">
                Respond
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

