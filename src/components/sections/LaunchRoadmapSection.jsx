import { stages } from "@/data";
import { Container, Section, SectionHeader } from "@/components/ui";
import { cardStyles } from "@/lib";

export function LaunchRoadmapSection() {
  return (
    <Section>
      <Container className="flex flex-col gap-space-lg">
        <SectionHeader
          badge="Step-by-Step Execution"
          title="How to Launch an Exchange Like Binance"
          desc="Our proven 6-stage lifecycle model from initial scoping to live mainnet production."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
          {stages.map(([title, desc], i) => (
            <div key={title} className={cardStyles.subtle}>
              <span className="font-label-code-md text-label-code-md text-primary-fixed-dim">
                STAGE 0{i + 1}
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
