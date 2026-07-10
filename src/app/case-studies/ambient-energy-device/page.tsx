import CaseStudyHero from "@/components/case-study/CaseStudyHero";
import MetadataSidebar from "@/components/case-study/MetadataSidebar";
import Callout from "@/components/case-study/Callout";
import ImagePlaceholder from "@/components/case-study/ImagePlaceholder";
import ProcessDiagram from "@/components/case-study/ProcessDiagram";

export const metadata = {
  title: "Ambient Energy Device | Rozhan Ahmadifar",
};

export default function AmbientEnergyDevice() {
  return (
    <article>
      <CaseStudyHero
        title="Ambient Energy Device"
        client="Cand-EL"
        byline="Rozhan Ahmadifar, Product Designer"
      />

      <section className="mx-auto max-w-[1200px] px-10 py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="text-section-header">Project Overview</h2>
            <p className="mt-6">
              Cand-EL is an ambient, candle-shaped display designed to make
              household electricity use visible in a calm and meaningful
              way. This project explored how physical, sensory feedback
              could help people reflect on their energy use without
              feeling stressed or overwhelmed.
            </p>

            <h2 className="text-section-header mt-16">
              Design Goals: Making Energy Use Calm and Visible
            </h2>
            <ul className="mt-4">
              <li>
                Make electricity consumption tangible and emotionally
                meaningful
              </li>
              <li>
                Support awareness of energy use in a non-judgmental,
                pressure-free way
              </li>
              <li>
                Provide gentle, ambient feedback that naturally integrates
                into daily routines
              </li>
              <li>
                Encourage conversation about electricity use in
                multi-person households
              </li>
              <li>Enable users to reflect on and consider their energy habits</li>
            </ul>
          </div>
          <aside>
            <MetadataSidebar
              items={[
                { label: "Product", value: "Ambient Interaction Design" },
                {
                  label: "Responsibilities",
                  value:
                    "UX Research, User Interviews, Design Ideation, Usability Testing, Interaction Design",
                },
                { label: "Type", value: "University Project" },
                { label: "Duration", value: "10 weeks" },
                {
                  label: "Tools",
                  value: "Figma, Arduino, Sketch, Miro, Paper Prototyping",
                },
                { label: "Team", value: "5 Interaction Designers" },
              ]}
            />
          </aside>
        </div>

        <h2 className="text-section-header mt-16">
          Design Challenges: Why Electricity Consumption Is Hard to
          Understand
        </h2>
        <ul className="mt-4">
          <li>
            Most tools use technical units like kWh that users find hard to
            understand
          </li>
          <li>
            Cost-focused feedback caused guilt and stress rather than
            motivation
          </li>
          <li>
            Screen-based tools require active attention and don&apos;t fit
            naturally into daily routines
          </li>
          <li>
            In shared households, responsibility for monitoring was unclear
            and uneven
          </li>
          <li>
            Users had no way to reflect on energy habits without feeling
            judged
          </li>
          <li>
            The real design challenge wasn&apos;t making information
            visible, it was making it feel relevant and safe enough to act
            on
          </li>
        </ul>

        <h2 className="text-section-header mt-16">
          Final Prototype: A Candle-Shaped Device Refined Through Three
          Iterations
        </h2>
        <p className="mt-6">
          The final design went through three iterations shaped by user
          feedback. Each round of testing refined how the candle
          communicates electricity use, moving from color-based signals to
          a single orange flame with breathing light animation that feels
          calm, natural, and easy to understand.
        </p>
        <h3 className="text-sub-header mt-10">Key Design Decisions</h3>
        <ul className="mt-4">
          <li>
            Replaced color-based signals with a slow, breathing-style light
            animation
          </li>
          <li>
            Brightness and vertical movement of the glow gently increased
            or decreased to reflect changes in consumption
          </li>
          <li>
            Interaction felt more organic and closer to the behavior of a
            real candle
          </li>
          <li>
            Feedback remained calm and non-judgmental without relying on
            distinct colors
          </li>
          <li>
            Slow and steady changes encouraged reflection rather than
            immediate reaction
          </li>
          <li>
            Chose a physical, always-visible object instead of an app, so
            anyone in the household could see and discuss usage
          </li>
        </ul>
        <p className="mt-6">
          A video prototype demonstrating this interaction is available on
          request.
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          <ImagePlaceholder label="Lifestyle photo: on a desk while working" />
          <div>
            <ImagePlaceholder label="Lifestyle photo: on the counter while cooking" />
            <p className="text-caption mt-2">
              It settles quietly into daily life, calm and easy to live
              with.
            </p>
          </div>
          <ImagePlaceholder label="Lifestyle photo: staged evening shot" />
        </div>

        <h2 className="text-section-header mt-16">
          Usability Test &amp; Key Findings: Tested in Real Homes With Real
          Routines
        </h2>
        <p className="mt-6">
          We conducted a one-day usability test in participants&apos;
          homes, with two participants per household who had used earlier
          prototypes. The most consistent finding: participants responded
          positively to the candle&apos;s calm, non-judgmental nature, with
          understanding improving clearly across iterations.
        </p>
        <p className="mt-6">
          Since the prototype wasn&apos;t connected to real-time
          electricity data, we manually recreated typical usage patterns to
          focus on perception and emotional response rather than technical
          accuracy.
        </p>
        <p className="mt-6 italic">Key insights:</p>
        <ul className="mt-4">
          <li>
            Participants generally found the candle calm, subtle, and easy
            to understand.
          </li>
          <li>
            Compared to earlier prototypes, understanding improved
            consistently across iterations, showing a clear increase in
            clarity while remaining realistic.
          </li>
          <li>
            Some participants reported feeling more mindful and less
            stressed when thinking about electricity use, though a few
            noted that occasional light changes were subtle enough to
            miss.
          </li>
          <li>
            One participant noted the candle felt &ldquo;slightly
            decorative at times&rdquo; but still acted as a gentle reminder
            of energy use. Another suggested adjusting brightness during
            peak hours to make feedback more noticeable.
          </li>
        </ul>

        <h2 className="text-section-header mt-16">Design Process</h2>
        <div className="mt-8">
          <ProcessDiagram
            phases={[
              {
                name: "Discover",
                items: [
                  "User research",
                  "Interviews & Observations",
                  "Competitive Analysis",
                ],
              },
              {
                name: "Define",
                items: [
                  "Affinity diagrams",
                  "Problem & Solutions statements",
                ],
              },
              {
                name: "Develop",
                items: [
                  "Ideation",
                  "Sketches",
                  "Prototyping",
                  "User Testing",
                  "Iterations",
                ],
              },
              {
                name: "Deliver",
                items: ["Final prototype", "Visual Design"],
              },
            ]}
          />
        </div>

        <h2 className="text-section-header mt-16">Discover</h2>
        <p className="mt-6">
          The project started with a key challenge: electricity is
          invisible and abstract, which makes it difficult for people to
          understand or reflect on their everyday consumption.
        </p>
        <p className="mt-6">
          Through desk research, we found that most existing tools present
          electricity data using technical units like kWh or cost-based
          metrics. Many users found these formats hard to understand and
          emotionally uncomfortable. Rather than increasing awareness,
          cost-focused feedback often led to feelings of guilt instead of
          motivation.
        </p>
        <p className="mt-6">
          From this research, we identified shared households with
          multiple residents as our primary user group, where electricity
          use is a shared responsibility, but monitoring tools are usually
          individual and screen-based. This gap led us to explore a more
          collective, ambient, and emotionally supportive way of making
          consumption visible.
        </p>

        <h3 className="text-sub-header mt-12">Interviews &amp; Observations</h3>
        <p className="mt-6">
          Through contextual interviews and observations (n=8), we surfaced
          a few consistent patterns in how people wanted to engage with
          their electricity use.
        </p>
        <ul className="mt-4">
          <li>
            Most participants showed little interest in comparing their
            consumption with others.
          </li>
          <li>
            Appliance-level breakdowns were not a strong interest, as users
            already had a general sense of which appliances used more
            power.
          </li>
          <li>
            Nearly all participants preferred subtle feedback (light,
            warmth) over alerts or notifications.
          </li>
          <li>
            Participants consistently favoured information that fits into
            daily life without requiring active attention.
          </li>
        </ul>
        <div className="mt-6">
          <Callout>
            One pattern I noticed consistently was that users preferred
            calm, ambient feedback over anything that demanded attention or
            felt judgmental. This directly shaped the direction of the
            design.
          </Callout>
        </div>

        <h3 className="text-sub-header mt-12">
          Competitive Analysis: Six Energy Monitoring Tools Reviewed
        </h3>
        <p className="mt-6">
          We reviewed 6 existing electricity monitoring tools, Efergy,
          Smart Energy GB, Sense, Emporia Vue, Smappee, and Loop, to
          understand how they present and engage users. Most rely on
          screen-based interfaces, like mobile apps or dashboards, with
          over 80% using kWh or cost-based metrics. These systems typically
          require active user involvement, such as logging in and
          interpreting charts.
        </p>
        <p className="mt-6">
          We found that few solutions provide ambient or emotionally
          meaningful feedback. Ambient or sensory approaches were rare, and
          many tools focused heavily on financial tracking, which users
          often perceived as impersonal or guilt-inducing.
        </p>
        <p className="mt-6">
          This highlighted a clear opportunity: to design an emotionally
          intelligent, physical interface that passively reflects
          electricity use through intuitive, sensory feedback, supporting
          everyday awareness without demanding attention or creating
          stress.
        </p>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 max-w-xl">
          <ImagePlaceholder label="Competitor device photo, 1 of 2" />
          <ImagePlaceholder label="Competitor device photo, 2 of 2" />
        </div>

        <h2 className="text-section-header mt-16">Define</h2>
        <p className="mt-6">
          With research complete, we brought our findings together to
          identify patterns and define the challenges that would shape our
          design direction.
        </p>

        <h3 className="text-sub-header mt-12">
          Affinity Diagram: Patterns That Shaped Our Design Direction
        </h3>
        <p className="mt-6">
          After bringing together insights from interviews and
          observations, we organized the research data into an affinity
          diagram to identify patterns and recurring themes. Key quotes,
          behaviors, and reactions were grouped based on similarity and
          emotional tone, helping us move from individual data points to a
          clearer understanding of user needs and challenges. In this
          process, I focused particularly on mapping emotional responses,
          and I noticed how strongly guilt and stress appeared as barriers
          to engagement.
        </p>
        <ul className="mt-4">
          <li>
            <strong>Perception of Electricity:</strong> Users often
            described electricity as invisible and difficult to grasp,
            making it hard to relate daily actions to actual consumption.
          </li>
          <li>
            <strong>Emotional Response to Monitoring:</strong> Many users
            experienced stress, guilt, or disengagement when monitoring
            tools felt too direct, judgmental, or focused on cost.
          </li>
          <li>
            <strong>Shared Responsibility:</strong> In multi-person
            households, electricity use was seen as a collective outcome,
            yet responsibility for monitoring and reflection was often
            unclear or uneven.
          </li>
          <li>
            <strong>Data Relevance and Preference:</strong> Users preferred
            high-level, contextual feedback that fit naturally into their
            routines, rather than detailed, technical, or numerical data.
          </li>
        </ul>
        <div className="mt-6 max-w-md">
          <ImagePlaceholder
            label="Affinity diagram sticky-note grid"
            aspect="aspect-square"
            enlargeable
          />
        </div>
        <p className="mt-6">
          Based on these patterns, particularly what I had observed during
          interviews, I proposed using a personal average as the baseline
          for the candle&apos;s feedback, so it would reflect each
          household&apos;s own habits rather than a fixed standard. The
          team aligned on this direction, and it became one of the core
          decisions that shaped how the candle communicates electricity
          use.
        </p>

        <h3 className="text-sub-header mt-12">
          How Might We Questions &amp; Problem Statements
        </h3>
        <p className="mt-6">
          Based on our research themes, we created How Might We (HMW)
          questions to explore design opportunities without jumping
          straight to solutions. These questions focused on making
          electricity visible, emotionally neutral, and naturally part of
          daily routines.
        </p>
        <ul className="mt-4">
          <li>How might we make electricity visible in everyday routines?</li>
          <li>
            How might we provide feedback that feels personal and
            non-judgmental?
          </li>
          <li>
            How might we support shared households in distributing
            responsibility?
          </li>
        </ul>
        <p className="mt-6">
          From these questions, we defined clear problem statements to
          guide our design:
        </p>
        <ul className="mt-4">
          <li>
            Users struggle to understand electricity usage because it is
            intangible and lacks direct feedback.
          </li>
          <li>
            Current monitoring tools are too technical or focus on costs in
            ways that make users feel stressed or guilty.
          </li>
          <li>
            In shared households, electricity use is a collective outcome,
            but it&apos;s often unclear who is responsible for tracking or
            managing it.
          </li>
          <li>
            Users want feedback tied to their own routines, rather than
            abstract numbers or comparisons with others.
          </li>
        </ul>

        <h2 className="text-section-header mt-16">Develop</h2>
        <p className="mt-6">
          With clear problem statements in place, we moved into ideation,
          exploring how a physical, ambient object could address what we
          had learned.
        </p>

        <h3 className="text-sub-header mt-12">
          Design Ideation: From Abstract Data to a Familiar Physical Object
        </h3>
        <p className="mt-6">
          We wanted to create something calm and subtle, an object in the
          home that quietly reflects electricity use without demanding
          attention. Instead of relying on screens, numbers, or alerts, we
          explored how a familiar physical object could communicate energy
          use in a more emotional and understandable way.
        </p>
        <p className="mt-6">
          This led us to the idea of a candle. Candles are historically
          associated with light, warmth, and calm, making them a natural
          choice for representing electricity gently. To make the feedback
          meaningful, we designed the candle to show how a user&apos;s
          current electricity use compares to their own usual patterns, so
          it reflects personal habits rather than just numbers.
        </p>
        <p className="mt-6">
          To test this concept, we built a simple candle-shaped prototype
          with an LED inside. The LED moved up and down to indicate changes
          in electricity use, while its color and brightness remained
          constant. This first prototype helped us explore whether a
          quiet, ambient object could make electricity use easier to
          understand without feeling overwhelming.
        </p>

        <h3 className="text-sub-header mt-12">
          Prototype 1: Fixed Baseline and Color Feedback
        </h3>
        <p className="mt-6">
          In the first prototype iteration, we added a fixed baseline
          inside the candle to represent the household&apos;s average
          electricity usage. This baseline served as a stable reference,
          making it easier for users to compare their current consumption
          with their typical usage.
        </p>
        <p className="mt-6">
          The average consumption was calculated by considering how usage
          changed depending on the time of day, day of the week, or
          season. For example, cumulative consumption on a Monday at noon
          was compared to the average of the previous four Mondays at
          noon.
        </p>
        <p className="mt-6">
          During early user testing (4 participants), we noticed that
          participants had trouble remembering the previous position of
          the light, which made changes in consumption hard to interpret.
          The fixed baseline reduced this mental effort and helped users
          understand their energy use more quickly.
        </p>
        <p className="mt-6">
          To make the feedback even clearer, we introduced color changes.
          When electricity usage went above the average, the candle
          gradually shifted to warmer colors, growing brighter and more
          intense as consumption increased. When usage was below average,
          the candle gradually shifted to cooler blue tones, becoming
          softer as consumption decreased. This allowed users to
          immediately see whether consumption was higher or lower than
          usual, without needing numbers or explanations.
        </p>
        <p className="mt-6">
          Together, the fixed baseline and dynamic color feedback made the
          candle&apos;s behavior easier to read and interpret, while still
          keeping the experience calm, subtle, and non-intrusive.
        </p>
        <div className="mt-6 grid gap-6 sm:grid-cols-3">
          <ImagePlaceholder label="Storyboard sketch" />
          <ImagePlaceholder label="Physical prototype photo, 1 of 2" />
          <ImagePlaceholder label="Physical prototype photo, 2 of 2" />
        </div>

        <h3 className="text-sub-header mt-12">
          Prototype 2: Simplified Color Feedback
        </h3>
        <p className="mt-6">
          Based on user feedback from the first prototype, we found that
          the original color mapping caused confusion. Users often
          associated red, green, and white with temperature control or
          warnings rather than electricity usage. In particular, red felt
          harsh and could make users feel like they were doing something
          wrong, even during normal activities like cooking. Users also
          found it difficult to interpret white, and subtle differences
          between colors were often missed.
        </p>
        <p className="mt-6">
          To address this, the candle was simplified to a single orange
          color, inspired by the natural color of a candle flame. The
          fixed baseline was also changed to orange to match the candle.
          Changes in electricity use are now represented entirely through
          brightness and intensity. The light grows brighter as
          consumption rises and softer as usage falls.
        </p>
        <p className="mt-6">
          This design creates a calm, gentle presence in the home that
          communicates electricity use in a clear but non-distracting way.
          It feels alive and informative without demanding attention or
          causing stress, aligning with user preferences for a device that
          gently shows energy use.
        </p>
        <div className="mt-6 max-w-xl">
          <ImagePlaceholder label="Storyboard sketch of simplified candle" />
        </div>

        <h2 className="text-section-header mt-16">Reflection</h2>
        <h3 className="text-sub-header mt-10">
          What I Learned: How User Feedback Simplified the Design
        </h3>
        <p className="mt-6">
          This project taught me that users do not always want more data,
          they want meaning. Research quickly challenged that assumption,
          and it shaped every design decision that followed.
        </p>
        <p className="mt-6">
          The most valuable lesson came through iteration. During prototype
          1, we used red, green, and white to signal changes in electricity
          use. Users consistently misread the colors, associating red with
          warnings and feeling stressed even during completely normal
          activities like cooking. That single insight completely changed
          our direction. We simplified the entire color system to a single
          orange color, inspired by the natural warmth of a candle, and the
          feedback immediately felt calmer and easier to understand.
        </p>
        <p className="mt-6">
          That moment taught me that good design is not about adding more,
          it is about removing what gets in the way. As an interaction
          designer, this project reinforced that when interactions feel
          natural rather than demanding, users are more open to reflection.
          Simplicity is not a compromise, it is the goal.
        </p>

        <h3 className="text-sub-header mt-12">Future Step</h3>
        <ul className="mt-4">
          <li>
            Connect Cand-EL to real household electricity data, allowing
            users to see accurate, real-time feedback and better understand
            their own energy use.
          </li>
          <li>
            Introduce optional digital features, such as a mobile dashboard
            or historical trend view, enabling deeper insight while
            keeping the main ambient experience calm and non-judgmental.
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
      </section>
    </article>
  );
}
