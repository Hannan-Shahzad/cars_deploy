// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/User/card"
// import type { InventoryItem } from "@/types/dashboard"
// import { formatCurrency } from "@/utils/formatCurrency"

// interface InventoryTableProps {
//   data: InventoryItem[]
// }

// export default function InventoryTable({ data }: InventoryTableProps) {
//   return (
//     <Card className="theme-card">
//       <CardHeader>
//         <CardTitle className="text-3xl">Recent Inventory</CardTitle>
//       </CardHeader>
//       <CardContent>
//         <div className="overflow-x-auto">
//           <table className="w-full">
//             <thead>
//               <tr className="theme-text text-xl">
//                 <th className="text-left p-4">Model</th>
//                 <th className="text-left p-4">Year</th>
//                 <th className="text-left p-4">Price</th>
//                 <th className="text-left p-4">Status</th>
//               </tr>
//             </thead>
//             <tbody>
//               {data.map((item) => (
//                 <tr key={item.id} className="theme-text text-lg">
//                   <td className="p-4">{item.model}</td>
//                   <td className="p-4">{item.year}</td>
//                   <td className="p-4">{formatCurrency(item.price)}</td>
//                   <td className="p-4">
//                     <span
//                       className={`py-2 px-4 rounded-full text-base ${
//                         item.status === "Available"
//                           ? "bg-green-200 text-green-800"
//                           : item.status === "Pending"
//                             ? "bg-yellow-200 text-yellow-800"
//                             : "bg-red-200 text-red-800"
//                       }`}
//                     >
//                       {item.status}
//                     </span>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </CardContent>
//     </Card>
//   )
// }











import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/User/card"
import type { InventoryItem } from "@/types/dashboard"
import { formatCurrency } from "@/utils/formatCurrency"
import { Button } from "@/components/ui/button"

interface InventoryTableProps {
  data: InventoryItem[]
}

export default function InventoryTable({ data }: InventoryTableProps) {
  return (
    <Card className="theme-card">
      <CardHeader>
        <CardTitle className="text-lg sm:text-xl flex justify-between items-center">
          Recent Inventory
          <Button className="theme-button-outline theme-button-solid" size="sm">
            View All
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="theme-text text-xs sm:text-sm">
                <th className="text-left p-2">Model</th>
                <th className="text-left p-2">Year</th>
                <th className="text-left p-2">Price</th>
                <th className="text-left p-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.id} className="theme-text text-xs sm:text-sm">
                  <td className="p-2">{item.model}</td>
                  <td className="p-2">{item.year}</td>
                  <td className="p-2">{formatCurrency(item.price)}</td>
                  <td className="p-2">
                    <span
                      className={`py-1 px-2 rounded-full text-xs ${
                        item.status === "Available"
                          ? "bg-green-200 text-green-800"
                          : item.status === "Pending"
                            ? "bg-yellow-200 text-yellow-800"
                            : "bg-red-200 text-red-800"
                      }`}
                    >
                      {item.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  )
}

