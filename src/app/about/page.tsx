import type { Metadata } from "next";
import ImageWithFallback from "@/components/ImageWithFallback";
import { SITE_URL } from "../layout";

const PAGE_TITLE = "About | Rozhan Ahmadifar";
const OG_TITLE = "About Rozhan Ahmadifar";
const DESCRIPTION =
  "Rozhan Ahmadifar is a Product Designer with a background in Interaction Design, focused on clarity, trust, and accessible design systems, most recently on a B2B SaaS product.";
const PAGE_URL = `${SITE_URL}/about`;
const OG_IMAGE = `${SITE_URL}/assets/og-about.jpg`;

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: OG_TITLE,
    description: DESCRIPTION,
    url: PAGE_URL,
    siteName: "Rozhan Ahmadifar",
    type: "website",
    images: [{ url: OG_IMAGE, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: OG_TITLE,
    description: DESCRIPTION,
    images: [OG_IMAGE],
  },
};

export default function About() {
  return (
    <section className="mx-auto max-w-[1200px] px-10 py-16 md:py-24">
      <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="order-2 lg:order-none">
          <h1 className="text-name">Rozhan</h1>
          <p className="mt-8">
            Hi, I&apos;m Rozhan. I&apos;m a Product Designer based in
            Malm&ouml;, with a background in Interaction Design, and open to
            relocating.
          </p>
          <p className="mt-6">
            What I enjoy most is taking something complicated and making it
            feel simple to use. Not just simple to look at, but simple
            enough that someone feels sure about what they&apos;re doing.
          </p>
          <p className="mt-6">
            I work across the full design process, from user research and
            interaction design to visual UI and developer handoff, with a
            strong focus on accessibility and design systems, most recently
            on a B2B SaaS product. I also build my own prototypes in code
            when a static screen can&apos;t answer the question. My thesis
            was a group trip planning app that I designed and coded in
            React, and testing it changed what I ended up building.
          </p>
          <p className="mt-6">
            I use AI throughout my work, not as a shortcut, but as a way to
            think faster, explore more possibilities, and get something
            testable in front of people sooner.
          </p>
          <p className="mt-6">
            Outside of design, I travel, read, and listen to a lot of
            music. Most of what I bring back into my work comes from
            somewhere else entirely: a perspective from another culture, a
            habit from a completely different field, or just a better
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
        <div className="order-1 mx-auto w-full max-w-[440px] lg:order-none lg:mx-0 lg:ml-auto">
          <div className="relative aspect-[2/3] w-full overflow-hidden rounded-[16px] border border-hairline shadow-[0_16px_40px_rgba(4,52,44,0.15)]">
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
