import type { Metadata } from "next";
import Image from "next/image";
import { ShipmentTracker } from "@/components/tracking/shipment-tracker";
import { siteImages } from "@/lib/images";

export const metadata: Metadata = {
  title: "Track Shipment",
  description: "Track your shipment in real time with live status updates and estimated delivery.",
};

export default function TrackShipmentPage() {
  return (
    <div>
      <div className="relative h-56 w-full overflow-hidden sm:h-72">
        <Image
          src={siteImages.trackShipmentBanner}
          alt="Delivery van on the road"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-brand-primary/70" />
        <div className="relative flex h-full max-w-7xl flex-col items-center justify-center px-4 text-center">
          <h1 className="text-4xl font-bold text-white">Track Your Shipment</h1>
          <p className="mt-3 max-w-xl text-white/85">
            Enter your tracking ID to see live status updates and estimated delivery time.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <ShipmentTracker />
      </div>
    </div>
  );
}
