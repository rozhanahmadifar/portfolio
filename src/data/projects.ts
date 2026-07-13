export type ProjectMedia =
  | { type: "image"; src: string; fallbackLabel: string }
  | { type: "video"; src: string; poster?: string };

export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  eyebrow: string;
  tags: string[];
  media: ProjectMedia;
}

export const projects: Project[] = [
  {
    slug: "yoga-website-redesign",
    title: "Yoga Website Redesign",
    subtitle: "Yoga With Deni",
    description:
      "Redesigned a yoga studio website to improve usability, content structure, and booking flow, using UX research, information architecture, and prototyping to create a clearer, more intuitive experience.",
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
      "Cand-EL is an ambient, candle-shaped device that reflects household electricity use through calm light feedback. It helps users become more aware of their energy consumption in a gentle, non-judgmental way.",
    eyebrow: "University Project · 10 weeks",
    tags: ["UX Research", "Interaction Design", "Usability Testing"],
    media: {
      type: "video",
      src: "/assets/candle-square.mp4",
      // No fallback poster image is available yet.
    },
  },
];
