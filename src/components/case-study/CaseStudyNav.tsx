import Link from "next/link";
import { projects } from "@/data/projects";

export default function CaseStudyNav({ currentSlug }: { currentSlug: string }) {
  const index = projects.findIndex((p) => p.slug === currentSlug);
  if (index === -1) return null;

  const next = projects[(index + 1) % projects.length];
  const prev = projects[(index - 1 + projects.length) % projects.length];
  const showPrev = prev.slug !== next.slug;

  return (
    <nav className="border-t border-hairline bg-bg">
      <div
        className={`mx-auto grid max-w-[1200px] gap-6 px-10 py-16 md:py-20 ${
          showPrev ? "sm:grid-cols-2" : ""
        }`}
      >
        {showPrev && (
          <Link
            href={`/case-studies/${prev.slug}`}
            className="group block rounded-[10px] border border-hairline p-8 transition-colors hover:border-teal"
          >
            <p className="text-eyebrow mb-2">&larr; Previous project</p>
            <h3 className="text-sub-header transition-colors group-hover:text-teal">
              {prev.title}
            </h3>
          </Link>
        )}
        <Link
          href={`/case-studies/${next.slug}`}
          className="group flex items-center justify-between gap-6 rounded-[10px] border border-hairline p-8 transition-colors hover:border-teal"
        >
          <div className="text-left">
            <p className="text-eyebrow mb-2">Next project</p>
            <h3 className="text-sub-header transition-colors group-hover:text-teal">
              {next.title}
            </h3>
          </div>
          <span
            className="shrink-0 text-teal text-[28px] leading-none transition-transform group-hover:translate-x-1"
            aria-hidden="true"
          >
            &rarr;
          </span>
        </Link>
      </div>
    </nav>
  );
}
