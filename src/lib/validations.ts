import { z } from "zod";

export const addressSchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  phone: z
    .string()
    .regex(/^[6-9]\d{9}$/, "Enter a valid 10-digit Indian mobile number"),
  addressLine1: z.string().min(5, "Address is required"),
  addressLine2: z.string().optional(),
  city: z.string().min(2, "City is required"),
  state: z.string().min(2, "State is required"),
  pincode: z.string().regex(/^\d{6}$/, "Enter a valid 6-digit pincode"),
});

export const packageDetailsSchema = z.object({
  weightKg: z.number().min(0.1, "Weight must be at least 0.1kg").max(2000, "Weight seems too high"),
  category: z.string().min(1, "Select a package category"),
  isExpress: z.boolean(),
  isFragile: z.boolean(),
  declaredValue: z.number().min(0, "Declared value cannot be negative"),
  notes: z.string().optional(),
});

export const receiverDetailsSchema = z.object({
  receiverName: z.string().min(2, "Receiver name is required"),
  receiverPhone: z
    .string()
    .regex(/^[6-9]\d{9}$/, "Enter a valid 10-digit Indian mobile number"),
  receiverEmail: z.string().email("Enter a valid email").optional().or(z.literal("")),
  deliveryInstructions: z.string().optional(),
});

export const bookingSchema = z.object({
  pickup: addressSchema,
  delivery: addressSchema,
  packageDetails: packageDetailsSchema,
  receiver: receiverDetailsSchema,
});

export type AddressInput = z.infer<typeof addressSchema>;
export type PackageDetailsInput = z.infer<typeof packageDetailsSchema>;
export type ReceiverDetailsInput = z.infer<typeof receiverDetailsSchema>;
export type BookingInput = z.infer<typeof bookingSchema>;

export const contactFormSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Enter a valid email"),
  phone: z
    .string()
    .regex(/^[6-9]\d{9}$/, "Enter a valid 10-digit Indian mobile number")
    .optional()
    .or(z.literal("")),
  subject: z.string().min(3, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export type ContactFormInput = z.infer<typeof contactFormSchema>;

export const trackingSchema = z.object({
  trackingId: z.string().min(6, "Enter a valid tracking ID"),
});

export const loginSchema = z.object({
  email: z.string().min(1, "Email is required").email("Enter a valid email"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

export const signupSchema = z
  .object({
    fullName: z.string().min(3, "Full name must be at least 3 characters"),
    email: z.string().min(1, "Email is required").email("Enter a valid email"),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .regex(/[A-Z]/, "Must contain at least 1 uppercase letter")
      .regex(/[a-z]/, "Must contain at least 1 lowercase letter")
      .regex(/[0-9]/, "Must contain at least 1 number")
      .regex(/[^A-Za-z0-9]/, "Must contain at least 1 special character"),
    confirmPassword: z.string().min(1, "Please confirm your password"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export type LoginInput = z.infer<typeof loginSchema>;
export type SignupInput = z.infer<typeof signupSchema>;
