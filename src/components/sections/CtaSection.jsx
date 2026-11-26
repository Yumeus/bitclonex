import { ctaPoints } from "@/data";
import { Container, Icon } from "@/components/ui";
import { QuoteForm } from "@/components/forms";

export function CtaSection() {
  return (
    <section
      id="quote"
      className="w-full bg-surface-container-lowest py-space-xl border-t border-outline-variant/40 relative"
    >
      <Container className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
        <div className="lg:col-span-6 flex flex-col gap-space-md">
          <span className="font-label-badge text-label-badge text-primary-fixed-dim uppercase tracking-wider">
            Start Building
          </span>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface font-bold">
            Ready to Launch Your Own Cryptocurrency Exchange?
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            Build a customizable cryptocurrency trading platform with Bitclonex Web3 Solutions.
            Discuss your business requirements with our development team and explore the right
            exchange solution for your business.
          </p>
          <div className="flex flex-col gap-2 pt-2 text-on-surface font-body-sm">
            {ctaPoints.map((text) => (
              <div key={text} className="flex items-center gap-2">
                <Icon name="verified" className="text-primary-container" />
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>
        <QuoteForm />
      </Container>
    </section>
  );
}
