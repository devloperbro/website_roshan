import type { Metadata } from "next";
import Link from "next/link";
import { Headphones, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { RazorpayButton } from "@/components/checkout/razorpay-button";

export const metadata: Metadata = {
  title: "Checkout",
  description: "Secure checkout for your Nirpakh LogisticPro shipment.",
};

export default function CheckoutPage() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-center justify-center px-4 py-20 text-center sm:px-6 lg:px-8">
      <Card className="w-full">
        <CardContent className="flex flex-col items-center gap-4 py-12">
          <span className="flex size-16 items-center justify-center rounded-full bg-brand-accent/20">
            <Headphones className="size-8 text-brand-primary" />
          </span>
          <h1 className="text-3xl font-bold text-brand-primary">Payment Gateway Coming Soon</h1>
          <p className="max-w-md text-muted-foreground">
            Your booking has been received and a member of our team will confirm payment details
            with you shortly. Online payments will be available here soon.
          </p>
          <div className="mt-2">
            <RazorpayButton />
          </div>
          <div className="mt-4 flex flex-col gap-3 sm:flex-row">
            <Button asChild variant="outline">
              <Link href="/contact">
                <Headphones className="mr-2 size-4" />
                Contact Support
              </Link>
            </Button>
            <Button asChild className="bg-brand-primary hover:bg-brand-primary/90">
              <Link href="/">
                <Home className="mr-2 size-4" />
                Back to Home
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
