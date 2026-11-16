export function FocusIcon() {
  return (
    <div
      aria-hidden="true"
      className="relative h-14 w-14 rounded-full bg-primary-light"
    >
      <span className="absolute left-2 top-2 h-6 w-6 rounded-md bg-primary" />
    </div>
  );
}

export function ExperienceIcon() {
  return (
    <div aria-hidden="true" className="relative h-14 w-14">
      <span className="absolute inset-0 rotate-[10deg] rounded-xl bg-peach/40 lg:bg-peach" />
      <span className="absolute left-6 top-6 h-7 w-7 rounded-full bg-accent" />
    </div>
  );
}

export function PracticeIcon() {
  return (
    <div
      aria-hidden="true"
      className="relative h-14 w-14 rounded-xl bg-sun"
    >
      <span className="absolute bottom-2 left-2 h-5 w-5 rounded-full bg-gold" />
    </div>
  );
}