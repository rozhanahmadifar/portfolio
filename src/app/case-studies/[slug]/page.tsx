import { notFound } from "next/navigation";
import { projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectCaseStudyPlaceholder({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <section className="mx-auto max-w-3xl px-10 md:px-14 py-16">
      <p className="!text-meta">{project.subtitle}</p>
      <h1 className="mt-4">{project.title}</h1>
      <p className="body-lg mt-6">{project.description}</p>
      <p className="mt-12 !text-meta">
        The full case study for this project is coming soon.
      </p>
    </section>
  );
}
