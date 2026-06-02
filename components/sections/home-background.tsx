import { BGPattern } from "@/components/ui/bg-pattern";

/**
 * Full-page background for the home route. Fixed behind all content: a clean
 * white→green vertical gradient with a subtle dot pattern. Blends into the footer.
 */
export function HomeBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, #ffffff 0%, #f1fcf6 32%, rgba(28,191,101,0.22) 72%, rgba(28,191,101,0.42) 100%)",
        }}
      />
      <BGPattern
        variant="dots"
        mask="fade-center"
        size={22}
        fill="rgba(10,13,16,0.16)"
        className="z-0"
      />
    </div>
  );
}
