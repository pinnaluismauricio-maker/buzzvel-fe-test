import Image from "next/image";
import Button from "@/components/Button/Button";
import CtaDecorations from "./CtaDecorations";

const avatars = [
  "/images/avatars/avatar-01.jpg",
  "/images/avatars/avatar-02.jpg",
  "/images/avatars/avatar-03.jpg",
  "/images/avatars/avatar-04.jpg",
];

export default function FinalCta() {
  return (
    <section
      aria-labelledby="cta-title"
      className="relative overflow-hidden bg-sun"
    >
      <CtaDecorations />

      <div className="relative mx-auto flex max-w-[1280px] flex-col items-center px-5 py-[60px] text-center lg:px-20 lg:py-[100px]">
        <ul aria-hidden="true" className="flex">
          {avatars.map((src) => (
            <li key={src} className="-ml-1.5 first:ml-0">
              <Image
                src={src}
                alt=""
                width={38}
                height={38}
                className="h-[38px] w-[38px] rounded-full object-cover ring-2 ring-secondary"
              />
            </li>
          ))}
        </ul>

        <h2
          id="cta-title"
          className="mt-8 font-display text-[40px] font-extrabold leading-[44px] tracking-[-1px] text-foreground md:text-[64px] md:leading-[70px] md:tracking-[-1.6px]"
        >
          What will you learn next?
        </h2>

        <p className="mt-2 text-base leading-[26px] text-muted md:text-[18px] md:leading-7">
          Start with one course. Build from there.
        </p>

        <div className="mt-10 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <Button href="#courses" size="cta">
            Explore all courses
          </Button>
          <Button href="#contact" variant="outline" size="cta">
            Join Luma
          </Button>
        </div>
      </div>
    </section>
  );
}