export const siteConfig = {
  name: "Nirpakh LogisticPro",
  legalName: "Nirpakh Consulting Support & Pvt. Ltd.",
  tagline: "Delivering Trust Across Every Mile",
  description:
    "Nirpakh LogisticPro is a full-service logistics and courier platform offering express delivery, freight, warehousing, and end-to-end supply chain solutions across India and beyond.",
  url: process.env.NEXT_PUBLIC_APP_URL ?? "https://logisticspro.example.com",
  ogImage:
    "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=1200&q=70",
  supportEmail: "lalroshan1133@gmail.com",
  supportPhone: "+91 92177 47446",
  address: "WeWork Berger Delhi One, Sector 16B, C-001/A2, Gautam Buddha Nagar, Noida, UP 201301",
  socials: {
    twitter: "https://twitter.com/logisticspro",
    linkedin: "https://linkedin.com/company/logisticspro",
    facebook: "https://facebook.com/logisticspro",
    instagram: "https://instagram.com/logisticspro",
  },
};

export const mainNav = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Services", href: "/services" },
  { title: "Pricing", href: "/pricing" },
  { title: "Industries", href: "/industries" },
  { title: "Track Shipment", href: "/track-shipment" },
  { title: "Blog", href: "/blog" },
  { title: "Contact", href: "/contact" },
];

export const footerNav = {
  company: [
    { title: "About Us", href: "/about" },
    { title: "Industries", href: "/industries" },
    { title: "Blog", href: "/blog" },
    { title: "Contact", href: "/contact" },
  ],
  services: [
    { title: "Book a Shipment", href: "/book-shipment" },
    { title: "Track Shipment", href: "/track-shipment" },
    { title: "Pricing", href: "/pricing" },
    { title: "FAQ", href: "/faq" },
  ],
  legal: [
    { title: "Privacy Policy", href: "/privacy-policy" },
    { title: "Terms of Service", href: "/terms" },
  ],
};
