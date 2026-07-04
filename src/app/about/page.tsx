export const metadata = {
  title: "About | Portfolio",
};

const experience = [
  {
    role: "Senior Product Designer",
    org: "Acme Co.",
    period: "2022 — Present",
  },
  {
    role: "Product Designer",
    org: "Northwind Studio",
    period: "2019 — 2022",
  },
  {
    role: "UX Designer",
    org: "Contoso",
    period: "2017 — 2019",
  },
];

export default function About() {
  return (
    <section className="mx-auto max-w-3xl px-6 md:px-8 py-16">
      <p className="caption">About</p>
      <h1 className="mt-4">Jane Doe</h1>
      <p className="body-lg mt-6">
        I&apos;m a product designer based in Toronto, focused on turning messy,
        ambiguous problems into clear, usable products. My background spans
        research, interaction design, and front-end prototyping, and I care
        most about the handoff between what a product should do and how it
        actually feels to use.
      </p>
      <p className="mt-6">
        Outside of client work, I mentor early-career designers and write
        about design process. I believe good design is mostly good listening
        &mdash; to users, to constraints, and to the people building alongside
        you.
      </p>

      <h2 className="mt-16">Experience</h2>
      <div className="mt-8 border-t border-border">
        {experience.map((item) => (
          <div
            key={item.role}
            className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 py-6 border-b border-border"
          >
            <div>
              <h3>{item.role}</h3>
              <p className="mt-2">{item.org}</p>
            </div>
            <p className="caption whitespace-nowrap">{item.period}</p>
          </div>
        ))}
      </div>

      <h2 className="mt-16">Get in touch</h2>
      <p className="mt-6">
        The best way to reach me is by{" "}
        <a href="mailto:hello@example.com" className="font-semibold">
          email
        </a>{" "}
        or on{" "}
        <a
          href="https://www.linkedin.com/"
          className="font-semibold"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
        .
      </p>
    </section>
  );
}
