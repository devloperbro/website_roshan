export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  rating: number;
  avatar: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Ananya Sharma",
    role: "Operations Head",
    company: "Nova Retail",
    quote:
      "Nirpakh LogisticPro cut our delivery times by 40% within the first quarter. The real-time tracking keeps our customers informed and happy.",
    rating: 5,
    avatar: "/testimonials/ananya.svg",
  },
  {
    id: "t2",
    name: "Rahul Verma",
    role: "Founder",
    company: "UrbanCraft D2C",
    quote:
      "Their e-commerce fulfillment service is a game changer. Pick, pack, and dispatch happen the same day, every single time.",
    rating: 5,
    avatar: "/testimonials/rahul.svg",
  },
  {
    id: "t3",
    name: "Priya Menon",
    role: "Supply Chain Manager",
    company: "GreenLeaf Foods",
    quote:
      "Cold chain logistics used to be our biggest headache. Nirpakh LogisticPro's climate-controlled fleet solved it completely.",
    rating: 5,
    avatar: "/testimonials/priya.svg",
  },
  {
    id: "t4",
    name: "Vikram Desai",
    role: "CEO",
    company: "Desai Industrial Movers",
    quote:
      "We rely on their full truckload and heavy machinery transport for every interstate project. Always on time, always safe.",
    rating: 4,
    avatar: "/testimonials/vikram.svg",
  },
  {
    id: "t5",
    name: "Sneha Kulkarni",
    role: "Customer",
    company: "Individual",
    quote:
      "Booked a same-day parcel delivery and the shipment tracker made it effortless to know exactly when it arrived.",
    rating: 5,
    avatar: "/testimonials/sneha.svg",
  },
  {
    id: "t6",
    name: "Arjun Nair",
    role: "Import-Export Manager",
    company: "Nair Global Traders",
    quote:
      "Customs clearance and international freight through Nirpakh LogisticPro has never been smoother. Highly recommended.",
    rating: 5,
    avatar: "/testimonials/arjun.svg",
  },
];
