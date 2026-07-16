import type { Metadata } from "next";
import { DashboardShell } from "@/components/dashboard/dashboard-shell";
import { Card, CardContent } from "@/components/ui/card";
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

export const metadata: Metadata = { title: "Shipment History" };

export default function ShipmentHistoryPage() {
  return (
    <DashboardShell>
      <Card>
        <CardContent className="pt-6">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Tracking ID</TableHead>
                <TableHead>Booking Date</TableHead>
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
                  <TableCell>{booking.status}</TableCell>
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
