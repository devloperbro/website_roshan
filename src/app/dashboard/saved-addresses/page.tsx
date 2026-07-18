import type { Metadata } from "next";
import { MapPin, Plus } from "lucide-react";
import { DashboardShell } from "@/components/dashboard/dashboard-shell";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = { title: "Saved Addresses" };

const exampleAddresses = [
  {
    id: "1",
    label: "Home",
    fullName: "Your Name",
    phone: "98765 43210",
    addressLine: "123 Main Street, Apartment 4B",
    city: "Mumbai",
    state: "Maharashtra",
    pincode: "400050",
  },
  {
    id: "2",
    label: "Office",
    fullName: "Your Name",
    phone: "98765 43210",
    addressLine: "Suite 500, Tech Park Tower",
    city: "Bangalore",
    state: "Karnataka",
    pincode: "560095",
  },
];

export default function SavedAddressesPage() {
  return (
    <DashboardShell>
      <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          {exampleAddresses.length} saved address{exampleAddresses.length !== 1 ? "es" : ""}
        </p>
        <Button className="bg-brand-primary hover:bg-brand-primary/90">
          <Plus className="mr-2 size-4" /> Add Address
        </Button>
      </div>

      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        {exampleAddresses.map((address) => (
          <Card key={address.id}>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2 font-semibold">
                  <MapPin className="size-4 text-brand-secondary" />
                  {address.label}
                </span>
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
