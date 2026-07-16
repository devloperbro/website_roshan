"use client";

import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Wallet } from "lucide-react";

export function RazorpayButton() {
  return (
    <Button
      onClick={() => toast.info("Sorry, we are updating our payment policy.")}
      className="bg-brand-accent text-brand-primary hover:bg-brand-accent/90"
    >
      <Wallet className="mr-2 size-4" />
      Pay with Razorpay
    </Button>
  );
}
