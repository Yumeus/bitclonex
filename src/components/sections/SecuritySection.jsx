import { securityCards } from "@/data";
import { Container, Icon, Section, SectionHeader } from "@/components/ui";
import { cardStyles } from "@/lib";

export function SecuritySection() {
  return (
    <Section bg="bg-surface-container-lowest" border>
      <Container className="flex flex-col gap-space-lg">
        <SectionHeader
          badge="Zero-Trust Framework"
          title="Institutional Security Architecture"
          desc="Engineered to eliminate risk vectors across network perimeter, storage layers, and execution runtimes."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
          {securityCards.map(([icon, title, desc]) => (
            <div
              key={title}
              className="p-space-lg rounded-xl bg-surface-container border border-outline-variant flex flex-col gap-2"
            >
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
