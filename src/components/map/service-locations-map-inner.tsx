"use client";

import * as React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix default marker icon paths broken by webpack
delete (L.Icon.Default.prototype as unknown as Record<string, unknown>)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

const serviceLocations = [
  {
    city: "Delhi",
    lat: 28.6139,
    lng: 77.209,
    services: ["Express Delivery", "Standard Courier", "Freight"],
    contact: "+91 11-4001-2345",
    hours: "Mon–Sat, 8am–8pm",
  },
  {
    city: "Noida",
    lat: 28.5355,
    lng: 77.391,
    services: ["Express Delivery", "E-commerce Fulfillment"],
    contact: "+91 120-4001-567",
    hours: "Mon–Sat, 9am–7pm",
  },
  {
    city: "Gurugram",
    lat: 28.4595,
    lng: 77.0266,
    services: ["Standard Courier", "Warehousing"],
    contact: "+91 124-4001-890",
    hours: "Mon–Sat, 9am–7pm",
  },
  {
    city: "Lucknow",
    lat: 26.8467,
    lng: 80.9462,
    services: ["Express Delivery", "Standard Courier"],
    contact: "+91 522-4001-123",
    hours: "Mon–Sat, 9am–6pm",
  },
  {
    city: "Jaipur",
    lat: 26.9124,
    lng: 75.7873,
    services: ["Standard Courier", "LTL Freight"],
    contact: "+91 141-4001-456",
    hours: "Mon–Sat, 9am–6pm",
  },
  {
    city: "Bhopal",
    lat: 23.2599,
    lng: 77.4126,
    services: ["Standard Courier", "Freight"],
    contact: "+91 755-4001-789",
    hours: "Mon–Sat, 9am–6pm",
  },
  {
    city: "Mumbai",
    lat: 19.076,
    lng: 72.8777,
    services: ["Express Delivery", "E-commerce Fulfillment", "Warehousing", "International"],
    contact: "+91 22-4001-0000",
    hours: "Mon–Sat, 8am–9pm",
  },
  {
    city: "Pune",
    lat: 18.5204,
    lng: 73.8567,
    services: ["Express Delivery", "Standard Courier"],
    contact: "+91 20-4001-2222",
    hours: "Mon–Sat, 9am–7pm",
  },
  {
    city: "Bengaluru",
    lat: 12.9716,
    lng: 77.5946,
    services: ["Express Delivery", "E-commerce Fulfillment", "Warehousing"],
    contact: "+91 80-4001-3333",
    hours: "Mon–Sat, 8am–8pm",
  },
  {
    city: "Hyderabad",
    lat: 17.385,
    lng: 78.4867,
    services: ["Express Delivery", "Standard Courier", "LTL Freight"],
    contact: "+91 40-4001-4444",
    hours: "Mon–Sat, 9am–7pm",
  },
  {
    city: "Chennai",
    lat: 13.0827,
    lng: 80.2707,
    services: ["Express Delivery", "Standard Courier", "Warehousing"],
    contact: "+91 44-4001-5555",
    hours: "Mon–Sat, 9am–7pm",
  },
  {
    city: "Kolkata",
    lat: 22.5726,
    lng: 88.3639,
    services: ["Standard Courier", "LTL Freight", "International"],
    contact: "+91 33-4001-6666",
    hours: "Mon–Sat, 9am–7pm",
  },
  {
    city: "Ahmedabad",
    lat: 23.0225,
    lng: 72.5714,
    services: ["Standard Courier", "E-commerce Fulfillment"],
    contact: "+91 79-4001-7777",
    hours: "Mon–Sat, 9am–6pm",
  },
];

export default function ServiceLocationsMapInner() {
  return (
    <MapContainer
      center={[20.5937, 78.9629]}
      zoom={5}
      scrollWheelZoom={false}
      style={{ height: "500px", width: "100%", borderRadius: "1rem" }}
      className="z-0"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {serviceLocations.map((loc) => (
        <Marker key={loc.city} position={[loc.lat, loc.lng]}>
          <Popup>
            <div className="min-w-[160px]">
              <p className="mb-1 text-base font-bold text-[#0F4C81]">{loc.city}</p>
              <p className="mb-0.5 text-xs font-semibold text-gray-500 uppercase">Services</p>
              <ul className="mb-2 list-inside list-disc text-xs text-gray-700">
                {loc.services.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
              <p className="text-xs text-gray-600">
                <span className="font-medium">Contact:</span> {loc.contact}
              </p>
              <p className="text-xs text-gray-600">
                <span className="font-medium">Hours:</span> {loc.hours}
              </p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
