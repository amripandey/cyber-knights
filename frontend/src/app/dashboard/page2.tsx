import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { MetricsCard } from "@/components/metrics-card";
import { StatsChart } from "@/components/stats-chart";
import { BusinessTable } from "@/components/business-table";

import {
  BarChart3,
  ChevronDown,
  Briefcase,
  Home,
  LayoutDashboard,
  LifeBuoy,
  Settings,
  Users,
} from "lucide-react";

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <div className="grid lg:grid-cols-[280px_1fr]">
        <aside className="border-r bg-white">
          <div className="flex h-16 items-center gap-2 border-b px-6">
            <Briefcase className="h-6 w-6 text-blue-600" />
            <span className="font-bold text-blue-600">Udhyami Nepal</span>
          </div>
          <div className="px-4 py-4">
            <Input placeholder="Search" className="bg-gray-100" />
          </div>
          <nav className="space-y-2 px-2">
            <Button variant="ghost" className="w-full justify-start gap-2">
              <LayoutDashboard className="h-4 w-4" />
              Dashboard
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-2">
              <BarChart3 className="h-4 w-4" />
              Analytics
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-2">
              <Users className="h-4 w-4" />
              Entrepreneurs
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-2">
              <Home className="h-4 w-4" />
              Businesses
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-2">
              <Briefcase className="h-4 w-4" />
              Investments
              <ChevronDown className="ml-auto h-4 w-4" />
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-2">
              <LifeBuoy className="h-4 w-4" />
              Support
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-2">
              <Settings className="h-4 w-4" />
              Settings
            </Button>
          </nav>
        </aside>
        <main className="p-6">
          <div className="mb-6 flex items-center justify-between">
            <div className="space-y-1">
              <h1 className="text-2xl font-bold">Udhyami Nepal Overview</h1>
              <div className="text-sm text-muted-foreground">
                Empowering Nepali Entrepreneurs
              </div>
            </div>
            <Button variant="outline" className="gap-2">
              All Regions
              <ChevronDown className="h-4 w-4" />
            </Button>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            <MetricsCard
              title="Total Businesses"
              value="1,234"
              change={{ value: "+56", percentage: "+4.7%", isPositive: true }}
            />
            <MetricsCard
              title="Total Investments"
              value="$15.6M"
              change={{
                value: "$2.3M",
                percentage: "+17.3%",
                isPositive: true,
              }}
            />
            <MetricsCard
              title="Job Creation"
              value="8,750"
              change={{ value: "+450", percentage: "+5.4%", isPositive: true }}
            />
          </div>
          <Card className="mt-6 p-6">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-semibold">Business Growth</h2>
              <div className="flex gap-2">
                <Button size="sm" variant="ghost">
                  This Year
                </Button>
                <Button size="sm" variant="ghost">
                  Last Year
                </Button>
                <Button size="sm" variant="ghost">
                  All Time
                </Button>
              </div>
            </div>
            <StatsChart />
          </Card>
          <div className="mt-6">
            <h2 className="text-lg font-semibold mb-4">Featured Businesses</h2>
            <BusinessTable />
          </div>
        </main>
      </div>
    </div>
  );
}
