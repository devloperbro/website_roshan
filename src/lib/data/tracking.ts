export type ShipmentStatus =
  | "Booked"
  | "Picked Up"
  | "Warehouse"
  | "In Transit"
  | "Out For Delivery"
  | "Delivered";

export const shipmentStatuses: ShipmentStatus[] = [
  "Booked",
  "Picked Up",
  "Warehouse",
  "In Transit",
  "Out For Delivery",
  "Delivered",
];

export interface TrackingEvent {
  status: ShipmentStatus;
  timestamp: string;
  location: string;
  note: string;
}

export interface Shipment {
  trackingId: string;
  senderCity: string;
  receiverCity: string;
  currentStatus: ShipmentStatus;
  estimatedDelivery: string;
  weightKg: number;
  serviceType: string;
  events: TrackingEvent[];
}

export const mockShipments: Shipment[] = [
  {
    trackingId: "LGX10023456",
    senderCity: "Mumbai, MH",
    receiverCity: "Bengaluru, KA",
    currentStatus: "In Transit",
    estimatedDelivery: "2026-07-18",
    weightKg: 4.5,
    serviceType: "Express Delivery",
    events: [
      { status: "Booked", timestamp: "2026-07-15 09:12", location: "Mumbai, MH", note: "Shipment booked online." },
      { status: "Picked Up", timestamp: "2026-07-15 14:30", location: "Mumbai, MH", note: "Package picked up by courier partner." },
      { status: "Warehouse", timestamp: "2026-07-15 20:05", location: "Mumbai Sorting Hub", note: "Arrived at sorting facility." },
      { status: "In Transit", timestamp: "2026-07-16 06:40", location: "En route to Bengaluru", note: "Shipment moving towards destination hub." },
    ],
  },
  {
    trackingId: "LGX10098213",
    senderCity: "Delhi, DL",
    receiverCity: "Pune, MH",
    currentStatus: "Out For Delivery",
    estimatedDelivery: "2026-07-16",
    weightKg: 2.1,
    serviceType: "Standard Courier",
    events: [
      { status: "Booked", timestamp: "2026-07-13 11:00", location: "Delhi, DL", note: "Shipment booked online." },
      { status: "Picked Up", timestamp: "2026-07-13 16:45", location: "Delhi, DL", note: "Package picked up by courier partner." },
      { status: "Warehouse", timestamp: "2026-07-14 05:20", location: "Delhi Sorting Hub", note: "Arrived at sorting facility." },
      { status: "In Transit", timestamp: "2026-07-14 22:10", location: "En route to Pune", note: "Shipment moving towards destination hub." },
      { status: "Out For Delivery", timestamp: "2026-07-16 08:15", location: "Pune, MH", note: "Out with delivery agent." },
    ],
  },
  {
    trackingId: "LGX10056789",
    senderCity: "Chennai, TN",
    receiverCity: "Hyderabad, TS",
    currentStatus: "Delivered",
    estimatedDelivery: "2026-07-10",
    weightKg: 6.8,
    serviceType: "LTL Freight",
    events: [
      { status: "Booked", timestamp: "2026-07-07 10:00", location: "Chennai, TN", note: "Shipment booked online." },
      { status: "Picked Up", timestamp: "2026-07-07 15:00", location: "Chennai, TN", note: "Package picked up by courier partner." },
      { status: "Warehouse", timestamp: "2026-07-08 04:00", location: "Chennai Sorting Hub", note: "Arrived at sorting facility." },
      { status: "In Transit", timestamp: "2026-07-08 19:00", location: "En route to Hyderabad", note: "Shipment moving towards destination hub." },
      { status: "Out For Delivery", timestamp: "2026-07-10 09:00", location: "Hyderabad, TS", note: "Out with delivery agent." },
      { status: "Delivered", timestamp: "2026-07-10 13:45", location: "Hyderabad, TS", note: "Delivered to receiver." },
    ],
  },
];

export function findShipment(trackingId: string): Shipment | undefined {
  return mockShipments.find(
    (shipment) => shipment.trackingId.toLowerCase() === trackingId.trim().toLowerCase()
  );
}

export function getStatusProgress(status: ShipmentStatus): number {
  const index = shipmentStatuses.indexOf(status);
  return Math.round(((index + 1) / shipmentStatuses.length) * 100);
}
