import type { Metadata } from "next";
import { DashboardShell } from "@/components/dashboard/dashboard-shell";
import { DashboardHistoryTable } from "@/components/dashboard/user-data";

export const metadata: Metadata = { title: "Shipment History" };

export default function ShipmentHistoryPage() {
  return (
    <DashboardShell>
      <DashboardHistoryTable />
    </DashboardShell>
  );
}
