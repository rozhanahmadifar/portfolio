import CaseStudyHeroWithVisual from "@/components/case-study/CaseStudyHeroWithVisual";
import Callout from "@/components/case-study/Callout";
import PullQuote from "@/components/case-study/PullQuote";
import ImagePlaceholder from "@/components/case-study/ImagePlaceholder";
import MetricTable from "@/components/case-study/MetricTable";
import PersonaCard from "@/components/case-study/PersonaCard";
import NumberedList from "@/components/case-study/NumberedList";
import ResearchRow from "@/components/case-study/ResearchRow";
import CaseStudyNav from "@/components/case-study/CaseStudyNav";

const PROTOTYPE_URL =
  "https://www.figma.com/proto/xjdGmiB5tDzPc2xgq3jny2/Untitled--Copy-?node-id=4711-2367&t=sSg6hA4qB6mp6m4r-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=4711%3A2367";

export const metadata = {
  title: "Yoga Website Redesign | Rozhan Ahmadifar",
  description:
    "Redesigned a yoga studio website to improve usability, content structure, and booking flow, using UX research, information architecture, and prototyping.",
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

export default function YogaWebsiteRedesign() {
  return (
    <>
    <article>
      <CaseStudyHeroWithVisual
        client="Yoga With Deni"
        title="Yoga Website Redesign"
        tagline="Redesigning a small yoga studio's website so first-time visitors can find, choose, and book a class with confidence."
        paragraph="Small studio websites often lose people right at the point of booking. Buried details and unclear next steps turn interest into hesitation. Our research found the exact moment it happened here, and that finding shaped the entire redesign."
        heroVisualLabel="Composite: Home Page, Classes Page, Class Page, Booking, and Login screens"
        heroVisualSrc="/assets/yoga-hero-composite.jpg"
        quickFacts={[
          { label: "Role", value: "Product Designer" },
          { label: "Duration", value: "6 weeks" },
          { label: "Team", value: "4 designers" },
          {
            label: "Tools",
            value: "Figma · Miro · Marvel · Google Forms · Canva",
          },
          {
            label: "Responsibilities",
            value:
              "UX Research · Information Architecture · Interaction Design · Prototyping · User Testing",
          },
        ]}
        ctaLabel="View prototype"
        ctaHref={PROTOTYPE_URL}
      />

      {/* Band 1: Result & Impact */}
      <section className="bg-bg">
        <div className="mx-auto max-w-[1200px] px-10 py-16 md:py-20">
          <h2 className="text-section-header">Result &amp; Impact</h2>
          <div className="mt-6">
            <p>
              The final design is separated from the original site by 19
              testing sessions across three rounds: 4 participants on the
              first prototype, 7 on the second, and a final Maze
              validation with 8, measuring task completion against the
              original site. I ran the final round myself, and it
              confirmed the two fixes that mattered most: moving the
              booking confirmation after payment, and raising the
              contrast between cards and background. The numbers below
              are the before and after.
            </p>
            <p className="text-meta-label mt-10">Key design decisions</p>
            <ul className="mt-4">
              <li>
                Made class details, including time, level, and price,
                visible directly on each class card
              </li>
              <li>
                Simplified navigation labels and menu structure so users
                could find what they needed without trial and error
              </li>
              <li>
                Structured the booking flow into clear steps, ending with
                a confirmation after payment
              </li>
              <li>
                Strengthened visual hierarchy and contrast so pages could
                be scanned quickly
              </li>
              <li>
                Reduced content overload by surfacing only the most
                essential information on each page
              </li>
            </ul>
            <div className="mt-10">
              <MetricTable
                rows={[
                  {
                    metric: "Avg. task completion",
                    original: "2 min 12 sec",
                    final: "1 min 34 sec, 29% faster",
                  },
                  {
                    metric: "Task clarity score",
                    original: "56/100, Poor",
                    final: "81/100, Good",
                  },
                  {
                    metric: "Misclicks / errors",
                    original: "High, trial and error",
                    final: "Low, confident paths",
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Band 2: The Problem */}
      <section className="bg-teal-pale">
        <div className="mx-auto max-w-[1200px] px-10 py-16 md:py-20">
          <h2 className="text-section-header">The Problem</h2>
          <p className="mt-6">
            User research uncovered key pain points. The most critical:
          </p>
          <ul className="mt-4">
            <li>
              Navigation was unclear, leading to misclicks and
              trial-and-error before users found what they needed
            </li>
            <li>
              Class details like time, level, and price were buried, forcing
              users to click into multiple pages just to compare options
            </li>
            <li>
              The booking flow had no clear structure, leaving users unsure
              whether the booking had actually gone through
            </li>
          </ul>
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
            To understand why users struggled, we combined three research
            methods: 15 user interviews and observation sessions, a
            heuristic evaluation of the original site, and a competitive
            analysis of four yoga platforms. All three pointed to the same
            root cause. Class details like time, level, and price were
            buried, and unclear navigation forced users into trial and
            error.
          </p>

          <div className="mt-6">
            <Callout>
              One priority came out of this research: put time, level, and
              price directly on each class card, right where users are
              already looking. It became the foundation of the new design.
            </Callout>
          </div>
          <div className="mt-4">
            <PullQuote>
              The site didn&apos;t have a feature problem. It had a
              findability problem. Adding more would have made it worse,
              not better.
            </PullQuote>
          </div>

          <div className="mt-8 border-t border-hairline">
            <ResearchRow
              name="User Research"
              outcome="15 sessions revealed the same pattern. Users weren't asking for new features, they couldn't find the ones that existed."
            >
              <p>
                We ran 15 sessions combining interviews and live
                observation: first asking users about their goals and past
                frustrations, then watching them attempt real tasks on the
                existing site, finding a class, comparing options, starting
                a booking.
              </p>
              <p className="mt-4 italic">Key findings:</p>
              <ul className="mt-2">
                <li>
                  Users struggled to quickly find class details such as
                  time, level, and duration
                </li>
                <li>
                  Misclicks and trial and error were common because the
                  navigation and menu structure gave no clear signal of
                  where things lived
                </li>
                <li>
                  Missing context, like instructor information, made users
                  hesitant to commit to a class
                </li>
              </ul>
            </ResearchRow>
            <ResearchRow
              name="Heuristic Evaluation"
              outcome="5 issues found. The most serious: a complete lack of information hierarchy, so users had to read everything to find anything."
            >
              <p>
                We ran the original site against established usability
                principles. The evaluation confirmed the problems
                weren&apos;t just visual, they were structural.{" "}
                <strong>
                  The most critical issue was a complete lack of
                  information hierarchy
                </strong>
                , which made every task harder than it needed to be.
              </p>
              <div className="mt-6 grid items-start gap-8 sm:grid-cols-[1fr_420px]">
                <NumberedList
                  items={[
                    "No visible logo, weakening brand recognition from the first second.",
                    "Navigation labels that described the studio's structure, not what users were looking for.",
                    "Disjointed text content that was hard to follow.",
                    "Long, unbroken blocks of text that made scanning difficult.",
                    "No clear organization overall, so finding anything required reading everything.",
                  ]}
                />
                <div className="w-full">
                  <ImagePlaceholder
                    label="Original site"
                    src="/assets/yoga-heuristic-eval.jpg"
                    scrollable
                    maxHeight="250px"
                    enlargeable
                    caption="Scroll to see the full original page, or click to open it full size."
                  />
                </div>
              </div>
            </ResearchRow>
            <ResearchRow
              name="Competitive Analysis"
              outcome="Winning competitors didn't have more features. They made the same information easier to find."
            >
              <p>
                We reviewed several yoga and wellness websites, focusing on
                navigation, visual design, content clarity, and key
                functional elements.
              </p>
              <p className="mt-4">
                Compared to these platforms, the original site was missing
                what competitors handled well: visible class schedules,
                pricing transparency, and clear navigation. We closed those
                specific gaps, visible pricing, a simpler menu, calmer
                content, since clearer presentation does the same job with
                less effort for the user.
              </p>
              <p className="mt-4 italic">
                What I found most valuable was that smaller competitors
                succeeded not by adding features, but by presenting less
                complexity more clearly.
              </p>
              <div className="mt-6">
                <ImagePlaceholder
                  label="Competitive analysis matrix: navigation, target audience, schedule, pricing structure, content quality, profile, and filter across Yoga With Deni, Yoga With Samin, Alomoves, and Yoga Laube"
                  src="/assets/yoga-competitive-analysis.jpg"
                  aspect="aspect-[860/453]"
                  enlargeable
                />
              </div>
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
            Research pointed to a clear set of problems. To keep every
            decision grounded, we built the work around one representative
            user: Lina, who is returning to yoga after a long break, has a
            busy schedule, and is booking with this studio for the first
            time.
          </p>
          <div className="mt-8">
            <PersonaCard
              name="Lina"
              tagline="Our representative user"
              background={[
                "Returning to yoga after a long break, with a busy and unpredictable weekly schedule",
                "Found the studio online and is booking with them for the first time",
              ]}
              sections={[
                {
                  label: "Goals",
                  items: [
                    "Quickly find a class that fits her level and schedule",
                    "Feel confident, not confused, before showing up",
                  ],
                },
                {
                  label: "Needs",
                  items: [
                    "Class time, level, and price visible without extra clicks",
                    "A booking flow she can follow step by step",
                  ],
                },
                {
                  label: "Frustrations",
                  items: [
                    "Unclear navigation that leads to trial and error",
                    "No confirmation that a booking actually went through",
                  ],
                },
                {
                  label: "Motivations",
                  items: [
                    "Wants a calm, low-stress way to build a regular practice",
                    "Needs to trust a site before committing her time and money",
                  ],
                },
              ]}
            />
          </div>

          <h3 className="text-sub-header mt-12">
            Problem and Solution Statements
          </h3>
          <div className="mt-6 grid gap-8 sm:grid-cols-2">
            <div>
              <p className="text-meta-label">Problems</p>
              <ul className="mt-4">
                <li>Difficult to quickly find class details (time, level, duration)</li>
                <li>Confusing navigation and menu structure</li>
                <li>Long pages with too much information and poor visual structure</li>
                <li>Booking flow not immediately clear</li>
                <li>Limited visibility of instructors and class previews</li>
              </ul>
            </div>
            <div>
              <p className="text-meta-label">Design Opportunities</p>
              <ul className="mt-4">
                <li>Organize class information into clear, easy-to-scan sections</li>
                <li>Simplify navigation with clearly labeled menu items</li>
                <li>Break content into shorter, clear sections with visual hierarchy</li>
                <li>Implement a structured, step-by-step booking flow</li>
                <li>
                  Include instructor profiles and class previews to build
                  trust before booking
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-6">
            <PullQuote>
              When five out of five people sort the same way independently,
              that&apos;s not a preference. That&apos;s the actual mental
              model. I built the navigation around it, not around what
              looked cleaner to me.
            </PullQuote>
          </div>

          <div className="mt-8 border-t border-hairline">
            <ResearchRow
              name="Scenario & User Flow"
              outcome="Mapping Lina's journey showed where trust broke: after payment, nothing confirmed her booking went through."
            >
              <ol className="max-w-2xl">
                <li>
                  After a period of feeling tense and out of balance, Lina
                  began looking for a gentle way to support her wellbeing
                  and create more calm in her routine.
                </li>
                <li>
                  While searching online, Lina found a yoga studio site
                  with a calm atmosphere and clear structure, and
                  navigated straight to the Classes section.
                </li>
                <li>
                  Lina browsed the class overview, picked one that caught
                  her interest, and felt confident enough to continue
                  booking thanks to clear options like &ldquo;Book This
                  Class.&rdquo;
                </li>
                <li>
                  Lina completed booking, reviewed the summary, and paid.
                  The confirmation reassured her, and she returned to
                  browse future classes.
                </li>
              </ol>
              <div className="mt-6 w-full rounded-[8px] border border-hairline bg-white px-6 py-6 sm:px-8 sm:py-8">
                <ImagePlaceholder
                  label="Flowchart: Start, Home Page, Classes page, Select a class, Book this Class?, Log in or Sign up, Booking Steps 1 to 3, Confirmation Page, See All Classes?, End"
                  src="/assets/yoga-user-flow.jpg"
                  aspect="aspect-[1600/210]"
                  enlargeable
                />
              </div>
            </ResearchRow>
            <ResearchRow
              name="Card Sorting"
              outcome="Participants consistently sorted content the same way. The site map came directly from their patterns."
            >
              <p>
                We asked users to organize website content based on their
                own priorities and mental models. Two patterns came up
                consistently: class details including time, level, price,
                and duration were always expected together in one place,
                and account content was always kept separate from
                browsing. These patterns directly informed the site map,
                bringing class information into a single section and
                moving account management out of the main navigation.
              </p>
              <div className="mt-6 rounded-[8px] border border-hairline bg-white px-6 py-6 sm:px-8 sm:py-8">
                <ImagePlaceholder
                  label="Card sorting collage"
                  src="/assets/yoga-card-sorting.png"
                  aspect="aspect-[14976/3611]"
                  enlargeable
                />
              </div>
            </ResearchRow>
            <ResearchRow
              name="Site Map"
              outcome="Everything about a class now lives in one section, so users choose and book without jumping between pages."
            >
              <p>
                The new structure brings together everything about a class
                in one section: time, level, price, and schedule. Users
                can compare and book without leaving that section. Account
                and login moved out of the main navigation, where they had
                been competing for attention with the core task of finding
                a class. What used to take several unclear steps is now
                one direct path from landing on the site to confirming a
                booking.
              </p>
              <div className="mt-6">
                <ImagePlaceholder
                  label="Site map diagram"
                  src="/assets/yoga-sitemap.jpg"
                  aspect="aspect-[1800/1012]"
                  enlargeable
                />
              </div>
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
            We sketched the core pages on paper, then refined the design
            through the first two rounds of usability testing, with 4
            participants and then 7. Every change between versions came
            from something a user did, not something we preferred.
          </p>
          <div className="mt-6">
            <Callout>
              Round one fixed the structure. Round two revealed what
              structure alone could not fix: users needed to feel certain,
              not just find their way. The final changes were all about
              trust.
            </Callout>
          </div>
          <div className="mt-4">
            <PullQuote>
              I thought a cleaner navigation would feel better right away.
              In testing, some users actually slowed down. Better is not
              enough. A design also has to feel familiar enough to trust.
            </PullQuote>
          </div>

          <div className="mt-8 border-t border-hairline">
            <ResearchRow
              name="Design Ideation & Sketching"
              outcome="We sketched the core pages on paper first, so the structure was settled before any pixels."
            >
              <p>
                Before opening Figma, we sketched the three core pages on
                paper: the home page, the classes overview, and the
                individual class page. Working at this speed made it easy
                to decide what each page needed to show and how users
                would move between them. This structure carried through to
                the final design almost unchanged.
              </p>
              <div className="mt-6">
                <ImagePlaceholder
                  label="Paper sketches: Home page, Classes page, and Class page wireframes"
                  src="/assets/sketches-paper-v2.jpg"
                  aspect="aspect-[2943/2134]"
                  caption="Paper sketches of the three core pages."
                  enlargeable
                />
              </div>
            </ResearchRow>
            <ResearchRow
              name="Prototype 1: Surfacing Class Details and Fixing Navigation"
              outcome="4 participants tested the first version. The problems were structural: overlapping sections, buried details, competing content."
            >
              <p>
                We tested the first prototype with 4 participants, asking
                them to find class details and complete a booking while we
                watched where they hesitated. All three problems pointed
                the same direction: the layout was fighting the content.
              </p>
              <p className="mt-4 italic">What testing revealed:</p>
              <div className="mt-6 grid gap-8 lg:grid-cols-[1fr_1.4fr]">
                <NumberedList
                  items={[
                    "Price and Schedule sections overlapped in function, confusing users about where to look first.",
                    "Small font size made content difficult to read and scan, slowing users down when looking for key information.",
                    "The Classes page had too much content competing for attention, burying essential details like class name, time, level, and price.",
                  ]}
                />
                <div>
                  <div className="grid grid-cols-1 items-start gap-6 sm:grid-cols-2">
                    <ImagePlaceholder
                      label="V1 Home Page"
                      src="/assets/yoga-v1-home.jpg"
                      scrollable
                      maxHeight="380px"
                      enlargeable
                      caption="V1 home page"
                    />
                    <ImagePlaceholder
                      label="V1 Classes Page"
                      src="/assets/yoga-v1-classes.jpg"
                      aspect="aspect-[516/547]"
                      enlargeable
                      caption="V1 classes page"
                    />
                  </div>
                  <p className="mt-6 text-center text-[11px] text-ink-faint/70">
                    Scroll or click to see the full screens.
                  </p>
                </div>
              </div>
            </ResearchRow>
            <ResearchRow
              name="Prototype 2: Resolving Login, Contrast and Booking Issues"
              outcome="Round two with 7 participants found the deeper issue: users could complete a booking but could not tell if it had succeeded."
            >
              <p>
                The second round, with 7 participants, tested whether the
                structural fixes held up. They did, but six new issues
                surfaced, and most shared one root: users could complete
                tasks without feeling sure about them. The clearest case
                was the confirmation screen appearing before payment,
                which left users wondering if their booking went through.
              </p>
              <p className="mt-4 italic">What testing revealed:</p>
              <div className="mt-6 grid gap-8 lg:grid-cols-[1fr_1.8fr]">
                <NumberedList
                  items={[
                    "Showing both a Login button and a profile icon confused users about which one to use (home page).",
                    "Having one shared More Info button for all events made it unclear which event a user was selecting (home page).",
                    "Users had to navigate separate sections to understand what each event involved, since the home page only showed the event name (home page).",
                    "Low contrast between the background, cards, and text made content hard to distinguish and slowed down scanning (classes page).",
                    "Small body text and low-priority bullet points buried key information, making it harder for users to find what they needed (class detail).",
                    "The confirmation screen appearing before payment made users uncertain whether their booking was actually complete (confirmation screen).",
                  ]}
                />
                <div>
                  <div className="grid grid-cols-1 items-start gap-6 sm:grid-cols-2">
                    <ImagePlaceholder
                      label="V2 Home Page"
                      src="/assets/yoga-v2-home.jpg"
                      scrollable
                      maxHeight="420px"
                      enlargeable
                      caption="V2 home page"
                    />
                    <ImagePlaceholder
                      label="V2 Classes Page"
                      src="/assets/yoga-v2-classes.jpg"
                      scrollable
                      maxHeight="420px"
                      enlargeable
                      caption="V2 classes page"
                    />
                    <ImagePlaceholder
                      label="V2 Class Page"
                      src="/assets/yoga-v2-class.jpg"
                      aspect="aspect-[889/900]"
                      enlargeable
                      caption="V2 class detail"
                    />
                    <ImagePlaceholder
                      label="V2 Booking Page"
                      src="/assets/yoga-v2-booking.jpg"
                      aspect="aspect-[900/581]"
                      enlargeable
                      caption="V2 confirmation screen"
                    />
                  </div>
                  <p className="mt-6 text-center text-[11px] text-ink-faint/70">
                    Scroll or click to see the full screens.
                  </p>
                </div>
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
            What I Learned: Three Moments That Changed How I Think About
            Design
          </h3>
          <p className="mt-6">
            This project taught me that the most useful moments weren&apos;t
            when things worked, they were when they didn&apos;t. Each round
            of testing brought something unexpected, and those surprises
            shaped the final design more than the parts that went smoothly.
          </p>
          <ul className="mt-4">
            <li>
              I did not expect five people to independently organize
              content the same way. That agreement gave me more confidence
              in a structural decision than any amount of internal debate
              could have. Strong patterns in user behavior are worth more
              than strong opinions in a design review.
            </li>
            <li>
              Some problems I thought were about navigation turned out to be
              about how the text looked. Things like font size and spacing
              made a bigger difference to how fast people completed tasks
              than I expected. I learned to look at how something reads
              before trying to fix how it is organized.
            </li>
            <li>
              Several design choices that made complete sense to me confused
              users during testing. That was a good reminder to stay open
              and let what users do guide the decisions, not just what
              feels right when you are designing.
            </li>
          </ul>

          <h3 className="text-sub-header mt-12">Future Step</h3>
          <p className="mt-6">
            The redesign covered the core experience of finding and booking
            a class. There are a few natural next steps I would want to
            explore to make it feel more complete.
          </p>
          <ul className="mt-4">
            <li>
              I would like to design a section where returning users can see
              their <strong>past bookings, manage upcoming classes,</strong>{" "}
              and <strong>cancel</strong> without having to email the
              studio. Right now that journey does not exist in the design
              and it is something real users would need.
            </li>
            <li>
              I would add a short{" "}
              <strong>review or rating flow</strong> after a class is
              completed. That would give new users more confidence when
              choosing a class and help Deni understand which classes are
              most enjoyed.
            </li>
            <li>
              I would want to{" "}
              <strong>
                test with users who book classes regularly
              </strong>{" "}
              over several weeks, not just once in a study session. Seeing
              how their behavior changes over time, whether they get
              faster, more confident, or start to hit new friction points,
              would point to the next set of things worth improving.
            </li>
          </ul>
        </div>
      </section>
    </article>
    <CaseStudyNav currentSlug="yoga-website-redesign" />
    </>
  );
}
