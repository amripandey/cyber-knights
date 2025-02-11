import type React from "react"; // Import React
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { TopNav } from "@/components/top-nav";
import { StickyInput } from "@/components/sticky-input";
import {
  BarChart3,
  Briefcase,
  Home,
  LayoutDashboard,
  LifeBuoy,
  Settings,
  Users,
} from "lucide-react";
import Link from "next/link";
// import { usePathname } from "next/navigation"; // Import usePathname

export default function Layout({ children }: { children: React.ReactNode }) {
  // const pathname = usePathname(); // Get the current pathname
  
  // const getLinkClass = (href: string) => {
  //   return pathname === href
  //     ? "w-full justify-start gap-2 bg-blue-100 text-blue-600"
  //     : "w-full justify-start gap-2";
  // };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 flex flex-col">
      <div className="flex-grow grid lg:grid-cols-[280px_1fr]">
        {/* Sidebar */}
        <aside className="border-r bg-white flex flex-col h-screen">
          <div className="flex h-16 items-center gap-2 border-b px-6">
            <Briefcase className="h-6 w-6 text-blue-600" />
            <span className="font-bold text-blue-600">Udhyamshil Nepal</span>
          </div>
          <div className="px-4 py-4">
            <Input placeholder="Search" className="bg-gray-100" />
          </div>
          <nav className="space-y-2 px-2 flex-grow overflow-y-auto">
            <Link href="/dashboard">
              <Button variant="ghost" className="w-full justify-start gap-2">
                <LayoutDashboard className="h-4 w-4" />
                Chat
              </Button>
            </Link>

            <Link href={"/dashboard/Analytics"}>
              <Button variant="ghost" className="w-full justify-start gap-2">
                <BarChart3 className="h-4 w-4" />
                Analytics
              </Button>
            </Link>

            <Link href="/dashboard/Support">
              <Button variant="ghost" className="w-full justify-start gap-2">
                <LifeBuoy className="h-4 w-4" />
                Support
              </Button>
            </Link>

            <Button variant="ghost" className="w-full justify-start gap-2">
              <Settings className="h-4 w-4" />
              Settings
            </Button>
          </nav>
        </aside>

        {/* Main Content */}
        <div className="flex flex-col h-screen">
          <TopNav />
          <main className="p-6 flex flex-col overflow-y-auto flex-grow">
            {/* Content will be injected here */}
            {children}
          </main>
          <StickyInput />
        </div>
      </div>
    </div>
  );
}
