export default function CaseStudyHero({
  title,
  client,
  byline,
}: {
  title: string;
  client: string;
  byline: string;
}) {
  return (
    <section className="bg-teal-pale">
      <div className="mx-auto max-w-[1200px] px-10 py-20 md:py-28">
        <p className="text-eyebrow mb-3">{client}</p>
        <h1 className="text-name">{title}</h1>
        <p className="text-caption not-italic !text-teal-deep mt-4">
          {byline}
        </p>
      </div>
    </section>
  );
}
