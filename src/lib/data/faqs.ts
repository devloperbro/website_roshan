export interface Faq {
  id: string;
  question: string;
  answer: string;
  category: "Booking" | "Pricing" | "Tracking" | "Payments" | "Account";
}

export const faqs: Faq[] = [
  {
    id: "f1",
    category: "Booking",
    question: "How do I book a shipment with Nirpakh LogisticPro?",
    answer:
      "Go to the Book Shipment page and complete the five-step wizard: pickup address, delivery address, package details, receiver details, and review. You'll get a booking confirmation with a tracking ID instantly.",
  },
  {
    id: "f2",
    category: "Booking",
    question: "Can I schedule a pickup for a future date?",
    answer:
      "Yes. During the package details step you can choose a preferred pickup date and time slot that works for you.",
  },
  {
    id: "f3",
    category: "Pricing",
    question: "How is my shipment cost calculated?",
    answer:
      "Cost = ₹100 base fare + ₹20 per kg of weight, plus ₹250 if you choose Express delivery, ₹150 for fragile handling, and 2% insurance on your declared value. The calculator updates the total live as you fill the form.",
  },
  {
    id: "f4",
    category: "Pricing",
    question: "Do you offer bulk or corporate pricing?",
    answer:
      "Yes, our Full Truckload & Corporate Bulk catalog on the Pricing page offers dedicated fleet and contract-based rates for enterprise shippers.",
  },
  {
    id: "f5",
    category: "Tracking",
    question: "How can I track my shipment?",
    answer:
      "Visit the Track Shipment page and enter your tracking ID. You'll see a live progress bar with statuses from Booked to Delivered and an estimated delivery time.",
  },
  {
    id: "f6",
    category: "Tracking",
    question: "What do the different shipment statuses mean?",
    answer:
      "Booked (order confirmed), Picked Up (courier collected the package), Warehouse (sorting facility), In Transit (on the way), Out For Delivery (with the delivery agent), and Delivered (received by recipient).",
  },
  {
    id: "f7",
    category: "Payments",
    question: "Which payment methods are supported?",
    answer:
      "Online payments are launching soon. At checkout you'll see a 'Payment Gateway Coming Soon' notice — for now our support team can help you complete bookings manually.",
  },
  {
    id: "f8",
    category: "Payments",
    question: "Will Razorpay or Stripe be supported in the future?",
    answer:
      "Yes, our checkout is built with an abstract payment layer so Razorpay and Stripe integrations can be enabled without any changes to your booking flow.",
  },
  {
    id: "f9",
    category: "Account",
    question: "Can I save multiple addresses to my account?",
    answer:
      "Yes, the customer dashboard lets you save and manage multiple pickup and delivery addresses for faster checkout next time.",
  },
  {
    id: "f10",
    category: "Account",
    question: "Where can I find my invoices?",
    answer:
      "All invoices are available under the Invoices section of your customer dashboard, downloadable as PDF.",
  },
];
