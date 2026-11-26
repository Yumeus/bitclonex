import { revenue } from "@/data";
import { Container, Icon, Section, SectionHeader } from "@/components/ui";
import { cardStyles } from "@/lib";

export function RevenueSection() {
  return (
    <Section>
      <Container className="flex flex-col gap-space-lg">
        <SectionHeader
          badge="Business Viability"
          title="Revenue Models for Cryptocurrency Exchanges"
          desc="Multiple integrated monetization channels engineered directly into the core settlement protocols."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
          {revenue.map(([icon, title, desc]) => (
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
