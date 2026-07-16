import type { Metadata } from "next";
import Image from "next/image";
import { CheckCircle2, Target, Users, Award } from "lucide-react";
import { siteConfig } from "@/lib/constants";
import { siteImages } from "@/lib/images";

export const metadata: Metadata = {
  title: "About Us",
  description: `Learn about ${siteConfig.name}'s mission, values, and the nationwide logistics network powering our deliveries.`,
};

const values = [
  { icon: Target, title: "Reliability", description: "98.6% on-time delivery across every route we serve." },
  { icon: Users, title: "Customer First", description: "Dedicated support teams for every business size." },
  { icon: Award, title: "Excellence", description: "ISO-aligned processes across warehousing and transport." },
];

const milestones = [
  { year: "2016", text: "Nirpakh LogisticPro founded with a fleet of 12 vehicles in Mumbai." },
  { year: "2019", text: "Expanded to 10 states with dedicated warehousing hubs." },
  { year: "2022", text: "Launched e-commerce fulfillment and cold chain logistics." },
  { year: "2026", text: "Operating across 24 states with 3,200+ fleet vehicles." },
];

export default function AboutPage() {
  return (
    <div>
      <div className="relative h-56 w-full overflow-hidden sm:h-72">
        <Image
          src={siteImages.aboutBanner}
          alt="Shipping containers at a cargo port"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-brand-primary/70" />
        <div className="relative flex h-full flex-col items-center justify-center px-4 text-center">
          <h1 className="text-4xl font-bold text-white sm:text-5xl">About {siteConfig.name}</h1>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <p className="mt-4 text-lg text-muted-foreground">
          We build the logistics infrastructure that lets businesses of every size move goods
          confidently — across the street or across the country.
        </p>
      </div>

      <div className="mt-16 grid gap-6 sm:grid-cols-3">
        {values.map((value) => (
          <div key={value.title} className="rounded-2xl border border-border p-6 text-center">
            <span className="mx-auto flex size-12 items-center justify-center rounded-xl bg-brand-primary/10 text-brand-primary">
              <value.icon className="size-6" />
            </span>
            <h3 className="mt-4 text-lg font-semibold">{value.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{value.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-20">
        <h2 className="text-center text-3xl font-bold text-brand-primary">Our Journey</h2>
        <div className="mx-auto mt-10 max-w-2xl space-y-6">
          {milestones.map((milestone) => (
            <div key={milestone.year} className="flex gap-4">
              <div className="flex size-14 shrink-0 items-center justify-center rounded-full bg-brand-secondary text-sm font-bold text-white">
                {milestone.year}
              </div>
              <div className="flex items-center">
                <p className="text-muted-foreground">{milestone.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-20 rounded-2xl bg-brand-primary/5 p-8">
        <h2 className="text-2xl font-bold text-brand-primary">Why businesses choose us</h2>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          {[
            "Pan-India network across 24 states",
            "100+ transparently priced service options",
            "Real-time shipment tracking for every order",
            "Dedicated account managers for enterprise clients",
            "Climate-controlled and bonded warehousing",
            "Abstracted payment layer ready for Razorpay/Stripe",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm">
              <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-brand-secondary" />
              {item}
            </li>
          ))}
        </ul>
      </div>
      </div>
    </div>
  );
}
