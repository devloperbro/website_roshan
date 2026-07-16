import Link from "next/link";
import { ArrowRight, Box, Globe, Truck, Warehouse, Zap, ShieldCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  { icon: Zap, title: "Express Delivery", description: "Same-day and next-day dispatch for time-critical shipments.", href: "/services" },
  { icon: Box, title: "E-commerce Fulfillment", description: "Pick, pack, and dispatch integrated with your online store.", href: "/services" },
  { icon: Truck, title: "Freight & Trucking", description: "LTL and full truckload freight across every major route.", href: "/services" },
  { icon: Warehouse, title: "Warehousing", description: "Climate-controlled and bonded storage across regional hubs.", href: "/services" },
  { icon: ShieldCheck, title: "Specialized Handling", description: "Fragile, medical, and high-value item handling done right.", href: "/services" },
  { icon: Globe, title: "International Shipping", description: "Customs clearance, air and sea freight, global reach.", href: "/services" },
];

export function ServicesOverview() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-brand-primary sm:text-4xl">
            End-to-end logistics, under one roof
          </h2>
          <p className="mt-3 text-muted-foreground">
            From a single document to a full container load, we move it reliably.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Link key={service.title} href={service.href}>
              <Card className="h-full transition-shadow hover:shadow-lg">
                <CardContent className="pt-6">
                  <span className="flex size-12 items-center justify-center rounded-xl bg-brand-primary/10 text-brand-primary">
                    <service.icon className="size-6" />
                  </span>
                  <h3 className="mt-4 text-lg font-semibold">{service.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{service.description}</p>
                  <span className="mt-4 inline-flex items-center text-sm font-medium text-brand-secondary">
                    Learn more <ArrowRight className="ml-1 size-4" />
                  </span>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
