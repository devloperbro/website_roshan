import type { Metadata } from "next";
import { AdminShell } from "@/components/admin/admin-shell";
import { Card, CardContent } from "@/components/ui/card";
import { RevenueChart } from "@/components/admin/revenue-chart";
import { revenueSummary, adminOrders } from "@/lib/data/dashboard";

export const metadata: Metadata = { title: "Admin Analytics" };

export default function AdminAnalyticsPage() {
  const statusCounts = adminOrders.reduce<Record<string, number>>((acc, order) => {
    acc[order.status] = (acc[order.status] ?? 0) + 1;
    return acc;
  }, {});

  return (
    <AdminShell>
      <Card>
        <CardContent className="pt-6">
          <p className="mb-4 text-sm font-semibold">Monthly Revenue Trend</p>
          <RevenueChart data={revenueSummary.monthlyRevenue} />
        </CardContent>
      </Card>

      <Card className="mt-6">
        <CardContent className="pt-6">
          <p className="mb-4 text-sm font-semibold">Orders by Status</p>
          <div className="grid gap-3 sm:grid-cols-3">
            {Object.entries(statusCounts).map(([status, count]) => (
              <div key={status} className="rounded-xl border border-border p-4">
                <p className="text-sm text-muted-foreground">{status}</p>
                <p className="mt-1 text-2xl font-bold text-brand-primary">{count}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </AdminShell>
  );
}
