import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

export function Loader({ className, label = "Loading..." }: { className?: string; label?: string }) {
  return (
    <div className={cn("flex flex-col items-center justify-center gap-3 py-12 text-muted-foreground", className)}>
      <Loader2 className="size-8 animate-spin text-brand-primary" />
      <p className="text-sm">{label}</p>
    </div>
  );
}
