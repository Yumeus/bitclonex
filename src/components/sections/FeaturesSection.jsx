import { features } from "@/data";
import { Container, Icon, Section, SectionHeader } from "@/components/ui";
import { cardStyles } from "@/lib";

export function FeaturesSection() {
  return (
    <Section bg="bg-surface-container-lowest">
      <Container className="flex flex-col gap-space-lg">
        <SectionHeader
          badge="Functional Capabilities"
          title="Key Features of Binance Clone Script"
          desc="Engineered to meet the exact feature parity of global tier-1 cryptocurrency exchanges."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
          {features.map(([icon, title, items]) => (
            <div key={title} className={cardStyles.outlined}>
              <div className="flex items-center gap-3">
                <Icon name={icon} className="text-primary-container text-2xl" />
                <h3 className={cardStyles.heading}>{title}</h3>
              </div>
              <ul className="space-y-2 text-on-surface-variant font-body-sm">
                {items.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-container" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
