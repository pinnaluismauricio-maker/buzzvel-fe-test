

"use client";

import { useEffect, useRef, useState } from "react";
import Button from "@/components/Button/Button";
import Logo from "@/components/Logo/Logo";

const navigation = [
  { label: "Courses", href: "#courses" },
  { label: "For Teams", href: "#contact" },
  { label: "Community", href: "#community" },
  { label: "About", href: "#howitworks" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  function closeMenu() {
    setMenuOpen(false);
  }

  // Fecha o menu com Esc e devolve o foco ao botão
  useEffect(() => {
    if (!menuOpen) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-cream">
      <div className="mx-auto flex min-h-[68px] max-w-[1280px] items-center justify-between px-5 md:px-20">
        {/* Logo */}
        <a
          href="#home"
          aria-label="Luma - Home"
          onClick={closeMenu}
          className="flex text-foreground"
        >
          <Logo />
        </a>

        {/* Navegação desktop */}
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-8 md:flex"
        >
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-foreground transition-colors hover:text-primary"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Ações desktop */}
        <div className="hidden items-center gap-5 md:flex">
          <a
            href="#login"
            className="text-sm font-semibold text-foreground transition-colors hover:text-primary"
          >
            Log in
          </a>

          <Button href="#courses">Start learning</Button>
        </div>

        {/* Botão do menu mobile */}
        <button
          ref={menuButtonRef}
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((current) => !current)}
          className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-lg md:hidden"
        >
          <span aria-hidden="true" className="h-0.5 w-5 bg-foreground" />
          <span aria-hidden="true" className="h-0.5 w-5 bg-foreground" />
          <span aria-hidden="true" className="h-0.5 w-5 bg-foreground" />
        </button>
      </div>

      {/* Navegação mobile */}
      {menuOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="border-t border-border bg-cream px-5 py-5 md:hidden"
        >
          <div className="mx-auto flex max-w-[1200px] flex-col gap-5">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="text-base font-medium text-foreground hover:text-primary"
              >
                {item.label}
              </a>
            ))}

            <div className="flex flex-col gap-4 border-t border-border pt-5">
              <a
                href="#"
                onClick={closeMenu}
                className="font-semibold text-foreground"
              >
                Log in
              </a>

              <Button href="#courses" onClick={closeMenu} className="w-full">
                Start learning
              </Button>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}