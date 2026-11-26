import { integrations } from "@/data";
import { Container, Section, SectionHeader } from "@/components/ui";
import { cardStyles } from "@/lib";

export function IntegrationsSection() {
  return (
    <Section>
      <Container className="flex flex-col gap-space-lg">
        <SectionHeader
          badge="Interoperability"
          title="API Ecosystem & Third-Party Integrations"
          desc="Plug into the global fintech matrix via standardized institutional protocols."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
          {integrations.map(([tag, title, desc]) => (
            <div
              key={title}
              className="p-space-lg rounded-xl bg-surface-container border border-outline-variant/40 flex flex-col gap-3"
            >
              <span className="text-primary-fixed-dim font-label-code-md text-xs">{tag}</span>
              <h3 className={cardStyles.heading}>{title}</h3>
              <p className={cardStyles.description}>{desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
