import type { Metadata } from "next";
import { PageShell } from "@/components/layout/page-shell";
import { Reveal } from "@/components/ui/scroll-reveal";

export const metadata: Metadata = {
  title: "About",
  description: "How Meridian Labs works — a studio, not a startup.",
};

const NARRATIVE = [
  "Meridian Labs is a studio, not a startup. We launch many small things and let the good ones compound, rather than betting the company on a single roadmap.",
  "We build for two kinds of people: students racing a deadline and founders racing a runway. Different pressure, same need — software that removes friction at exactly the moment it would have cost you.",
  "Everything we ship runs as close to the user as possible. The draft you write never touches a server; the research you do stays yours. That constraint is what makes the products good.",
];

const VALUES = [
  ["Narrow on purpose", "One job, done well, with the work shown."],
  ["On-device by default", "Latency is a feature; privacy is a promise."],
  ["Design for 2am", "Built for the all-nighter, not the demo."],
  ["Ship, then sharpen", "Six sharp tools beat one bloated platform."],
];

export default function AboutPage() {
  return (
    <PageShell title="About" subtitle="A studio for the people who build.">
      {/* Narrative — section label on the left, prose on the right */}
      <section className="grid gap-y-6 lg:grid-cols-[180px_minmax(0,1fr)] lg:gap-x-20">
        <Reveal>
          <h2 className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-400 lg:sticky lg:top-32">
            Who we are
          </h2>
        </Reveal>
        <div className="max-w-[68ch] space-y-6">
          {NARRATIVE.map((para, i) => (
            <Reveal key={i} delay={0.04 * i}>
              <p className="text-lg leading-relaxed text-ink-700">{para}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Values — label on the left, two-up grid on the right */}
      <section className="mt-20 grid gap-y-8 border-t border-ink-950/[0.08] pt-12 lg:grid-cols-[180px_minmax(0,1fr)] lg:gap-x-20">
        <Reveal>
          <h2 className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-400 lg:sticky lg:top-32">
            What we believe
          </h2>
        </Reveal>
        <dl className="grid gap-x-12 gap-y-8 sm:grid-cols-2">
          {VALUES.map(([title, body], i) => (
            <Reveal key={title} delay={0.04 * i}>
              <div className="flex flex-col gap-1.5">
                <dt className="flex items-center gap-2 text-[15px] font-medium text-ink-950">
                  <span className="size-1.5 rounded-full bg-emerald-400" aria-hidden />
                  {title}
                </dt>
                <dd className="text-[15px] leading-relaxed text-ink-500">{body}</dd>
              </div>
            </Reveal>
          ))}
        </dl>
      </section>
    </PageShell>
  );
}
