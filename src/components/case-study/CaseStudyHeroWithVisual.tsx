import ImagePlaceholder from "@/components/case-study/ImagePlaceholder";

export interface QuickFact {
  label: string;
  value: string;
}

export default function CaseStudyHeroWithVisual({
  client,
  title,
  tagline,
  paragraph,
  quickFacts,
  ctaLabel,
  ctaHref,
  heroVisualLabel,
  heroVisualSrc,
  heroVisualAspect = "h-[780px]",
}: {
  client: string;
  title: string;
  tagline: string;
  paragraph: string;
  quickFacts: QuickFact[];
  ctaLabel?: string;
  ctaHref?: string;
  heroVisualLabel: string;
  heroVisualSrc?: string;
  heroVisualAspect?: string;
}) {
  return (
    <section className="bg-teal-pale">
      <div className="mx-auto max-w-[1200px] px-10 pt-20 pb-12 md:pt-28">
        <div className="grid gap-y-10 lg:grid-cols-[1fr_420px] lg:items-start lg:gap-x-28">
          <div>
            <p className="text-eyebrow mb-3">{client}</p>
            <h1 className="text-name leading-[1.12]">{title}</h1>
            <p className="text-subtitle !text-ink-soft mt-4 max-w-2xl">
              {tagline}
            </p>
            <p className="mt-4 max-w-2xl">{paragraph}</p>
            {ctaLabel && ctaHref && (
              <a
                href={ctaHref}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-[4px] border border-ink bg-transparent px-5 py-2.5 text-[14px] font-medium text-ink transition-colors hover:bg-ink hover:text-bg"
              >
                {ctaLabel} <span aria-hidden="true">↗</span>
              </a>
            )}
          </div>

          <div className="w-full max-w-[420px] border-t border-hairline lg:mt-20">
            {quickFacts.map((fact, i) => (
              <div
                key={fact.label}
                className={
                  i < quickFacts.length - 1 ? "border-b border-hairline" : ""
                }
              >
                <div className="py-4">
                  <p className="text-[11px] font-medium tracking-[0.05em] text-ink-soft uppercase">
                    {fact.label}
                  </p>
                  <p className="mt-2 text-[14px] text-ink">{fact.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[1200px] px-10 pb-16 md:pb-20">
        <ImagePlaceholder
          label={heroVisualLabel}
          src={heroVisualSrc}
          aspect={heroVisualAspect}
          objectPosition="top"
        />
      </div>
    </section>
  );
}
