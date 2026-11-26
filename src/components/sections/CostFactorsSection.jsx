import { costFactors } from "@/data";
import { Container, Icon, Section, SectionHeader } from "@/components/ui";
import { cardStyles } from "@/lib";

export function CostFactorsSection() {
  return (
    <Section bg="bg-surface-container-lowest" border id="cost-factors">
      <Container className="flex flex-col gap-space-lg">
        <SectionHeader
          badge="Transparent Scope"
          title="Binance Clone Script Development Cost"
          desc="Exchange architecture investments vary based on specific operational demands rather than rigid one-size-fits-all bundles."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
          {costFactors.map(([icon, title, desc]) => (
            <div key={title} className={cardStyles.subtle}>
              <Icon name={icon} className="text-primary-container text-3xl" />
              <h3 className={cardStyles.heading}>{title}</h3>
              <p className={cardStyles.description}>{desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
