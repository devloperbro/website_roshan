"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { packageDetailsSchema, type PackageDetailsInput } from "@/lib/validations";
import { calculateShipmentCost } from "@/lib/cost-calculator";
import { formatINR } from "@/lib/data/products";

const packageCategories = [
  "Documents",
  "Electronics",
  "Clothing & Apparel",
  "Books & Media",
  "Fragile / Glassware",
  "Machinery / Industrial",
  "Furniture",
  "Other",
];

interface PackageDetailsFormProps {
  defaultValues: Partial<PackageDetailsInput>;
  onSubmit: (data: PackageDetailsInput) => void;
  onBack: () => void;
}

export function PackageDetailsForm({ defaultValues, onSubmit, onBack }: PackageDetailsFormProps) {
  const form = useForm<PackageDetailsInput>({
    resolver: zodResolver(packageDetailsSchema),
    defaultValues: {
      weightKg: defaultValues.weightKg ?? 1,
      category: defaultValues.category ?? "",
      isExpress: defaultValues.isExpress ?? false,
      isFragile: defaultValues.isFragile ?? false,
      declaredValue: defaultValues.declaredValue ?? 0,
      notes: defaultValues.notes ?? "",
    },
  });

  const weightKg = form.watch("weightKg") || 0;
  const isExpress = form.watch("isExpress");
  const isFragile = form.watch("isFragile");
  const declaredValue = form.watch("declaredValue") || 0;

  const breakdown = calculateShipmentCost({ weightKg, isExpress, isFragile, declaredValue });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
        <h3 className="text-lg font-semibold text-brand-primary">Package Details</h3>

        <div className="grid gap-5 sm:grid-cols-2">
          <FormField
            control={form.control}
            name="weightKg"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Weight (kg)</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    step="0.1"
                    min="0.1"
                    placeholder="1.5"
                    value={field.value ?? ""}
                    onChange={(e) => field.onChange(e.target.valueAsNumber)}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Package Category</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {packageCategories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="declaredValue"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Declared Value (₹)</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  min="0"
                  placeholder="5000"
                  value={field.value ?? ""}
                  onChange={(e) => field.onChange(e.target.valueAsNumber)}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex flex-col gap-4 sm:flex-row sm:gap-8">
          <FormField
            control={form.control}
            name="isExpress"
            render={({ field }) => (
              <FormItem className="flex items-center gap-2 space-y-0">
                <FormControl>
                  <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                </FormControl>
                <FormLabel className="!mt-0">Express Delivery (+₹250)</FormLabel>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="isFragile"
            render={({ field }) => (
              <FormItem className="flex items-center gap-2 space-y-0">
                <FormControl>
                  <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                </FormControl>
                <FormLabel className="!mt-0">Fragile Handling (+₹150)</FormLabel>
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="notes"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Special Instructions (optional)</FormLabel>
              <FormControl>
                <Textarea placeholder="Any handling notes for the courier..." rows={3} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="rounded-xl border border-border bg-muted/40 p-4">
          <p className="text-sm font-semibold text-brand-primary">Live Cost Estimate</p>
          <div className="mt-2 space-y-1 text-sm text-muted-foreground">
            <div className="flex justify-between"><span>Base fare</span><span>{formatINR(breakdown.base)}</span></div>
            <div className="flex justify-between"><span>Weight charge</span><span>{formatINR(breakdown.weightCharge)}</span></div>
            {breakdown.expressCharge > 0 && (
              <div className="flex justify-between"><span>Express surcharge</span><span>{formatINR(breakdown.expressCharge)}</span></div>
            )}
            {breakdown.fragileCharge > 0 && (
              <div className="flex justify-between"><span>Fragile handling</span><span>{formatINR(breakdown.fragileCharge)}</span></div>
            )}
            {breakdown.insuranceCharge > 0 && (
              <div className="flex justify-between"><span>Insurance (2%)</span><span>{formatINR(breakdown.insuranceCharge)}</span></div>
            )}
            <div className="mt-2 flex justify-between border-t border-border pt-2 text-base font-bold text-brand-primary">
              <span>Total</span><span>{formatINR(breakdown.total)}</span>
            </div>
          </div>
        </div>

        <div className="flex justify-between pt-2">
          <Button type="button" variant="outline" onClick={onBack}>
            Back
          </Button>
          <Button type="submit" className="bg-brand-primary hover:bg-brand-primary/90">
            Continue
          </Button>
        </div>
      </form>
    </Form>
  );
}
