import type { ReactNode } from "react";
import { Plus_Jakarta_Sans } from "next/font/google";
import CaseStudyHeroWithVisual from "@/components/case-study/CaseStudyHeroWithVisual";
import ImagePlaceholder from "@/components/case-study/ImagePlaceholder";
import Callout from "@/components/case-study/Callout";
import PullQuote from "@/components/case-study/PullQuote";
import ResearchRow from "@/components/case-study/ResearchRow";
import NumberedList from "@/components/case-study/NumberedList";
import CaseStudyNav from "@/components/case-study/CaseStudyNav";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
});

export const metadata = {
  title: "Planning Together | Rozhan Ahmadifar",
  description:
    "TripTogether is a mobile app for planning trips as a group, pairing a private space for collecting ideas with a shared space for bringing them out.",
};

function SectionNumber({ number }: { number: string }) {
  return (
    <span
      className="text-teal text-[3.5rem] leading-none"
      style={{ fontFamily: "var(--font-fraunces)" }}
    >
      {number}
    </span>
  );
}

// Block-opening heading used inside the Design System and Guidelines
// subsection: a serif label with a rule running to the container edge.
function BlockLabel({
  children,
  className = "mt-10",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`${className} flex items-center gap-5`}>
      <h3
        className="text-ink shrink-0 text-[1.6rem] sm:text-[1.9rem]"
        style={{ fontFamily: "var(--font-fraunces)", fontWeight: 600 }}
      >
        {children}
      </h3>
      <div className="bg-hairline h-px flex-1" />
    </div>
  );
}

// Small, dependency-free hex/HSL conversion used only to generate the
// nine-step tonal ramps in the design-system palette band below.
function hexToHsl(hex: string): [number, number, number] {
  const r = parseInt(hex.slice(1, 3), 16) / 255;
  const g = parseInt(hex.slice(3, 5), 16) / 255;
  const b = parseInt(hex.slice(5, 7), 16) / 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0;
  let s = 0;
  const l = (max + min) / 2;
  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      default:
        h = (r - g) / d + 4;
    }
    h /= 6;
  }
  return [h * 360, s * 100, l * 100];
}

function hslToHex(h: number, s: number, l: number): string {
  const sN = s / 100;
  const lN = l / 100;
  const c = (1 - Math.abs(2 * lN - 1)) * sN;
  const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
  const m = lN - c / 2;
  let [r, g, b] = [0, 0, 0];
  if (h < 60) [r, g, b] = [c, x, 0];
  else if (h < 120) [r, g, b] = [x, c, 0];
  else if (h < 180) [r, g, b] = [0, c, x];
  else if (h < 240) [r, g, b] = [0, x, c];
  else if (h < 300) [r, g, b] = [x, 0, c];
  else [r, g, b] = [c, 0, x];
  const toHex = (v: number) =>
    Math.round((v + m) * 255)
      .toString(16)
      .padStart(2, "0");
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

function tonalSteps(hex: string): string[] {
  const [h, s] = hexToHsl(hex);
  const lightnessSteps = [14, 24, 34, 44, 54, 63, 73, 83, 92];
  return lightnessSteps.map((l) => hslToHex(h, s, l));
}

const PALETTE = [
  {
    name: "Teal",
    hex: "#1E5F5F",
    textClass: "text-white",
    role: "Identity",
    description:
      "The wordmark, active navigation, and anything that says this is TripTogether.",
  },
  {
    name: "Terracotta",
    hex: "#AA5B3B",
    textClass: "text-white",
    role: "Action",
    description: "Reserved for the single most important thing to do on a screen.",
  },
  {
    name: "Sand",
    hex: "#F0E8DC",
    textClass: "text-[#14201c]",
    role: "Surface",
    description:
      "Cards and backgrounds that hold content without competing with it.",
  },
  {
    name: "Milestone",
    hex: "#3A7D5A",
    textClass: "text-white",
    role: "Completion",
    description: "Progress and decided moments only, never routine actions.",
  },
];

const TYPE_COLORS: Record<string, string> = {
  teal: "#1E5F5F",
  charcoal: "#211E1B",
  "warm grey": "#6E6259",
};

const TYPE_COLOR_LABELS: Record<string, string> = {
  teal: "Teal",
  charcoal: "Charcoal",
  "warm grey": "Warm grey",
};

const TYPE_SCALE = [
  {
    token: "appName",
    style: "H1",
    sample: "TripTogether",
    px: 30,
    weight: 800,
    lineHeight: "1.05",
    letterSpacingPx: -0.6,
    letterSpacingLabel: "-0.6px",
    color: "teal",
    usedFor: "The wordmark in the header",
  },
  {
    token: "screenTitle",
    style: "H2",
    sample: "My Trips",
    px: 24,
    weight: 800,
    lineHeight: "1.15",
    letterSpacingPx: -0.4,
    letterSpacingLabel: "-0.4px",
    color: "charcoal",
    usedFor: "The title at the top of a screen",
  },
  {
    token: "cardTitle",
    style: "H3",
    sample: "Friend",
    px: 16,
    weight: 600,
    lineHeight: "1.35",
    letterSpacingPx: -0.2,
    letterSpacingLabel: "-0.2px",
    color: "charcoal",
    usedFor: "The name on a trip or item card",
  },
  {
    token: "categoryRowName",
    style: "H4",
    sample: "Accommodation",
    px: 15,
    weight: 600,
    lineHeight: "Auto",
    letterSpacingPx: -0.1,
    letterSpacingLabel: "-0.1px",
    color: "charcoal",
    usedFor: "A category name in a list",
  },
  {
    token: "body",
    style: "Body",
    sample: "Save places, videos, notes and ideas",
    px: 15,
    weight: 400,
    lineHeight: "1.5",
    letterSpacingPx: 0,
    letterSpacingLabel: "None",
    color: "charcoal",
    usedFor: "Ordinary reading text",
  },
  {
    token: "buttonText",
    style: "Button",
    sample: "Save with Group",
    px: 15,
    weight: 600,
    lineHeight: "Auto",
    letterSpacingPx: 0,
    letterSpacingLabel: "None",
    color: "charcoal",
    usedFor: "The label inside a button",
  },
  {
    token: "greeting",
    style: "Body Small",
    sample: "Hello Rozhan",
    px: 14,
    weight: 400,
    lineHeight: "1.3",
    letterSpacingPx: 0,
    letterSpacingLabel: "None",
    color: "warm grey",
    usedFor: "The welcome line on the home screen",
  },
  {
    token: "categoryRowSubtext",
    style: "Subtitle",
    sample: "Nothing added yet",
    px: 14,
    weight: 400,
    lineHeight: "Auto",
    letterSpacingPx: 0,
    letterSpacingLabel: "None",
    color: "warm grey",
    usedFor: "The status line under a category",
  },
  {
    token: "sectionHeading",
    style: "Label",
    sample: "TAG IT",
    px: 13,
    weight: 700,
    lineHeight: "1.35",
    letterSpacingPx: 1.1,
    letterSpacingLabel: "+1.1px, uppercase",
    uppercase: true,
    color: "warm grey",
    usedFor: "A small label above a group",
  },
  {
    token: "subtext",
    style: "Caption",
    sample: "Only you can see these",
    px: 13,
    weight: 400,
    lineHeight: "1.4",
    letterSpacingPx: 0,
    letterSpacingLabel: "None",
    color: "warm grey",
    usedFor: "A quiet explanatory line",
  },
  {
    token: "timestamp",
    style: "Meta",
    sample: "2 replies",
    px: 13,
    weight: 400,
    lineHeight: "1.4",
    letterSpacingPx: 0,
    letterSpacingLabel: "None",
    color: "warm grey",
    usedFor: "A time or count beside an item",
  },
];

const SPACING_ALL = [
  { token: "headingGap", px: 10, usedFor: "Gap between a heading and its content" },
  { token: "cardGap", px: 12, usedFor: "Gap between two cards" },
  { token: "cardPad", px: 16, usedFor: "Padding inside a card" },
  { token: "screenX", px: 20, usedFor: "Left and right screen margin" },
  { token: "sectionGap", px: 28, usedFor: "Gap between sections" },
  {
    token: "inputMinHeight",
    px: 48,
    usedFor: "Minimum height of an input field",
  },
  { token: "buttonMinHeight", px: 52, usedFor: "Minimum height of a button" },
  { token: "tabBarHeight", px: 64, usedFor: "Height of the bottom tab bar" },
  {
    token: "scrollBottomPad",
    px: 116,
    usedFor: "Space left below scrolling content",
  },
];

const USAGE_RULES = {
  always: [
    "Use terracotta for only one main action on each screen, and its label may use the same colour",
    "Use the green only for completion, decided items, and urgent countdowns",
    "Use one of the three defined shadows, never a single flat one",
    "Simplify and recolour any illustration taken from elsewhere before using it",
  ],
  never: [
    "Never use pure black or pure white for text",
    "Never add a new colour that is nearly identical to one already in the palette",
    "Never invent a shadow outside the three defined ones",
    "Never use the main action colour as a background tint for a category",
    "Never crowd an empty state illustration",
  ],
};

export default function PlanningTogether() {
  return (
    <>
      <article>
        <CaseStudyHeroWithVisual
          client="TripTogether"
          title="Planning Together"
          tagline="A mobile app for planning trips as a group, built so the group can see what it already knows."
          paragraph="Most trips are planned by a group, but the tools for planning one are built for a single person. The gap appears the moment links and opinions land in a chat, where a decision and a passing comment look identical. Watching six friends plan a real trip to Ireland showed they never lacked information or the ability to act on it. What they lost was sight of what the group already knew, which makes this a problem of visibility rather than capability. AI fell along the same line. People wanted it to answer what could be verified, and to stay out of what they enjoyed deciding themselves."
          heroVisualLabel="TripTogether app screens"
          heroVisualSrc="/assets/triptogether-app-screens.jpg"
          quickFacts={[
            { label: "Role", value: "Product Designer" },
            { label: "Duration", value: "4 months" },
            { label: "Team", value: "Solo" },
            {
              label: "Tools",
              value: "Figma · FigJam · Canva · React · Claude Code · Google Forms",
            },
            {
              label: "Responsibilities",
              value:
                "UX Research · Information Architecture · AI Interaction Design · Prototyping · Usability Testing",
            },
          ]}
          ctaLabel="Try the live app"
          ctaHref="https://triptogether.pages.dev"
        />

        {/* Band 1: Result & Impact */}
        <section className="bg-bg">
          <div className="mx-auto max-w-[1200px] px-10 py-16 md:py-20">
            <h2 className="text-section-header">Result &amp; Impact</h2>
            <div className="mt-6">
              <p>
                The design was tested across three rounds, three people in
                the first, two in the second, and seven in the last.
                Everything below comes from that final round, testing the
                finished version. Each person was tested on their own,
                following a planning scenario I gave them and thinking out
                loud as they worked through the app. All four had planned
                a group trip recently, so they were comparing it against
                an experience still fresh in their minds.
              </p>
              <p className="text-meta-label mt-10">Key design decisions</p>
              <ul className="mt-4">
                <li>
                  A private space where each person gathers ideas first and
                  shares them only when they are ready, so material that is
                  still forming is not lost to the group
                </li>
                <li>
                  A shared space the group organises itself, starting from
                  six categories, inspiration, destination, accommodation,
                  activities, transport, and food, which any member can
                  rename, add to, or remove
                </li>
                <li>
                  A Decided view that gathers everything the group has
                  agreed on, and a Trip Summary that shows the plan as a
                  whole, including which categories are still undecided
                </li>
                <li>
                  An assistant that answers anything the group asks, but
                  only suggests questions with an answer that can be looked
                  up, such as visa rules, weather, or group discounts, so it
                  stays out of the choices people would rather make
                  themselves
                </li>
                <li>
                  The app marks which categories are still empty and shows
                  who has added something, never who has not, so a gap reads
                  as work left to do rather than someone&apos;s fault
                </li>
                <li>
                  A progress bar that moves only when the group agrees on
                  something, so it measures decisions made rather than items
                  saved
                </li>
              </ul>
              <div className="mt-10 max-w-[1120px]">
                <div className="grid grid-cols-2 gap-5 sm:grid-cols-4">
                  <ImagePlaceholder
                    label="Group Space with the categories"
                    src="/assets/planning-together-group-space.png"
                    aspect="aspect-[335/691]"
                  />
                  <ImagePlaceholder
                    label="Decided view"
                    src="/assets/planning-together-decided-view.png"
                    aspect="aspect-[335/692]"
                  />
                  <ImagePlaceholder
                    label="Trip Summary"
                    src="/assets/planning-together-trip-summary.png"
                    aspect="aspect-[332/692]"
                  />
                  <ImagePlaceholder
                    label="Ask the AI"
                    src="/assets/planning-together-ask-the-ai.png"
                    aspect="aspect-[332/695]"
                  />
                </div>
                <p className="text-caption mt-3 text-center">
                  Group Space with the categories, the Decided view, the
                  Trip Summary, and Ask the AI.
                </p>
              </div>
              <div className="mt-12 grid gap-6 sm:grid-cols-3">
                <div className="rounded-[8px] border border-hairline bg-teal-pale/40 p-6">
                  <p className="text-eyebrow">Understanding</p>
                  <p className="!text-ink mt-2">
                    Everyone understood the split between private and shared
                    space without any explanation, and found what they had
                    saved where they expected it to be. Nobody asked what a
                    category was for or where something had gone.
                  </p>
                </div>
                <div className="rounded-[8px] border border-hairline bg-teal-pale/40 p-6">
                  <p className="text-eyebrow">Guidance</p>
                  <p className="!text-ink mt-2">
                    The categories did more than store things. People
                    described them as helping them think, suggesting what a
                    trip involves before they had worked it out themselves.
                    One said a blank page would have been less inspiring,
                    another said the app gave her freedom while still
                    guiding her.
                  </p>
                </div>
                <div className="rounded-[8px] border border-hairline bg-teal-pale/40 p-6">
                  <p className="text-eyebrow">Acceptance</p>
                  <p className="!text-ink mt-2">
                    Acceptance depended on the job, not on the technology.
                    Someone who would not trust the assistant to suggest
                    where to go was glad to let it check a visa rule. It
                    was not about how capable the AI was, it was about
                    which decisions people wanted to keep for themselves.
                  </p>
                </div>
              </div>
              <div className="mt-8">
                <PullQuote>
                  Nobody needed the problem explained to them. They had
                  already lived it.
                </PullQuote>
              </div>
            </div>
          </div>
        </section>

        {/* Band 2: The Problem */}
        <section className="bg-teal-pale">
          <div className="mx-auto max-w-[1200px] px-10 py-16 md:py-20">
            <h2 className="text-section-header">The Problem</h2>
            <p className="mt-6">
              A survey, two observation sessions with a group planning a
              real trip, and a review of six travel platforms all pointed
              to the same breakdowns. The most critical:
            </p>
            <ul className="mt-4">
              <li>
                Constraints are known but never recorded, so a group keeps
                rediscovering its own limits. Several members needed a visa
                from the start, and the restriction had to be raised again
                every time it mattered
              </li>
              <li>
                A chat keeps everything but organises nothing, so a decision
                cannot be told apart from a suggestion. The group scrolled
                back through weeks of messages to work out what had been
                agreed
              </li>
              <li>
                Effort is never shared evenly, and nobody can see it
                happening. Six agreed to look for places to stay, two did,
                and the gap showed only once the place they wanted was
                booked
              </li>
              <li>
                Sharing is all or nothing, so an idea that is not ready to
                be shown is never shared at all. One survey respondent
                saved places for a trip with her partner and kept them
                private, to protect the surprise
              </li>
              <li>
                Every tool is built for one person planning alone, so the
                group part is left to a chat. Across six platforms
                reviewed, not one helped a group agree on anything
              </li>
            </ul>
            <div className="mt-8">
              <PullQuote>
                Nobody lacked the information, or the ability to act on it.
                What the group lacked was a way to see it.
              </PullQuote>
            </div>
          </div>
        </section>

        {/* Band 3: Discover */}
        <section className="bg-bg">
          <div className="mx-auto max-w-[1200px] px-10 py-16 md:py-20">
            <div className="flex items-baseline gap-6">
              <SectionNumber number="01" />
              <h2 className="text-section-header">Discover</h2>
            </div>

            <p className="text-lead mt-6">
              I ran a survey with eight travellers about their most recent
              group trip, then joined a group of six friends planning a
              real trip to Ireland for two observation sessions, taking
              part as one of the group. Their planning carried on in the
              group chat between the two sessions, so that became part of
              the research too. Alongside this I reviewed six travel
              platforms by using each one to plan a trip from scratch.
            </p>
            <div className="mt-6">
              <Callout>
                Finding things was never the hard part. In a single evening
                the group used TikTok, Instagram, Google, a travel blog,
                and Google Flights. What none of those could do was hold
                what they had found in one place, or show what the group
                had already agreed.
              </Callout>
            </div>

            <div className="mt-9">
              <PullQuote>
                Most of these tools are built to help one person plan
                faster. What this group needed was a way to see what they
                already had.
              </PullQuote>
            </div>

            <div className="mt-8 border-t border-hairline">
              <ResearchRow
                name="Survey"
                outcome="Eight people described how they planned their last group trip, and each one had put together their own way of keeping track of it."
              >
                <p>
                  The survey asked eight people about their most recent
                  group trip: who they planned it with, what they used to
                  keep track of it, and where it became difficult. The
                  trips ranged from two people to six, planned with
                  partners, family, or friends.
                </p>
                <p className="mt-4 italic">Key findings:</p>
                <ul className="mt-2">
                  <li>
                    Every group planned in a messaging app and kept the
                    details somewhere else, and that second place never
                    held. One saved links in a notes file that could not
                    take video, which was where most of their ideas were
                    coming from
                  </li>
                  <li>
                    Chat was the easiest place to plan and the hardest
                    place to finish. It kept every message, but never
                    produced a version of the plan the group could point to
                  </li>
                  <li>
                    Privacy was described as helping collaboration rather
                    than blocking it. One respondent liked that her partner
                    could not see everything she had saved, because some of
                    it was meant to be a surprise, and she was still
                    planning the trip with him
                  </li>
                  <li>
                    One respondent used ChatGPT for a first plan and found
                    it quick but generic. Another wanted help turning the
                    Instagram posts she had already saved into something
                    organised, rather than help deciding where to go
                  </li>
                  <li>
                    Effort was rarely shared evenly. Several described one
                    person planning while the others waited to be told,
                    and one said plainly that each person should carry
                    their own share
                  </li>
                </ul>
                <div className="mt-6">
                  <ImagePlaceholder
                    label="Group Travel Planning user flow diagram"
                    src="/assets/planning-together-user-flow.jpg"
                    aspect="aspect-[100/21]"
                    fit="contain"
                    caption="The planning sequence described by survey respondents."
                    enlargeable
                  />
                </div>
              </ResearchRow>
              <ResearchRow
                name="Observation"
                outcome="Two sessions with six friends planning a real trip to Ireland, and the weeks of messages in between, where most of the planning actually happened."
              >
                <p>
                  The observation ran across two sessions several weeks
                  apart, and the group kept planning in their chat the
                  whole time, so those messages were part of what I
                  studied. The findings below come from all of it
                  together. The survey had described planning as an
                  orderly sequence, from the first idea to a destination
                  and then to dates. The group worked the other way round,
                  and the plan took shape while they browsed rather than
                  before.
                </p>
                <p className="mt-4 italic">Key findings:</p>
                <ul className="mt-2">
                  <li>
                    Planning started with availability, not a destination.
                    Work schedules, graduation dates, and cheaper weekday
                    flights had fixed four days in June before anyone said
                    where they wanted to go
                  </li>
                  <li>
                    Constraints came next and cut the options down before
                    anyone talked about what they wanted. Visas ruled out
                    everywhere outside the Schengen area, an expected
                    heatwave ruled out Italy and Spain, and student budgets
                    ruled out Denmark
                  </li>
                  <li>
                    Preferences formed while browsing rather than before
                    it. The group did not know what they wanted from
                    Ireland at the start, and highland cows, a flea market,
                    and a walking tour became things they wanted only
                    after someone found them
                  </li>
                  <li>
                    Everything happened on phones, and a phone shows one
                    person at a time. Sharing meant reading a screen aloud
                    or handing it over, so whoever held it decided what the
                    group saw
                  </li>
                  <li>
                    Six people agreed to look for accommodation and two
                    did, so the group chose from a far smaller set than it
                    could have. One place they liked was booked by someone
                    else while they were still deciding
                  </li>
                  <li>
                    AI never came up once. When I offered to hand their
                    material to ChatGPT for a plan, they turned it down,
                    because searching was the part they enjoyed
                  </li>
                </ul>
                <p className="mt-4">
                  In every case the group already had what it needed. What
                  it did not have was a way to see it together.
                </p>
              </ResearchRow>
              <ResearchRow
                name="Competitive Analysis"
                outcome="Six platforms, each used to plan a real trip rather than compared on features, against four requirements from the research."
              >
                <p>
                  I reviewed ChatGPT, Trip.com AI Trip Planner, Wanderlog,
                  Roadtrippers, TripAdvisor, and Google Travel by planning a
                  trip in each the way the observed group had, starting
                  with no destination and working through to travel and
                  accommodation. Each was judged on whether it can be used
                  before a destination and dates are set, whether several
                  people can contribute to the same plan, whether AI output
                  can be edited in place or only regenerated, and whether
                  it works properly on a phone.
                </p>
                <div className="mt-6 overflow-hidden rounded-[8px] border border-hairline bg-white px-5 shadow-[0_2px_10px_rgba(20,32,28,0.06)] sm:px-8">
                  <div className="hidden gap-4 pt-5 pb-1 sm:grid sm:grid-cols-[1.2fr_repeat(4,1fr)]">
                    <span />
                    <span className="text-caption not-italic text-center uppercase tracking-wide">
                      Works before a destination is chosen
                    </span>
                    <span className="text-caption not-italic text-center uppercase tracking-wide">
                      More than one person can build the plan
                    </span>
                    <span className="text-caption not-italic text-center uppercase tracking-wide">
                      AI suggestions can be edited directly
                    </span>
                    <span className="text-caption not-italic text-center uppercase tracking-wide">
                      Works on a phone
                    </span>
                  </div>
                  <div className="divide-y divide-hairline">
                    {[
                      {
                        name: "ChatGPT",
                        values: ["Yes", "No", "No", "Yes"],
                      },
                      {
                        name: "Trip.com",
                        values: ["Partly", "No", "Yes", "Yes"],
                      },
                      {
                        name: "Wanderlog",
                        values: ["No", "Partly", "Partly", "Yes"],
                      },
                      {
                        name: "Roadtrippers",
                        values: ["Yes", "No", "Partly", "Yes"],
                      },
                      {
                        name: "TripAdvisor",
                        values: ["Partly", "No", "Not applicable", "Yes"],
                      },
                      {
                        name: "Google Travel",
                        values: ["No", "No", "Not applicable", "Yes"],
                      },
                    ].map((row) => (
                      <div
                        key={row.name}
                        className="grid grid-cols-2 gap-3 py-6 sm:grid-cols-[1.2fr_repeat(4,1fr)] sm:items-center sm:gap-4"
                      >
                        <p className="text-meta-label col-span-2 sm:col-span-1">
                          {row.name}
                        </p>
                        {row.values.map((value, i) => (
                          <div
                            key={
                              [
                                "Works before a destination is chosen",
                                "More than one person can build the plan",
                                "AI suggestions can be edited directly",
                                "Works on a phone",
                              ][i]
                            }
                            className="flex items-center gap-3 sm:contents"
                          >
                            <span className="text-caption not-italic w-[8.5rem] shrink-0 uppercase tracking-wide sm:hidden">
                              {
                                [
                                  "Works before a destination is chosen",
                                  "More than one person can build the plan",
                                  "AI suggestions can be edited directly",
                                  "Works on a phone",
                                ][i]
                              }
                            </span>
                            {value === "Not applicable" ? (
                              <span className="flex-1 text-center text-sm text-ink-faint sm:w-full">
                                {value}
                              </span>
                            ) : (
                              <span
                                className={`inline-flex h-9 flex-1 items-center justify-center whitespace-nowrap rounded-full px-3 text-center text-sm font-medium sm:w-full ${
                                  value === "Yes"
                                    ? "bg-teal !text-white"
                                    : value === "Partly"
                                      ? "bg-teal-pale !text-teal"
                                      : "border border-hairline text-ink-soft"
                                }`}
                              >
                                {value}
                              </span>
                            )}
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
                <p className="mt-6">
                  Every platform runs on a phone, and that was the only
                  requirement all six met. None of them let a group
                  contribute to, discuss, and revise the same plan while it
                  was still being formed. The opening was not a missing
                  feature. It was a missing shared view.
                </p>
              </ResearchRow>
            </div>
          </div>
        </section>

        {/* Band 4: Define */}
        <section className="bg-teal-pale">
          <div className="mx-auto max-w-[1200px] px-10 py-16 md:py-20">
            <div className="flex items-baseline gap-6">
              <SectionNumber number="02" />
              <h2 className="text-section-header">Define</h2>
            </div>

            <p className="text-lead mt-6">
              I brought the survey, the observation sessions, and the
              platform review together in an affinity diagram. Nine themes
              came out of it, but they were not the same kind of thing.
              Five of them were about specific decisions, where to go,
              where to stay, what to do, when to travel, and where ideas
              come from. The other four were difficulties that appeared
              again and again inside all of those decisions.
            </p>

            <div className="mt-6">
              <Callout onTintedBand>
                Make what the group already knows visible to everyone in
                it, without taking the planning away from them.
              </Callout>
            </div>
            <div className="mt-4">
              <PullQuote>
                The same four problems appeared no matter what the group
                was deciding. The answer was not a better way to choose a
                hotel. It was a better view of what the group already had.
              </PullQuote>
            </div>

            <div className="mt-8 border-t border-hairline">
              <ResearchRow
                name="Affinity Diagram"
                outcome="Nine themes came out of the affinity diagram. Four of them ran through the entire process, and the other five were the decisions where those four kept showing up."
              >
                <p>
                  Each theme was written up with a problem statement, a set
                  of how might we questions, and a design direction.
                  Looking across them, availability, destination,
                  accommodation, inspiration, and activity are stages of
                  one process rather than separate problems. The same four
                  difficulties appeared at every stage, and those four were
                  worth designing for.
                </p>
                <p className="mt-4 italic">The four themes:</p>
                <ul className="mt-2">
                  <li>
                    <strong>Constraints:</strong> limits like visas,
                    budgets, and dates are known from the start but never
                    recorded, so the group keeps rediscovering them
                  </li>
                  <li>
                    <strong>Disorganised information:</strong> everything
                    the group collects lands inside a conversation, where a
                    decision looks identical to a suggestion
                  </li>
                  <li>
                    <strong>Disengagement:</strong> effort is uneven and
                    nobody can see it, so the group only finds out when the
                    choice has already narrowed or an option has gone
                  </li>
                  <li>
                    <strong>Privacy:</strong> there is nothing between
                    keeping an idea to yourself and showing it to everyone,
                    so ideas that are not ready often stay hidden for good
                  </li>
                </ul>
                <div className="mt-6">
                  <ImagePlaceholder
                    label="Affinity diagram"
                    src="/assets/planning-together-affinity-diagram.jpg"
                    aspect="aspect-[3200/2738]"
                    fit="contain"
                    enlargeable
                    caption="The affinity diagram, with problem statements and how might we questions for each of the nine themes."
                  />
                </div>
              </ResearchRow>
              <ResearchRow
                name="How Might We and Design Directions"
                outcome="Each theme produced its own questions. Four of them became the directions the prototype was built from."
              >
                <p>
                  The questions were written to stay open rather than
                  describe a feature, so the answers could come out of
                  testing. That mattered most for AI. The research had
                  shown both resistance to it and real interest in it, so
                  its role was left as something to find out rather than
                  something to decide in advance.
                </p>
                <p className="mt-4 italic">How might we questions:</p>
                <ul className="mt-2">
                  <li>
                    How might we help groups collect everything they find
                    in one shared space, so nothing gets lost across apps?
                  </li>
                  <li>
                    How might we help groups surface practical limits like
                    visas, budget, and weather before they start planning?
                  </li>
                  <li>
                    How might we help people save and organise their own
                    finds privately before deciding what to share?
                  </li>
                  <li>
                    How might we help groups divide the planning fairly, so
                    one person does not end up carrying it?
                  </li>
                </ul>
                <p className="mt-4 italic">Design directions:</p>
                <ul className="mt-2">
                  <li>
                    Let groups record constraints as they come up, so a
                    visa requirement or a budget limit is visible to
                    everyone instead of surfacing after an option has
                    already been dropped
                  </li>
                  <li>
                    Keep what the group collects in a shared space
                    organised by category, instead of scattered through the
                    conversation
                  </li>
                  <li>
                    Make each person&apos;s contributions visible, so the
                    group can see who has taken part
                  </li>
                  <li>
                    Let people keep material private until they decide it
                    is ready to share
                  </li>
                </ul>
                <p className="mt-4">
                  Two things had to be held in balance. People search
                  better on their own but decide better together, so the
                  design needed to support both and the move between them.
                  And planning everything in advance is not the same as
                  planning well. This group left most of their days open
                  on purpose, and booked only what genuinely had to be
                  booked ahead.
                </p>
              </ResearchRow>
            </div>
          </div>
        </section>

        {/* Band 5: Develop */}
        <section className="bg-bg">
          <div className="mx-auto max-w-[1200px] px-10 py-16 md:py-20">
            <div className="flex items-baseline gap-6">
              <SectionNumber number="03" />
              <h2 className="text-section-header">Develop</h2>
            </div>

            <p className="text-lead mt-6">
              By this point, the research had produced four design
              directions, and turning them into an app meant working in
              order. First a written scenario, to see how those
              directions would behave across a real week of planning.
              Then a set of visual rules, so the design would hold
              together as it changed. From there came a working
              prototype, a round of testing, a rebuild shaped by what
              that testing showed, and a second round to find out whether
              the changes had worked.
            </p>
            <div className="mt-6">
              <Callout>
                I built it as a working app in React, so people could use
                it rather than click through fixed screens. What I needed
                to learn was how people would behave over time, not
                whether they could find a button. Would someone keep an
                idea private when the choice appears at the moment of
                saving? Would the group notice a missing contribution
                before it cost them an option?
              </Callout>
            </div>

            <div className="mt-9">
              <PullQuote>
                The role of AI was left undecided on purpose. It was the
                one thing I wanted testing to answer rather than my own
                assumption.
              </PullQuote>
            </div>

            <div className="mt-8 border-t border-hairline">
              <ResearchRow
                name="Scenario"
                outcome="Six friends, four days in Dublin, and one week of planning, written out before anything was built."
              >
                <p>
                  Six friends have four days in Dublin and one week to
                  plan it. The scenario follows Sara deciding what to keep
                  private and what to share, Mia adding straight away
                  while two others add nothing at all, and Tom sharing a
                  plan generated by ChatGPT.
                </p>
                <div className="mt-6">
                  <ImagePlaceholder
                    label="Scenario storyboard"
                    src="/assets/planning-together-scenario-storyboard.jpg"
                    aspect="aspect-[3/2]"
                    fit="contain"
                    enlargeable
                    caption="One week of planning, written as a story before anything was built."
                  />
                </div>
                <p className="mt-6 italic">
                  Two things the scenario settled:
                </p>
                <ul className="mt-2">
                  <li>
                    The choice between keeping something private and
                    sharing it belongs at the moment of saving, not
                    earlier. Sara only knew the café was worth sharing when
                    she looked at it again the next day
                  </li>
                  <li>
                    Contributions should be visible inside each category
                    rather than on a separate summary page. The group only
                    noticed what was missing at the moment it sat down to
                    compare accommodation
                  </li>
                </ul>
              </ResearchRow>
              <ResearchRow
                name="Design System and Guidelines"
                outcome="The rules the app was built from, set before the first round and unchanged through all three."
              >
                <p>
                  Four colours, one typeface, and a fixed set of spacing
                  values. Together they made it possible to rebuild the
                  app twice without having to redesign it each time.
                </p>
                {/* Block 1: colour */}
                <BlockLabel className="mt-6">Colour</BlockLabel>
                <div>
                  <div className="mt-4 grid grid-cols-4">
                    {PALETTE.map((c) => (
                      <div key={c.name}>
                        <div
                          className="flex h-44 flex-col justify-end p-3 sm:h-64 sm:p-5"
                          style={{ backgroundColor: c.hex }}
                        >
                          <p
                            className={`${c.textClass} text-base leading-tight sm:text-3xl`}
                            style={{ fontFamily: "var(--font-fraunces)" }}
                          >
                            {c.name}
                          </p>
                          <p
                            className={`${c.textClass} mt-1 font-mono text-[9px] tracking-widest uppercase opacity-80 sm:text-xs`}
                          >
                            {c.hex}
                          </p>
                        </div>
                        <div className="flex h-4 sm:h-6">
                          {tonalSteps(c.hex).map((step, i) => (
                            <div
                              key={i}
                              className="flex-1"
                              style={{ backgroundColor: step }}
                            />
                          ))}
                        </div>
                        <div className="bg-white px-2.5 py-3 sm:px-4 sm:py-4">
                          <p className="text-[11px] leading-snug sm:text-sm">
                            <strong>{c.role}:</strong> {c.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Block 2: typography */}
                <BlockLabel>Typography</BlockLabel>
                <p className="text-caption not-italic mt-4">
                  Typeface: Plus Jakarta Sans. Weights 400 to 800.
                </p>
                <div className={`mt-4 ${plusJakartaSans.variable}`}>
                  <table className="w-full border-collapse text-left">
                    <thead>
                      <tr className="border-b border-hairline">
                        <th className="text-caption not-italic py-3 pr-4 text-left font-normal tracking-wide uppercase">
                          Style
                        </th>
                        <th className="text-caption not-italic py-3 pr-4 text-left font-normal tracking-wide uppercase">
                          Sample
                        </th>
                        <th className="text-caption not-italic w-16 px-4 py-3 text-left font-normal tracking-wide uppercase">
                          Size
                        </th>
                        <th className="text-caption not-italic w-16 px-4 py-3 text-left font-normal tracking-wide uppercase">
                          Weight
                        </th>
                        <th className="text-caption not-italic w-20 px-4 py-3 text-left font-normal tracking-wide uppercase">
                          Line height
                        </th>
                        <th className="text-caption not-italic w-28 px-4 py-3 text-left font-normal tracking-wide uppercase">
                          Colour
                        </th>
                        <th className="text-caption not-italic py-3 text-left font-normal tracking-wide uppercase">
                          Used for
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-hairline divide-y">
                      {TYPE_SCALE.map((row) => (
                        <tr key={row.token}>
                          <td className="py-4 pr-4 text-left text-sm whitespace-nowrap">
                            {row.style}
                          </td>
                          <td className="py-4 pr-4 text-left">
                            <span
                              style={{
                                fontFamily:
                                  "var(--font-plus-jakarta-sans), system-ui, sans-serif",
                                fontSize: `${row.px}px`,
                                fontWeight: row.weight,
                                color: TYPE_COLORS[row.color],
                                lineHeight:
                                  row.lineHeight === "Auto"
                                    ? undefined
                                    : row.lineHeight,
                                letterSpacing: `${row.letterSpacingPx}px`,
                                textTransform: row.uppercase
                                  ? "uppercase"
                                  : undefined,
                              }}
                            >
                              {row.sample}
                            </span>
                          </td>
                          <td className="w-16 px-4 py-4 text-left text-sm whitespace-nowrap">
                            {row.px}px
                          </td>
                          <td className="w-16 px-4 py-4 text-left text-sm whitespace-nowrap">
                            {row.weight}
                          </td>
                          <td className="w-20 px-4 py-4 text-left text-sm whitespace-nowrap">
                            {row.lineHeight}
                          </td>
                          <td className="w-28 px-4 py-4 text-left text-sm whitespace-nowrap">
                            {TYPE_COLOR_LABELS[row.color]}
                          </td>
                          <td className="py-4 text-left text-sm">
                            {row.usedFor}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Block 3: spacing */}
                <BlockLabel>Spacing</BlockLabel>
                <div className="mt-4">
                  <table className="w-full border-collapse text-left">
                    <thead>
                      <tr className="border-b border-hairline">
                        <th className="text-caption not-italic py-3 pr-4 text-left font-normal tracking-wide uppercase">
                          Used for
                        </th>
                        <th className="text-caption not-italic py-3 pr-4 text-left font-normal tracking-wide uppercase">
                          Value
                        </th>
                        <th className="text-caption not-italic py-3 text-left font-normal tracking-wide uppercase">
                          Scale
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-hairline divide-y">
                      {SPACING_ALL.map((row) => (
                        <tr key={row.token}>
                          <td className="py-4 pr-4 text-left text-sm">
                            {row.usedFor}
                          </td>
                          <td className="py-4 pr-4 text-left text-sm whitespace-nowrap">
                            {row.px}px
                          </td>
                          <td className="py-4 text-left">
                            <span
                              className="inline-block h-2 rounded-full bg-teal"
                              style={{ width: `${row.px}px` }}
                            />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Block 4: usage rules */}
                <BlockLabel>Usage rules</BlockLabel>
                <div>
                  <div className="mt-4 grid grid-cols-1 gap-8 sm:grid-cols-2">
                    <div>
                      <p className="text-meta-label">Always</p>
                      <ul className="mt-4 list-none space-y-3 pl-0">
                        {USAGE_RULES.always.map((rule, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <span className="mt-0.5 text-ink-faint">✓</span>
                            <span>{rule}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-meta-label">Never</p>
                      <ul className="mt-4 list-none space-y-3 pl-0">
                        {USAGE_RULES.never.map((rule, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <span className="mt-0.5 text-ink-faint">✕</span>
                            <span>{rule}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </ResearchRow>
              <ResearchRow
                name="Prototype 1, Private and Shared Spaces"
                outcome="The first working version, with a private space and a shared one, both organised by category, plus an assistant, tested in one session with three people."
              >
                <p>
                  The app opens by asking for the name the group will see,
                  then drops you into your own space, where everything you
                  save sits in categories only you can see. You can start
                  a group trip whenever you want, but nothing forces you
                  to, because people collect ideas long before they agree
                  to travel anywhere. Saving accepts a link, a note, an
                  image, or a video, but only one kind at a time, and the
                  choice between keeping something and sharing it comes at
                  the end, followed by a screen naming exactly who will be
                  able to see it. Inside a trip, the private and shared
                  spaces are kept visibly apart, with a lock icon on the
                  private one and a different background colour behind
                  each. Every category shows who has contributed and who
                  the group is still waiting on, and the assistant sits in
                  its own tab with three suggested questions.
                </p>
                <p className="mt-4">
                  Not everything from the research made it into this
                  version. Showing who had contributed stayed a simple
                  marker inside each category rather than becoming a
                  feature of its own. And the idea of asking a group to
                  record its limits before searching was not built at
                  all, because there is nowhere to record them until a
                  shared space exists. The other five members were
                  simulated, so one person could work through the whole
                  group flow alone.
                </p>
                <div className="mt-6 grid grid-cols-2 gap-5 sm:grid-cols-4">
                  <ImagePlaceholder
                    label="Onboarding"
                    src="/assets/planning-together-p1-onboarding.png"
                    aspect="aspect-[430/871]"
                    caption="Onboarding"
                  />
                  <ImagePlaceholder
                    label="Personal home screen"
                    src="/assets/planning-together-p1-personal-home.png"
                    aspect="aspect-[430/871]"
                    caption="Personal home screen"
                  />
                  <ImagePlaceholder
                    label="Save form"
                    src="/assets/planning-together-p1-save-form.png"
                    aspect="aspect-[430/871]"
                    caption="Save form"
                  />
                  <ImagePlaceholder
                    label="Trip creation, step one"
                    src="/assets/planning-together-p1-trip-creation-1.png"
                    aspect="aspect-[430/871]"
                    caption="Trip creation, step one"
                  />
                  <ImagePlaceholder
                    label="Trip creation, step two"
                    src="/assets/planning-together-p1-trip-creation-2.png"
                    aspect="aspect-[430/871]"
                    caption="Trip creation, step two"
                  />
                  <ImagePlaceholder
                    label="Trip home with both spaces"
                    src="/assets/planning-together-p1-trip-home.png"
                    aspect="aspect-[430/871]"
                    caption="Trip home with both spaces"
                  />
                  <ImagePlaceholder
                    label="Category with contributor indicators"
                    src="/assets/planning-together-p1-category-contributors.png"
                    aspect="aspect-[430/871]"
                    caption="Category with contributor indicators"
                  />
                  <ImagePlaceholder
                    label="Assistant with suggested questions"
                    src="/assets/planning-together-p1-assistant.png"
                    aspect="aspect-[430/871]"
                    caption="Assistant with suggested questions"
                  />
                </div>
                <p className="mt-10">
                  All three took part in the same session and worked
                  through the scenario together, since the app is built
                  for a group and their disagreements were part of what I
                  wanted to see. They set up a profile, saved something
                  without sharing it, created a trip, shared the item, and
                  looked for where the group would discuss accommodation.
                </p>
                <div className="mt-3">
                  <NumberedList
                    items={[
                      "Saved links carried no description, only a web address, so a list of them was unreadable. One participant saved a restaurant from Google and later could not tell it apart from anything else. The form was part of the cause, because it accepted a note or a link, never both",
                      "Categories were fixed. The group could not rename them, add to them, or remove any, there was no food category at all, and each item could sit in only one, so a day trip that was both transport and an activity had to be filed as one or the other. One participant suggested they should work like tags",
                      "The private space was not obviously private. My Saves sat above Group Space on the trip screen, so one participant read that order as her contributions first and assumed the group could already see them",
                      "Group Space could not show progress. It listed what the group had collected but nothing about how far the plan had come, so there was no way to tell whether the trip was months off or next week, or what still needed deciding",
                      "Conversation had no single home. It could happen as a comment on an item or in a separate discussion tab, so one participant said she would remember that something had been discussed without knowing where to look for it",
                      "The assistant was rejected before it was opened. One participant did not trust it to recommend anything and doubted an AI could point her to a place worth going. Another said he would never use AI for anything at all",
                      "The objection was never to AI itself, but to what it was being asked to decide. The same participants happily gave it ticket prices, student discounts, and visa rules, while keeping restaurants, flights, and accommodation for themselves",
                    ]}
                  />
                </div>
              </ResearchRow>
              <ResearchRow
                name="Prototype 2, Decisions and a Narrowed Assistant"
                outcome="The rebuild, with editable categories, one discussion per trip, and a way to mark what the group has decided."
              >
                <p>
                  Saving changed the most. A title, a link, a note, and a
                  photo now go into one entry together, so a saved link
                  comes with a name and a description instead of only a
                  web address. Items can sit in more than one
                  category, and the categories themselves can be renamed,
                  added to, or removed, so a group can shape them around
                  its own trip. Food was added and travel was renamed
                  transport. The private space moved below the
                  group&apos;s and gained a lock, so it is obvious which
                  one you are looking at.
                </p>
                <p className="mt-4">
                  Conversation was brought together rather than adjusted.
                  Comments on individual items were removed, and
                  everything now happens in a single discussion per trip,
                  named after the trip, because with two places to talk
                  nobody could remember which one a conversation had
                  happened in. The assistant was narrowed rather than
                  removed, since the objection had been to what it was
                  deciding rather than to its existence. It now answers
                  practical questions using what the group has already
                  entered, and says when it does not have enough
                  information instead of guessing.
                </p>
                <p className="mt-4">
                  The last change was one nobody had asked for. The first
                  version could not tell a suggestion apart from a
                  settled decision, so items could now be marked as
                  decided, showing who decided, alongside a countdown to
                  departure and a progress line for each category.
                </p>
                <div className="mt-6 grid grid-cols-2 gap-5 sm:grid-cols-4">
                  <ImagePlaceholder
                    label="The rebuilt save form"
                    src="/assets/planning-together-p2-save-form.png"
                    aspect="aspect-[390/844]"
                    caption="The rebuilt save form"
                  />
                  <ImagePlaceholder
                    label="An item marked as decided"
                    src="/assets/planning-together-p2-decided-item.png"
                    aspect="aspect-[390/844]"
                    caption="An item marked as decided"
                  />
                  <ImagePlaceholder
                    label="The narrowed assistant"
                    src="/assets/planning-together-p2-assistant.png"
                    aspect="aspect-[390/844]"
                    fit="contain"
                    caption="The narrowed assistant"
                  />
                  <ImagePlaceholder
                    label="The confirmation screen after sharing"
                    src="/assets/planning-together-p2-confirmation.png"
                    aspect="aspect-[390/844]"
                    caption="The confirmation screen after sharing"
                  />
                </div>
                <p className="mt-10">
                  In the first round the three participants explained the
                  interface to each other, so it was hard to tell what
                  the design was saying on its own. The second round was
                  run individually for that reason, with one person who
                  had used the first version and one who had never seen
                  it.
                </p>
                <div className="mt-3">
                  <NumberedList
                    items={[
                      "Where an item ended up did not depend on where you saved it from. One participant saved something while inside her private space, assumed it had stayed private, and found out several minutes later that it had gone to the group",
                      "Both participants read the decided control as marking something interesting rather than something the group had settled, and one asked whether it applied to her or to everyone. One also said a tick on its own was not enough, and that a decided item should be easy to spot at a glance",
                      "Nobody could find the progress information. It had been added because a participant in the first round asked to know how far the group had got, but when she was asked to check exactly that, she did not think to look for it, and found the countdown and category status only after being shown where they were",
                      "Requiring a title slowed saving down. One participant wanted to save the moment she found something and name it later, since with a photo the picture already says what it is",
                      "The trip summary showed how far each category had got, but not what had actually been decided in it. Categories also appeared twice, once in a compact view and again in the full list",
                      "The confirmation screen after sharing was the one thing both participants praised, because it says what is about to become visible, where, and to whom",
                      "The assistant went from rejected to recommended. The participant who had refused to trust it in the first round now said the suggestions were much more useful, without being asked. She had not changed her mind about AI, the assistant had stopped doing the thing she objected to",
                      "The three questions the assistant offers when you open it were still too vague. The visa one did not name the destination, the weather one did not use the group's dates, and the discount one did not say what the discount applied to",
                    ]}
                  />
                </div>
              </ResearchRow>
            </div>
          </div>
        </section>

        {/* Band 6: Reflection */}
        <section className="bg-teal-pale">
          <div className="mx-auto max-w-[1200px] px-10 py-16 md:py-20">
            <h2 className="text-section-header">Reflection</h2>
            <h3 className="text-sub-header mt-10">
              What I Learned: Why Making Something Visible Is Not Enough
            </h3>
            <p className="mt-6">
              Following a real group, then building something for them and
              putting it in front of people, taught me things I could not
              have read anywhere.
            </p>
            <ul className="mt-4">
              <li>
                Visibility is not enough on its own. Making something
                visible only helps if it can also be understood. The
                decided marker showed a state clearly and still failed,
                because it never said what that state meant
              </li>
              <li>
                Structure can help people think, not only organise.
                Participants said the categories reminded them what a trip
                involves, and that a blank page would have been harder to
                start from
              </li>
              <li>
                People judge AI by the job, not by the technology. The
                same person refused it for one task and welcomed it for
                another, and her reasoning never changed. What decided it
                was which choices she wanted to keep for herself
              </li>
              <li>
                A solution needs testing as much as a problem does. I
                designed the decided marker from my own reading of a
                finding and put it straight into the next build. A rough
                sketch shown to one person would have caught the
                misunderstanding before anything was built
              </li>
              <li>
                Watching people plan showed me things asking them never
                would. In the survey people described what they
                remembered, which was tidier than what actually happened.
                Sitting with the group, I saw the same visa question come
                back again and again, and I saw two of six quietly not do
                what everyone had agreed
              </li>
            </ul>

            <h3 className="text-sub-header mt-12">Future Step</h3>
            <ul className="mt-4">
              <li>
                Build the collaborative side for real. The other group
                members were simulated, so the part of the design that
                matters most has never been used by an actual group. With
                real accounts and a shared discussion, it would finally be
                possible to see whether showing who has contributed
                encourages people to join in, or makes them uncomfortable
              </li>
              <li>
                Decide what happens when a trip ends. A trip currently has
                a beginning and no end. One participant asked whether
                finished trips are kept along with everything saved for
                them, and another wanted a final page she could export and
                share
              </li>
              <li>
                Test with a different kind of group. This was one group of
                friends planning one trip. Family trips often have a
                single person leading the decisions, which is a different
                arrangement and may need a different design
              </li>
            </ul>
          </div>
        </section>
      </article>
      <CaseStudyNav currentSlug="planning-together" />
    </>
  );
}
