"use client";

import * as React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { faqs } from "@/lib/data/faqs";

const categories = ["All", "Booking", "Pricing", "Tracking", "Payments", "Account"] as const;

export function FaqAccordion() {
  const [activeCategory, setActiveCategory] = React.useState<(typeof categories)[number]>("All");

  const filtered = faqs.filter(
    (faq) => activeCategory === "All" || faq.category === activeCategory
  );

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            type="button"
          >
            <Badge
              variant={activeCategory === category ? "default" : "outline"}
              className={
                activeCategory === category
                  ? "cursor-pointer bg-brand-primary hover:bg-brand-primary/90"
                  : "cursor-pointer"
              }
            >
              {category}
            </Badge>
          </button>
        ))}
      </div>

      <Accordion className="mt-6">
        {filtered.map((faq) => (
          <AccordionItem key={faq.id} value={faq.id}>
            <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
