import type { ComponentType } from "react";
import SectionHeading from "@/components/SectionHeading/SectionHeading";
import { ExperienceIcon, FocusIcon, PracticeIcon } from "./StepIcons";

type Step = {
  number: string;
  title: string;
  description: string;
  Icon: ComponentType;
};

const steps: Step[] = [
  {
    number: "01",
    title: "Choose your focus",
    description:
      "Find courses based on the skill you want to build, not endless content categories.",
    Icon: FocusIcon,
  },
  {
    number: "02",
    title: "Learn from experience",
    description:
      "Follow concise lessons created by professionals who actually use these skills.",
    Icon: ExperienceIcon,
  },
  {
    number: "03",
    title: "Put it into practice",
    description:
      "Every course includes practical exercises designed to turn knowledge into action.",
    Icon: PracticeIcon,
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      aria-labelledby="how-title"
      className="scroll-mt-20 bg-cream"
    >
      <div className="mx-auto max-w-[1280px] px-5 py-[60px] lg:px-20 lg:pb-32 lg:pt-[100px]">
        <SectionHeading
          id="how-title"
          align="center"
          eyebrow="How Luma works"
          title="Less browsing. More learning."
        />

        <ol className="mt-10 flex flex-col gap-[26px] lg:mt-[108px] lg:grid lg:grid-cols-3 lg:gap-20">
          {steps.map(({ number, title, description, Icon }, index) => (
            <li
              key={number}
              className={`relative ${index > 0 ? "pt-[50px] lg:pt-0" : ""}`}
            >
              {/* Linha vertical (mobile) */}
              {index > 0 && (
                <span
                  aria-hidden="true"
                  className="absolute left-7 top-0 h-[46px] w-px bg-border lg:hidden"
                />
              )}

              {/* Linha horizontal (desktop) */}
              {index < steps.length - 1 && (
                <span
                  aria-hidden="true"
                  className="absolute -right-20 left-14 top-[27px] hidden h-0.5 bg-border lg:block"
                />
              )}

              <Icon />

              <p className="mt-6 text-xs font-semibold uppercase leading-4 tracking-[1.44px] text-muted">
                Step {number}
              </p>

              <h3 className="mt-3 font-display text-xl font-bold leading-7 text-foreground">
                {title}
              </h3>

              <p className="mt-3.5 text-sm leading-6 text-muted md:text-base md:leading-7">
                {description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}