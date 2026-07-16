import ProjectRow from "@/components/ProjectRow";
import ImageWithFallback from "@/components/ImageWithFallback";
import ContactLinks from "@/components/ContactLinks";
import { projects } from "@/data/projects";

export default function Home() {
  return (
    <>
      <header className="relative mx-auto max-w-[1200px] px-10 pt-12 pb-16">
        <div className="grid grid-cols-1 items-start gap-3 pt-12 md:grid-cols-[1.15fr_0.85fr]">
          <div className="order-2 md:order-none">
            <h1 className="text-name text-[3.2rem] leading-[1.1]">
              Rozhan Ahmadifar
            </h1>
            <p className="pill mt-6 mb-6">
              Product Designer &middot; User Experience Design
            </p>
            <p>
              I&apos;m Rozhan, a Product Designer with a background in
              Interaction Design. I focus on UX research, accessibility, and
              design systems, most recently within fintech. Lately,
              I&apos;ve been focused on AI products, designing experiences
              that are useful, trustworthy, and easy to act on with
              confidence.
            </p>
            <div className="mt-8">
              <p className="text-eyebrow mb-3">Get in touch</p>
              <ContactLinks />
            </div>
          </div>
          {/* Artwork: the teal circle is the outer frame and the photo
              sits inside it as a normal child, so the ~6px padding reveals
              the ring evenly on all sides by construction. Sized to 88%
              width (ml-auto keeps it flush with the column's right edge) -
              most of the text-to-photo gap was this leftover margin rather
              than the grid gap itself, so closing it meant sizing the
              circle up slightly from the previous 82%. On mobile it's
              reordered above the text, centered rather than right-flushed,
              and drops the md-only negative margin that aligned it with
              the text baseline in the two-column layout. */}
          <div className="order-1 mx-auto aspect-square w-[70%] rounded-full bg-teal-deep p-1.5 md:order-none md:-mt-3 md:ml-auto md:w-[88%]">
            <div className="relative h-full w-full overflow-hidden rounded-full shadow-[0_16px_40px_rgba(4,52,44,0.15)]">
              <ImageWithFallback
                src="/assets/rozhan-photo.jpg"
                alt="Rozhan Ahmadifar"
                fallbackLabel="Photo"
              />
            </div>
          </div>
        </div>
      </header>

      <section id="projects" className="mx-auto max-w-[1200px] px-10 pt-24 pb-28">
        <h2 className="text-section-header mb-12 text-center">Projects</h2>
        {projects.map((project, i) => (
          <ProjectRow
            key={project.slug}
            number={String(i + 1).padStart(2, "0")}
            eyebrow={project.eyebrow}
            title={project.title}
            description={project.description}
            tags={project.tags}
            href={`/case-studies/${project.slug}`}
            media={project.media}
            mediaAlt={project.title}
            isLast={i === projects.length - 1}
          />
        ))}
      </section>
    </>
  );
}
