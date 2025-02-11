import { Avatar } from "@/components/ui/avatar"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { MoreHorizontal } from "lucide-react"

const businesses = [
  {
    name: "Tech Innovators",
    owner: "Aarav Sharma",
    industry: "Technology",
    employees: "50-100",
    revenue: "$500,000",
    growth: "+15%",
    fundingStage: "Series A",
    foundedDate: "15.03.2020",
    location: "Kathmandu",
  },
  {
    name: "Green Nepal",
    owner: "Sita Gurung",
    industry: "Renewable Energy",
    employees: "20-50",
    revenue: "$250,000",
    growth: "+22%",
    fundingStage: "Seed",
    foundedDate: "07.09.2021",
    location: "Pokhara",
  },
  {
    name: "Himalayan Crafts",
    owner: "Bijay Tamang",
    industry: "Handicrafts",
    employees: "10-20",
    revenue: "$100,000",
    growth: "+8%",
    fundingStage: "Bootstrapped",
    foundedDate: "22.11.2019",
    location: "Bhaktapur",
  },
]

export function BusinessTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Business</TableHead>
          <TableHead>Industry</TableHead>
          <TableHead>Employees</TableHead>
          <TableHead>Revenue</TableHead>
          <TableHead>Growth</TableHead>
          <TableHead>Funding Stage</TableHead>
          <TableHead>Founded Date</TableHead>
          <TableHead>Location</TableHead>
          <TableHead></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {businesses.map((business) => (
          <TableRow key={business.name}>
            <TableCell className="font-medium">
              <div className="flex items-center gap-2">
                <Avatar className="h-6 w-6">
                  <img src={`/placeholder.svg?height=24&width=24`} alt={business.name} />
                </Avatar>
                <div>
                  <div className="font-medium">{business.name}</div>
                  <div className="text-xs text-muted-foreground">{business.owner}</div>
                </div>
              </div>
            </TableCell>
            <TableCell>{business.industry}</TableCell>
            <TableCell>{business.employees}</TableCell>
            <TableCell>{business.revenue}</TableCell>
            <TableCell className="text-green-500">{business.growth}</TableCell>
            <TableCell>
              <span className="inline-flex items-center rounded-full px-2 py-1 text-xs bg-blue-500/10 text-blue-500">
                {business.fundingStage}
              </span>
            </TableCell>
            <TableCell>{business.foundedDate}</TableCell>
            <TableCell>{business.location}</TableCell>
            <TableCell>
              <MoreHorizontal className="h-4 w-4 text-muted-foreground" />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}