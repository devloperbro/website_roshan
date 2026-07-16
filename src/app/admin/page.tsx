import type { Metadata } from "next";
import { DollarSign, Package, TrendingUp, Users } from "lucide-react";
import { AdminShell } from "@/components/admin/admin-shell";
import { Card, CardContent } from "@/components/ui/card";
import { RevenueChart } from "@/components/admin/revenue-chart";
import { revenueSummary } from "@/lib/data/dashboard";
import { formatINR } from "@/lib/data/products";

export const metadata: Metadata = { title: "Admin Overview" };

const cards = [
  { title: "Total Revenue", icon: DollarSign, value: formatINR(revenueSummary.totalRevenue) },
  { title: "Total Orders", icon: Package, value: revenueSummary.totalOrders.toLocaleString("en-IN") },
  { title: "Active Customers", icon: Users, value: revenueSummary.activeCustomers.toLocaleString("en-IN") },
  { title: "Avg. Order Value", icon: TrendingUp, value: formatINR(revenueSummary.avgOrderValue) },
];

export default function AdminOverviewPage() {
  return (
    <AdminShell>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((card) => (
          <Card key={card.title}>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <p className="text-sm text-muted-foreground">{card.title}</p>
                <card.icon className="size-4 text-brand-secondary" />
              </div>
              <p className="mt-2 text-2xl font-bold text-brand-primary">{card.value}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="mt-6">
        <CardContent className="pt-6">
          <p className="mb-4 text-sm font-semibold">Monthly Revenue Trend</p>
          <RevenueChart data={revenueSummary.monthlyRevenue} />
        </CardContent>
      </Card>
    </AdminShell>
  );
}
