"use client";

import * as React from "react";
import { useTypewriter } from "./use-typewriter";

const TYPED_TEXT =
  "Glad you stopped in. Good taste tends to find us. Now, what are we building?";

const PILLS = [
  "Pitch us an idea",
  "Come build with us",
  "Send a brief hello",
  "See how we operate",
];

const EMAIL = "hello@meridianlabs.co";

function CopyIcon({ copied }: { copied: boolean }) {
  if (copied) {
    return (
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M20 6 9 17l-5-5" />
      </svg>
    );
  }
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="9" y="9" width="13" height="13" rx="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
  );
}

export function HeroContent() {
  const { displayed, done } = useTypewriter(TYPED_TEXT);
  const [pillsVisible, setPillsVisible] = React.useState(false);
  const [copied, setCopied] = React.useState(false);

  React.useEffect(() => {
    const t = setTimeout(() => setPillsVisible(true), 400);
    return () => clearTimeout(t);
  }, []);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      /* clipboard unavailable */
    }
  }

  return (
    <section
      className="relative z-[1] flex h-screen flex-col justify-end overflow-hidden px-5 pb-12 sm:px-8 md:justify-center md:px-10 md:pb-0"
      style={{ fontFamily: "var(--font-body)" }}
    >
      <div className="relative z-10 max-w-xl">
        {/* blurred intro label */}
        <div
          className="pointer-events-none mb-5 select-none sm:mb-6"
          style={{
            fontSize: "clamp(18px, 4vw, 26px)",
            lineHeight: 1.3,
            fontWeight: 400,
            color: "#000",
            filter: "blur(4px)",
          }}
        >
          Hey there, meet A.R.I.A,
          <br />
          Meridian Labs&apos; Adaptive Response Interface Agent
        </div>

        {/* typewriter */}
        <p
          className="mb-5 text-black sm:mb-6"
          style={{
            fontSize: "clamp(18px, 4vw, 26px)",
            lineHeight: 1.35,
            fontWeight: 400,
            minHeight: 54,
          }}
        >
          {displayed}
          {!done && (
            <span className="cursor-blink ml-[2px] inline-block h-[1.1em] w-[2px] bg-black align-middle" />
          )}
        </p>

        {/* action pills */}
        <div
          className="flex flex-wrap gap-y-1"
          style={{
            opacity: pillsVisible ? 1 : 0,
            transform: pillsVisible ? "translateY(0)" : "translateY(8px)",
            transition: "opacity 0.4s ease, transform 0.4s ease",
          }}
        >
          {PILLS.map((label) => (
            <button
              key={label}
              type="button"
              className="mx-[0.2em] mb-[0.4em] inline-flex items-center justify-center whitespace-nowrap rounded-full border border-black/10 bg-white px-4 py-[0.3em] text-[13px] text-black transition-colors duration-200 hover:bg-black hover:text-white sm:px-5 sm:text-[15px]"
            >
              {label}
            </button>
          ))}

          <button
            type="button"
            onClick={copyEmail}
            className="mx-[0.2em] mb-[0.4em] inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full border border-white bg-transparent px-4 py-[0.3em] text-[13px] text-white transition-colors duration-200 hover:bg-white hover:text-black sm:gap-3 sm:px-5 sm:text-[15px]"
          >
            <span>
              Reach us:{" "}
              <span className="underline underline-offset-1">{EMAIL}</span>
            </span>
            <CopyIcon copied={copied} />
          </button>
        </div>
      </div>
    </section>
  );
}
