import { Button } from "@/components/ui/button"
import { PlusCircle, FolderPlus, FileText, Settings } from "lucide-react"

export function TopNav() {
  return (
    <nav className="bg-white border-b px-4 py-2 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <Button variant="ghost" size="sm" className="text-gray-600 hover:text-blue-600">
          <PlusCircle className="h-4 w-4 mr-2" />
          New Project
        </Button>
        <Button variant="ghost" size="sm" className="text-gray-600 hover:text-blue-600">
          <FolderPlus className="h-4 w-4 mr-2" />
          New Folder
        </Button>
        <Button variant="ghost" size="sm" className="text-gray-600 hover:text-blue-600">
          <FileText className="h-4 w-4 mr-2" />
          Documents
        </Button>
      </div>
      <Button variant="ghost" size="sm" className="text-gray-600 hover:text-blue-600">
        <Settings className="h-4 w-4 mr-2" />
        Project Settings
      </Button>
    </nav>
  )
}

