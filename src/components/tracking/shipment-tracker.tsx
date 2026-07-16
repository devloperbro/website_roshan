"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Circle, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { trackingSchema } from "@/lib/validations";
import {
  findShipment,
  getStatusProgress,
  shipmentStatuses,
  type Shipment,
} from "@/lib/data/tracking";
import { cn } from "@/lib/utils";

export function ShipmentTracker() {
  const [shipment, setShipment] = React.useState<Shipment | null | undefined>(undefined);

  const form = useForm<{ trackingId: string }>({
    resolver: zodResolver(trackingSchema),
    defaultValues: { trackingId: "" },
  });

  function onSubmit(values: { trackingId: string }) {
    const result = findShipment(values.trackingId);
    setShipment(result ?? null);
  }

  return (
    <div className="mx-auto max-w-3xl">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-3 sm:flex-row">
          <FormField
            control={form.control}
            name="trackingId"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormControl>
                  <Input placeholder="Enter tracking ID (e.g. LGX10023456)" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" size="lg" className="bg-brand-primary hover:bg-brand-primary/90">
            <Search className="mr-2 size-4" />
            Track
          </Button>
        </form>
      </Form>

      <p className="mt-3 text-sm text-muted-foreground">
        Try sample IDs: <span className="font-mono">LGX10023456</span>,{" "}
        <span className="font-mono">LGX10098213</span>,{" "}
        <span className="font-mono">LGX10056789</span>
      </p>

      {shipment === null && (
        <div className="mt-8 rounded-xl border border-dashed border-border p-8 text-center text-muted-foreground">
          No shipment found for this tracking ID. Please double-check and try again.
        </div>
      )}

      {shipment && (
        <div className="mt-8 space-y-6 rounded-2xl border border-border bg-white p-6 shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-sm text-muted-foreground">Tracking ID</p>
              <p className="text-lg font-bold text-brand-primary">{shipment.trackingId}</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-muted-foreground">Estimated Delivery</p>
              <p className="text-lg font-semibold">{shipment.estimatedDelivery}</p>
            </div>
          </div>

          <div className="grid gap-3 text-sm sm:grid-cols-3">
            <p><span className="text-muted-foreground">From:</span> {shipment.senderCity}</p>
            <p><span className="text-muted-foreground">To:</span> {shipment.receiverCity}</p>
            <p><span className="text-muted-foreground">Service:</span> {shipment.serviceType}</p>
          </div>

          <div>
            <div className="flex justify-between text-sm font-medium">
              <span className="text-brand-primary">{shipment.currentStatus}</span>
              <span className="text-muted-foreground">{getStatusProgress(shipment.currentStatus)}%</span>
            </div>
            <Progress value={getStatusProgress(shipment.currentStatus)} className="mt-2 h-2" />
          </div>

          <div className="flex flex-wrap justify-between gap-2 pt-2">
            {shipmentStatuses.map((status) => {
              const reached =
                shipmentStatuses.indexOf(status) <= shipmentStatuses.indexOf(shipment.currentStatus);
              return (
                <div key={status} className="flex flex-1 flex-col items-center gap-1 text-center">
                  {reached ? (
                    <CheckCircle2 className="size-5 text-brand-secondary" />
                  ) : (
                    <Circle className="size-5 text-muted-foreground" />
                  )}
                  <span
                    className={cn(
                      "text-xs",
                      reached ? "font-medium text-foreground" : "text-muted-foreground"
                    )}
                  >
                    {status}
                  </span>
                </div>
              );
            })}
          </div>

          <div className="space-y-3 border-t border-border pt-4">
            <p className="text-sm font-semibold">Shipment History</p>
            {shipment.events
              .slice()
              .reverse()
              .map((event) => (
                <div key={event.timestamp} className="flex justify-between text-sm">
                  <div>
                    <p className="font-medium">{event.status}</p>
                    <p className="text-muted-foreground">{event.note}</p>
                  </div>
                  <div className="text-right text-muted-foreground">
                    <p>{event.timestamp}</p>
                    <p>{event.location}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
}
