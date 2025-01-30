import { Button } from "@/components/ui/button"
import { Plus, FileText, Calendar, Settings } from "lucide-react"

export default function QuickActions() {
  return (
    <div className="flex flex-wrap gap-2 sm:gap-4">
      <Button className="theme-button-outline flex items-center text-xs sm:text-sm">
        <Plus className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" /> Add Vehicle
      </Button>
      <Button className="theme-button-outline flex items-center text-xs sm:text-sm">
        <FileText className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" /> Report
      </Button>
      <Button className="theme-button-outline flex items-center text-xs sm:text-sm">
        <Calendar className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" /> Test Drive
      </Button>
      <Button className="theme-button-outline flex items-center text-xs sm:text-sm">
        <Settings className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" /> Settings
      </Button>
    </div>
  )
}

