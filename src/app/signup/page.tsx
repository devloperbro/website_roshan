import type { Metadata } from "next";
import { Truck } from "lucide-react";
import { SignupForm } from "@/components/auth/signup-form";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Sign Up",
  description: `Create a free ${siteConfig.name} account to book shipments, track deliveries, and manage your logistics.`,
};

export default function SignupPage() {
  return (
    <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center px-4 py-16">
      <div className="w-full max-w-md">
        <div className="mb-8 flex flex-col items-center text-center">
          <span className="mb-3 flex size-12 items-center justify-center rounded-xl bg-brand-primary text-white">
            <Truck className="size-6" />
          </span>
          <h1 className="text-2xl font-bold text-brand-primary">Create your account</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Join {siteConfig.name} and ship smarter
          </p>
        </div>

        <div className="rounded-2xl border border-border bg-white p-8 shadow-sm">
          <SignupForm />
        </div>
      </div>
    </div>
  );
}
