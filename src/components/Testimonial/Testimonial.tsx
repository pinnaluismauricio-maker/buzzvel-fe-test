import Image from "next/image";

const testimonial = {
  quote:
    "The lessons are short enough to fit into my week, but detailed enough that I actually leave with something I can use.",
  author: "Alex Morgan",
  role: "Product Manager",
  avatar: "/images/avatars/alexmorgan.jpg",
};

const stats = [
  { value: "24K+", label: "active learners" },
  { value: "120+", label: "expert-led courses" },
  { value: "92%", label: "complete their first course" },
];

function QuoteIcon() {
  const bar =
    "M2.8 0H6.2C8 0 9 1.3 9 3.2V5C8.6 9 7.8 13 7.2 17.5C7 19.5 6.6 22 4.5 22C2.4 22 2 19.5 1.8 17.5C1.2 13 .4 9 0 5V3.2C0 1.3 1 0 2.8 0Z";

  return (
    <svg
      viewBox="0 0 24 22"
      fill="currentColor"
      aria-hidden="true"
      className="h-auto w-6 text-primary"
    >
      <path d={bar} />
      <path d={bar} transform="translate(15 0)" />
    </svg>
  );
}

export default function Testimonial() {
  return (
    <section
      id="testimonial"
      aria-labelledby="testimonial-title"
      className="bg-background"
    >
      <h2 id="testimonial-title" className="sr-only">
        What learners say about Luma
      </h2>

      <div className="mx-auto grid max-w-[1280px] gap-16 px-5 py-[60px] lg:grid-cols-[minmax(0,1fr)_385px] lg:items-center lg:gap-0 lg:px-20 lg:py-[100px]">
        {/* Depoimento */}
        <figure>
          <QuoteIcon />

          <blockquote className="mt-4 max-w-[600px]">
            <p className="font-display text-xl font-medium leading-8 text-foreground md:text-[28px] md:leading-[44px]">
              {testimonial.quote}
            </p>
          </blockquote>

          <figcaption className="mt-8 flex items-center gap-4">
            <Image
              src={testimonial.avatar}
              alt=""
              width={48}
              height={48}
              className="h-12 w-12 rounded-full object-cover"
            />
            <div>
              <p className="text-base font-bold leading-6 text-foreground">
                {testimonial.author}
              </p>
              <p className="text-base leading-6 text-muted">
                {testimonial.role}
              </p>
            </div>
          </figcaption>
        </figure>

        {/* Números */}
        <ul className="grid grid-cols-3 lg:flex lg:flex-col lg:gap-6 lg:border-l lg:border-border lg:pl-12">
          {stats.map((stat) => (
            <li key={stat.value}>
              <p className="font-display text-[32px] font-extrabold leading-8 tracking-[-1px] text-primary min-[360px]:text-[40px] min-[360px]:leading-10 lg:text-[64px] lg:leading-[64px] lg:tracking-[-1.6px]">
                {stat.value}
              </p>
              <p className="mt-1 text-sm leading-6 text-muted">{stat.label}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}