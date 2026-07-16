import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { blogPosts } from "@/lib/data/blog";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: "Blog Post Not Found" };
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: { title: post.title, description: post.excerpt },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <Link href="/blog" className="inline-flex items-center gap-1 text-sm text-brand-secondary hover:underline">
        <ArrowLeft className="size-4" /> Back to Blog
      </Link>

      <span className="mt-6 block text-xs font-medium uppercase tracking-wide text-brand-secondary">
        {post.category}
      </span>
      <h1 className="mt-2 text-3xl font-bold text-brand-primary sm:text-4xl">{post.title}</h1>
      <div className="mt-3 flex gap-3 text-sm text-muted-foreground">
        <span>{post.author}</span>
        <span>·</span>
        <span>{post.date}</span>
        <span>·</span>
        <span>{post.readTime}</span>
      </div>

      <div className="mt-8 space-y-5 text-base leading-relaxed text-foreground">
        {post.content.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </article>
  );
}
