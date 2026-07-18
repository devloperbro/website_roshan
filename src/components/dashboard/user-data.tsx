"use client";

import * as React from "react";
import Link from "next/link";
import { Package } from "lucide-react";
import { supabase } from "@/lib/supabase";
import { useAuth } from "@/lib/auth-context";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export interface UserShipment {
  id: string;
  tracking_number: string;
  origin: string;
  destination: string;
  status: string;
  amount: number;
  created_at: string;
}

const statusColors: Record<string, string> = {
  Booked: "bg-blue-100 text-blue-700",
  "Picked Up": "bg-indigo-100 text-indigo-700",
  Warehouse: "bg-purple-100 text-purple-700",
  "In Transit": "bg-amber-100 text-amber-700",
  "Out For Delivery": "bg-orange-100 text-orange-700",
  Delivered: "bg-green-100 text-green-700",
};

function formatINR(amount: number) {
  return `₹${amount.toLocaleString("en-IN")}`;
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export function useUserShipments() {
  const { user } = useAuth();
  const [shipments, setShipments] = React.useState<UserShipment[]>([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    if (!user) {
      setShipments([]);
      setLoading(false);
      return;
    }

    supabase
      .from("shipments")
      .select("*")
      .eq("user_id", user.id)
      .order("created_at", { ascending: false })
      .then(({ data }) => {
        setShipments((data as UserShipment[]) ?? []);
        setLoading(false);
      });
  }, [user]);

  return { shipments, loading };
}

// ── Summary Cards ─────────────────────────────────────────────────────────────
export function DashboardSummaryCards() {
  const { shipments, loading } = useUserShipments();

  if (loading) {
    return (
      <div className="grid gap-4 sm:grid-cols-3">
        {[1, 2, 3].map((i) => (
          <Card key={i}>
            <CardContent className="pt-6">
              <Skeleton className="h-4 w-28" />
              <Skeleton className="mt-2 h-8 w-16" />
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  const inProgress = shipments.filter((s) => s.status !== "Delivered").length;
  const totalSpent = shipments.reduce((sum, s) => sum + (s.amount ?? 0), 0);

  return (
    <div className="grid gap-4 sm:grid-cols-3">
      <Card>
        <CardContent className="pt-6">
          <p className="text-sm text-muted-foreground">Total Bookings</p>
          <p className="mt-1 text-2xl font-bold text-brand-primary">{shipments.length}</p>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="pt-6">
          <p className="text-sm text-muted-foreground">In Progress</p>
          <p className="mt-1 text-2xl font-bold text-brand-primary">{inProgress}</p>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="pt-6">
          <p className="text-sm text-muted-foreground">Total Spent</p>
          <p className="mt-1 text-2xl font-bold text-brand-primary">{formatINR(totalSpent)}</p>
        </CardContent>
      </Card>
    </div>
  );
}

// ── Bookings Table ─────────────────────────────────────────────────────────────
export function DashboardBookingsTable() {
  const { shipments, loading } = useUserShipments();

  if (loading) {
    return (
      <Card className="mt-6">
        <CardContent className="pt-6 space-y-3">
          {[1, 2, 3].map((i) => <Skeleton key={i} className="h-10 w-full" />)}
        </CardContent>
      </Card>
    );
  }

  if (shipments.length === 0) {
    return (
      <Card className="mt-6">
        <CardContent className="flex flex-col items-center gap-4 py-16 text-center">
          <Package className="size-12 text-muted-foreground/40" />
          <div>
            <p className="font-semibold text-foreground">No bookings yet</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Your shipments will appear here once you book one.
            </p>
          </div>
          <Button asChild className="bg-brand-primary hover:bg-brand-primary/90">
            <Link href="/book-shipment">Book a Shipment</Link>
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="mt-6">
      <CardContent className="pt-6">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Tracking ID</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Destination</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {shipments.map((s) => (
              <TableRow key={s.id}>
                <TableCell className="font-mono text-sm">{s.tracking_number}</TableCell>
                <TableCell>{formatDate(s.created_at)}</TableCell>
                <TableCell>{s.destination}</TableCell>
                <TableCell>
                  <Badge className={statusColors[s.status] ?? ""} variant="secondary">
                    {s.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  {s.amount ? formatINR(s.amount) : "—"}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}

// ── History Table (all shipments, no amount col) ───────────────────────────────
export function DashboardHistoryTable() {
  const { shipments, loading } = useUserShipments();

  if (loading) {
    return (
      <Card>
        <CardContent className="pt-6 space-y-3">
          {[1, 2, 3].map((i) => <Skeleton key={i} className="h-10 w-full" />)}
        </CardContent>
      </Card>
    );
  }

  if (shipments.length === 0) {
    return (
      <Card>
        <CardContent className="flex flex-col items-center gap-4 py-16 text-center">
          <Package className="size-12 text-muted-foreground/40" />
          <div>
            <p className="font-semibold text-foreground">No shipment history</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Your past and current shipments will appear here.
            </p>
          </div>
          <Button asChild className="bg-brand-primary hover:bg-brand-primary/90">
            <Link href="/book-shipment">Book a Shipment</Link>
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardContent className="pt-6">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Tracking ID</TableHead>
              <TableHead>Booking Date</TableHead>
              <TableHead>Origin</TableHead>
              <TableHead>Destination</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {shipments.map((s) => (
              <TableRow key={s.id}>
                <TableCell className="font-mono text-sm">{s.tracking_number}</TableCell>
                <TableCell>{formatDate(s.created_at)}</TableCell>
                <TableCell>{s.origin}</TableCell>
                <TableCell>{s.destination}</TableCell>
                <TableCell>{s.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}

// ── Invoices Table (derived from delivered shipments) ─────────────────────────
export function DashboardInvoicesTable() {
  const { shipments, loading } = useUserShipments();

  if (loading) {
    return (
      <Card>
        <CardContent className="pt-6 space-y-3">
          {[1, 2, 3].map((i) => <Skeleton key={i} className="h-10 w-full" />)}
        </CardContent>
      </Card>
    );
  }

  const delivered = shipments.filter((s) => s.status === "Delivered");

  if (delivered.length === 0) {
    return (
      <Card>
        <CardContent className="flex flex-col items-center gap-4 py-16 text-center">
          <Package className="size-12 text-muted-foreground/40" />
          <div>
            <p className="font-semibold text-foreground">No invoices yet</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Invoices are generated once a shipment is delivered.
            </p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardContent className="pt-6">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Invoice #</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Tracking ID</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {delivered.map((s, i) => (
              <TableRow key={s.id}>
                <TableCell className="font-mono text-sm">
                  INV-{new Date(s.created_at).getFullYear()}-{String(i + 1).padStart(4, "0")}
                </TableCell>
                <TableCell>{formatDate(s.created_at)}</TableCell>
                <TableCell className="font-mono text-sm">{s.tracking_number}</TableCell>
                <TableCell>{s.amount ? formatINR(s.amount) : "—"}</TableCell>
                <TableCell>
                  <Badge variant="secondary" className="bg-green-100 text-green-700">
                    Paid
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
