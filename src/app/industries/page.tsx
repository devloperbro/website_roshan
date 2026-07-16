import type { Metadata } from "next";
import * as Icons from "lucide-react";
import { industries } from "@/lib/data/industries";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Industries We Serve",
  description:
    "Nirpakh LogisticPro powers supply chains across e-commerce, manufacturing, pharma, FMCG, automotive, and more.",
};

export default function IndustriesPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-4xl font-bold text-brand-primary sm:text-5xl">Industries We Serve</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Tailored logistics solutions built around the unique needs of every industry.
        </p>
      </div>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {industries.map((industry) => {
          const Icon = (Icons as unknown as Record<string, Icons.LucideIcon>)[industry.icon] ?? Icons.Package;
          return (
            <Card key={industry.id} className="h-full">
              <CardContent className="pt-6">
                <span className="flex size-12 items-center justify-center rounded-xl bg-brand-primary/10 text-brand-primary">
                  <Icon className="size-6" />
                </span>
                <h3 className="mt-4 text-lg font-semibold">{industry.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{industry.description}</p>
                <ul className="mt-4 space-y-2">
                  {industry.solutions.map((solution) => (
                    <li key={solution} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-brand-secondary" />
                      {solution}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
