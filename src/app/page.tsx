import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function Home() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-6 md:px-8 py-16">
        <div className="rounded-lg border border-border bg-bg-alt p-8 md:p-12">
          <div className="flex flex-col md:flex-row md:items-stretch gap-12 md:gap-16">
            <div className="flex flex-1 flex-col justify-center">
              <h1 className="!text-heading">Rozhan Ahmadifar</h1>
              <p className="mt-3 font-semibold !text-accent">
                Product Designer | User Experience Design
              </p>
              <p className="body-lg mt-6">
                I&apos;m Rozhan, a Product Designer with a background in
                Interaction Design. Strong in user research, accessibility,
                and design systems, with hands-on experience across the full
                design process: interaction design, visual UI, prototyping,
                and developer handoff, most recently within fintech. Lately,
                I&apos;ve been focused on AI products, designing experiences
                that are useful, trustworthy, and easy to act on with
                confidence.
              </p>
            </div>
            <div className="flex flex-1">
              <div className="flex w-full items-center justify-center rounded-lg border-2 border-[#dce4fa] bg-white">
                <span className="h1 !text-accent">RA</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 md:px-8 py-20">
        <div className="text-center">
          <h2>Projects</h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-accent-secondary" />
        </div>
        <div className="mt-12 space-y-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.slug}
              title={project.title}
              subtitle={project.subtitle}
              description={project.description}
              href={`/case-studies/${project.slug}`}
            />
          ))}
        </div>
      </section>
    </>
  );
}
