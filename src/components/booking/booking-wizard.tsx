"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Progress } from "@/components/ui/progress";
import { useBookingStore } from "@/lib/store/booking-store";
import { AddressForm } from "@/components/booking/address-form";
import { PackageDetailsForm } from "@/components/booking/package-details-form";
import { ReceiverDetailsForm } from "@/components/booking/receiver-details-form";
import { ReviewOrder } from "@/components/booking/review-order";
import type { AddressInput, PackageDetailsInput, ReceiverDetailsInput } from "@/lib/validations";

const steps = [
  "Pickup Address",
  "Delivery Address",
  "Package Details",
  "Receiver Details",
  "Review Order",
];

export function BookingWizard() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const {
    step,
    pickup,
    delivery,
    packageDetails,
    receiver,
    setStep,
    setPickup,
    setDelivery,
    setPackageDetails,
    setReceiver,
    confirmBooking,
  } = useBookingStore();

  const progress = (step / steps.length) * 100;

  function handlePickupSubmit(data: AddressInput) {
    setPickup(data);
    setStep(2);
  }

  function handleDeliverySubmit(data: AddressInput) {
    setDelivery(data);
    setStep(3);
  }

  function handlePackageSubmit(data: PackageDetailsInput) {
    setPackageDetails(data);
    setStep(4);
  }

  function handleReceiverSubmit(data: ReceiverDetailsInput) {
    setReceiver(data);
    setStep(5);
  }

  function handleConfirm() {
    setIsSubmitting(true);
    const trackingId = confirmBooking();
    setTimeout(() => {
      toast.success(`Booking confirmed! Tracking ID: ${trackingId}`);
      router.push("/checkout");
      setIsSubmitting(false);
    }, 600);
  }

  return (
    <div className="mx-auto max-w-3xl">
      <div className="mb-8">
        <div className="flex items-center justify-between text-sm font-medium">
          {steps.map((label, index) => (
            <span
              key={label}
              className={index + 1 <= step ? "text-brand-primary" : "text-muted-foreground"}
            >
              {index + 1}. {label}
            </span>
          ))}
        </div>
        <Progress value={progress} className="mt-3 h-2" />
      </div>

      <div className="rounded-2xl border border-border bg-white p-6 shadow-sm sm:p-8">
        {step === 1 && (
          <AddressForm title="Pickup Address" defaultValues={pickup} onSubmit={handlePickupSubmit} />
        )}
        {step === 2 && (
          <AddressForm
            title="Delivery Address"
            defaultValues={delivery}
            onSubmit={handleDeliverySubmit}
            onBack={() => setStep(1)}
          />
        )}
        {step === 3 && (
          <PackageDetailsForm
            defaultValues={packageDetails}
            onSubmit={handlePackageSubmit}
            onBack={() => setStep(2)}
          />
        )}
        {step === 4 && (
          <ReceiverDetailsForm
            defaultValues={receiver}
            onSubmit={handleReceiverSubmit}
            onBack={() => setStep(3)}
          />
        )}
        {step === 5 && (
          <ReviewOrder
            pickup={pickup}
            delivery={delivery}
            packageDetails={packageDetails}
            receiver={receiver}
            onBack={() => setStep(4)}
            onConfirm={handleConfirm}
            isSubmitting={isSubmitting}
          />
        )}
      </div>
    </div>
  );
}
