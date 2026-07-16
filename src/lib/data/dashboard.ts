export interface DashboardBooking {
  id: string;
  trackingId: string;
  date: string;
  destination: string;
  status: string;
  amount: number;
}

export interface SavedAddress {
  id: string;
  label: string;
  fullName: string;
  phone: string;
  addressLine: string;
  city: string;
  state: string;
  pincode: string;
  isDefault: boolean;
}

export interface Invoice {
  id: string;
  invoiceNumber: string;
  date: string;
  amount: number;
  status: "Paid" | "Pending";
}

export interface NotificationItem {
  id: string;
  title: string;
  description: string;
  time: string;
  read: boolean;
}

export const dashboardBookings: DashboardBooking[] = [
  { id: "b1", trackingId: "LGX10023456", date: "2026-07-15", destination: "Bengaluru, KA", status: "In Transit", amount: 850 },
  { id: "b2", trackingId: "LGX10098213", date: "2026-07-13", destination: "Pune, MH", status: "Out For Delivery", amount: 620 },
  { id: "b3", trackingId: "LGX10056789", date: "2026-07-07", destination: "Hyderabad, TS", status: "Delivered", amount: 4200 },
  { id: "b4", trackingId: "LGX10011245", date: "2026-06-29", destination: "Kolkata, WB", status: "Delivered", amount: 1350 },
  { id: "b5", trackingId: "LGX10099821", date: "2026-06-18", destination: "Ahmedabad, GJ", status: "Delivered", amount: 980 },
];

export const savedAddresses: SavedAddress[] = [
  {
    id: "a1",
    label: "Home",
    fullName: "Aarav Kapoor",
    phone: "9876543210",
    addressLine: "12, Sea View Apartments, Linking Road",
    city: "Mumbai",
    state: "Maharashtra",
    pincode: "400050",
    isDefault: true,
  },
  {
    id: "a2",
    label: "Office",
    fullName: "Aarav Kapoor",
    phone: "9876543210",
    addressLine: "Suite 402, Cyber Towers, Hitech City",
    city: "Hyderabad",
    state: "Telangana",
    pincode: "500081",
    isDefault: false,
  },
];

export const invoices: Invoice[] = [
  { id: "i1", invoiceNumber: "INV-2026-0712", date: "2026-07-10", amount: 4200, status: "Paid" },
  { id: "i2", invoiceNumber: "INV-2026-0698", date: "2026-06-29", amount: 1350, status: "Paid" },
  { id: "i3", invoiceNumber: "INV-2026-0654", date: "2026-06-18", amount: 980, status: "Paid" },
  { id: "i4", invoiceNumber: "INV-2026-0721", date: "2026-07-15", amount: 850, status: "Pending" },
];

export const notifications: NotificationItem[] = [
  { id: "n1", title: "Shipment Out For Delivery", description: "LGX10098213 is out for delivery in Pune.", time: "2 hours ago", read: false },
  { id: "n2", title: "Shipment In Transit", description: "LGX10023456 has left the Mumbai sorting hub.", time: "6 hours ago", read: false },
  { id: "n3", title: "Invoice Generated", description: "Invoice INV-2026-0712 has been generated.", time: "1 day ago", read: true },
  { id: "n4", title: "Shipment Delivered", description: "LGX10056789 was delivered successfully.", time: "3 days ago", read: true },
];

export const adminOrders = [
  { id: "o1", trackingId: "LGX10023456", customer: "Aarav Kapoor", status: "In Transit", amount: 850, date: "2026-07-15" },
  { id: "o2", trackingId: "LGX10098213", customer: "Meera Iyer", status: "Out For Delivery", amount: 620, date: "2026-07-13" },
  { id: "o3", trackingId: "LGX10056789", customer: "Rohan Gupta", status: "Delivered", amount: 4200, date: "2026-07-07" },
  { id: "o4", trackingId: "LGX10011245", customer: "Fatima Sheikh", status: "Delivered", amount: 1350, date: "2026-06-29" },
  { id: "o5", trackingId: "LGX10099821", customer: "Karan Malhotra", status: "Delivered", amount: 980, date: "2026-06-18" },
  { id: "o6", trackingId: "LGX10087741", customer: "Divya Reddy", status: "Warehouse", amount: 2100, date: "2026-07-16" },
  { id: "o7", trackingId: "LGX10076532", customer: "Sameer Khan", status: "Booked", amount: 320, date: "2026-07-16" },
];

export const adminCustomers = [
  { id: "c1", name: "Aarav Kapoor", email: "aarav.kapoor@example.com", orders: 12, totalSpent: 18500 },
  { id: "c2", name: "Meera Iyer", email: "meera.iyer@example.com", orders: 8, totalSpent: 9600 },
  { id: "c3", name: "Rohan Gupta", email: "rohan.gupta@example.com", orders: 21, totalSpent: 42300 },
  { id: "c4", name: "Fatima Sheikh", email: "fatima.sheikh@example.com", orders: 5, totalSpent: 6100 },
  { id: "c5", name: "Karan Malhotra", email: "karan.malhotra@example.com", orders: 15, totalSpent: 24800 },
];

export const revenueSummary = {
  totalRevenue: 1284500,
  totalOrders: 3260,
  activeCustomers: 842,
  avgOrderValue: 394,
  monthlyRevenue: [
    { month: "Feb", revenue: 82000 },
    { month: "Mar", revenue: 95000 },
    { month: "Apr", revenue: 101000 },
    { month: "May", revenue: 118000 },
    { month: "Jun", revenue: 132000 },
    { month: "Jul", revenue: 148000 },
  ],
};
