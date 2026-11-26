import { footerCols, siteConfig } from "@/config";
import { Container, Logo } from "@/components/ui";

export function Footer() {
  return (
    <footer className="w-full bg-surface-container-lowest border-t border-[#242628] pt-space-xl pb-space-lg">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-gutter mb-space-xl">
          <div className="lg:col-span-2 flex flex-col gap-space-md">
            <div className="flex items-center gap-space-md">
              <Logo />
              <span className="font-headline-sm text-headline-sm font-semibold tracking-tight text-on-surface">
                {siteConfig.name}
              </span>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant max-w-sm leading-relaxed">
              {siteConfig.footer.summary}
            </p>
            <div className="flex items-center gap-2 pt-2">
              {siteConfig.footer.badges.map((badge) => (
                <span
                  key={badge}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-surface-container-low border border-outline-variant font-label-badge text-label-badge text-on-surface-variant"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-container" />
                  {badge}
                </span>
              ))}
            </div>
          </div>
          {footerCols.map(([title, links]) => (
            <div key={title}>
              <div className="font-label-badge text-label-badge text-on-surface tracking-wider uppercase mb-space-md font-semibold">
                {title}
              </div>
              <ul className="flex flex-col gap-2.5 font-body-sm text-body-sm text-on-surface-variant">
                {links.map((label) => (
                  <li key={label} className="hover:text-primary-fixed-dim transition-colors">
                    <a href="#">{label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="pt-space-lg border-t border-surface-container flex flex-col md:flex-row items-center justify-between gap-space-md">
          <p className="font-body-sm text-body-sm text-outline">{siteConfig.footer.copyright}</p>
          <p className="font-label-code-md text-label-code-md text-outline max-w-xl text-left md:text-right">
            {siteConfig.footer.disclaimer}
          </p>
        </div>
      </Container>
    </footer>
  );
}
