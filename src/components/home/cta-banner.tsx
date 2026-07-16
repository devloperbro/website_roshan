"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CtaBanner() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-between gap-6 rounded-3xl bg-brand-primary px-8 py-12 text-center text-white sm:flex-row sm:text-left"
        >
          <div>
            <h2 className="text-2xl font-bold sm:text-3xl">Ready to ship with confidence?</h2>
            <p className="mt-2 max-w-xl text-white/80">
              Get an instant quote and book your first shipment in under five minutes.
            </p>
          </div>
          <Button asChild size="lg" className="bg-brand-accent text-brand-primary hover:bg-brand-accent/90">
            <Link href="/book-shipment">
              Book Shipment <ArrowRight className="ml-1 size-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
