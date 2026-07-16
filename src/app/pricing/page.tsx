import type { Metadata } from "next";
import { Search, Package } from "lucide-react";
import { PricingCatalog } from "@/components/pricing/pricing-catalog";
import { formatINR, products } from "@/lib/data/products";

export const metadata: Metadata = {
  title: "Pricing - 100+ Logistics Services",
  description:
    "Browse transparent pricing for 100+ logistics services, from documents and small parcels to full truckload freight and international shipping, starting at ₹100.",
};

export default function PricingPage() {
  const min = Math.min(...products.map((p) => p.price));
  const max = Math.max(...products.map((p) => p.price));

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-brand-primary/10 px-3 py-1 text-sm font-medium text-brand-primary">
          <Package className="size-4" /> {products.length} services available
        </span>
        <h1 className="mt-4 text-4xl font-bold text-brand-primary sm:text-5xl">
          Transparent Pricing for Every Shipment
        </h1>
        <p className="mt-4 text-muted-foreground">
          From a single document courier at {formatINR(min)} to full container shipping at{" "}
          {formatINR(max)}, explore our complete service catalog below.
        </p>
      </div>

      <div className="mt-12">
        <PricingCatalog />
      </div>

      <div className="mt-16 rounded-2xl bg-muted/50 p-8 text-center">
        <Search className="mx-auto size-8 text-brand-secondary" />
        <h2 className="mt-3 text-xl font-semibold">Need a custom quote?</h2>
        <p className="mt-2 text-muted-foreground">
          Use our Book Shipment wizard for an instant, itemized cost estimate tailored to your
          package.
        </p>
      </div>
    </div>
  );
}
