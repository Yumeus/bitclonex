"use client";

import { useEffect, useState } from "react";
import { navLinks } from "@/config";
import { Icon } from "@/components/ui";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <div className="xl:hidden">
      <button
        type="button"
        aria-label={open ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={open}
        aria-controls="mobile-nav-drawer"
        onClick={() => setOpen((prev) => !prev)}
        className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-surface-container border border-outline-variant/60 text-on-surface hover:border-primary-container/50 transition-colors"
      >
        <Icon name={open ? "close" : "menu"} className="text-[20px]" />
      </button>

      {open && (
        <div
          id="mobile-nav-drawer"
          className="fixed inset-x-0 top-16 sm:top-20 z-40 bg-[#111113]/95 backdrop-blur-xl border-b border-[#242628] shadow-2xl"
        >
          <nav
            aria-label="Mobile navigation"
            className="max-w-[1360px] mx-auto px-margin-mobile sm:px-6 py-4 flex flex-col gap-1"
          >
            {navLinks.map((label, i) => (
              <a
                key={label}
                href="#"
                onClick={() => setOpen(false)}
                aria-current={i === 0 ? "page" : undefined}
                className={
                  i === 0
                    ? "px-3 py-2.5 rounded-lg bg-primary-container/10 text-primary-fixed-dim font-semibold font-body-sm"
                    : "px-3 py-2.5 rounded-lg font-body-sm text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors"
                }
              >
                {label}
              </a>
            ))}
            <div className="pt-3 mt-2 border-t border-outline-variant/30 flex flex-col sm:flex-row gap-2">
              <a
                href="#demo"
                onClick={() => setOpen(false)}
                className="flex-1 text-center py-2.5 px-4 rounded-lg bg-surface-container border border-outline-variant text-on-surface font-body-sm font-semibold"
              >
                Schedule Demo
              </a>
              <a
                href="#quote"
                onClick={() => setOpen(false)}
                className="flex-1 text-center py-2.5 px-4 rounded-lg bg-primary-container text-on-primary font-headline-sm text-sm font-bold"
              >
                Get a Quote
              </a>
            </div>
          </nav>
        </div>
      )}
    </div>
  );
}
