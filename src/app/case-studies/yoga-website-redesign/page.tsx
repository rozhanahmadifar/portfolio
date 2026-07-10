import CaseStudyHeroWithVisual from "@/components/case-study/CaseStudyHeroWithVisual";
import Callout from "@/components/case-study/Callout";
import PullQuote from "@/components/case-study/PullQuote";
import ImagePlaceholder from "@/components/case-study/ImagePlaceholder";
import MetricTable from "@/components/case-study/MetricTable";
import PersonaCard from "@/components/case-study/PersonaCard";
import NumberedList from "@/components/case-study/NumberedList";

const PROTOTYPE_URL =
  "https://www.figma.com/proto/xjdGmiB5tDzPc2xgq3jny2/Untitled--Copy-?node-id=4711-2367&t=sSg6hA4qB6mp6m4r-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=4711%3A2367";

export const metadata = {
  title: "Yoga Website Redesign | Rozhan Ahmadifar",
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
    <article>
      <CaseStudyHeroWithVisual
        client="Yoga With Dani"
        title="Yoga Website Redesign"
        tagline="Helps a small yoga studio turn browsing visitors into confident, first time bookings, through clearer class details and a guided booking flow."
        paragraph="Small studio websites often lose people right at the point of booking, buried details and unclear next steps turn interest into hesitation. Our research surfaced exactly where that hesitation started, and it shaped the entire redesign."
        heroVisualLabel="Composite: Home Page, Classes Page, Class Page, Booking, and Login screens"
        heroVisualSrc="/assets/yoga-hero-composite.jpg"
        quickFacts={[
          { label: "Role", value: "Product Designer" },
          { label: "Duration", value: "6 weeks" },
          { label: "Team", value: "4 Interaction Designers" },
          {
            label: "Tools",
            value: "Figma · Miro · Marvel · Google Forms · Canva",
          },
          {
            label: "Responsibilities",
            value:
              "UX Research · User Testing · Interaction Design · Information Architecture · Prototyping",
          },
        ]}
        ctaLabel="View prototype"
        ctaHref={PROTOTYPE_URL}
      />

      {/* Band 1: Result & Impact */}
      <section className="bg-bg">
        <div className="mx-auto max-w-[1200px] px-10 py-16 md:py-20">
          <h2 className="text-section-header">Result &amp; Impact</h2>
          <p className="mt-6">
            The final design was validated through structured usability
            testing in Maze with 8 participants, comparing task completion on
            the original site versus the final redesign.
          </p>
          <p className="mt-6">
            The final round of usability testing was conducted by me, and the
            findings directly shaped the last design changes. Two issues I
            identified were particularly critical. The confirmation screen
            appearing before payment left users uncertain their booking was
            complete, and low contrast between cards and background slowed
            down scanning. Resolving these pushed the final design from a
            good experience to a confident one.
          </p>
          <div className="mt-8">
            <MetricTable
              rows={[
                {
                  metric: "Avg. task completion",
                  original: "2 min 12 sec",
                  final: "1 min 34 sec (29% faster)",
                },
                {
                  metric: "Task clarity score",
                  original: "56/100 (Poor)",
                  final: "81/100 (Good)",
                },
                {
                  metric: "Misclicks / errors",
                  original: "High, trial and error",
                  final: "Low, confident paths",
                },
              ]}
            />
          </div>
          <p className="mt-6">
            These results show that understanding where users struggle and
            addressing those specific points, rather than redesigning
            everything at once, leads to a more usable and confident
            experience.
          </p>
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

          <h3 className="text-sub-header mt-10">
            User Research: How Users Navigated and Experienced the Website
          </h3>
          <p className="mt-6">
            To understand how users navigate and experience the existing
            website, we conducted 15 user interviews and observation
            sessions.
          </p>
          <p className="mt-6 italic">What we did:</p>
          <ul className="mt-4">
            <li>
              Interviewed users about their goals, challenges, and
              experiences
            </li>
            <li>Observed users navigating the site to identify pain points</li>
          </ul>
          <p className="mt-6 italic">Key findings:</p>
          <ul className="mt-4">
            <li>
              Users struggled to quickly find class details such as time,
              level, and duration
            </li>
            <li>
              Misclicks and trial-and-error interactions were common due to
              unclear navigation and menu structure
            </li>
            <li>
              Missing context, like instructor information, made it hard for
              users to choose a class confidently
            </li>
          </ul>
          <div className="mt-6">
            <Callout>
              These findings pointed to one clear priority: surface time,
              level, and price directly on the class card. That&apos;s what
              shaped this decision, rather than a separate schedule page.
            </Callout>
          </div>
          <div className="mt-4">
            <PullQuote>
              What surprised me was that users weren&apos;t missing features,
              they just couldn&apos;t find what was already there.
            </PullQuote>
          </div>

          <h3 className="text-sub-header mt-12">
            Heuristic Evaluation: Five Usability Issues Found on the Original
            Site
          </h3>
          <p className="mt-6">
            We evaluated the original Yoga With Deni website against
            established usability principles to identify areas for
            improvement.
          </p>
          <p className="mt-6 italic">Observations:</p>
          <div className="mt-4 grid items-start gap-8 sm:grid-cols-[1fr_auto]">
            <NumberedList
              items={[
                "The website did not display the Deni logo, reducing brand recognition.",
                "Navigation labels were unclear and not user-focused.",
                "The text content was disjointed and hard to follow.",
                "Long blocks of text made scanning difficult.",
                "There was no clear organization of information, making it hard for users to find what they needed.",
              ]}
            />
            <div className="w-full max-w-xs">
              <ImagePlaceholder
                label="Original site"
                src="/assets/yoga-heuristic-eval.jpg"
                aspect="aspect-[4/5]"
                objectPosition="top"
                caption="Original site, corresponding to the 5 observations listed"
              />
            </div>
          </div>
          <div className="mt-6">
            <Callout>
              This evaluation confirmed the problems weren&apos;t just
              visual, they were structural.{" "}
              <strong>
                The most critical issue was a complete lack of information
                hierarchy
              </strong>
              , which made every task harder than it needed to be.
            </Callout>
          </div>

          <h3 className="text-sub-header mt-12">
            Competitive Analysis: Four Yoga Websites Reviewed
          </h3>
          <p className="mt-6">
            We reviewed several yoga and wellness websites, focusing on
            navigation, visual design, content clarity, and key functional
            elements.
          </p>
          <div className="mt-6">
            <Callout>
              Compared to these platforms, the original site was missing what
              competitors handled well: visible class schedules, pricing
              transparency, and clear navigation. We closed those specific
              gaps, visible pricing, a simpler menu, calmer content, since
              clearer presentation does the same job with less effort for the
              user.
            </Callout>
          </div>
          <div className="mt-4">
            <PullQuote>
              What I found most valuable was that smaller competitors
              succeeded not by adding features, but by presenting less
              complexity more clearly.
            </PullQuote>
          </div>
          <div className="mt-6 max-w-2xl">
            <ImagePlaceholder
              label="Competitive analysis matrix: navigation, target audience, schedule, pricing structure, content quality, profile, and filter across Yoga With Dani, Yoga With Samin, Alomoves, and Yoga Laube"
              src="/assets/yoga-competitive-analysis.jpg"
              aspect="aspect-[860/453]"
              enlargeable
            />
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
          <p className="mt-6">
            Research pointed to a clear set of problems. To keep our
            decisions grounded, we built our work around one representative
            user.
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

          <h3 className="text-sub-header mt-12">
            Scenario &amp; User Flow: Following Lina From Discovery to
            Booking
          </h3>
          <div className="mt-6 max-w-2xl">
            <ImagePlaceholder
              label="Flowchart: Start, Home Page, Classes page, Select a class, Book this Class?, Log in or Sign up, Booking Steps 1 to 3, Confirmation Page, See All Classes?, End"
              src="/assets/yoga-user-flow.jpg"
              aspect="aspect-[16/9]"
              enlargeable
            />
          </div>
          <ol className="mt-6">
            <li>
              After a period of feeling tense and out of balance, Lina began
              looking for a gentle way to support her wellbeing and create
              more calm in her routine.
            </li>
            <li>
              While searching online, Lina found a yoga studio site with a
              calm atmosphere and clear structure, and navigated straight to
              the Classes section.
            </li>
            <li>
              Lina browsed the class overview, picked one that caught her
              interest, and felt confident enough to continue booking thanks
              to clear options like &ldquo;Book This Class.&rdquo;
            </li>
            <li>
              Lina completed booking, reviewed the summary, and paid. The
              confirmation reassured her, and she returned to browse future
              classes.
            </li>
          </ol>

          <h3 className="text-sub-header mt-12">
            Card Sorting: How Users Grouped Class and Account Content
          </h3>
          <p className="mt-6">
            We asked users to organize website content based on their own
            priorities and mental models. Two patterns came up consistently:
            class details including time, level, and price were always
            expected together in one place, and account content was always
            kept separate from browsing.
          </p>
          {/* TODO: insert real quote from Rozhan */}
          <div className="mt-6">
            <Callout>
              <strong>
                When participants independently make the same grouping
                decisions, it gives you real confidence to restructure the
                navigation around their mental model.
              </strong>{" "}
              These patterns directly informed our site map, bringing class
              information into a single section and separating account
              management from the main navigation.
            </Callout>
          </div>
          <div className="mt-6 max-w-2xl">
            <ImagePlaceholder
              label="Card sorting collage"
              src="/assets/yoga-card-sorting.jpg"
              aspect="aspect-[1800/528]"
              enlargeable
            />
          </div>

          <h3 className="text-sub-header mt-12">
            Site Map: Built Directly From User Mental Models
          </h3>
          <p className="mt-6">
            The site map was built directly from card sorting patterns,
            prioritising the content users considered most important.
          </p>
          <div className="mt-6 max-w-2xl">
            <ImagePlaceholder
              label="Site map diagram"
              src="/assets/yoga-sitemap.jpg"
              aspect="aspect-[1800/1012]"
              enlargeable
            />
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

          <h3 className="text-sub-header mt-10">
            Design Ideation and Sketching
          </h3>
          <p className="mt-6">
            Before moving into Figma, we sketched multiple layout directions
            to explore different ways of organizing content and navigation.
            This helped the team align on a clear direction early and avoid
            making structural decisions too late in the process.
          </p>
          <div className="mt-6 max-w-xs">
            <ImagePlaceholder
              label="Low-fidelity sketches"
              caption="Early layout sketches exploring content structure"
            />
          </div>

          <h3 className="text-sub-header mt-12">
            Prototype 1: Surfacing Class Details and Fixing Navigation
          </h3>
          <p className="mt-6">
            Prototype 1 was evaluated through usability testing with 4
            participants. Users were asked to locate class details and
            attempt a booking task while we observed navigation behavior,
            scanning patterns, and points of confusion.
          </p>
          <p className="mt-6 italic">Key Refinements from Usability Testing:</p>
          <div className="mt-4 grid gap-8 lg:grid-cols-[1fr_1.4fr]">
            <NumberedList
              items={[
                "Price and Schedule sections overlapped in function, confusing users about where to look first.",
                "Small font size made content difficult to read and scan, slowing users down when looking for key information.",
                "The Classes page had too much content competing for attention, burying essential details like class name, time, level, and price.",
              ]}
            />
            <div className="grid grid-cols-2 gap-6">
              <ImagePlaceholder
                label="V1 Home Page"
                src="/assets/yoga-v1-home.jpg"
                aspect="aspect-[3/4]"
                objectPosition="top"
              />
              <ImagePlaceholder
                label="V1 Classes Page"
                src="/assets/yoga-v1-classes.jpg"
                aspect="aspect-[3/4]"
                objectPosition="top"
              />
            </div>
          </div>

          <h3 className="text-sub-header mt-12">
            Prototype 2: Resolving Login, Contrast and Booking Issues
          </h3>
          <p className="mt-6">
            The updated prototype was tested with 7 participants to evaluate
            whether structural and visual refinements improved navigation
            clarity and reduced friction during booking tasks.
          </p>
          <p className="mt-6 italic">Key Refinements from Usability Testing:</p>
          <div className="mt-4 grid gap-8 lg:grid-cols-[1fr_1.8fr]">
            <NumberedList
              items={[
                "Showing both a Login button and a profile icon confused users about which one to use.",
                "Having one shared More Info button for all events made it unclear which event a user was selecting.",
                "Users had to navigate separate sections to understand what each event involved, since the home page only showed the event name.",
                "Low contrast between the background, cards, and text made content hard to distinguish and slowed down scanning.",
                "Small body text and low-priority bullet points buried key information, making it harder for users to find what they needed.",
                "The confirmation screen appearing before payment made users uncertain whether their booking was actually complete.",
              ]}
            />
            <div className="grid grid-cols-2 gap-6">
              <ImagePlaceholder
                label="V2 Home Page"
                src="/assets/yoga-v2-home.jpg"
                aspect="aspect-[3/4]"
                objectPosition="top"
              />
              <ImagePlaceholder
                label="V2 Classes Page"
                src="/assets/yoga-v2-classes.jpg"
                aspect="aspect-[3/4]"
                objectPosition="top"
              />
              <ImagePlaceholder
                label="V2 Class Page"
                src="/assets/yoga-v2-class.jpg"
                aspect="aspect-[3/4]"
                objectPosition="top"
              />
              <ImagePlaceholder
                label="V2 Booking Page"
                src="/assets/yoga-v2-booking.jpg"
                aspect="aspect-[3/4]"
                objectPosition="top"
              />
            </div>
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
              I thought a cleaner navigation would feel better to users
              right away. But in testing, some people slowed down because
              the new layout felt different from what they were used to.
              That made me realise that a better design still needs to feel
              familiar enough for people to trust it.
            </li>
            <li>
              Some problems I thought were about navigation turned out to be
              about how the text looked. Things like font size and spacing
              made a bigger difference to how fast people completed tasks
              than I expected. I learned to look at how something reads
              before trying to fix how it is organised.
            </li>
            <li>
              Several design choices that made complete sense to me confused
              users during testing. That was a good reminder to stay open
              and let what users do guide the decisions, not just what
              feels right when you are designing.
            </li>
          </ul>
          <p className="mt-6">
            Overall, this project taught me that good design is less about
            having the right answers at the start and more about staying
            open when testing shows you something unexpected.
          </p>

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
              It would be interesting to add a short{" "}
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
              how their behaviour changes over time, whether they get
              faster, more confident, or start to hit new friction points,
              would point to the next set of things worth improving.
            </li>
          </ul>
        </div>
      </section>
    </article>
  );
}
