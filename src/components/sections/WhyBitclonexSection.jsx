import { stats } from "@/data";
import { Container, Section, SectionHeader } from "@/components/ui";

export function WhyBitclonexSection() {
  return (
    <Section>
      <Container className="flex flex-col gap-space-lg">
        <SectionHeader
          badge="Enterprise Credibility"
          title="Why Choose Bitclonex Web3 Solutions?"
          desc="A dedicated team of senior blockchain protocol architects and financial engineers."
        />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-gutter text-center">
          {stats.map(([value, title, desc]) => (
            <div
              key={title}
              className="p-space-lg rounded-xl bg-surface-container border border-outline-variant/40"
            >
              <span className="font-display-hero text-display-hero-mobile md:text-display-hero text-primary-container font-bold block">
                {value}
              </span>
              <span className="font-headline-sm text-headline-sm text-on-surface font-semibold mt-2 block">
                {title}
              </span>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">{desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
