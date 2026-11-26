import { navLinks, siteConfig } from "@/config";
import { Icon, Logo } from "@/components/ui";
import { MobileNav } from "./MobileNav";

export function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-[#111113]/85 backdrop-blur-xl border-b border-[#242628]">
      <div className="h-16 sm:h-20 max-w-[1360px] 2xl:max-w-[1440px] mx-auto px-margin-mobile sm:px-6 lg:px-margin flex items-center justify-between gap-2 sm:gap-gutter">
        <div className="flex items-center gap-2 sm:gap-space-md min-w-0">
          <Logo />
          <span className="font-headline-sm text-[16px] sm:text-headline-sm font-semibold tracking-tight text-on-surface truncate">
            {siteConfig.name}{" "}
            <span className="text-primary-fixed-dim font-label-code-md text-[10px] sm:text-label-code-md ml-1 sm:ml-space-xs px-1.5 sm:px-2 py-0.5 rounded bg-primary-container/10 border border-primary-container/20">
              {siteConfig.shortBadge}
            </span>
          </span>
        </div>
        <nav aria-label="Primary navigation" className="hidden xl:flex items-center gap-space-lg">
          {navLinks.map((label, i) => (
            <a
              key={label}
              href="#"
              aria-current={i === 0 ? "page" : undefined}
              className={
                i === 0
                  ? "transition-colors text-primary-fixed-dim font-semibold"
                  : "font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors"
              }
            >
              {label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2 sm:gap-space-md shrink-0">
          <a
            href="#demo"
            className="hidden sm:inline-flex items-center font-body-sm text-body-sm text-on-surface-variant hover:text-primary-fixed-dim transition-colors px-space-sm py-2"
          >
            Schedule Demo
          </a>
          <a
            href="#quote"
            className="inline-flex items-center justify-center bg-primary-container hover:bg-[#2CE69B] text-on-primary font-headline-sm text-xs sm:text-[14px] font-bold px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-lg shadow-[0_0_20px_rgba(69,223,166,0.3)] transition-all whitespace-nowrap"
          >
            Get a Quote
          </a>
          <div
            aria-hidden="true"
            className="hidden sm:flex w-8 h-8 rounded-full bg-primary items-center justify-center shrink-0 ml-space-xs"
          >
            <Icon name="person" className="text-on-primary text-[18px]" />
          </div>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
