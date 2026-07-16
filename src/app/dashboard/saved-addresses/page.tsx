import type { Metadata } from "next";
import { MapPin, Plus, Star } from "lucide-react";
import { DashboardShell } from "@/components/dashboard/dashboard-shell";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { savedAddresses } from "@/lib/data/dashboard";

export const metadata: Metadata = { title: "Saved Addresses" };

export default function SavedAddressesPage() {
  return (
    <DashboardShell>
      <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          {savedAddresses.length} saved address{savedAddresses.length !== 1 ? "es" : ""}
        </p>
        <Button className="bg-brand-primary hover:bg-brand-primary/90">
          <Plus className="mr-2 size-4" /> Add Address
        </Button>
      </div>

      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        {savedAddresses.map((address) => (
          <Card key={address.id}>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2 font-semibold">
                  <MapPin className="size-4 text-brand-secondary" />
                  {address.label}
                </span>
                {address.isDefault && (
                  <span className="flex items-center gap-1 text-xs font-medium text-brand-accent">
                    <Star className="size-3.5 fill-brand-accent" /> Default
                  </span>
                )}
              </div>
              <p className="mt-3 text-sm">{address.fullName} · {address.phone}</p>
              <p className="text-sm text-muted-foreground">
                {address.addressLine}, {address.city}, {address.state} - {address.pincode}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </DashboardShell>
  );
}
