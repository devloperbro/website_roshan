import type { Metadata } from "next";
import { DashboardShell } from "@/components/dashboard/dashboard-shell";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { dashboardBookings } from "@/lib/data/dashboard";
import { formatINR } from "@/lib/data/products";

export const metadata: Metadata = { title: "My Bookings" };

const statusColors: Record<string, string> = {
  Booked: "bg-blue-100 text-blue-700",
  "Picked Up": "bg-indigo-100 text-indigo-700",
  Warehouse: "bg-purple-100 text-purple-700",
  "In Transit": "bg-amber-100 text-amber-700",
  "Out For Delivery": "bg-orange-100 text-orange-700",
  Delivered: "bg-green-100 text-green-700",
};

export default function DashboardPage() {
  return (
    <DashboardShell>
      <div className="grid gap-4 sm:grid-cols-3">
        <Card>
          <CardContent className="pt-6">
            <p className="text-sm text-muted-foreground">Total Bookings</p>
            <p className="mt-1 text-2xl font-bold text-brand-primary">{dashboardBookings.length}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <p className="text-sm text-muted-foreground">In Progress</p>
            <p className="mt-1 text-2xl font-bold text-brand-primary">
              {dashboardBookings.filter((b) => b.status !== "Delivered").length}
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <p className="text-sm text-muted-foreground">Total Spent</p>
            <p className="mt-1 text-2xl font-bold text-brand-primary">
              {formatINR(dashboardBookings.reduce((sum, b) => sum + b.amount, 0))}
            </p>
          </CardContent>
        </Card>
      </div>

      <Card className="mt-6">
        <CardContent className="pt-6">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Tracking ID</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Destination</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {dashboardBookings.map((booking) => (
                <TableRow key={booking.id}>
                  <TableCell className="font-mono text-sm">{booking.trackingId}</TableCell>
                  <TableCell>{booking.date}</TableCell>
                  <TableCell>{booking.destination}</TableCell>
                  <TableCell>
                    <Badge className={statusColors[booking.status] ?? ""} variant="secondary">
                      {booking.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">{formatINR(booking.amount)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </DashboardShell>
  );
}
