import CaseStudyHeroWithVisual from "@/components/case-study/CaseStudyHeroWithVisual";
import Callout from "@/components/case-study/Callout";
import PullQuote from "@/components/case-study/PullQuote";
import ImagePlaceholder from "@/components/case-study/ImagePlaceholder";
import ResearchRow from "@/components/case-study/ResearchRow";
import CaseStudyNav from "@/components/case-study/CaseStudyNav";

export const metadata = {
  title: "Ambient Energy Device | Rozhan Ahmadifar",
  description:
    "Cand-EL is an ambient, candle-shaped device that reflects household electricity use through calm light feedback, helping users build energy awareness without guilt.",
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

export default function AmbientEnergyDevice() {
  return (
    <>
    <article>
      <CaseStudyHeroWithVisual
        client="Cand-EL"
        title="Ambient Energy Device"
        tagline="A candle-shaped device that makes household electricity use visible, so people can understand their consumption at any moment, without apps, numbers, or guilt."
        paragraph="Most energy tools show data on screens and expect people to interpret it. Our research found that this creates stress and guilt instead of awareness. Cand-EL takes the opposite approach: a familiar physical object in the home, glowing gently with the rhythm of consumption, asking for attention only when you choose to give it."
        heroVisualLabel="Photograph: Cand-EL, a lit candle-shaped device, staged on a shelf at home"
        heroVisualSrc="/assets/candel-hero.png"
        quickFacts={[
          { label: "Role", value: "Product Designer" },
          { label: "Duration", value: "10 weeks" },
          { label: "Team", value: "5 designers" },
          {
            label: "Tools",
            value: "Figma · Arduino · Sketch · Miro · Paper Prototyping",
          },
          {
            label: "Responsibilities",
            value:
              "UX Research · User Interviews · Design Ideation · Usability Testing · Interaction Design",
          },
        ]}
      />

      {/* Band 1: Result & Impact */}
      <section className="bg-bg">
        <div className="mx-auto max-w-[1200px] px-10 py-16 md:py-20">
          <h2 className="text-section-header">Result &amp; Impact</h2>
          <div className="mt-6">
            <p>
              The final design took shape over three iterations, each
              refined by user feedback: from multi-color signals to a
              single orange flame with a slow, breathing light. The last
              round was a one-day usability test in participants&apos;
              homes, with two participants per household who had used
              earlier prototypes. The outcomes below are what that testing
              showed. The final prototype was a physical, candle-sized
              object with the flame rendered in light. It was not connected
              to live electricity data; typical usage patterns were
              manually recreated to focus on perception and emotional
              response rather than technical accuracy.
            </p>
            <div className="mt-8 max-w-[1120px]">
              <div className="grid grid-cols-3 gap-5">
                <ImagePlaceholder
                  label="Lifestyle photo: working at a desk"
                  src="/assets/candel-lifestyle-desk.jpg"
                  aspect="aspect-[3/4]"
                />
                <ImagePlaceholder
                  label="Lifestyle photo: cooking in the kitchen"
                  src="/assets/candel-lifestyle-kitchen.jpg"
                  aspect="aspect-[3/4]"
                />
                <ImagePlaceholder
                  label="Lifestyle photo: the candle on a side table"
                  src="/assets/candel-lifestyle-table.jpg"
                  aspect="aspect-[3/4]"
                />
              </div>
              <p className="text-caption mt-3 text-center">
                It settles quietly into daily life, calm and easy to live
                with.
              </p>
            </div>
            <p className="text-meta-label mt-10">Key design decisions</p>
            <ul className="mt-4">
              <li>
                Replaced color-based signals with a single orange flame and
                a slow, breathing light animation
              </li>
              <li>
                Made brightness and gentle movement of the glow the only
                feedback, rising and falling with consumption
              </li>
              <li>
                Kept changes slow and steady, encouraging reflection rather
                than immediate reaction
              </li>
              <li>
                Chose a physical, always-visible object instead of an app,
                so anyone in the household can see and discuss usage
              </li>
            </ul>
            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              <div className="rounded-[8px] border border-hairline bg-teal-pale/40 p-6">
                <p className="text-eyebrow">Clarity</p>
                <p className="!text-ink mt-2">
                  Understanding of the light feedback improved consistently
                  across all three iterations.
                </p>
              </div>
              <div className="rounded-[8px] border border-hairline bg-teal-pale/40 p-6">
                <p className="text-eyebrow">Calm</p>
                <p className="!text-ink mt-2">
                  Participants found the candle calm, subtle, and easy to
                  understand, responding positively to its non-judgmental
                  nature.
                </p>
              </div>
              <div className="rounded-[8px] border border-hairline bg-teal-pale/40 p-6">
                <p className="text-eyebrow">Mindfulness</p>
                <p className="!text-ink mt-2">
                  Some participants reported feeling more mindful and less
                  stressed when thinking about their electricity use.
                </p>
              </div>
            </div>
            <p className="mt-6">
              The test also surfaced useful criticism: a few participants
              noted that occasional light changes were subtle enough to
              miss, and one felt the candle was slightly decorative at
              times, though still a gentle reminder of energy use. Another
              suggested raising brightness during peak hours, a change we
              would test in the next iteration.
            </p>
          </div>
        </div>
      </section>

      {/* Band 2: The Problem */}
      <section className="bg-teal-pale">
        <div className="mx-auto max-w-[1200px] px-10 py-16 md:py-20">
          <h2 className="text-section-header">The Problem</h2>
          <p className="mt-6">
            User research uncovered why existing energy tools fail people.
            The most critical:
          </p>
          <ul className="mt-4">
            <li>
              Technical units like kWh made little sense to most users,
              making consumption hard to grasp
            </li>
            <li>
              Cost-focused feedback produced guilt and stress instead of
              motivation
            </li>
            <li>
              Screen-based tools demanded active attention, so checking them
              never became part of daily routines
            </li>
            <li>
              In shared households, responsibility for monitoring was
              unclear and uneven
            </li>
            <li>
              Users had no way to reflect on their habits without feeling
              judged
            </li>
          </ul>
          <div className="mt-8">
            <PullQuote>
              The real challenge was not making information visible. It was
              making it feel relevant and safe enough to act on.
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
            We started with desk research on existing energy tools, ran
            contextual interviews and observations with 8 participants, and
            reviewed 6 energy monitoring products in a competitive
            analysis. The findings fit together: the data formats were
            failing people, and what people wanted instead was calm,
            ambient feedback.
          </p>

          <div className="mt-6">
            <Callout>
              The direction came straight from the interviews: people
              wanted feedback that fits into daily life without demanding
              attention. That ruled out screens, apps, and alerts before a
              single sketch was drawn.
            </Callout>
          </div>
          <div className="mt-4">
            <PullQuote>
              Every tool we reviewed was competing for attention. Our
              research showed people wanted the opposite: something present
              in the room that never demands a thing. That is what
              convinced me the answer was not another screen.
            </PullQuote>
          </div>

          <div className="mt-8 border-t border-hairline">
            <ResearchRow
              name="User Research"
              outcome="8 sessions showed a consistent pattern: people wanted calm, ambient feedback, not alerts, screens, or comparisons."
            >
              <p>
                Desk research showed that most existing tools present
                electricity in technical units like kWh or cost, formats
                many users find hard to understand and emotionally
                uncomfortable, with cost-focused feedback often producing
                guilt instead of motivation. To understand what people
                actually wanted, we ran contextual interviews and
                observations with 8 participants, watching how energy
                information enters daily life.
              </p>
              <p className="mt-4 italic">Key findings:</p>
              <ul className="mt-2">
                <li>
                  Most participants showed little interest in comparing
                  their consumption with other households
                </li>
                <li>
                  Appliance-level breakdowns were not wanted; people already
                  had a general sense of which devices used the most power
                </li>
                <li>
                  Nearly all preferred subtle, ambient feedback such as
                  light or warmth over alerts and notifications
                </li>
                <li>
                  Participants consistently favored information that fits
                  into daily life without requiring active attention
                </li>
              </ul>
              <p className="mt-4">
                The pattern was consistent across sessions: calm, ambient
                feedback over anything that demanded attention or felt
                judgmental. It set the direction for everything that
                followed.
              </p>
            </ResearchRow>
            <ResearchRow
              name="Competitive Analysis"
              outcome="6 energy tools reviewed, over 80% relying on kWh or cost metrics on screens. Almost none offered ambient or emotionally meaningful feedback."
            >
              <p>
                We reviewed six electricity monitoring tools, Efergy, Smart
                Energy GB, Sense, Emporia Vue, Smappee, and Loop, to
                understand how they present information and engage users.
                Most rely on screen-based interfaces like mobile apps or
                dashboards, with over 80% using kWh or cost-based metrics,
                the exact formats our research showed people struggle to
                connect with. These systems typically require active
                involvement: logging in, opening an app, interpreting
                charts.
              </p>
              <p className="mt-4">
                Few offer ambient or emotionally meaningful feedback.
                Sensory approaches were rare, and many tools lean heavily on
                financial tracking, which users often perceived as
                impersonal or guilt-inducing.
              </p>
              <p className="mt-4">
                This highlighted a clear opportunity: an emotionally
                intelligent, physical interface that passively reflects
                electricity use through intuitive, sensory feedback,
                supporting everyday awareness without demanding attention or
                creating stress.
              </p>
              <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
                <ImagePlaceholder
                  label="Efergy monitor"
                  src="/assets/candel-competitor-efergy-43.jpg"
                  aspect="aspect-[4/3]"
                  enlargeable
                  caption="Efergy monitor. Source: efergy.com"
                />
                <ImagePlaceholder
                  label="Smart Energy GB display"
                  src="/assets/candel-competitor-smartenergygb-43.jpg"
                  aspect="aspect-[4/3]"
                  enlargeable
                  caption="Smart Energy GB display. Source: smartenergygb.org"
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
            We brought the research together to define what the design
            actually had to solve. An affinity diagram organized the
            findings into four themes, and from those we wrote How Might We
            questions and problem statements to guide the design without
            jumping straight to solutions.
          </p>

          <div className="mt-6">
            <Callout onTintedBand>
              The whole brief fit in one line: make electricity feel
              personal and calm, in a home everyone shares.
            </Callout>
          </div>
          <div className="mt-4">
            <PullQuote>
              The strongest finding was emotional, not technical: guilt
              makes people look away. So before anything else, whatever we
              designed had to feel safe to look at.
            </PullQuote>
          </div>

          <div className="mt-8 border-t border-hairline">
            <ResearchRow
              name="Affinity Diagram"
              outcome="Four themes came out of the analysis. The strongest signal: guilt and stress were the main barriers to engagement, and the design had to remove them."
            >
              <p>
                After bringing together insights from interviews and
                observations, we organized the research data into an
                affinity diagram to identify patterns and recurring themes.
                Key quotes, behaviors, and reactions were grouped by
                similarity and emotional tone. In this process, I focused
                particularly on mapping emotional responses, and I noticed
                how strongly guilt and stress appeared as barriers to
                engagement. That observation shaped the problem statements
                that followed.
              </p>
              <p className="mt-4 italic">This process revealed four main themes:</p>
              <ul className="mt-2">
                <li>
                  <strong>Perception of Electricity:</strong> users often
                  described electricity as invisible and difficult to
                  grasp, making it hard to relate daily actions to actual
                  consumption
                </li>
                <li>
                  <strong>Emotional Response to Monitoring:</strong> many
                  users experienced stress, guilt, or disengagement when
                  monitoring tools felt too direct, judgmental, or focused
                  on cost
                </li>
                <li>
                  <strong>Shared Responsibility:</strong> in multi-person
                  households, electricity use was seen as a collective
                  outcome, yet responsibility for monitoring and reflection
                  was often unclear or uneven
                </li>
                <li>
                  <strong>Data Relevance and Preference:</strong> users
                  preferred high-level, contextual feedback that fit
                  naturally into their routines, rather than detailed,
                  technical, or comparative data
                </li>
              </ul>
              <div className="mt-6">
                <ImagePlaceholder
                  label="Affinity diagram sticky-note grid"
                  src="/assets/candel-affinity-diagram.jpg"
                  aspect="aspect-[1347/847]"
                  enlargeable
                  caption="Affinity diagram, four themes from the research."
                />
              </div>
            </ResearchRow>
            <ResearchRow
              name="How Might We & Problem Statements"
              outcome="The themes became questions: how might we make electricity visible in daily routines, personal, non-judgmental, and shared?"
            >
              <p>
                Based on our research themes, we created How Might We
                questions to explore design opportunities without jumping
                straight to solutions. These questions focused on making
                electricity consumption tangible, emotionally neutral, and
                naturally part of daily routines.
              </p>
              <p className="mt-4 italic">We explored questions such as:</p>
              <ul className="mt-2">
                <li>
                  How might we make electricity usage visible in everyday
                  routines?
                </li>
                <li>
                  How might we provide feedback that feels personal and
                  non-judgmental?
                </li>
                <li>
                  How might we support shared households in distributing
                  responsibility?
                </li>
              </ul>
              <p className="mt-4">
                From these questions, we defined clear problem statements to
                guide our design:
              </p>
              <ul className="mt-2">
                <li>
                  Users struggle to understand electricity usage because it
                  is intangible and lacks direct feedback
                </li>
                <li>
                  Current monitoring tools are too technical or focus on
                  costs in ways that make users feel stressed or guilty,
                  reducing long-term engagement
                </li>
                <li>
                  In shared households, electricity use is a collective
                  outcome, but it is often unclear who is responsible for
                  tracking and managing it
                </li>
                <li>
                  Users want feedback tied to their own routines, rather
                  than abstract numbers or comparisons with others
                </li>
              </ul>
              <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
                <ImagePlaceholder
                  label="How Might We board, 1 of 2"
                  src="/assets/candel-hmw-board-1.jpg"
                  aspect="aspect-[3/2]"
                  enlargeable
                  caption="How Might We board, 1 of 2"
                />
                <ImagePlaceholder
                  label="How Might We board, 2 of 2"
                  src="/assets/candel-hmw-board-2.jpg"
                  aspect="aspect-[3/2]"
                  enlargeable
                  caption="How Might We board, 2 of 2"
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
            With the problem statements in place, we explored how a
            physical object could carry the feedback. The concept became a
            candle, refined through three iterations, with the final
            version tested in participants&apos; homes.
          </p>

          <div className="mt-6">
            <Callout>
              The breakthrough of this phase was subtraction. Colors were
              meant to add clarity; testing showed they added judgment.
              Removing them entirely gave the candle its final form: one
              flame, one meaning.
            </Callout>
          </div>
          <div className="mt-4">
            <PullQuote>
              I assumed people wanted more information. Testing showed the
              opposite: the simpler the candle became, the better people
              understood it.
            </PullQuote>
          </div>

          <div className="mt-8 border-t border-hairline">
            <ResearchRow
              name="Design Ideation & Storyboard"
              outcome="We chose a candle: historically tied to light, warmth, and calm, and a natural fit for showing energy gently."
            >
              <p>
                We wanted to create something calm and subtle, an object in
                the home that quietly reflects electricity use without
                demanding attention. Instead of relying on screens,
                numbers, or alerts, we explored how a familiar physical
                object could communicate energy use in a more emotional and
                understandable way.
              </p>
              <p className="mt-6">
                This led us to the idea of a candle. Candles are
                historically associated with light, warmth, and calm,
                making them a natural choice for representing electricity
                use gently. To make the feedback meaningful, we designed
                the candle to show how current use compares to the
                household&apos;s own usual patterns, so it reflects
                personal habits rather than just numbers.
              </p>
              <p className="mt-6">
                To test this concept, we built a simple candle-shaped
                prototype with an LED inside. The LED moved up and down to
                indicate changes in electricity use, while its color and
                brightness remained constant. This first prototype helped
                us explore whether a quiet, ambient object could make
                electricity easier to understand without feeling
                overwhelming.
              </p>
              <div className="mt-6">
                <ImagePlaceholder
                  label="Storyboard sketch"
                  src="/assets/candel-design-ideation-storyboard.jpg"
                  aspect="aspect-[2/1]"
                  enlargeable
                  caption="Storyboard, the candle concept in a household."
                />
              </div>
            </ResearchRow>
            <ResearchRow
              name="Prototype 1, Baseline and Color Feedback"
              outcome="Early testing found the first flaw: people could not remember where the light had been. The fix became a core decision: a baseline set to each household's own average."
            >
              <p>
                During early user testing with 4 participants, we noticed
                people had trouble remembering the previous position of
                the light, which made changes in consumption hard to
                interpret. Based on what I had observed in the research
                about comparisons, I proposed adding a baseline set to
                each household&apos;s own average rather than any fixed
                standard, and the team aligned on it. This gave users a
                stable reference: consumption on a Monday at noon is
                compared to the average of the previous four Mondays at
                noon, and the baseline reduced the mental effort of
                remembering where the light had been before.
              </p>
              <p className="mt-6">
                To make the feedback even clearer, we introduced color
                changes: warmer, brighter tones as usage rose above the
                average, cooler, softer blues as it fell below. Together,
                the baseline and dynamic color made the candle easier to
                read while keeping the experience calm, subtle, and
                non-intrusive.
              </p>
              <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
                <ImagePlaceholder
                  label="Above the average: warm light"
                  src="/assets/candel-proto1-above-average.jpg"
                  aspect="aspect-[3/4]"
                  enlargeable
                  caption="Above the average: the light shifts warmer as consumption rises"
                />
                <ImagePlaceholder
                  label="Below the average: cool light"
                  src="/assets/candel-proto1-below-average.jpg"
                  aspect="aspect-[3/4]"
                  enlargeable
                  caption="Below the average: the light cools as consumption falls"
                />
              </div>
              <div className="mt-6">
                <ImagePlaceholder
                  label="Scenario sketch: a day with the first prototype"
                  src="/assets/candel-proto1-scenario-sketch.jpg"
                  aspect="aspect-[4/3]"
                  enlargeable
                  caption="A day with the first prototype, consumption rising and falling around the baseline"
                />
              </div>
            </ResearchRow>
            <ResearchRow
              name="Prototype 2, A Single Orange Flame"
              outcome="We removed the entire color system. One orange flame, brighter or softer with consumption: calmer, clearer, and closer to a real candle."
            >
              <p>
                Testing the first prototype revealed the cost of color:
                users associated red, green, and white with temperature
                control or warnings rather than electricity use. Red felt
                harsh and could make people feel they were doing something
                wrong even during normal activities like cooking. White was
                hard to interpret, and subtle differences between colors
                were often misread.
              </p>
              <p className="mt-6">
                To address this, the candle was simplified to a single
                orange color, inspired by the natural color of a candle
                flame. The baseline was changed to orange to match.
                Changes in electricity use are now represented entirely
                through brightness and intensity: the light grows brighter
                as consumption rises and softer as usage falls.
              </p>
              <p className="mt-6">
                This creates a calm, gentle presence in the home that
                communicates electricity use clearly without distraction.
                It feels alive and informative without demanding attention
                or causing stress, exactly what users had asked for from
                the beginning.
              </p>
              <div className="mt-6">
                <ImagePlaceholder
                  label="The three iterations, from color signals to a single flame"
                  src="/assets/candel-prototype2-iterations.jpg"
                  aspect="aspect-[4/3]"
                  enlargeable
                  caption="The three iterations, from color signals to a single flame."
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
            What I Learned: How User Feedback Simplified the Design
          </h3>
          <p className="mt-6">
            This project taught me that users do not always want more data,
            they want meaning. Research quickly challenged that assumption,
            and it shaped every design decision that followed.
          </p>
          <p className="mt-6">
            The most valuable lesson came through iteration. During
            prototype 1, we used red, green, and white to signal changes in
            electricity use. Users consistently misread the colors,
            associating red with warnings and feeling stressed even during
            completely normal activities like cooking. That single insight
            completely changed our direction. We simplified the entire
            color system to a single orange color, inspired by the natural
            warmth of a candle, and the feedback immediately felt calmer
            and easier to understand.
          </p>
          <p className="mt-6">
            That moment taught me that good design is not about adding
            more, it is about removing what gets in the way. As an
            interaction designer, this project reinforced that when
            interactions feel natural rather than demanding, users are more
            open to reflection. Simplicity is not a compromise, it is the
            goal.
          </p>

          <h3 className="text-sub-header mt-12">Future Step</h3>
          <p className="mt-6">
            This project covered the core concept of an ambient,
            candle-shaped device. There are a few natural next steps I
            would want to explore to make it feel more complete.
          </p>
          <ul className="mt-4">
            <li>
              Connect Cand-EL to real household electricity data, allowing
              users to see accurate, real-time feedback and better
              understand their own energy use.
            </li>
            <li>
              Introduce optional digital features, such as a mobile
              dashboard or historical trend view, enabling deeper insight
              while keeping the main ambient experience calm and
              non-judgmental.
            </li>
            <li>
              Provide personalization options, like adjusting brightness or
              color sensitivity, to better align with individual routines
              and home environments.
            </li>
            <li>
              Conduct longer-term in-home studies to observe reflection,
              behavior changes, and user engagement over time.
            </li>
            <li>
              Explore integration with other smart home devices for an
              overall view of energy consumption while maintaining
              Cand-EL&apos;s subtle, gentle presence.
            </li>
          </ul>
        </div>
      </section>
    </article>
    <CaseStudyNav currentSlug="ambient-energy-device" />
    </>
  );
}
