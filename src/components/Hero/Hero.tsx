import Image from "next/image";
import Button from "@/components/Button/Button";

const avatars = [
  "/images/avatars/avatar-01.jpg",
  "/images/avatars/avatar-02.jpg",
  "/images/avatars/avatar-03.jpg",
];

export default function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="scroll-mt-24 overflow-x-clip bg-cream"
    >
      <div className="mx-auto grid max-w-[1280px] gap-12 px-5 py-[60px] lg:grid-cols-[minmax(0,1fr)_500px] lg:items-center lg:gap-[60px] lg:px-20 lg:py-[100px]">
        {/* Texto */}
        <div>
          <p className="text-xs font-semibold uppercase leading-4 tracking-[1.44px] text-primary">
            Learn at your own pace
          </p>

          <h1
            id="hero-title"
            className="mt-4 max-w-[560px] font-display text-[40px] font-extrabold leading-[44px] tracking-[-1px] text-foreground md:text-[64px] md:leading-[70px] md:tracking-[-1.6px]"
          >
            Build skills that actually move you forward.
          </h1>

          <p className="mt-6 max-w-[480px] text-base leading-[26px] text-muted md:text-[18px] md:leading-[28px]">
            Practical courses taught by people who do the work every day. Learn
            design, technology, business and more — one focused lesson at a
            time.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="#courses" size="lg">
              Explore courses
            </Button>
            <Button href="#how-it-works" variant="outline" size="lg">
              See how it works
            </Button>
          </div>

          <div className="mt-8 flex items-center justify-center gap-3 sm:justify-start">
            <ul className="flex" aria-hidden="true">
              {avatars.map((src) => (
                <li key={src} className="-ml-2 first:ml-0">
                  <Image
                    src={src}
                    alt=""
                    width={28}
                    height={28}
                    className="h-7 w-7 rounded-full object-cover ring-2 ring-cream"
                  />
                </li>
              ))}
            </ul>
            <p className="text-[13px] text-muted">
              <strong className="font-semibold text-foreground">
                Trusted by 24,000+
              </strong>{" "}
              learners
            </p>
          </div>
        </div>

        {/* Imagem */}
        <div className="relative order-first mx-auto w-full max-w-[346px] sm:max-w-[500px] lg:order-last">
          {/* Peça pêssego (atrás da foto) */}
          <div
            aria-hidden="true"
            className="absolute -right-[26px] bottom-[14px] top-6 w-[272px] rounded-2xl bg-peach sm:-right-[39px] sm:bottom-7 sm:w-[89px]"
          />

          {/* Círculo azul claro (atrás da foto) */}
          <div
            aria-hidden="true"
            className="absolute -left-2.5 bottom-3 h-16 w-16 rounded-full bg-primary-light sm:-left-[45px] sm:bottom-[11px] sm:h-[106px] sm:w-[106px]"
          />

          <Image
            src="/images/hero/hero.jpg"
            alt="Smiling learner with glasses working on a laptop"
            width={900}
            height={1100}
            priority
            sizes="(min-width: 640px) 500px, 346px"
            className="relative aspect-[346/380] w-full rounded-3xl bg-primary-light object-cover sm:aspect-[500/520]"
          />

          {/* Selo 120+ */}
          <div className="absolute -left-2 top-1.5 flex items-center gap-3 whitespace-nowrap rounded-xl bg-white px-4 py-3 text-sm shadow-lg sm:-left-[22px] sm:top-4">
            <span className="rounded-md bg-primary-light px-2 py-1 text-xs font-bold text-primary">
              120+
            </span>
            <span className="text-foreground">expert-led courses</span>
          </div>

          {/* Selo 4.9 */}
          <div className="absolute -right-[27px] bottom-[35px] flex items-center gap-2 whitespace-nowrap rounded-xl bg-white px-4 py-3 text-sm shadow-lg sm:-right-[57px]">
            <span aria-hidden="true" className="text-gold">
              ★★★★★
            </span>
            <span className="text-foreground">4.9 avg rating</span>
          </div>
        </div>
      </div>
    </section>
  );
}