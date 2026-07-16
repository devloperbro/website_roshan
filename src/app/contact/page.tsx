import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/contact/contact-form";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Nirpakh LogisticPro for support, partnership, or general inquiries.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="text-4xl font-bold text-brand-primary sm:text-5xl">Get in Touch</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Our support team typically responds within 24 hours.
        </p>
      </div>

      <div className="mt-14 grid gap-10 lg:grid-cols-3">
        <div className="space-y-6 lg:col-span-1">
          <div className="flex items-start gap-3">
            <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-brand-primary/10 text-brand-primary">
              <MapPin className="size-5" />
            </span>
            <div>
              <p className="font-semibold">Head Office</p>
              <p className="text-sm text-muted-foreground">{siteConfig.address}</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-brand-primary/10 text-brand-primary">
              <Phone className="size-5" />
            </span>
            <div>
              <p className="font-semibold">Phone</p>
              <p className="text-sm text-muted-foreground">{siteConfig.supportPhone}</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-brand-primary/10 text-brand-primary">
              <Mail className="size-5" />
            </span>
            <div>
              <p className="font-semibold">Email</p>
              <p className="text-sm text-muted-foreground">{siteConfig.supportEmail}</p>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-border bg-white p-6 shadow-sm lg:col-span-2 sm:p-8">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
