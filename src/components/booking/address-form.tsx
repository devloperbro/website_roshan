"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { addressSchema, type AddressInput } from "@/lib/validations";

interface AddressFormProps {
  title: string;
  defaultValues: Partial<AddressInput>;
  onSubmit: (data: AddressInput) => void;
  onBack?: () => void;
  submitLabel?: string;
}

export function AddressForm({ title, defaultValues, onSubmit, onBack, submitLabel = "Continue" }: AddressFormProps) {
  const form = useForm<AddressInput>({
    resolver: zodResolver(addressSchema),
    defaultValues: {
      fullName: defaultValues.fullName ?? "",
      phone: defaultValues.phone ?? "",
      addressLine1: defaultValues.addressLine1 ?? "",
      addressLine2: defaultValues.addressLine2 ?? "",
      city: defaultValues.city ?? "",
      state: defaultValues.state ?? "",
      pincode: defaultValues.pincode ?? "",
    },
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
        <h3 className="text-lg font-semibold text-brand-primary">{title}</h3>
        <div className="grid gap-5 sm:grid-cols-2">
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input placeholder="Full name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number</FormLabel>
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
          name="addressLine1"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Address Line 1</FormLabel>
              <FormControl>
                <Input placeholder="House / Flat No., Street" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="addressLine2"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Address Line 2 (optional)</FormLabel>
              <FormControl>
                <Input placeholder="Landmark, Area" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid gap-5 sm:grid-cols-3">
          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem>
                <FormLabel>City</FormLabel>
                <FormControl>
                  <Input placeholder="City" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="state"
            render={({ field }) => (
              <FormItem>
                <FormLabel>State</FormLabel>
                <FormControl>
                  <Input placeholder="State" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="pincode"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Pincode</FormLabel>
                <FormControl>
                  <Input placeholder="400001" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="flex justify-between pt-2">
          {onBack ? (
            <Button type="button" variant="outline" onClick={onBack}>
              Back
            </Button>
          ) : (
            <span />
          )}
          <Button type="submit" className="bg-brand-primary hover:bg-brand-primary/90">
            {submitLabel}
          </Button>
        </div>
      </form>
    </Form>
  );
}
