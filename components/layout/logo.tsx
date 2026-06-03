import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * Teddy Bui monogram — "TB" drawn in the current text colour, so it's black on
 * light surfaces and `text-cream` on dark ones. Pure vector, scales cleanly,
 * and carries none of the old Meridian "M" mark.
 */
export function Logo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={cn("size-[22px]", className)}
      role="img"
      aria-label="Teddy Bui"
    >
      <text
        x="16"
        y="16"
        textAnchor="middle"
        dominantBaseline="central"
        fontFamily="-apple-system, BlinkMacSystemFont, 'SF Pro Display', system-ui, sans-serif"
        fontSize="18"
        fontWeight="800"
        letterSpacing="-1.2"
        fill="currentColor"
      >
        TB
      </text>
    </svg>
  );
}
