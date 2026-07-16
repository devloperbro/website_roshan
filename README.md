# Nirpakh LogisticPro

**Delivering Trust Across Every Mile**

A production-ready logistics management website built with Next.js 15 (App Router), TypeScript, Tailwind CSS, and shadcn/ui.

## Tech Stack

- Next.js 15 (App Router) + TypeScript
- Tailwind CSS + shadcn/ui
- Framer Motion, React Hook Form, Zod, Zustand
- Prisma (schema included) — connect to Postgres (Supabase/Neon/Vercel Postgres) when ready
- Resend (email)

## Getting Started

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

The app runs fully in **demo mode** with local mock data (products, tracking, dashboard, admin) — no database or API keys required to develop or preview.

## Environment Variables

Copy `.env.example` to `.env` and fill in real credentials when ready to connect a database or email:

```bash
cp .env.example .env
```

- `NEXT_PUBLIC_APP_URL` — required in production; used for SEO metadata, sitemap, robots.txt, and OpenGraph tags.
- `RESEND_API_KEY` / `RESEND_FROM_EMAIL` — required to actually send contact-form emails; without it the form still validates and confirms submission in demo mode.
- `DATABASE_URL` / `DIRECT_URL` — optional, required only once you wire up Prisma (`prisma/schema.prisma`) to a real database.

See [DEPLOYMENT.md](./DEPLOYMENT.md) for full Vercel deployment steps.

## Key Features

- **Pricing Catalog** (`/pricing`): 100 services across 10 categories, priced from ₹100 to ₹30,000, with search/filter/sort — see `src/lib/data/products.ts`.
- **Book Shipment** (`/book-shipment`): 5-step wizard (pickup → delivery → package → receiver → review) with a live cost calculator (base ₹100 + ₹20/kg + express/fragile surcharges + 2% insurance).
- **Track Shipment** (`/track-shipment`): live progress bar across Booked → Picked Up → Warehouse → In Transit → Out For Delivery → Delivered.
- **Checkout**: abstracted payment layer — displays "Payment Gateway Coming Soon" and a Razorpay button that shows "Sorry, we are updating our payment policy" (ready for a real Razorpay/Stripe integration later).
- **Customer Dashboard** (`/dashboard`) & **Admin Dashboard** (`/admin`): bookings, addresses, invoices, orders, customers, and revenue analytics.
- **SEO**: `sitemap.ts`, `robots.ts`, Metadata API, OpenGraph, Twitter Cards, and Organization schema.org JSON-LD.

## Scripts

```bash
pnpm dev      # start dev server
pnpm build    # production build
pnpm start    # run production build
pnpm lint     # run ESLint
```

## Notes

- `prisma/schema.prisma` models Users, Addresses, Bookings, TrackingEvents, and Invoices — run `pnpm exec prisma generate` / `pnpm exec prisma migrate deploy` once `DATABASE_URL`/`DIRECT_URL` are set.
- Payment integration is intentionally abstracted (see `/checkout`) so Razorpay or Stripe can be added without changing the booking flow.

## Deploy on Vercel

See [DEPLOYMENT.md](./DEPLOYMENT.md) for exact, step-by-step Vercel deployment instructions and the full list of environment variables.
