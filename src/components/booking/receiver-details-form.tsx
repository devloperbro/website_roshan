"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { receiverDetailsSchema, type ReceiverDetailsInput } from "@/lib/validations";

interface ReceiverDetailsFormProps {
  defaultValues: Partial<ReceiverDetailsInput>;
  onSubmit: (data: ReceiverDetailsInput) => void;
  onBack: () => void;
}

export function ReceiverDetailsForm({ defaultValues, onSubmit, onBack }: ReceiverDetailsFormProps) {
  const form = useForm<ReceiverDetailsInput>({
    resolver: zodResolver(receiverDetailsSchema),
    defaultValues: {
      receiverName: defaultValues.receiverName ?? "",
      receiverPhone: defaultValues.receiverPhone ?? "",
      receiverEmail: defaultValues.receiverEmail ?? "",
      deliveryInstructions: defaultValues.deliveryInstructions ?? "",
    },
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
        <h3 className="text-lg font-semibold text-brand-primary">Receiver Details</h3>

        <div className="grid gap-5 sm:grid-cols-2">
          <FormField
            control={form.control}
            name="receiverName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Receiver Name</FormLabel>
                <FormControl>
                  <Input placeholder="Receiver's full name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="receiverPhone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Receiver Phone</FormLabel>
                <FormControl>
                  <Input placeholder="98765 43210" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="receiverEmail"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Receiver Email (optional)</FormLabel>
              <FormControl>
                <Input type="email" placeholder="receiver@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="deliveryInstructions"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Delivery Instructions (optional)</FormLabel>
              <FormControl>
                <Textarea placeholder="Gate code, preferred time, etc." rows={3} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex justify-between pt-2">
          <Button type="button" variant="outline" onClick={onBack}>
            Back
          </Button>
          <Button type="submit" className="bg-brand-primary hover:bg-brand-primary/90">
            Review Order
          </Button>
        </div>
      </form>
    </Form>
  );
}
