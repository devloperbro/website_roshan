import type { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { blogPosts } from "@/lib/data/blog";

export const metadata: Metadata = {
  title: "Blog",
  description: "Insights on logistics, freight, cold chain, and e-commerce fulfillment from Nirpakh LogisticPro.",
};

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="text-4xl font-bold text-brand-primary sm:text-5xl">Nirpakh LogisticPro Blog</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Insights and best practices from across the supply chain.
        </p>
      </div>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`}>
            <Card className="h-full transition-shadow hover:shadow-lg">
              <CardContent className="flex h-full flex-col pt-6">
                <span className="text-xs font-medium uppercase tracking-wide text-brand-secondary">
                  {post.category}
                </span>
                <h2 className="mt-2 text-lg font-semibold leading-snug">{post.title}</h2>
                <p className="mt-2 flex-1 text-sm text-muted-foreground">{post.excerpt}</p>
                <div className="mt-4 flex justify-between text-xs text-muted-foreground">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
