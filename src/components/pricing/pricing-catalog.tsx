"use client";

import * as React from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  formatINR,
  productCategories,
  products,
  type Product,
} from "@/lib/data/products";

const sortOptions = [
  { value: "default", label: "Default" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "name-asc", label: "Name: A to Z" },
] as const;

type SortValue = (typeof sortOptions)[number]["value"];

export function PricingCatalog() {
  const [search, setSearch] = React.useState("");
  const [category, setCategory] = React.useState<string>("all");
  const [sort, setSort] = React.useState<SortValue>("default");

  const filtered = React.useMemo(() => {
    let result: Product[] = products;

    if (category !== "all") {
      result = result.filter((product) => product.category === category);
    }

    if (search.trim()) {
      const query = search.trim().toLowerCase();
      result = result.filter(
        (product) =>
          product.name.toLowerCase().includes(query) ||
          product.category.toLowerCase().includes(query)
      );
    }

    const sorted = [...result];
    if (sort === "price-asc") sorted.sort((a, b) => a.price - b.price);
    if (sort === "price-desc") sorted.sort((a, b) => b.price - a.price);
    if (sort === "name-asc") sorted.sort((a, b) => a.name.localeCompare(b.name));

    return sorted;
  }, [search, category, sort]);

  return (
    <div>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search 100+ services (e.g. express, freight, packaging)..."
            className="pl-9"
          />
        </div>
        <Select value={category} onValueChange={(value) => setCategory(value ?? "all")}>
          <SelectTrigger className="w-full sm:w-64">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All categories</SelectItem>
            {productCategories.map((cat) => (
              <SelectItem key={cat} value={cat}>
                {cat}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select value={sort} onValueChange={(value) => setSort(value as SortValue)}>
          <SelectTrigger className="w-full sm:w-56">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            {sortOptions.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <p className="mt-4 text-sm text-muted-foreground">
        Showing {filtered.length} of {products.length} services · Prices from{" "}
        {formatINR(100)} to {formatINR(30000)}
      </p>

      <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((product) => (
          <Card key={product.id} className="relative flex h-full flex-col">
            {product.popular && (
              <Badge className="absolute right-4 top-4 bg-brand-accent text-brand-primary">
                Popular
              </Badge>
            )}
            <CardContent className="flex h-full flex-col pt-6">
              <p className="text-xs font-medium uppercase tracking-wide text-brand-secondary">
                {product.category}
              </p>
              <h3 className="mt-2 text-base font-semibold leading-snug">{product.name}</h3>
              <p className="mt-2 flex-1 text-sm text-muted-foreground">{product.description}</p>
              <div className="mt-4 flex items-baseline justify-between">
                <span className="text-2xl font-bold text-brand-primary">
                  {formatINR(product.price)}
                </span>
                <span className="text-xs text-muted-foreground">{product.unit}</span>
              </div>
            </CardContent>
          </Card>
        ))}

        {filtered.length === 0 && (
          <div className="col-span-full rounded-xl border border-dashed border-border py-16 text-center text-muted-foreground">
            No services match your search. Try a different keyword or category.
          </div>
        )}
      </div>
    </div>
  );
}
