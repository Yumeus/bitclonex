import { faqs } from "@/data";
import { Container, Icon, Section, SectionHeader } from "@/components/ui";

export function FaqSection() {
  return (
    <Section>
      <Container className="flex flex-col gap-space-lg">
        <SectionHeader
          badge="Clarifications"
          title="Frequently Asked Questions"
          desc="Essential details regarding technology licensing, source code deployment, and maintenance."
        />
        <div className="max-w-4xl mx-auto w-full flex flex-col gap-3">
          {faqs.map(([q, a]) => (
            <details
              key={q}
              className="group bg-surface-container rounded-lg p-space-md border border-outline-variant/40"
            >
              <summary className="flex justify-between items-center cursor-pointer font-headline-sm text-[16px] text-on-surface font-semibold list-none">
                {q}
                <Icon
                  name="expand_more"
                  className="text-primary-container group-open:rotate-180 transition-transform"
                />
              </summary>
              <p className="font-body-sm text-body-sm text-on-surface-variant pt-3 leading-relaxed">
                {a}
              </p>
            </details>
          ))}
        </div>
      </Container>
    </Section>
  );
}
