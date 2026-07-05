export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
}

export const projects: Project[] = [
  {
    slug: "yoga-website-redesign",
    title: "Yoga Website Redesign",
    subtitle: "Yoga With Deni",
    description:
      "Redesigned a yoga studio website to improve usability, content structure, and booking flow, using UX research, information architecture, and prototyping to create a clearer, more intuitive experience.",
  },
  {
    slug: "ambient-energy-device",
    title: "Ambient Energy Device",
    subtitle: "Cand-EL",
    description:
      "An ambient, candle-shaped device that reflects household electricity use through calm light feedback, helping users stay aware of their energy consumption in a gentle, non-judgmental way.",
  },
];
