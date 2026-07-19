import type { Metadata } from "next";
import { Truck } from "lucide-react";
import { ForgotPasswordForm } from "@/components/auth/forgot-password-form";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Forgot Password",
  description: `Reset your ${siteConfig.name} account password.`,
};

export default function ForgotPasswordPage() {
  return (
    <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center px-4 py-16">
      <div className="w-full max-w-md">
        <div className="mb-8 flex flex-col items-center text-center">
          <span className="mb-3 flex size-12 items-center justify-center rounded-xl bg-brand-primary text-white">
            <Truck className="size-6" />
          </span>
          <h1 className="text-2xl font-bold text-brand-primary">Reset Password</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Enter your email to receive a password reset link
          </p>
        </div>

        <div className="rounded-2xl border border-border bg-white p-8 shadow-sm">
          <ForgotPasswordForm />
        </div>
      </div>
    </div>
  );
}
