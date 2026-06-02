/**
 * Full-page background for the home route. Fixed behind all content so the
 * hero and footer sit on one continuous gradient with no seam.
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
      <div
        className="grid-overlay absolute inset-0"
        style={{
          maskImage:
            "radial-gradient(125% 100% at 50% 28%, black 32%, transparent 88%)",
          WebkitMaskImage:
            "radial-gradient(125% 100% at 50% 28%, black 32%, transparent 88%)",
        }}
      />
    </div>
  );
}
