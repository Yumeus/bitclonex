import { whyChoose } from "@/data";
import { Container, Icon, Section, SectionHeader } from "@/components/ui";
import { cardStyles } from "@/lib";

export function WhyChooseSection() {
  return (
    <Section>
      <Container className="flex flex-col gap-space-lg">
        <SectionHeader
          badge="Competitive Advantage"
          title="Why Choose Our Binance Clone Script?"
          desc="Purpose-built engineering designed to bypass 18+ months of custom development without sacrificing security or performance."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
          {whyChoose.map(([icon, title, desc]) => (
            <div
              key={title}
              className="p-space-lg rounded-xl bg-surface-container border border-outline-variant/40 flex flex-col gap-3"
            >
              <div className="w-12 h-12 rounded-lg bg-primary-container/10 flex items-center justify-center text-primary-container">
                <Icon name={icon} className="text-2xl" />
              </div>
              <h3 className={cardStyles.heading}>{title}</h3>
              <p className={cardStyles.description}>{desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
