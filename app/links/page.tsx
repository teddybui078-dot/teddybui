import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { PageShell } from "@/components/layout/page-shell";
import { PageBackground } from "@/components/sections/page-background";
import { Reveal } from "@/components/ui/scroll-reveal";
import { linkGroups, type LinkItem } from "@/lib/data/links";

export const metadata: Metadata = {
  title: "Links",
  description: "Where to find Meridian Labs, and what we've made public.",
};

// Green sweeping diagonally from the top-left, fading to white.
const LINKS_BG = [
  "radial-gradient(72% 64% at 4% -10%, rgba(28,191,101,0.46), transparent 58%)",
  "radial-gradient(48% 48% at 100% 4%, rgba(28,191,101,0.20), transparent 55%)",
  "linear-gradient(155deg, rgba(28,191,101,0.06) 0%, #ffffff 46%, #ffffff 100%)",
].join(", ");

export default function LinksPage() {
  return (
    <>
      <PageBackground gradient={LINKS_BG} />
      <PageShell title="Links" subtitle="Find us, and everything we keep in the open.">
      <div className="max-w-[640px] space-y-12">
        {linkGroups.map((group) => (
          <section key={group.title}>
            <h2 className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-400">
              {group.title}
            </h2>
            <ul className="mt-3 divide-y divide-ink-950/[0.06] border-t border-ink-950/[0.06]">
              {group.items.map((item, i) => (
                <Reveal key={item.label} delay={0.03 * i} as="li">
                  <LinkRow item={item} />
                </Reveal>
              ))}
            </ul>
          </section>
        ))}
      </div>
      </PageShell>
    </>
  );
}

function LinkRow({ item }: { item: LinkItem }) {
  const inner = (
    <>
      <div>
        <div className="text-[15px] font-medium text-ink-900 transition-colors group-hover:text-emerald-600">
          {item.label}
        </div>
        <div className="mt-0.5 text-[13px] text-ink-500">{item.description}</div>
      </div>
      {item.external ? (
        <ArrowUpRight
          weight="bold"
          className="size-4 text-ink-400 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-emerald-600"
        />
      ) : (
        <ArrowRight
          weight="bold"
          className="size-4 text-ink-400 transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-emerald-600"
        />
      )}
    </>
  );

  const className =
    "group flex items-center justify-between gap-4 py-4 transition-colors";

  return item.external ? (
    <a href={item.href} target="_blank" rel="noopener noreferrer" className={className}>
      {inner}
    </a>
  ) : (
    <Link href={item.href} className={className}>
      {inner}
    </Link>
  );
}
