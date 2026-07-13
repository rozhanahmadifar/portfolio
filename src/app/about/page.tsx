import ImageWithFallback from "@/components/ImageWithFallback";

export const metadata = {
  title: "About | Rozhan Ahmadifar",
  description:
    "Rozhan Ahmadifar is a Product Designer with a background in Interaction Design, focused on clarity, trust, and accessible design systems.",
};

export default function About() {
  return (
    <section className="mx-auto max-w-[1200px] px-10 py-16 md:py-24">
      <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-[1.15fr_0.85fr]">
        <div>
          <h1 className="text-name">Rozhan</h1>
          <p className="mt-8">
            Hi, I&apos;m Rozhan, a Product Designer with a background in
            Interaction Design, based in Malm&ouml; and open to relocating.
            I care most about design challenges rooted in clarity, trust,
            and making complex things feel simple enough to actually use
            with confidence.
          </p>
          <p className="mt-6">
            I believe good design creates real business value by reducing
            risk and helping teams make better decisions earlier, before
            problems become expensive to fix. I use AI throughout my work,
            not as a shortcut, but as a way to think faster, explore more
            possibilities, and arrive at better solutions.
          </p>
          <p className="mt-6">
            I work across the full design process, from user research and
            interaction design to visual UI and developer handoff, with a
            strong focus on accessibility and design systems, most recently
            within fintech.
          </p>
          <p className="mt-6">
            Outside of design, I enjoy traveling, reading, listening to
            music, and spending time with family and friends. I&apos;m
            always looking for new experiences and ideas to bring back into
            my work, whether that&apos;s a perspective from another culture,
            a habit from a completely different field, or just a better
            question to ask at the start of a project.
          </p>
          <p className="mt-6">Feel free to reach out, I&apos;d love to hear from you.</p>
          <a
            href="mailto:ahmadifarrozhan@gmail.com"
            className="mt-6 inline-flex items-center gap-2 rounded-[4px] border border-ink bg-transparent px-5 py-2.5 text-[14px] font-medium text-ink transition-colors hover:bg-ink hover:text-bg"
          >
            Get in touch <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div className="mx-auto w-full max-w-[400px] md:mx-0 md:ml-auto">
          <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[16px] border border-hairline shadow-[0_16px_40px_rgba(4,52,44,0.15)]">
            <ImageWithFallback
              src="/assets/rozhan-about.jpg"
              alt="Rozhan Ahmadifar"
              fallbackLabel="Photo"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
