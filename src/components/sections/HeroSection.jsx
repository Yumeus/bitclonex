import { heroMetrics } from "@/data";
import { Container, Icon } from "@/components/ui";
import { ExchangePreview } from "./ExchangePreview";

export function HeroSection() {
  return (
    <section className="relative w-full bg-surface-container-lowest overflow-hidden py-space-xl lg:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(69,223,166,0.15),transparent)] pointer-events-none" />
      <Container className="relative z-10 flex flex-col gap-space-xl">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto gap-space-md">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-container-low border border-primary-container/30 shadow-[0_0_15px_rgba(69,223,166,0.1)]">
            <span className="w-2 h-2 rounded-full bg-primary-container animate-ping" />
            <span className="font-label-badge text-label-badge uppercase tracking-wider text-primary-fixed-dim">
              Enterprise-Grade Cryptocurrency Exchange Infrastructure • Turnkey Solution
            </span>
          </div>
          <h1 className="font-display-hero text-display-hero-mobile md:text-display-hero text-on-surface tracking-tight text-balance">
            Binance Clone Script – <span className="text-primary-container">Launch Your Own</span>{" "}
            Cryptocurrency Exchange
          </h1>
          <p className="font-body-lg text-body-md md:text-body-lg text-on-surface-variant max-w-3xl leading-relaxed text-balance">
            Launch a customizable cryptocurrency exchange platform with advanced trading
            capabilities, integrated wallets, powerful administration tools, and scalable
            architecture.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 sm:gap-space-md pt-2 w-full sm:w-auto">
            <a
              href="#quote"
              className="w-full sm:w-auto inline-flex items-center justify-center bg-primary-container hover:bg-secondary-fixed text-on-primary font-headline-sm text-[15px] font-bold px-7 py-3 rounded-lg shadow-[0_0_24px_rgba(69,223,166,0.35)] transition-all"
            >
              Get a Custom Quote
              <Icon name="arrow_forward" className="ml-2 text-[20px]" />
            </a>
            <a
              href="#demo"
              className="w-full sm:w-auto inline-flex items-center justify-center bg-surface-container-high/80 hover:bg-surface-container-highest text-on-surface font-headline-sm text-[15px] font-semibold px-7 py-3 rounded-lg border border-outline-variant hover:border-primary-container/40 transition-all backdrop-blur-sm"
            >
              Request Interactive Demo
              <Icon name="play_circle" className="ml-2 text-primary-fixed-dim text-[20px]" />
            </a>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full pt-6 border-t border-outline-variant/40 mt-4">
            {heroMetrics.map(([value, label]) => (
              <div key={value} className="flex flex-col items-center">
                <span className="font-label-code-lg text-label-code-lg font-bold text-primary-fixed-dim">
                  {value}
                </span>
                <span className="font-body-sm text-body-sm text-outline">{label}</span>
              </div>
            ))}
          </div>
        </div>

        <ExchangePreview />
      </Container>
    </section>
  );
}
