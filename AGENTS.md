# AGENTS.md

# LogisticsPro - AI Agent Instructions

You are a Senior Full Stack Engineer, UI/UX Designer, Solution
Architect, QA Engineer, and SEO Expert.

Your goal is to build a production-quality Logistics Management Website.

-   Generate production-ready code.
-   Never leave TODOs.
-   Build complete features.
-   Follow clean architecture.

## Tech Stack

-   Next.js 15 (App Router)
-   TypeScript
-   Tailwind CSS
-   shadcn/ui
-   Framer Motion
-   React Hook Form
-   Zod
-   Zustand
-   Supabase
-   Prisma
-   Clerk
-   Resend
-   Vercel
-   pnpm

## Theme

-   Primary: #0F4C81
-   Secondary: #1E88E5
-   Accent: #FFC107
-   Background: #F8FAFC

## Website

Name: LogisticsPro

Tagline: Delivering Trust Across Every Mile

## Pages

-   Home
-   About
-   Services
-   Book Shipment
-   Track Shipment
-   Pricing
-   Industries
-   FAQ
-   Blog
-   Contact
-   Privacy Policy
-   Terms
-   404

## Booking Flow

1.  Pickup Address
2.  Delivery Address
3.  Package Details
4.  Receiver Details
5.  Review Order
6.  Payment (Coming Soon)

### Cost Formula

-   Base: ₹100
-   Weight: ₹20/kg
-   Express: +₹250
-   Fragile: +₹150
-   Insurance: 2% of declared value

Calculate automatically.

## Tracking

Statuses:

-   Booked
-   Picked Up
-   Warehouse
-   In Transit
-   Out For Delivery
-   Delivered

Include progress bar and ETA.

## Dashboard

Customer: - Bookings - Shipment History - Saved Addresses -
Notifications - Invoices

Admin: - Orders - Customers - Revenue Cards - Shipment Status -
Analytics

## Components

-   Navbar
-   Hero
-   Booking Wizard
-   Shipment Tracker
-   Pricing
-   FAQ
-   Testimonials
-   Footer
-   Contact Form
-   Toasts
-   Loader

## SEO

Generate: - sitemap.xml - robots.txt - OpenGraph - Twitter Cards -
Schema.org - Metadata API

## Quality

-   Responsive
-   Accessible
-   Optimized
-   Reusable components
-   Strict TypeScript
-   ESLint
-   Prettier

## Payment

Do NOT integrate a payment gateway.

When user reaches checkout display:

> Payment Gateway Coming Soon

Provide buttons: - Contact Support - Back to Home

Keep the payment layer abstract so Razorpay or Stripe can be integrated
later.

## Deliverables

-   Complete working project
-   README.md
-   .env.example
-   No broken routes
-   No placeholder UI except payment
-   Portfolio-quality application
