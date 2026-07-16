"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Bell,
  FileText,
  LayoutDashboard,
  MapPin,
  PackageSearch,
} from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { title: "Bookings", href: "/dashboard", icon: LayoutDashboard },
  { title: "Shipment History", href: "/dashboard/shipment-history", icon: PackageSearch },
  { title: "Saved Addresses", href: "/dashboard/saved-addresses", icon: MapPin },
  { title: "Notifications", href: "/dashboard/notifications", icon: Bell },
  { title: "Invoices", href: "/dashboard/invoices", icon: FileText },
];

export function DashboardShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <h1 className="text-2xl font-bold text-brand-primary">Customer Dashboard</h1>
      <p className="mt-1 text-sm text-muted-foreground">
        Manage your bookings, addresses, and invoices in one place.
      </p>

      <div className="mt-8 grid gap-8 lg:grid-cols-[240px_1fr]">
        <aside className="flex gap-2 overflow-x-auto lg:flex-col">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-2 whitespace-nowrap rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted",
                pathname === item.href && "bg-brand-primary/10 text-brand-primary"
              )}
            >
              <item.icon className="size-4" />
              {item.title}
            </Link>
          ))}
        </aside>
        <div>{children}</div>
      </div>
    </div>
  );
}
