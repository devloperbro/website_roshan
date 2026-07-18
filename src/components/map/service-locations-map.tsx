"use client";

import * as React from "react";
import dynamic from "next/dynamic";

// Leaflet must be loaded client-side only
const MapWithNoSSR = dynamic(() => import("./service-locations-map-inner"), { ssr: false });

export function ServiceLocationsMap() {
  return <MapWithNoSSR />;
}
