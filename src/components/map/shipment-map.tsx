"use client";

import * as React from "react";
import dynamic from "next/dynamic";

const ShipmentMapInner = dynamic(() => import("./shipment-map-inner"), { ssr: false });

interface ShipmentMapProps {
  lat: number;
  lng: number;
  city: string;
  status: string;
}

export function ShipmentMap(props: ShipmentMapProps) {
  return <ShipmentMapInner {...props} />;
}
