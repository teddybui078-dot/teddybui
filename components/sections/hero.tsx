"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { Play } from "@phosphor-icons/react/dist/ssr";
import { Logo } from "@/components/layout/logo";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";

const EASE = [0.23, 1, 0.32, 1] as const;

const fade = {
  hidden: { opacity: 0, y: 16, filter: "blur(8px)" },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: EASE, delay: 0.1 * i },
  }),
};

export function Hero() {
  return (
    <section className="relative flex min-h-[92vh] items-center justify-center px-6 text-center">
      <div className="mx-auto flex w-full max-w-3xl flex-col items-center">
        {/* logo mark */}
        <motion.div custom={0} variants={fade} initial="hidden" animate="show">
          <Logo className="size-14 drop-shadow-[0_8px_24px_rgba(28,191,101,0.35)]" />
        </motion.div>

        {/* semantic heading for a11y/SEO; the visual headline is the typewriter */}
        <h1 className="sr-only">We build AI tools people actually use.</h1>
        <TypewriterEffect
          words={[
            { text: "We" },
            { text: "build" },
            { text: "AI" },
            { text: "tools" },
            { text: "people" },
            { text: "actually", className: "text-emerald-300 dark:text-emerald-300" },
            { text: "use." },
          ]}
          className="mt-8 text-[clamp(2.4rem,6.5vw,4.4rem)] font-semibold leading-[1.0] tracking-[-0.04em]"
          cursorClassName="bg-emerald-400 h-7 md:h-9 lg:h-12"
        />

        {/* green pill CTA */}
        <motion.div custom={1} variants={fade} initial="hidden" animate="show" className="mt-10">
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2.5 rounded-full bg-emerald-400 py-3 pl-6 pr-3 text-sm font-semibold text-ink-950 shadow-[0_14px_40px_-10px_rgba(28,191,101,0.6),inset_0_1px_0_rgba(255,255,255,0.3)] transition-colors hover:bg-emerald-300"
          >
            View Projects
            <span className="grid size-7 place-items-center rounded-full bg-ink-950/15 transition-transform duration-300 ease-[var(--ease-out-quint)] group-hover:translate-x-0.5">
              <Play weight="fill" className="size-3 text-ink-950" />
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
