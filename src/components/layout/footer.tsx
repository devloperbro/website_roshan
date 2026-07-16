import Link from "next/link";
import { Mail, MapPin, Phone, Truck } from "lucide-react";
import { footerNav, siteConfig } from "@/lib/constants";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/60 bg-brand-primary text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <span className="flex size-9 items-center justify-center rounded-lg bg-white/10">
                <Truck className="size-5" />
              </span>
              <span className="text-lg font-bold">{siteConfig.name}</span>
            </Link>
            <p className="mt-3 max-w-sm text-sm text-white/80">{siteConfig.tagline}</p>
            <div className="mt-5 space-y-2 text-sm text-white/80">
              <p className="flex items-start gap-2">
                <MapPin className="mt-0.5 size-4 shrink-0" /> {siteConfig.address}
              </p>
              <p className="flex items-center gap-2">
                <Phone className="size-4 shrink-0" /> {siteConfig.supportPhone}
              </p>
              <p className="flex items-center gap-2">
                <Mail className="size-4 shrink-0" /> {siteConfig.supportEmail}
              </p>
            </div>
            <div className="mt-5 flex items-center gap-3 text-sm text-white/80">
              <Link href={siteConfig.socials.twitter} className="rounded-full bg-white/10 px-3 py-1.5 hover:bg-white/20">
                Twitter
              </Link>
              <Link href={siteConfig.socials.linkedin} className="rounded-full bg-white/10 px-3 py-1.5 hover:bg-white/20">
                LinkedIn
              </Link>
              <Link href={siteConfig.socials.facebook} className="rounded-full bg-white/10 px-3 py-1.5 hover:bg-white/20">
                Facebook
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white/60">Company</h3>
            <ul className="mt-4 space-y-2 text-sm">
              {footerNav.company.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-white/80 hover:text-white">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white/60">Services</h3>
            <ul className="mt-4 space-y-2 text-sm">
              {footerNav.services.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-white/80 hover:text-white">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white/60">Legal</h3>
            <ul className="mt-4 space-y-2 text-sm">
              {footerNav.legal.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-white/80 hover:text-white">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/15 pt-6 text-center text-sm text-white/60">
          © {year} {siteConfig.name}. All rights reserved.
          <br />
          {siteConfig.legalName}
        </div>
      </div>
    </footer>
  );
}
