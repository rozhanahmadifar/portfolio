import { ReactNode } from "react";

export interface ResultMetric {
  value: string;
  label: string;
}

export interface ProcessSubsection {
  heading: string;
  body: ReactNode;
}

export interface ProcessSection {
  /** Typically one of Discover, Define, Develop, Deliver. */
  heading: string;
  subsections: ProcessSubsection[];
}

export interface CaseStudyTemplateProps {
  title: string;
  intro: string;
  prototypeLink?: string;
  resultsLabel?: string;
  results: ResultMetric[];
  process: ProcessSection[];
  reflection: ReactNode;
}

export default function CaseStudyTemplate({
  title,
  intro,
  prototypeLink,
  resultsLabel = "Result & impact",
  results,
  process,
  reflection,
}: CaseStudyTemplateProps) {
  return (
    <article>
      {/* Hero */}
      <section className="mx-auto max-w-3xl px-6 md:px-8 py-16">
        <h1>{title}</h1>
        <p className="body-lg mt-6">{intro}</p>
        {prototypeLink && (
          <a
            href={prototypeLink}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-block font-semibold no-underline hover:underline"
          >
            View prototype &rarr;
          </a>
        )}
      </section>

      {/* Result / Impact */}
      <section className="bg-bg-alt border-y border-border">
        <div className="mx-auto max-w-3xl px-6 md:px-8 py-12 md:py-16">
          <p className="caption">{resultsLabel}</p>
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {results.map((metric) => (
              <div key={metric.label}>
                <div className="text-accent font-bold text-4xl md:text-5xl">
                  {metric.value}
                </div>
                <p className="caption mt-2">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process: Discover / Define / Develop / Deliver */}
      <section className="mx-auto max-w-3xl px-6 md:px-8 py-16 space-y-16">
        {process.map((section) => (
          <div key={section.heading}>
            <h2>{section.heading}</h2>
            <div className="mt-8 space-y-8">
              {section.subsections.map((sub) => (
                <div key={sub.heading}>
                  <h3>{sub.heading}</h3>
                  <div className="mt-2">{sub.body}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Reflection */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-3xl px-6 md:px-8 py-16">
          <h2>Reflection</h2>
          <div className="body-lg mt-6">{reflection}</div>
        </div>
      </section>
    </article>
  );
}
