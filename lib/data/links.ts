export type LinkItem = {
  label: string;
  description: string;
  href: string;
  external?: boolean;
};

export type LinkGroup = {
  title: string;
  hint: string;
  items: LinkItem[];
};

export const linkGroups: LinkGroup[] = [
  {
    title: "Studio",
    hint: "Where the work lives",
    items: [
      { label: "All projects", description: "The full catalog of tools", href: "/projects" },
      { label: "Changelog", description: "What shipped this week", href: "https://example.com", external: true },
    ],
  },
  {
    title: "Social",
    hint: "Find us elsewhere",
    items: [
      { label: "X / Twitter", description: "@meridianlabs", href: "https://x.com", external: true },
      { label: "GitHub", description: "Open-source pieces", href: "https://github.com", external: true },
      { label: "LinkedIn", description: "Studio updates", href: "https://linkedin.com", external: true },
      { label: "YouTube", description: "Build logs & demos", href: "https://youtube.com", external: true },
    ],
  },
  {
    title: "Resources",
    hint: "Things we made public",
    items: [
      { label: "Brand kit", description: "Logos, colors, type", href: "https://example.com", external: true },
      { label: "Press", description: "Coverage & mentions", href: "https://example.com", external: true },
      { label: "Careers", description: "Build with us", href: "https://example.com", external: true },
      { label: "Contact", description: "hello@meridianlabs.co", href: "mailto:hello@meridianlabs.co", external: true },
    ],
  },
];
