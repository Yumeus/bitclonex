import { highlights } from "@/data";
import { Container, Icon, Section } from "@/components/ui";
import { cardStyles } from "@/lib";

export function HighlightsSection() {
  return (
    <Section>
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-gutter">
          {highlights.map(([icon, title, desc]) => (
            <div
              key={title}
              className="p-space-lg rounded-xl bg-surface-container border border-outline-variant/50 hover:border-primary-container/40 transition-all flex flex-col gap-2"
            >
              <Icon name={icon} className="text-primary-container text-3xl" />
              <h2 className={cardStyles.heading}>{title}</h2>
              <p className={cardStyles.description}>{desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
