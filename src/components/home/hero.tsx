"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, PackageCheck, ShieldCheck, Timer } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/constants";
import { siteImages } from "@/lib/images";

const highlights = [
  { icon: Timer, label: "Same-day dispatch" },
  { icon: ShieldCheck, label: "Insured shipments" },
  { icon: PackageCheck, label: "50,000+ deliveries/month" },
];

export function Hero() {
  return (
    <section className="relative min-h-[600px] overflow-hidden">
      <Image
        src={siteImages.heroBackground}
        alt="Logistics truck on highway at sunset"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/95 via-brand-primary/85 to-brand-primary/50" />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center rounded-full bg-brand-accent/90 px-3 py-1 text-sm font-medium text-brand-primary">
            Trusted by 5,000+ businesses across India
          </span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            {siteConfig.tagline}
          </h1>
          <p className="mt-5 max-w-xl text-lg text-white/85">
            {siteConfig.name} connects your business to a nationwide logistics network — from
            same-day parcels to full truckload freight, warehousing, and international shipping.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button asChild size="lg" className="bg-brand-primary hover:bg-brand-primary/90">
              <Link href="/book-shipment">
                Book a Shipment <ArrowRight className="ml-1 size-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/track-shipment">Track Shipment</Link>
            </Button>
          </div>
          <div className="mt-10 flex flex-wrap gap-6">
            {highlights.map((item) => (
              <div key={item.label} className="flex items-center gap-2 text-sm font-medium text-white">
                <item.icon className="size-5 text-brand-accent" />
                {item.label}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="relative"
        >
          <div className="relative rounded-3xl border border-border bg-white p-6 shadow-xl">
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl bg-brand-primary/5 p-5">
                <p className="text-3xl font-bold text-brand-primary">98.6%</p>
                <p className="mt-1 text-sm text-muted-foreground">On-time delivery rate</p>
              </div>
              <div className="rounded-2xl bg-brand-secondary/10 p-5">
                <p className="text-3xl font-bold text-brand-secondary">24</p>
                <p className="mt-1 text-sm text-muted-foreground">States covered</p>
              </div>
              <div className="rounded-2xl bg-brand-accent/15 p-5">
                <p className="text-3xl font-bold text-brand-primary">100+</p>
                <p className="mt-1 text-sm text-muted-foreground">Service catalog items</p>
              </div>
              <div className="rounded-2xl bg-muted p-5">
                <p className="text-3xl font-bold text-brand-primary">3,200+</p>
                <p className="mt-1 text-sm text-muted-foreground">Fleet vehicles</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
