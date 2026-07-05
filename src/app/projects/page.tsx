import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export const metadata = {
  title: "Projects | Portfolio",
};

export default function Projects() {
  return (
    <section className="mx-auto max-w-5xl px-6 md:px-8 py-16">
      <div className="text-center">
        <h1>Projects</h1>
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
  );
}
