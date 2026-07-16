# Deployment Guide — Nirpakh LogisticPro (Vercel)

This document lists the exact steps to deploy this Next.js 15 app to Vercel, plus every
environment variable the project understands.

## 1. Prerequisites

- A [Vercel](https://vercel.com) account.
- This repository pushed to GitHub, GitLab, or Bitbucket.
- (Optional, only if you want live email) A [Resend](https://resend.com) account and API key.
- (Optional, only if you want a live database) A managed Postgres instance — Supabase, Neon,
  or Vercel Postgres all work with Prisma.

## 2. Import the project into Vercel

1. Go to [vercel.com/new](https://vercel.com/new) and import this Git repository.
2. Framework Preset: Vercel auto-detects **Next.js** — leave it as is.
3. Build Command: `pnpm build` (default, no change needed).
4. Output Directory: leave blank (Next.js default).
5. Install Command: `pnpm install` (default, no change needed).

## 3. Required environment variables

Set these in **Vercel Project → Settings → Environment Variables** (for `Production`,
`Preview`, and `Development` as appropriate):

| Variable | Required? | Description |
|---|---|---|
| `NEXT_PUBLIC_APP_URL` | **Required** | Your production URL, e.g. `https://www.nirpakhlogisticpro.com`. Used for SEO metadata, `sitemap.xml`, `robots.txt`, and OpenGraph tags. |
| `RESEND_API_KEY` | Recommended | API key from Resend, used to deliver contact-form submissions. Without it, the contact form still validates input and shows a success message, but no email is sent. |
| `RESEND_FROM_EMAIL` | Recommended | The verified "from" address/name for outgoing email, e.g. `Nirpakh LogisticPro <noreply@yourdomain.com>`. Defaults to a Resend sandbox address if unset. |
| `DATABASE_URL` | Optional | Pooled Postgres connection string, only needed once you wire up Prisma to a live database (the app currently runs on local mock data). |
| `DIRECT_URL` | Optional | Direct (non-pooled) Postgres connection string, used by Prisma Migrate. Required alongside `DATABASE_URL` if you enable the database. |
| `PAYMENT_PROVIDER` | Optional | Reserved for future use (`razorpay` / `stripe`). Checkout currently displays "Payment Gateway Coming Soon" regardless of this value. |
| `RAZORPAY_KEY_ID` / `RAZORPAY_KEY_SECRET` | Optional | Reserved for a future Razorpay integration. Not used yet. |
| `STRIPE_SECRET_KEY` / `STRIPE_WEBHOOK_SECRET` | Optional | Reserved for a future Stripe integration. Not used yet. |

Copy `.env.example` as a starting point:

```bash
cp .env.example .env
```

## 4. Domain & email sender verification

- Add your custom domain under **Vercel Project → Settings → Domains**.
- If sending real email via Resend, verify your sending domain in the Resend dashboard and
  update `RESEND_FROM_EMAIL` to use an address on that verified domain (sandbox addresses like
  `onboarding@resend.dev` only deliver to your own Resend account email).

## 5. (Optional) Connecting a live database with Prisma

The app ships with `prisma/schema.prisma` (Users, Addresses, Bookings, TrackingEvents,
Invoices) but runs on local mock data by default — no database is required to deploy or use
the site as-is. To connect a real database:

1. Provision a Postgres database (Supabase, Neon, or Vercel Postgres).
2. Set `DATABASE_URL` (pooled) and `DIRECT_URL` (direct) in Vercel's environment variables.
3. Run migrations from your local machine or CI, pointed at the production database:
   ```bash
   pnpm exec prisma migrate deploy
   ```
4. Add `prisma generate` to your build step if you start importing `@prisma/client` in
   application code (Vercel's build cache can otherwise serve a stale client):
   ```json
   "scripts": {
     "postinstall": "prisma generate"
   }
   ```

## 6. Deploy

Click **Deploy** in Vercel. Every subsequent push to your default branch will trigger a new
production deployment automatically; pull requests get their own preview deployments.

## 7. Post-deploy checklist

- [ ] Visit `/sitemap.xml` and `/robots.txt` on the live domain and confirm URLs point to your
      production domain (driven by `NEXT_PUBLIC_APP_URL`).
- [ ] Submit the contact form (`/contact`) and confirm the email arrives (if `RESEND_API_KEY`
      is set).
- [ ] Click through the booking wizard (`/book-shipment`) end-to-end to `/checkout`.
- [ ] Spot-check `/`, `/pricing`, `/track-shipment`, `/blog`, `/dashboard`, and `/admin` on a
      mobile viewport.
- [ ] Confirm the favicon and page titles/OpenGraph previews look correct when sharing a link.
