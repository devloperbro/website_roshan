import { create } from "zustand";
import type { AddressInput, PackageDetailsInput, ReceiverDetailsInput } from "@/lib/validations";

export type BookingStep = 1 | 2 | 3 | 4 | 5;

interface BookingState {
  step: BookingStep;
  pickup: Partial<AddressInput>;
  delivery: Partial<AddressInput>;
  packageDetails: Partial<PackageDetailsInput>;
  receiver: Partial<ReceiverDetailsInput>;
  trackingId: string | null;
  setStep: (step: BookingStep) => void;
  nextStep: () => void;
  prevStep: () => void;
  setPickup: (data: AddressInput) => void;
  setDelivery: (data: AddressInput) => void;
  setPackageDetails: (data: PackageDetailsInput) => void;
  setReceiver: (data: ReceiverDetailsInput) => void;
  confirmBooking: () => string;
  reset: () => void;
}

function generateTrackingId(): string {
  const random = Math.floor(10000000 + Math.random() * 89999999);
  return `LGX${random}`;
}

export const useBookingStore = create<BookingState>((set) => ({
  step: 1,
  pickup: {},
  delivery: {},
  packageDetails: {},
  receiver: {},
  trackingId: null,
  setStep: (step) => set({ step }),
  nextStep: () => set((state) => ({ step: Math.min(5, state.step + 1) as BookingStep })),
  prevStep: () => set((state) => ({ step: Math.max(1, state.step - 1) as BookingStep })),
  setPickup: (data) => set({ pickup: data }),
  setDelivery: (data) => set({ delivery: data }),
  setPackageDetails: (data) => set({ packageDetails: data }),
  setReceiver: (data) => set({ receiver: data }),
  confirmBooking: () => {
    const trackingId = generateTrackingId();
    set({ trackingId });
    return trackingId;
  },
  reset: () =>
    set({
      step: 1,
      pickup: {},
      delivery: {},
      packageDetails: {},
      receiver: {},
      trackingId: null,
    }),
}));
