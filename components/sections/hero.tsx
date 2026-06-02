"use client";

import * as React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { Play } from "@phosphor-icons/react/dist/ssr";
import { Logo } from "@/components/layout/logo";

const EASE = [0.23, 1, 0.32, 1] as const;

const ROTATING = ["students", "founders", "builders", "dreamers"];

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
  const [i, setI] = React.useState(0);

  React.useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % ROTATING.length), 2400);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative flex min-h-[92vh] items-center justify-center px-6 text-center">
      <div className="mx-auto flex w-full max-w-3xl flex-col items-center">
        {/* logo mark */}
        <motion.div custom={0} variants={fade} initial="hidden" animate="show">
          <Logo className="size-14 drop-shadow-[0_8px_24px_rgba(28,191,101,0.35)]" />
        </motion.div>

        {/* headline */}
        <h1 className="mt-8 text-[clamp(2.6rem,7vw,5rem)] font-semibold leading-[0.98] tracking-[-0.04em] text-ink-950">
          <motion.span custom={1} variants={fade} initial="hidden" animate="show" className="block">
            We build AI tools
          </motion.span>
          <motion.span custom={2} variants={fade} initial="hidden" animate="show" className="block">
            for{" "}
            <span className="relative inline-grid align-baseline">
              <AnimatePresence mode="popLayout" initial={false}>
                <motion.span
                  key={ROTATING[i]}
                  initial={{ y: "0.5em", opacity: 0, filter: "blur(6px)" }}
                  animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                  exit={{ y: "-0.5em", opacity: 0, filter: "blur(6px)" }}
                  transition={{ duration: 0.5, ease: EASE }}
                  className="col-start-1 row-start-1 text-emerald-500"
                >
                  {ROTATING[i]}.
                </motion.span>
              </AnimatePresence>
              <span className="invisible col-start-1 row-start-1" aria-hidden>
                founders.
              </span>
            </span>
          </motion.span>
        </h1>

        {/* tagline */}
        <motion.p
          custom={3}
          variants={fade}
          initial="hidden"
          animate="show"
          className="mt-6 max-w-[42ch] text-base leading-relaxed text-ink-500 md:text-lg"
        >
          A studio shipping practical software for the people building what&apos;s next.
        </motion.p>

        {/* dark pill CTA */}
        <motion.div custom={4} variants={fade} initial="hidden" animate="show" className="mt-9">
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2.5 rounded-full bg-ink-950 py-3 pl-6 pr-3 text-sm font-medium text-white shadow-[0_12px_30px_-10px_rgba(10,13,16,0.5)] transition-colors hover:bg-ink-800"
          >
            View Projects
            <span className="grid size-7 place-items-center rounded-full bg-white/15 transition-transform duration-300 ease-[var(--ease-out-quint)] group-hover:translate-x-0.5">
              <Play weight="fill" className="size-3 text-white" />
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
