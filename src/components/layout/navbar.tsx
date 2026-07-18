"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { LogIn, LogOut, Menu, Package, Truck, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { mainNav, siteConfig } from "@/lib/constants";
import { useAuth } from "@/lib/auth-context";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = React.useState(false);
  const { user, signOut } = useAuth();

  async function handleSignOut() {
    await signOut();
    router.push("/");
    router.refresh();
  }

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
          {user ? (
            <>
              <Button asChild variant="outline">
                <Link href="/dashboard">
                  <Package className="mr-1 size-4" />
                  Dashboard
                </Link>
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger
                  render={
                    <Button variant="outline" size="icon" aria-label="Account menu">
                      <User className="size-4" />
                    </Button>
                  }
                />
                <DropdownMenuContent align="end">
                  <div className="px-2 py-1.5 text-xs text-muted-foreground truncate max-w-[180px]">
                    {user.email}
                  </div>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem render={<Link href="/dashboard" />}>
                    My Bookings
                  </DropdownMenuItem>
                  <DropdownMenuItem render={<Link href="/dashboard/shipment-history" />}>
                    Shipment History
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleSignOut} className="text-red-600">
                    <LogOut className="mr-2 size-4" />
                    Sign Out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          ) : (
            <>
              <Button asChild variant="outline">
                <Link href="/login">
                  <LogIn className="mr-1 size-4" />
                  Log In
                </Link>
              </Button>
              <Button asChild className="bg-brand-primary hover:bg-brand-primary/90">
                <Link href="/signup">Sign Up</Link>
              </Button>
            </>
          )}
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
              {user ? (
                <>
                  <Link
                    href="/dashboard"
                    onClick={() => setOpen(false)}
                    className="text-base font-medium text-muted-foreground hover:text-brand-primary"
                  >
                    Dashboard
                  </Link>
                  <Button
                    variant="outline"
                    className="mt-2 text-red-600"
                    onClick={() => {
                      setOpen(false);
                      handleSignOut();
                    }}
                  >
                    <LogOut className="mr-2 size-4" />
                    Sign Out
                  </Button>
                </>
              ) : (
                <>
                  <Button asChild variant="outline" className="mt-2" onClick={() => setOpen(false)}>
                    <Link href="/login">Log In</Link>
                  </Button>
                  <Button
                    asChild
                    className="mt-1 bg-brand-primary hover:bg-brand-primary/90"
                    onClick={() => setOpen(false)}
                  >
                    <Link href="/signup">Sign Up</Link>
                  </Button>
                </>
              )}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
