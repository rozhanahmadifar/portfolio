import CaseStudyTemplate from "@/components/CaseStudyTemplate";

export const metadata = {
  title: "Example Project | Portfolio",
};

export default function ExampleProjectCaseStudy() {
  return (
    <CaseStudyTemplate
      title="Example Project: Redesigning onboarding"
      intro="A redesign of the first-run onboarding flow for a B2B SaaS product, aimed at reducing drop-off before users reached their first meaningful action."
      prototypeLink="https://www.figma.com/"
      results={[
        { value: "32%", label: "Reduction in onboarding drop-off" },
        { value: "2.1x", label: "Increase in activation rate" },
        { value: "4 wks", label: "From kickoff to shipped" },
      ]}
      process={[
        {
          heading: "Discover",
          subsections: [
            {
              heading: "Understanding the drop-off",
              body: (
                <p>
                  We reviewed funnel analytics and ran five moderated
                  sessions with recently churned trial users to understand
                  where and why they were abandoning onboarding.
                </p>
              ),
            },
            {
              heading: "Stakeholder input",
              body: (
                <p>
                  Interviews with sales and support surfaced recurring
                  confusion around workspace setup, which didn&apos;t show up
                  clearly in the analytics alone.
                </p>
              ),
            },
          ],
        },
        {
          heading: "Define",
          subsections: [
            {
              heading: "Reframing the problem",
              body: (
                <p>
                  The core issue wasn&apos;t a missing feature but too many
                  decisions up front. We defined success as reaching a
                  configured workspace in under two minutes.
                </p>
              ),
            },
          ],
        },
        {
          heading: "Develop",
          subsections: [
            {
              heading: "Exploring flows",
              body: (
                <p>
                  We prototyped three approaches: a linear wizard, a
                  progressive checklist, and a smart-defaults flow that
                  deferred optional setup until after activation.
                </p>
              ),
            },
            {
              heading: "Validating with users",
              body: (
                <p>
                  Usability testing on the smart-defaults concept showed the
                  fastest time-to-first-action with the fewest reported
                  points of confusion.
                </p>
              ),
            },
          ],
        },
        {
          heading: "Deliver",
          subsections: [
            {
              heading: "Shipping in stages",
              body: (
                <p>
                  The new flow was rolled out behind a feature flag to 10%
                  of new signups, then ramped to 100% after two weeks of
                  monitoring activation and support volume.
                </p>
              ),
            },
          ],
        },
      ]}
      reflection={
        <p>
          The biggest lesson was that the analytics told us where users
          dropped off, but not why &mdash; that only came from talking to
          people directly. Given more time, I&apos;d want to instrument the
          smart-defaults flow more closely to see which deferred settings
          users come back to configure, and when.
        </p>
      }
    />
  );
}
