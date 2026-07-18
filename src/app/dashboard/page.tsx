import type { Metadata } from "next";
import { DashboardShell } from "@/components/dashboard/dashboard-shell";
import { DashboardSummaryCards, DashboardBookingsTable } from "@/components/dashboard/user-data";

export const metadata: Metadata = { title: "My Bookings" };

export default function DashboardPage() {
  return (
    <DashboardShell>
      <DashboardSummaryCards />
      <DashboardBookingsTable />
    </DashboardShell>
  );
}
