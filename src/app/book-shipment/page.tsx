import type { Metadata } from "next";
import Image from "next/image";
import { BookingWizard } from "@/components/booking/booking-wizard";
import { siteImages } from "@/lib/images";

export const metadata: Metadata = {
  title: "Book Shipment",
  description: "Book a shipment in five simple steps with an instant, transparent cost estimate.",
};

export default function BookShipmentPage() {
  return (
    <div>
      <div className="relative h-56 w-full overflow-hidden sm:h-72">
        <Image
          src={siteImages.bookShipmentBanner}
          alt="Workers loading and unloading shipment from a delivery truck"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-brand-primary/70" />
        <div className="relative flex h-full max-w-7xl flex-col items-center justify-center px-4 text-center">
          <h1 className="text-4xl font-bold text-white">Book a Shipment</h1>
          <p className="mt-3 max-w-xl text-white/85">
            Complete the steps below and get an instant cost estimate before you confirm.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <BookingWizard />
      </div>
    </div>
  );
}
