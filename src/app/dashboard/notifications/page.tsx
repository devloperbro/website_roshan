import type { Metadata } from "next";
import { Bell } from "lucide-react";
import { DashboardShell } from "@/components/dashboard/dashboard-shell";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export const metadata: Metadata = { title: "Notifications" };

const exampleNotifications = [
  {
    id: "1",
    title: "Shipment Out For Delivery",
    description: "LGX10098213 is out for delivery in Pune.",
    time: "2 hours ago",
    read: false,
  },
  {
    id: "2",
    title: "Shipment In Transit",
    description: "LGX10023456 has left the Mumbai sorting hub.",
    time: "6 hours ago",
    read: false,
  },
  {
    id: "3",
    title: "Booking Confirmed",
    description: "Your shipment LGX10056789 has been confirmed.",
    time: "1 day ago",
    read: true,
  },
];

export default function NotificationsPage() {
  return (
    <DashboardShell>
      <div className="space-y-3">
        {exampleNotifications.map((notification) => (
          <Card key={notification.id} className={cn(!notification.read && "border-brand-primary/40")}>
            <CardContent className="flex items-start gap-3 pt-6">
              <span
                className={cn(
                  "flex size-9 shrink-0 items-center justify-center rounded-full",
                  notification.read ? "bg-muted text-muted-foreground" : "bg-brand-primary/10 text-brand-primary"
                )}
              >
                <Bell className="size-4" />
              </span>
              <div className="flex-1">
                <p className="font-medium">{notification.title}</p>
                <p className="text-sm text-muted-foreground">{notification.description}</p>
              </div>
              <span className="whitespace-nowrap text-xs text-muted-foreground">{notification.time}</span>
            </CardContent>
          </Card>
        ))}
      </div>
    </DashboardShell>
  );
}
