import type { Metadata } from "next";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms of Service for ${siteConfig.name}.`,
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-brand-primary">Terms of Service</h1>
      <p className="mt-2 text-sm text-muted-foreground">Last updated: July 16, 2026</p>

      <div className="mt-8 space-y-6 text-sm leading-relaxed text-foreground">
        <section>
          <h2 className="text-xl font-semibold text-brand-primary">1. Acceptance of Terms</h2>
          <p className="mt-2 text-muted-foreground">
            By booking a shipment or using {siteConfig.name}, you agree to these Terms of Service
            and our Privacy Policy.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-brand-primary">2. Booking & Pricing</h2>
          <p className="mt-2 text-muted-foreground">
            All pricing shown on our Pricing page and within the booking wizard is calculated
            using a transparent formula: base fare, weight charge, express and fragile surcharges,
            and 2% insurance on declared value. Prices are subject to change without prior notice.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-brand-primary">3. Prohibited Items</h2>
          <p className="mt-2 text-muted-foreground">
            You may not ship illegal substances, hazardous materials without proper declaration,
            or items prohibited under applicable Indian and international shipping regulations.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-brand-primary">4. Liability</h2>
          <p className="mt-2 text-muted-foreground">
            Our liability for loss or damage is limited to the declared value of the shipment and
            any insurance purchased at the time of booking.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-brand-primary">5. Payments</h2>
          <p className="mt-2 text-muted-foreground">
            Online payment processing is coming soon. Until then, our support team will confirm
            payment arrangements for each booking individually.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-brand-primary">6. Cancellations</h2>
          <p className="mt-2 text-muted-foreground">
            Shipments may be cancelled free of charge before pickup. Cancellations after pickup
            may be subject to partial charges.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-brand-primary">7. Contact</h2>
          <p className="mt-2 text-muted-foreground">
            Questions about these terms can be directed to {siteConfig.supportEmail}.
          </p>
        </section>
      </div>
    </div>
  );
}
