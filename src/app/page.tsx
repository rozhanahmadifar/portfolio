import Link from "next/link";

const highlights = [
  { value: "6+", label: "Years designing digital products" },
  { value: "20+", label: "Shipped case studies" },
  { value: "4", label: "Industries worked in" },
];

export default function Home() {
  return (
    <>
      <section className="mx-auto max-w-5xl px-6 md:px-8 py-16">
        <p className="caption">Product Designer</p>
        <h1 className="mt-4 max-w-2xl">
          I design clear, considered products from research to pixels.
        </h1>
        <p className="body-lg mt-6 max-w-2xl">
          I&apos;m Jane Doe, a product designer who partners with teams to turn
          ambiguous problems into shipped, measurable outcomes. Below are a
          few selected case studies that walk through the process.
        </p>
        <div className="mt-8 flex flex-wrap gap-8">
          <Link
            href="/case-studies/example-project"
            className="body font-semibold no-underline hover:underline"
          >
            View a case study &rarr;
          </Link>
          <Link
            href="/about"
            className="body font-semibold !text-heading no-underline hover:!text-accent"
          >
            More about me
          </Link>
        </div>
      </section>

      <section className="bg-bg-alt border-y border-border">
        <div className="mx-auto max-w-5xl px-6 md:px-8 py-12 md:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {highlights.map((item) => (
              <div key={item.label}>
                <div className="text-accent font-bold text-4xl md:text-5xl">
                  {item.value}
                </div>
                <p className="caption mt-2">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 md:px-8 py-16">
        <h2>Selected work</h2>
        <div className="mt-8 border-t border-border">
          <Link
            href="/case-studies/example-project"
            className="group flex items-center justify-between gap-8 py-6 border-b border-border no-underline"
          >
            <div>
              <h3 className="!text-heading group-hover:!text-accent">
                Example Project
              </h3>
              <p className="caption mt-2">
                Redesigning an onboarding flow to reduce drop-off
              </p>
            </div>
            <span className="text-accent font-semibold">&rarr;</span>
          </Link>
        </div>
      </section>
    </>
  );
}
