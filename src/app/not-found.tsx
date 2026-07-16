import Link from "next/link";
import { Home, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-xl flex-col items-center justify-center px-4 text-center">
      <p className="text-6xl font-extrabold text-brand-primary">404</p>
      <h1 className="mt-4 text-2xl font-bold">Page Not Found</h1>
      <p className="mt-2 text-muted-foreground">
        The page you&apos;re looking for doesn&apos;t exist or may have been moved.
      </p>
      <div className="mt-8 flex gap-3">
        <Button asChild variant="outline">
          <Link href="/track-shipment">
            <Search className="mr-2 size-4" /> Track Shipment
          </Link>
        </Button>
        <Button asChild className="bg-brand-primary hover:bg-brand-primary/90">
          <Link href="/">
            <Home className="mr-2 size-4" /> Back to Home
          </Link>
        </Button>
      </div>
    </div>
  );
}
