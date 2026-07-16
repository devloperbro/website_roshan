export type ProductCategory =
  | "Documents & Small Parcels"
  | "Standard Courier"
  | "Express Delivery"
  | "Packaging Supplies"
  | "E-commerce Fulfillment"
  | "Fragile & Specialized Handling"
  | "Warehousing & Storage"
  | "LTL Freight"
  | "Full Truckload & Corporate Bulk"
  | "International & Relocation";

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: ProductCategory;
  unit: string;
  price: number;
  description: string;
  icon: string;
  popular: boolean;
}

interface CategoryDefinition {
  category: ProductCategory;
  unit: string;
  icon: string;
  description: string;
  items: Array<[name: string, price: number]>;
}

const categoryDefinitions: CategoryDefinition[] = [
  {
    category: "Documents & Small Parcels",
    unit: "per shipment",
    icon: "FileText",
    description: "Fast and secure dispatch for documents and lightweight parcels.",
    items: [
      ["Single Document Envelope", 100],
      ["Document Courier (Local)", 150],
      ["Document Courier (Intercity)", 180],
      ["Small Parcel (Up to 1kg)", 220],
      ["Small Parcel (Up to 2kg)", 260],
      ["Gift Parcel Delivery", 300],
      ["Bill & Invoice Courier", 350],
      ["Legal Document Dispatch", 400],
      ["Passport / ID Courier", 450],
      ["Photo Album Courier", 500],
    ],
  },
  {
    category: "Standard Courier",
    unit: "per shipment",
    icon: "Package",
    description: "Reliable everyday courier service for parcels of all shapes and sizes.",
    items: [
      ["Standard Parcel (2-5kg)", 350],
      ["Standard Parcel (5-10kg)", 450],
      ["Multi-City Courier", 550],
      ["Book & Media Parcel", 600],
      ["Clothing & Apparel Parcel", 650],
      ["Electronics Accessory Parcel", 700],
      ["Grocery Parcel Delivery", 800],
      ["Return & Exchange Pickup", 900],
      ["Bulk Letter Dispatch (50 units)", 1000],
      ["Same-City Bike Courier", 1200],
    ],
  },
  {
    category: "Express Delivery",
    unit: "per shipment",
    icon: "Zap",
    description: "Time-critical delivery options with guaranteed delivery windows.",
    items: [
      ["Same-Day Express (Up to 5kg)", 500],
      ["Next-Day Express (Up to 10kg)", 650],
      ["2-Hour Hyperlocal Delivery", 750],
      ["Overnight Express Parcel", 850],
      ["Priority Business Courier", 950],
      ["Weekend Express Delivery", 1100],
      ["Express Medical Sample Courier", 1300],
      ["Express Spare Parts Delivery", 1500],
      ["Express Gadget Delivery", 1800],
      ["Time-Slot Guaranteed Delivery", 2200],
    ],
  },
  {
    category: "Packaging Supplies",
    unit: "per unit",
    icon: "Box",
    description: "Durable packaging materials to keep every shipment safe in transit.",
    items: [
      ["Corrugated Box (Small)", 150],
      ["Corrugated Box (Medium)", 200],
      ["Corrugated Box (Large)", 280],
      ["Bubble Wrap Roll (10m)", 350],
      ["Packing Tape Set", 400],
      ["Foam Padding Kit", 500],
      ["Wooden Crate (Small)", 700],
      ["Wooden Crate (Large)", 900],
      ["Custom Branded Packaging", 1100],
      ["Eco-Friendly Packaging Kit", 1400],
    ],
  },
  {
    category: "E-commerce Fulfillment",
    unit: "per order",
    icon: "ShoppingCart",
    description: "End-to-end fulfillment for online sellers and D2C brands.",
    items: [
      ["Pick & Pack (Single SKU)", 400],
      ["Pick & Pack (Multi SKU)", 500],
      ["Reverse Logistics Pickup", 600],
      ["COD Collection Service", 700],
      ["Marketplace Order Fulfillment", 850],
      ["Subscription Box Fulfillment", 1000],
      ["Kitting & Bundling Service", 1200],
      ["Label Printing & Dispatch", 1500],
      ["Same-Day Fulfillment (D2C)", 1800],
      ["Multi-Channel Order Sync", 2200],
    ],
  },
  {
    category: "Fragile & Specialized Handling",
    unit: "per shipment",
    icon: "ShieldCheck",
    description: "Specialized handling and cushioning for delicate and high-value goods.",
    items: [
      ["Fragile Item Handling", 600],
      ["Glassware Shipping", 750],
      ["Artwork & Frame Courier", 900],
      ["Musical Instrument Transport", 1100],
      ["Electronics (TV / Appliance) Courier", 1400],
      ["Antique Item Handling", 1700],
      ["Medical Equipment Transport", 2100],
      ["Lab Sample Cold Courier", 2600],
      ["Pharma Temperature-Controlled Courier", 3100],
      ["High-Value Item Secure Courier", 3500],
    ],
  },
  {
    category: "Warehousing & Storage",
    unit: "per month",
    icon: "Warehouse",
    description: "Flexible short and long-term storage across our regional warehouse network.",
    items: [
      ["Short-Term Storage", 1000],
      ["Long-Term Storage", 1500],
      ["Pallet Storage (per pallet)", 2000],
      ["Bonded Warehouse Storage", 2500],
      ["Climate-Controlled Storage", 3200],
      ["Inventory Management Service", 4000],
      ["Cross-Docking Service", 5000],
      ["Bulk Storage (100 sq ft)", 6000],
      ["Bulk Storage (500 sq ft)", 7000],
      ["Dedicated Warehouse Space (1000 sq ft)", 8000],
    ],
  },
  {
    category: "LTL Freight",
    unit: "per shipment",
    icon: "Truck",
    description: "Less-than-truckload freight solutions for mid-sized cargo loads.",
    items: [
      ["LTL Freight (Up to 100kg)", 2500],
      ["LTL Freight (100-250kg)", 3200],
      ["LTL Freight (250-500kg)", 4000],
      ["Mini Truck Rental (Tata Ace)", 4800],
      ["Pallet Freight Shipping", 5600],
      ["Multi-Stop Freight Delivery", 6500],
      ["Rail Freight Booking", 7500],
      ["Air Cargo (Domestic, up to 50kg)", 8500],
      ["Container Consolidation Service", 10000],
      ["Freight Insurance Add-on (High Value)", 12000],
    ],
  },
  {
    category: "Full Truckload & Corporate Bulk",
    unit: "per trip",
    icon: "TruckElectric",
    description: "Dedicated full truckload capacity and bulk contracts for enterprise shippers.",
    items: [
      ["Full Truckload (14 ft)", 6000],
      ["Full Truckload (19 ft)", 7500],
      ["Full Truckload (32 ft)", 9000],
      ["Container Truck (20 ft)", 10500],
      ["Container Truck (40 ft)", 12000],
      ["Corporate Bulk Shipment Contract", 14000],
      ["Dedicated Fleet (Monthly)", 16000],
      ["Interstate Full Load Transport", 18000],
      ["Heavy Machinery Transport", 20000],
      ["Multi-Truck Convoy Booking", 22000],
    ],
  },
  {
    category: "International & Relocation",
    unit: "per shipment",
    icon: "Globe",
    description: "Cross-border freight, customs clearance, and full home or office relocation.",
    items: [
      ["International Parcel (Up to 2kg)", 3000],
      ["International Parcel (Up to 10kg)", 4500],
      ["Export Cargo Documentation & Shipping", 6000],
      ["Import Customs Clearance Service", 8000],
      ["Air Freight (International, per 50kg)", 10000],
      ["Sea Freight (LCL, per CBM)", 13000],
      ["Home Relocation (1BHK)", 16000],
      ["Home Relocation (2-3BHK)", 20000],
      ["Office Relocation (Full Setup)", 25000],
      ["International Container Shipping (Full)", 30000],
    ],
  },
];

function slugify(value: string): string {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export const products: Product[] = categoryDefinitions.flatMap((def) =>
  def.items.map(([name, price], index) => ({
    id: `${slugify(def.category)}-${index + 1}`,
    slug: `${slugify(def.category)}-${slugify(name)}`,
    name,
    category: def.category,
    unit: def.unit,
    price,
    description: def.description,
    icon: def.icon,
    popular: index === def.items.length - 3,
  }))
);

export const productCategories: ProductCategory[] = categoryDefinitions.map(
  (def) => def.category
);

export const MIN_PRODUCT_PRICE = Math.min(...products.map((p) => p.price));
export const MAX_PRODUCT_PRICE = Math.max(...products.map((p) => p.price));

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}

export function formatINR(value: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(value);
}
