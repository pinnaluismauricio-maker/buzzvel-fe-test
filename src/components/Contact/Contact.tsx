import type { ComponentType } from "react";
import ContactForm from "./ContactForm";
import { ChatIcon, ClockIcon } from "./ContactIcons";

type InfoItem = {
  label: string;
  value: string;
  href?: string;
  Icon: ComponentType;
};

const info: InfoItem[] = [
  {
    label: "Email",
    value: "contact@luma.com",
    href: "mailto:contact@luma.com",
    Icon: ChatIcon,
  },
  {
    label: "Response Time",
    value: "Up to 24 hours on business days",
    Icon: ClockIcon,
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="scroll-mt-20 bg-background"
    >
      <div className="mx-auto grid max-w-[1280px] gap-10 px-5 py-[60px] xl:grid-cols-[minmax(0,1fr)_540px] xl:items-center xl:gap-[100px] xl:px-20 xl:py-[100px]">
        {/* Texto e informações */}
        <div>
          <p className="text-xs font-semibold uppercase leading-4 tracking-[1.44px] text-primary">
            Contact
          </p>

          <h2
            id="contact-title"
            className="mt-4 font-display text-[32px] font-extrabold leading-9 tracking-[-0.8px] text-foreground md:text-5xl md:leading-[58px] md:tracking-[-1.2px]"
          >
            Get in touch
          </h2>

          <p className="mt-4 max-w-[480px] text-sm leading-6 text-muted md:text-[18px] md:leading-7">
            Have a question? We’re here to help. Whether you’re looking for the
            right course, learning with your team or interested in teaching
            with Luma, we’d love to hear from you.
          </p>

          <ul className="mt-8 flex max-w-[480px] flex-col gap-4 md:mt-10">
            {info.map(({ label, value, href, Icon }) => (
              <li
                key={label}
                className="flex items-center gap-4 rounded-xl bg-cream p-4 md:p-5"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-light text-primary">
                  <Icon />
                </span>

                <div>
                  <p className="text-sm leading-6 text-foreground">{label}</p>
                  {href ? (
                    <a
                      href={href}
                      className="text-sm leading-6 text-primary hover:underline md:mt-1"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="text-sm leading-6 text-muted md:mt-1">
                      {value}
                    </p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Formulário */}
        <ContactForm />
      </div>
    </section>
  );
}