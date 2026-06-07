export type Post = {
  slug: string;
  title: string;
  category: string;
  date: string; // ISO
  readingTime: string;
  excerpt: string;
  /** Body as an array of paragraphs — swap for MDX later if needed. */
  body: string[];
};

export const posts: Post[] = [
  {
    slug: "building-tools-students-actually-use",
    title: "Building tools students actually use",
    category: "Studio notes",
    date: "2026-05-18",
    readingTime: "6 min",
    excerpt:
      "Most ed-tech dies because it's built for the syllabus, not the all-nighter. Here's how we design for the 2am version of our users.",
    body: [
      "Every tool we ship starts with a single, unglamorous question: what is the user doing at 2am the night before a deadline? Not the idealised study session — the real one, with seventeen tabs open and a coffee going cold.",
      "When you design for that moment, features stop being a checklist and start being a triage. Lumen doesn't try to teach you to read faster. It accepts that you won't read everything, and makes the reading you do count.",
      "The premium feeling people describe isn't gloss. It's the absence of friction at the exact moment friction would have cost you the deadline. That's the bar.",
      "We measure success in one number: did the user come back the next time the pressure was on? Everything else is vanity.",
    ],
  },
  {
    slug: "on-device-by-default",
    title: "Why we ship on-device by default",
    category: "Engineering",
    date: "2026-04-02",
    readingTime: "9 min",
    excerpt:
      "Latency is a feature and privacy is a promise. Running the model on the user's machine lets us keep both without compromise.",
    body: [
      "The cloud is a wonderful place to train a model and a terrible place to run one when a human is waiting. Every round trip is a tax on attention.",
      "Draftsmith runs entirely on the device. The draft you're writing never touches a server, which means we can make a promise most writing tools can't: your words are yours.",
      "Distilling a model down to something that fits in memory is genuinely hard. But the payoff — sub-80ms suggestions that feel like a reflex — is the difference between a toy and a tool.",
      "On-device isn't a constraint we tolerate. It's the constraint that makes the product good.",
    ],
  },
  {
    slug: "the-shape-of-a-good-agent",
    title: "The shape of a good agent",
    category: "Product",
    date: "2026-02-21",
    readingTime: "7 min",
    excerpt:
      "An agent that does everything is an agent you can't trust. We build narrow machines that do one job and show their work.",
    body: [
      "There's a temptation to build the everything-agent: one box you type any wish into. It demos beautifully and falls apart in production.",
      "Ledger doesn't try to run your company. It reconciles your books and flags what's strange — a job small enough to verify and valuable enough to matter.",
      "Trust is built at the boundary. A narrow agent that shows its work earns the right to do more. A broad one that hides its reasoning never does.",
      "Constraint is the product. The narrower the promise, the more credible the magic.",
    ],
  },
  {
    slug: "a-studio-not-a-startup",
    title: "A studio, not a startup",
    category: "Studio notes",
    date: "2026-01-09",
    readingTime: "5 min",
    excerpt:
      "We'd rather ship six sharp tools than one bloated platform. Here's the operating model behind Meridian.",
    body: [
      "A studio launches many small things and lets the good ones compound. A startup bets the company on one. We chose the studio.",
      "Each tool has to stand on its own — its own users, its own reason to exist. Atlas doesn't need Lumen to be worth using. That independence keeps us honest.",
      "The shared thread is taste and infrastructure, not a single roadmap. We reuse the engine, never the assumptions.",
      "If a tool can't earn its keep, we sunset it without ceremony. The studio outlives any one product.",
    ],
  },
];

export const sortedPosts = [...posts].sort((a, b) => b.date.localeCompare(a.date));

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}
