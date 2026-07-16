export interface Industry {
  id: string;
  name: string;
  icon: string;
  description: string;
  solutions: string[];
}

export const industries: Industry[] = [
  {
    id: "ecommerce",
    name: "E-commerce & Retail",
    icon: "ShoppingCart",
    description:
      "Same-day fulfillment, reverse logistics, and COD collection for online sellers and marketplaces.",
    solutions: ["Pick & pack fulfillment", "COD collection", "Reverse logistics", "Multi-channel sync"],
  },
  {
    id: "manufacturing",
    name: "Manufacturing & Industrial",
    icon: "Factory",
    description:
      "Heavy machinery transport, full truckload freight, and dedicated fleet contracts for manufacturers.",
    solutions: ["Full truckload freight", "Heavy machinery transport", "Dedicated fleet", "Cross-docking"],
  },
  {
    id: "pharma",
    name: "Pharmaceuticals & Healthcare",
    icon: "Stethoscope",
    description:
      "Temperature-controlled and time-critical courier services for medical and pharma shipments.",
    solutions: ["Cold chain logistics", "Lab sample courier", "Temperature-controlled transport", "Express delivery"],
  },
  {
    id: "fmcg",
    name: "FMCG & Food",
    icon: "Package",
    description:
      "Climate-controlled warehousing and rapid distribution networks for perishable and fast-moving goods.",
    solutions: ["Climate-controlled storage", "Cross-docking", "Multi-stop freight delivery", "Bulk distribution"],
  },
  {
    id: "automotive",
    name: "Automotive & Spare Parts",
    icon: "Car",
    description:
      "Express spare parts delivery and specialized handling for automotive components and equipment.",
    solutions: ["Express spare parts delivery", "Specialized handling", "Multi-truck convoy booking", "LTL freight"],
  },
  {
    id: "relocation",
    name: "Home & Office Relocation",
    icon: "Home",
    description:
      "End-to-end packing, moving, and relocation services for individuals and corporate offices.",
    solutions: ["Home relocation", "Office relocation", "Custom packaging", "Fragile item handling"],
  },
  {
    id: "import-export",
    name: "Import & Export Trade",
    icon: "Globe",
    description:
      "Customs clearance, export documentation, and international air and sea freight solutions.",
    solutions: ["Customs clearance", "Air freight", "Sea freight (LCL)", "International container shipping"],
  },
  {
    id: "corporate",
    name: "Corporate & Enterprise",
    icon: "Building2",
    description:
      "Contract logistics, bulk shipment agreements, and dedicated account management for enterprises.",
    solutions: ["Corporate bulk contracts", "Dedicated fleet", "Warehousing", "Analytics & reporting"],
  },
];
