export type ProjectMedia =
  | { type: "image"; src: string; fallbackLabel: string }
  | {
      type: "video";
      src: string;
      poster?: string;
      objectPosition?: string;
      fit?: "cover" | "contain";
    };

export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  resultLine: string;
  eyebrow: string;
  tags: string[];
  media: ProjectMedia;
  comingSoon?: boolean;
}

export const projects: Project[] = [
  {
    slug: "grant-eligibility-form",
    title: "Grant Eligibility Form",
    subtitle: "Grantia",
    description:
      "Over three months, only 37% of people who started Grantia's grant eligibility form submitted it. Most gave up at the last step, which asked for company details many applicants don't have. Another product designer and I researched the problem and redesigned the flow around four types of applicants. I then turned the new flow into a working prototype with Claude Code.",
    resultLine: "Goal: raise completion from 37% to 50% after launch",
    eyebrow: "Internship · B2B SaaS · Ongoing",
    tags: ["Product Discovery", "Analytics", "AI-assisted Prototyping"],
    media: {
      type: "image",
      src: "/assets/grant-eligibility-form.jpg",
      fallbackLabel: "Grant Eligibility Form",
    },
    comingSoon: true,
  },
  {
    slug: "planning-together",
    title: "Planning Together",
    subtitle: "TripTogether",
    description:
      "When a group plans a trip, ideas and decisions get lost along the way. I designed and coded a React app with a private space for collecting ideas, a shared space for deciding together, and an AI assistant.",
    resultLine:
      "Result: in testing with 12 people, they wanted the AI for practical questions like visa rules, not for making decisions",
    eyebrow: "Thesis Project · 5 months",
    tags: ["UX Research", "AI Interaction Design", "React"],
    media: {
      type: "video",
      src: "/assets/planning-together.mp4",
      objectPosition: "center 58%",
    },
  },
  {
    slug: "yoga-website-redesign",
    title: "Yoga Website Redesign",
    subtitle: "Yoga With Deni",
    description:
      "New visitors struggled to find a class and book it on the studio's website. In a team of four, we restructured the navigation and booking flow across three rounds of testing, and I ran the final round myself.",
    resultLine:
      "Result: booking a class took 29% less time, down from 2 min 12 sec to 1 min 34 sec, in Maze testing with 8 people",
    eyebrow: "Course Project · 6 weeks",
    tags: ["UX Research", "Information Architecture", "Prototyping"],
    media: {
      type: "image",
      src: "/assets/yoga-laptop.jpg",
      fallbackLabel: "Yoga With Deni",
    },
  },
  {
    slug: "ambient-energy-device",
    title: "Ambient Energy Device",
    subtitle: "Cand-EL",
    description:
      "Energy apps show numbers that people ignore or feel guilty about. In a team of five, we designed a candle-shaped device that shows electricity use through calm light. I proposed the household baseline idea that the team built on.",
    resultLine:
      "Result: in testing of three prototype versions, people found the light calm and easy to read, without feeling judged",
    eyebrow: "University Project · 10 weeks",
    tags: ["UX Research", "Interaction Design", "Usability Testing"],
    media: {
      type: "video",
      src: "/assets/candle-square.mp4",
      // No fallback poster image is available yet.
    },
  },
];
