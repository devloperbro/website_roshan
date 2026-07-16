"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Package, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { mainNav, siteConfig } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <span className="flex size-9 items-center justify-center rounded-lg bg-brand-primary text-white">
            <Truck className="size-5" />
          </span>
          <span className="text-lg font-bold text-brand-primary">{siteConfig.name}</span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-medium text-muted-foreground transition-colors hover:text-brand-primary",
                pathname === item.href && "text-brand-primary"
              )}
            >
              {item.title}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button asChild variant="outline">
            <Link href="/track-shipment">Track Shipment</Link>
          </Button>
          <Button asChild className="bg-brand-primary hover:bg-brand-primary/90">
            <Link href="/book-shipment">
              <Package className="mr-1 size-4" />
              Book Shipment
            </Link>
          </Button>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            render={
              <Button variant="outline" size="icon" className="lg:hidden" aria-label="Open menu">
                <Menu className="size-5" />
              </Button>
            }
          />
          <SheetContent side="right" className="w-72">
            <SheetHeader>
              <SheetTitle className="text-brand-primary">{siteConfig.name}</SheetTitle>
            </SheetHeader>
            <nav className="mt-4 flex flex-col gap-4 px-4">
              {mainNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "text-base font-medium text-muted-foreground transition-colors hover:text-brand-primary",
                    pathname === item.href && "text-brand-primary"
                  )}
                >
                  {item.title}
                </Link>
              ))}
              <Button asChild className="mt-2 bg-brand-primary hover:bg-brand-primary/90" onClick={() => setOpen(false)}>
                <Link href="/book-shipment">Book Shipment</Link>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
