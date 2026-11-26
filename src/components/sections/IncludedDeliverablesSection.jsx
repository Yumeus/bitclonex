import { included } from "@/data";
import { Container, Icon, Section, SectionHeader } from "@/components/ui";
import { cardStyles } from "@/lib";

export function IncludedDeliverablesSection() {
  return (
    <Section bg="bg-surface-container-lowest" border>
      <Container className="flex flex-col gap-space-lg">
        <SectionHeader
          badge="Deliverables"
          title="What's Included in Our Binance Clone Script?"
          desc="A complete, sovereign, full-stack cryptocurrency exchange software package."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
          {included.map(([title, desc]) => (
            <div
              key={title}
              className="p-space-lg rounded-xl bg-surface-container border border-outline-variant/40 flex items-start gap-3"
            >
              <Icon name="check_box" className="text-primary-container text-2xl" />
              <div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold text-[16px]">
                  {title}
                </h3>
                <p className={cardStyles.description}>{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
