import type { Metadata } from "next";
import { DashboardShell } from "@/components/dashboard/dashboard-shell";
import { DashboardInvoicesTable } from "@/components/dashboard/user-data";

export const metadata: Metadata = { title: "Invoices" };

export default function InvoicesPage() {
  return (
    <DashboardShell>
      <DashboardInvoicesTable />
    </DashboardShell>
  );
}
