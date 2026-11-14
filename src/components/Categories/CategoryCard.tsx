export type Category = {
  number: string;
  title: string;
  description: string;
  href: string;
};

export default function CategoryCard({
  number,
  title,
  description,
  href,
}: Category) {
  return (
    <li className="flex flex-col justify-between rounded-2xl border border-border bg-white p-7 xl:min-h-[260px]">
      <div>
        <span className="inline-block rounded-md bg-primary-light px-2 py-[3px] text-[11px] font-semibold leading-4 tracking-[0.1em] text-primary">
          {number}
        </span>

        <h3 className="mt-6 font-display text-xl font-bold leading-7 text-foreground">
          {title}
        </h3>

        <p className="mt-3 text-sm leading-[25px] text-muted">{description}</p>
      </div>

      <a
        href={href}
        className="group mt-6 inline-flex items-center gap-2 text-sm font-bold leading-6 text-foreground"
      >
        Explore <span className="sr-only">{title} courses</span>
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          aria-hidden="true"
          className="transition-transform motion-safe:group-hover:translate-x-1"
        >
          <path
            d="M3 8h10M9 4l4 4-4 4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </a>
    </li>
  );
}