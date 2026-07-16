import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Box, Globe, ShieldCheck, Truck, Warehouse, Zap, type LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { productCategories, products } from "@/lib/data/products";
import { siteImages } from "@/lib/images";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Nirpakh LogisticPro's full range of services: express delivery, e-commerce fulfillment, freight, warehousing, and international shipping.",
};

const icons: Record<string, LucideIcon> = {
  "Documents & Small Parcels": Box,
  "Standard Courier": Truck,
  "Express Delivery": Zap,
  "Packaging Supplies": Box,
  "E-commerce Fulfillment": Box,
  "Fragile & Specialized Handling": ShieldCheck,
  "Warehousing & Storage": Warehouse,
  "LTL Freight": Truck,
  "Full Truckload & Corporate Bulk": Truck,
  "International & Relocation": Globe,
};

export default function ServicesPage() {
  return (
    <div>
      <div className="relative h-56 w-full overflow-hidden sm:h-72">
        <Image
          src={siteImages.servicesBanner}
          alt="Warehouse with stacked pallets"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-brand-primary/70" />
        <div className="relative flex h-full flex-col items-center justify-center px-4 text-center">
          <h1 className="text-4xl font-bold text-white sm:text-5xl">Our Services</h1>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <p className="mt-4 text-lg text-muted-foreground">
          {products.length} services across {productCategories.length} categories — from
          documents to full container loads.
        </p>
      </div>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {productCategories.map((category) => {
          const items = products.filter((p) => p.category === category);
          const Icon = icons[category] ?? Box;
          const min = Math.min(...items.map((p) => p.price));
          const max = Math.max(...items.map((p) => p.price));

          return (
            <Card key={category} className="flex h-full flex-col">
              <CardContent className="flex h-full flex-col pt-6">
                <span className="flex size-12 items-center justify-center rounded-xl bg-brand-primary/10 text-brand-primary">
                  <Icon className="size-6" />
                </span>
                <h3 className="mt-4 text-lg font-semibold">{category}</h3>
                <p className="mt-2 flex-1 text-sm text-muted-foreground">{items[0]?.description}</p>
                <p className="mt-4 text-sm font-medium text-brand-secondary">
                  ₹{min.toLocaleString("en-IN")} - ₹{max.toLocaleString("en-IN")} · {items.length} options
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="mt-16 flex justify-center">
        <Button asChild size="lg" className="bg-brand-primary hover:bg-brand-primary/90">
          <Link href="/pricing">
            View Full Pricing Catalog <ArrowRight className="ml-1 size-4" />
          </Link>
        </Button>
      </div>
      </div>
    </div>
  );
}
