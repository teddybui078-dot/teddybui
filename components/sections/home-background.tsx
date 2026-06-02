import { FallingPattern } from "@/components/ui/falling-pattern";

/**
 * Full-page background for the home route. Fixed behind all content: animated
 * green "falling pattern" streaks, masked so the centered headline stays clear,
 * with a soft green glow at the bottom that blends into the footer.
 */
export function HomeBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
      <FallingPattern
        className="h-full w-full [mask-image:radial-gradient(70%_55%_at_50%_42%,transparent_0%,#000_80%)] [-webkit-mask-image:radial-gradient(70%_55%_at_50%_42%,transparent_0%,#000_80%)]"
        color="#1cbf65"
        backgroundColor="#0a0d10"
        duration={110}
        blurIntensity="0.4rem"
        density={2}
      />
      {/* soft green glow rising into the footer */}
      <div
        className="absolute inset-x-0 bottom-0 h-2/3"
        style={{
          background:
            "radial-gradient(110% 80% at 50% 128%, rgba(28,191,101,0.45), transparent 62%)",
        }}
      />
    </div>
  );
}
