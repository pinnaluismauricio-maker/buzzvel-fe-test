import Logo from "@/components/Logo/Logo";

type FooterLink = { label: string; href: string };
type FooterColumn = { id: string; title: string; links: FooterLink[] };

const columns: FooterColumn[] = [
  {
    id: "explore",
    title: "Explore",
    links: [
      { label: "Courses", href: "#courses" },
      { label: "Categories", href: "#courses" },
      { label: "Instructors", href: "#community" },
      { label: "For Teams", href: "#contact" },
    ],
  },
  {
    id: "company",
    title: "Company",
    links: [
      { label: "About", href: "#how-it-works" },
      { label: "Careers", href: "#" },
      { label: "Journal", href: "#" },
    ],
  },
  {
    id: "support",
    title: "Support",
    links: [
      { label: "Help Center", href: "#contact" },
      { label: "Contact", href: "#contact" },
      { label: "Terms", href: "#" },
      { label: "Privacy", href: "#" },
    ],
  },
];

const linkClass =
  "text-sm leading-6 text-white/65 transition-colors hover:text-white focus-visible:outline-white";

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto max-w-[1280px] px-5 pb-5 pt-[60px] lg:px-20 lg:pb-10 lg:pt-20">
        <div className="grid grid-cols-2 gap-x-10 gap-y-10 lg:grid-cols-[1fr_192px_192px_192px] lg:gap-x-12 lg:gap-y-0">
          {/* Marca */}
          <div className="col-span-2 lg:col-span-1">
            <a
              href="#home"
              aria-label="Luma - Home"
              className="inline-flex focus-visible:outline-white"
            >
              <Logo className="text-white" />
            </a>
            <p className="mt-3 text-sm leading-6 text-white/65 lg:max-w-[220px]">
              Practical learning for curious people.
            </p>
          </div>

          {/* Colunas de links */}
          {columns.map((column) => (
            <nav key={column.id} aria-labelledby={`footer-${column.id}`}>
              <h2
                id={`footer-${column.id}`}
                className="text-xs font-semibold uppercase leading-4 tracking-[1.44px] text-white/90"
              >
                {column.title}
              </h2>

              <ul className="mt-4 flex flex-col gap-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className={linkClass}>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        {/* Copyright */}
        <div className="mt-9 border-t border-white/35 pt-5 text-center lg:mt-16 lg:text-left">
          <p className="text-sm leading-6 text-white/80">
            © 2026 Luma Learning
          </p>
        </div>
      </div>
    </footer>
  );
}