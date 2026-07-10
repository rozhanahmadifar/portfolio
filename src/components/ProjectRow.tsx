import ImageWithFallback from "@/components/ImageWithFallback";
import MediaFrame from "@/components/MediaFrame";
import type { ProjectMedia } from "@/data/projects";

export interface ProjectRowProps {
  number: string;
  eyebrow: string;
  title: string;
  description: string;
  tags: string[];
  href: string;
  media: ProjectMedia;
  mediaAlt: string;
  isLast?: boolean;
}

export default function ProjectRow({
  number,
  eyebrow,
  title,
  description,
  tags,
  href,
  media,
  mediaAlt,
  isLast = false,
}: ProjectRowProps) {
  return (
    <a
      href={href}
      className={`group grid grid-cols-1 items-center gap-8 border-t border-hairline py-10 md:grid-cols-[1.3fr_1.15fr] md:gap-40 md:py-[3.2rem] ${
        isLast ? "border-b" : ""
      }`}
    >
      <div className="flex gap-8">
        <span
          className="hidden self-start pt-2 text-[1.1rem] text-teal md:block"
          style={{ fontFamily: "var(--font-fraunces)" }}
        >
          {number}
        </span>
        <div>
          <p className="text-eyebrow mb-2">{eyebrow}</p>
          <h3 className="text-sub-header transition-colors group-hover:text-teal">
            {title}
          </h3>
          <p className="mt-3 max-w-[420px] text-[0.98rem]">{description}</p>
          <div className="mt-5 mb-5 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span key={tag} className="tag">
                {tag}
              </span>
            ))}
          </div>
          <span className="inline-flex items-center gap-1.5 text-[0.95rem] font-medium text-teal-deep transition-colors group-hover:text-teal">
            View case study &rarr;
          </span>
        </div>
      </div>
      <MediaFrame>
        {media.type === "video" ? (
          <video
            autoPlay
            muted
            loop
            playsInline
            poster={media.poster}
            className="h-full w-full object-cover object-[center_70%]"
          >
            <source src={media.src} type="video/mp4" />
          </video>
        ) : (
          <ImageWithFallback
            src={media.src}
            alt={mediaAlt}
            fallbackLabel={media.fallbackLabel}
          />
        )}
      </MediaFrame>
    </a>
  );
}
