"use client";

import { cn } from "@/lib/utils";

export default function AgriAquaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={cn("min-h-screen bg-background font-sans antialiased")}>
      <div className="relative flex min-h-screen flex-col">
        <div className="flex-1">{children}</div>
      </div>
    </div>
  );
}
