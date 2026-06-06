import {
  Hammer,
  Compass,
  Sparkles,
  PenTool,
  Rocket,
  Globe,
  type LucideIcon,
} from "lucide-react";

/** Visual status the orbital timeline uses to colour a node + its glow. */
export type OrbitStatus = "completed" | "in-progress" | "pending";

/**
 * The nodes orbiting Teddy in the hero. This is a portrait, not a product
 * catalogue — who I am, what I'm focused on, and where I'm headed — so the
 * centrepiece reads true before there are shipped projects to show.
 *
 * `related` references other nodes by `title`; ids are assigned by order.
 */
export type OrbitNode = {
  title: string;
  /** Badge text — the kind of node. */
  kind: "WHO I AM" | "FOCUS" | "GOAL";
  /** Short tag shown top-right of the expanded card. */
  tag: string;
  blurb: string;
  icon: LucideIcon;
  /** 0–100 — drives the glow size and the meter bar. */
  focus: number;
  related: string[];
  status: OrbitStatus;
};

export const orbit: OrbitNode[] = [
  {
    title: "Builder",
    kind: "WHO I AM",
    tag: "always",
    blurb:
      "I build fast and ship often — I'd rather have a rough thing working today than a perfect thing someday.",
    icon: Hammer,
    focus: 96,
    related: ["Ship real tools", "Sharp tools"],
    status: "completed",
  },
  {
    title: "Curious",
    kind: "WHO I AM",
    tag: "2026",
    blurb:
      "I'm still learning in public — every project is me figuring something out and leaving notes for whoever comes next.",
    icon: Compass,
    focus: 82,
    related: ["Build in public", "AI for builders"],
    status: "completed",
  },
  {
    title: "AI for builders",
    kind: "FOCUS",
    tag: "core",
    blurb:
      "I build practical AI for students and founders like me — tools that quietly take the friction out of getting things done.",
    icon: Sparkles,
    focus: 90,
    related: ["Sharp tools", "Curious"],
    status: "in-progress",
  },
  {
    title: "Sharp tools",
    kind: "FOCUS",
    tag: "principle",
    blurb:
      "Small, sharp, and private. Quick to use, on-device where it can be — your work shouldn't have to leave the machine to be useful.",
    icon: PenTool,
    focus: 68,
    related: ["Builder", "AI for builders"],
    status: "in-progress",
  },
  {
    title: "Ship real tools",
    kind: "GOAL",
    tag: "next",
    blurb:
      "Turn one of these experiments into something people actually rely on — real users, real feedback, in the open.",
    icon: Rocket,
    focus: 74,
    related: ["Builder", "Build in public"],
    status: "pending",
  },
  {
    title: "Build in public",
    kind: "GOAL",
    tag: "ongoing",
    blurb:
      "Document the wins and the dead ends, so the studio becomes a trail other builders can actually follow.",
    icon: Globe,
    focus: 58,
    related: ["Curious", "Ship real tools"],
    status: "pending",
  },
];
