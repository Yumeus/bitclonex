import { modules } from "@/data";
import { Container, Section, SectionHeader } from "@/components/ui";
import { cardStyles } from "@/lib";

export function ModulesSection() {
  return (
    <Section>
      <Container className="flex flex-col gap-space-lg">
        <SectionHeader
          badge="Trading Verticals"
          title="Advanced Trading Modules"
          desc="Empower retail and professional traders with diverse market products and leverage tools."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
          {modules.map(([title, desc], i) => (
            <div key={title} className={cardStyles.subtle}>
              <span className="font-label-code-md text-label-code-md text-primary-fixed-dim">
                MODULE 0{i + 1}
              </span>
              <h3 className={cardStyles.heading}>{title}</h3>
              <p className={cardStyles.description}>{desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
