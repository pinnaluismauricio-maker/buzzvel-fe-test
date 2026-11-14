import Image from "next/image";
import Button from "@/components/Button/Button";
import ArrowRight from "@/components/icons/ArrowRight";

const course = {
  eyebrow: "Most popular this month",
  title: "Designing products people understand.",
  description:
    "Learn how to turn complex workflows into simple, intentional product experiences through research, structure and thoughtful interaction design.",
  instructor: "Maya Chen",
  role: "Senior Product Designer",
  meta: ["8 lessons", "2h 40min", "Intermediate"],
  image: {
    src: "/images/featured/course.jpg",
    alt: "Designer prototyping a product with colorful material samples on a desk",
  },
};

export default function FeaturedCourse() {
  return (
    <section
      id="featured-course"
      aria-labelledby="featured-title"
      className="bg-primary text-white"
    >
      <div className="mx-auto grid max-w-[1280px] items-center gap-10 px-5 py-[60px] lg:grid-cols-[1.03fr_1fr] lg:gap-[60px] lg:px-20 lg:py-[100px]">
        {/* Imagem */}
        <div className="relative">
          <span className="absolute -left-3 -top-3 z-10 rounded-md bg-secondary px-3 py-1.5 text-xs font-bold uppercase leading-4 tracking-[1.44px] text-foreground">
            Featured course
          </span>

          <Image
            src={course.image.src}
            alt={course.image.alt}
            width={700}
            height={500}
            sizes="(min-width: 1024px) 538px, 100vw"
            className="aspect-[362/280] w-full rounded-3xl object-cover sm:aspect-[538/408]"
          />
        </div>

        {/* Texto */}
        <div>
          <p className="text-xs font-semibold uppercase leading-4 tracking-[1.44px] text-white/90">
            {course.eyebrow}
          </p>

          <h2
            id="featured-title"
            className="mt-4 max-w-[560px] font-display text-[32px] font-extrabold leading-9 tracking-[-0.8px] md:text-5xl md:leading-[54px] md:tracking-[-1.2px]"
          >
            {course.title}
          </h2>

          <p className="mt-6 max-w-[522px] text-sm leading-6 text-white/90 md:text-base md:leading-7">
            {course.description}
          </p>

          <p className="mt-6 text-sm leading-6 md:text-base md:leading-7">
            with {course.instructor} · {course.role}
          </p>

          <ul className="mt-6 flex flex-wrap gap-3">
            {course.meta.map((item) => (
              <li
                key={item}
                className="rounded-lg border border-white/70 px-3.5 py-2 text-sm leading-5"
              >
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-7">
            <Button href="#courses" variant="secondary" size="cta">
              View course
            </Button>

            <a
              href="#courses"
              className="group inline-flex items-center justify-center gap-2 text-sm font-bold leading-6 text-white/90 hover:text-white"
            >
              Browse all courses
              <ArrowRight className="transition-transform motion-safe:group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}