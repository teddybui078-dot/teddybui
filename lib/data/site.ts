export type NavItem = { label: string; href: string };

export type Social = { label: string; handle: string; href: string };

export const site = {
  name: "Meridian Labs",
  wordmark: "Meridian",
  tagline: "an AI studio for builders",
  description:
    "Meridian Labs is an AI studio that designs and ships practical tools for students and founders — research copilots, writing engines, and the small machines that move work forward.",
  url: "https://meridianlabs.co",
  email: "hello@meridianlabs.co",
  location: "Remote · Sydney / SF",
  founded: 2024,

  nav: [
    { label: "Projects", href: "/projects" },
    { label: "About", href: "/about" },
    { label: "Links", href: "/links" },
  ] as NavItem[],

  socials: [
    { label: "X / Twitter", handle: "@meridianlabs", href: "https://x.com" },
    { label: "GitHub", handle: "meridian-labs", href: "https://github.com" },
    { label: "LinkedIn", handle: "Meridian Labs", href: "https://linkedin.com" },
    { label: "Email", handle: "hello@meridianlabs.co", href: "mailto:hello@meridianlabs.co" },
  ] as Social[],

  stats: [
    { value: "6", label: "tools shipped" },
    { value: "24k", label: "builders onboard" },
    { value: "3.1M", label: "tasks run" },
    { value: "99.9%", label: "uptime" },
  ],
} as const;
