import type { Metadata } from "next";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy Policy for ${siteConfig.name}.`,
};

export default function PrivacyPolicyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-brand-primary">Privacy Policy</h1>
      <p className="mt-2 text-sm text-muted-foreground">Last updated: July 16, 2026</p>

      <div className="mt-8 space-y-6 text-sm leading-relaxed text-foreground">
        <section>
          <h2 className="text-xl font-semibold text-brand-primary">1. Information We Collect</h2>
          <p className="mt-2 text-muted-foreground">
            We collect information you provide directly, such as your name, phone number, email
            address, pickup and delivery addresses, and package details when you book a shipment
            or contact our support team.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-brand-primary">2. How We Use Your Information</h2>
          <p className="mt-2 text-muted-foreground">
            Your information is used to process bookings, provide shipment tracking updates,
            generate invoices, respond to support requests, and improve our services.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-brand-primary">3. Data Sharing</h2>
          <p className="mt-2 text-muted-foreground">
            We share shipment details only with courier and delivery partners necessary to fulfill
            your booking. We do not sell your personal information to third parties.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-brand-primary">4. Data Security</h2>
          <p className="mt-2 text-muted-foreground">
            We implement industry-standard safeguards including encryption in transit, access
            controls, and regular security reviews to protect your data.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-brand-primary">5. Your Rights</h2>
          <p className="mt-2 text-muted-foreground">
            You may request access, correction, or deletion of your personal data at any time by
            contacting {siteConfig.supportEmail}.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-brand-primary">6. Cookies</h2>
          <p className="mt-2 text-muted-foreground">
            We use essential cookies to maintain your session and preferences. We do not use
            cookies for third-party advertising.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-brand-primary">7. Contact Us</h2>
          <p className="mt-2 text-muted-foreground">
            For privacy-related questions, reach out to us at {siteConfig.supportEmail} or{" "}
            {siteConfig.supportPhone}.
          </p>
        </section>
      </div>
    </div>
  );
}
