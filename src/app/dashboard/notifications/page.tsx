import type { Metadata } from "next";
import { Bell } from "lucide-react";
import { DashboardShell } from "@/components/dashboard/dashboard-shell";
import { Card, CardContent } from "@/components/ui/card";
import { notifications } from "@/lib/data/dashboard";
import { cn } from "@/lib/utils";

export const metadata: Metadata = { title: "Notifications" };

export default function NotificationsPage() {
  return (
    <DashboardShell>
      <div className="space-y-3">
        {notifications.map((notification) => (
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
