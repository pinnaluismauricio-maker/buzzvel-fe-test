type SectionHeadingProps = {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
};

export default function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={className}>
      <p className="text-xs font-semibold uppercase leading-4 tracking-[1.44px] text-primary">
        {eyebrow}
      </p>

      <h2
        id={id}
        className="mt-4 max-w-[560px] font-display text-[32px] font-extrabold leading-9 tracking-[-0.8px] text-foreground md:text-5xl md:leading-[52px] md:tracking-[-1.2px]"
      >
        {title}
      </h2>

      {description && (
        <p className="mt-6 max-w-[540px] text-base leading-[26px] text-muted md:text-[18px] md:leading-[28px]">
          {description}
        </p>
      )}
    </div>
  );
}