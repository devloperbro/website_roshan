import type { Metadata } from "next";
import { FaqAccordion } from "@/components/faq/faq-accordion";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Answers to common questions about booking, pricing, tracking, payments, and your account.",
};

export default function FaqPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-brand-primary sm:text-5xl">Frequently Asked Questions</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Can&apos;t find what you&apos;re looking for? Reach out on our Contact page.
        </p>
      </div>
      <div className="mt-12">
        <FaqAccordion />
      </div>
    </div>
  );
}
