export interface ProjectCardProps {
  title: string;
  subtitle: string;
  description: string;
  href: string;
}

export default function ProjectCard({
  title,
  subtitle,
  description,
  href,
}: ProjectCardProps) {
  return (
    <div className="flex min-h-[280px] rounded-lg border border-border bg-white shadow-sm">
      <div
        aria-hidden
        className="w-[280px] shrink-0 rounded-l-lg bg-bg-alt"
      />
      <div className="flex flex-col items-start gap-3 p-8">
        <h3 className="!text-heading">{title}</h3>
        <p className="!text-meta">{subtitle}</p>
        <p>{description}</p>
        <a
          href={href}
          className="mt-2 font-medium !text-accent-secondary underline"
        >
          View Case Study &rarr;
        </a>
      </div>
    </div>
  );
}
