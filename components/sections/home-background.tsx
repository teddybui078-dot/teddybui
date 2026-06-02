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
            // pure-green aurora rising from the bottom over a near-black top
            "radial-gradient(56% 50% at 14% 108%, rgba(40,210,130,0.50), transparent 60%)," +
            "radial-gradient(52% 48% at 88% 102%, rgba(46,200,120,0.36), transparent 58%)," +
            "radial-gradient(80% 60% at 70% 118%, rgba(120,235,150,0.40), transparent 60%)," +
            "radial-gradient(100% 80% at 50% 124%, rgba(28,191,101,0.62), transparent 64%)," +
            "radial-gradient(70% 50% at 50% -8%, rgba(28,191,101,0.12), transparent 58%)," +
            "var(--color-ink-950)",
        }}
      />
      <div
        className="grid-overlay absolute inset-0"
        style={{
          maskImage:
            "radial-gradient(130% 110% at 50% 24%, black 30%, transparent 86%)",
          WebkitMaskImage:
            "radial-gradient(130% 110% at 50% 24%, black 30%, transparent 86%)",
        }}
      />
    </div>
  );
}
