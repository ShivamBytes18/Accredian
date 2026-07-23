"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/data/content";

export default function Header() {
  const [activeHref, setActiveHref] = useState("#home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const sectionIds = NAV_LINKS.map((link) => link.href.slice(1));
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveHref(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const handleNavClick = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-white">
      <div className="h-1.5 w-full bg-brand-maroon" aria-hidden="true" />
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="#home" className="flex flex-col leading-none">
          <span className="text-2xl font-extrabold tracking-tight text-brand-blue">
            accredian
          </span>
          <span className="mt-0.5 text-[11px] font-medium text-brand-slate">
            credentials that matter
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-[15px] font-medium transition-colors hover:text-brand-blue ${
                activeHref === link.href
                  ? "text-brand-blue underline decoration-2 underline-offset-8"
                  : "text-brand-ink"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#enquire"
          className="hidden rounded-lg bg-brand-blue px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-blue-dark lg:inline-block"
        >
          Enquire Now
        </a>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-brand-ink lg:hidden"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="border-t border-slate-100 bg-white px-5 pb-5 lg:hidden">
          <nav className="flex flex-col gap-1 pt-2" aria-label="Mobile">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleNavClick}
                className={`rounded-md px-3 py-2.5 text-[15px] font-medium ${
                  activeHref === link.href
                    ? "bg-brand-tint text-brand-blue"
                    : "text-brand-ink hover:bg-slate-50"
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#enquire"
              onClick={handleNavClick}
              className="mt-2 rounded-lg bg-brand-blue px-5 py-2.5 text-center text-sm font-semibold text-white"
            >
              Enquire Now
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
