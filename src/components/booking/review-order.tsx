"use client";

import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import type { AddressInput, PackageDetailsInput, ReceiverDetailsInput } from "@/lib/validations";
import { calculateShipmentCost } from "@/lib/cost-calculator";
import { formatINR } from "@/lib/data/products";

interface ReviewOrderProps {
  pickup: Partial<AddressInput>;
  delivery: Partial<AddressInput>;
  packageDetails: Partial<PackageDetailsInput>;
  receiver: Partial<ReceiverDetailsInput>;
  onBack: () => void;
  onConfirm: () => void;
  isSubmitting: boolean;
}

export function ReviewOrder({
  pickup,
  delivery,
  packageDetails,
  receiver,
  onBack,
  onConfirm,
  isSubmitting,
}: ReviewOrderProps) {
  const breakdown = calculateShipmentCost({
    weightKg: packageDetails.weightKg ?? 0,
    isExpress: packageDetails.isExpress ?? false,
    isFragile: packageDetails.isFragile ?? false,
    declaredValue: packageDetails.declaredValue ?? 0,
  });

  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold text-brand-primary">Review Order</h3>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="rounded-xl border border-border p-4">
          <p className="text-sm font-semibold text-brand-secondary">Pickup Address</p>
          <p className="mt-2 text-sm">{pickup.fullName} · {pickup.phone}</p>
          <p className="text-sm text-muted-foreground">
            {pickup.addressLine1}, {pickup.addressLine2 ? `${pickup.addressLine2}, ` : ""}
            {pickup.city}, {pickup.state} - {pickup.pincode}
          </p>
        </div>
        <div className="rounded-xl border border-border p-4">
          <p className="text-sm font-semibold text-brand-secondary">Delivery Address</p>
          <p className="mt-2 text-sm">{delivery.fullName} · {delivery.phone}</p>
          <p className="text-sm text-muted-foreground">
            {delivery.addressLine1}, {delivery.addressLine2 ? `${delivery.addressLine2}, ` : ""}
            {delivery.city}, {delivery.state} - {delivery.pincode}
          </p>
        </div>
      </div>

      <div className="rounded-xl border border-border p-4">
        <p className="text-sm font-semibold text-brand-secondary">Package Details</p>
        <div className="mt-2 grid gap-1 text-sm text-muted-foreground sm:grid-cols-2">
          <p>Category: {packageDetails.category}</p>
          <p>Weight: {packageDetails.weightKg} kg</p>
          <p>Declared Value: {formatINR(packageDetails.declaredValue ?? 0)}</p>
          <p>Express: {packageDetails.isExpress ? "Yes" : "No"}</p>
          <p>Fragile Handling: {packageDetails.isFragile ? "Yes" : "No"}</p>
        </div>
        {packageDetails.notes && (
          <p className="mt-2 text-sm text-muted-foreground">Notes: {packageDetails.notes}</p>
        )}
      </div>

      <div className="rounded-xl border border-border p-4">
        <p className="text-sm font-semibold text-brand-secondary">Receiver Details</p>
        <p className="mt-2 text-sm text-muted-foreground">
          {receiver.receiverName} · {receiver.receiverPhone}
          {receiver.receiverEmail ? ` · ${receiver.receiverEmail}` : ""}
        </p>
        {receiver.deliveryInstructions && (
          <p className="mt-1 text-sm text-muted-foreground">Instructions: {receiver.deliveryInstructions}</p>
        )}
      </div>

      <div className="rounded-xl bg-brand-primary/5 p-5">
        <p className="text-sm font-semibold text-brand-primary">Cost Breakdown</p>
        <div className="mt-2 space-y-1 text-sm text-muted-foreground">
          <div className="flex justify-between"><span>Base fare</span><span>{formatINR(breakdown.base)}</span></div>
          <div className="flex justify-between"><span>Weight charge</span><span>{formatINR(breakdown.weightCharge)}</span></div>
          {breakdown.expressCharge > 0 && (
            <div className="flex justify-between"><span>Express surcharge</span><span>{formatINR(breakdown.expressCharge)}</span></div>
          )}
          {breakdown.fragileCharge > 0 && (
            <div className="flex justify-between"><span>Fragile handling</span><span>{formatINR(breakdown.fragileCharge)}</span></div>
          )}
          {breakdown.insuranceCharge > 0 && (
            <div className="flex justify-between"><span>Insurance (2%)</span><span>{formatINR(breakdown.insuranceCharge)}</span></div>
          )}
        </div>
        <Separator className="my-3" />
        <div className="flex justify-between text-lg font-bold text-brand-primary">
          <span>Total Payable</span>
          <span>{formatINR(breakdown.total)}</span>
        </div>
      </div>

      <div className="flex justify-between pt-2">
        <Button type="button" variant="outline" onClick={onBack}>
          Back
        </Button>
        <Button
          type="button"
          onClick={onConfirm}
          disabled={isSubmitting}
          className="bg-brand-primary hover:bg-brand-primary/90"
        >
          <CheckCircle2 className="mr-2 size-4" />
          Confirm Booking
        </Button>
      </div>
    </div>
  );
}
