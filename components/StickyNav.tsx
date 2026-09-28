"use client";

import { useEffect, useState } from "react";
import { navItems } from "@/lib/data";

export function StickyNav() {
  const [active, setActive] = useState<string>(navItems[0].id);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/85 backdrop-blur-md">
      <div className="wrap flex h-16 items-center justify-between md:h-[4.5rem]">
        <a
          href="#top"
          className="focus-ring font-display text-lg tracking-tight text-ink"
        >
          HackHalt{" "}
          <span className="font-mono text-xs align-middle text-ink-faint">
            / case study
          </span>
        </a>

        <nav
          aria-label="Section navigation"
          className="hidden items-center gap-1 lg:flex"
        >
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`focus-ring rounded-full px-3 py-1.5 font-mono text-[11px] tracking-[0.08em] uppercase transition-colors ${
                active === item.id
                  ? "bg-ink text-paper"
                  : "text-ink-soft hover:text-ink"
              }`}
            >
              {item.number} {item.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          className="focus-ring flex items-center gap-2 font-mono text-[11px] tracking-[0.1em] uppercase text-ink lg:hidden"
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          aria-label="Section navigation"
          className="border-t border-line bg-paper lg:hidden"
        >
          <ul className="wrap flex flex-col py-2">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={() => setOpen(false)}
                  className={`focus-ring block py-3 font-mono text-xs tracking-[0.1em] uppercase ${
                    active === item.id ? "text-signal" : "text-ink-soft"
                  }`}
                >
                  {item.number} — {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
