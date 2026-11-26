import { techStack } from "@/data";
import { Container, Section, SectionHeader } from "@/components/ui";

export function TechStackSection() {
  return (
    <Section bg="bg-surface-container-lowest" border>
      <Container className="flex flex-col gap-space-lg">
        <SectionHeader
          badge="Engineered for Performance"
          title="Battle-Tested Technology Stack"
          desc="Modern, low-overhead languages and distributed database engines engineered for extreme financial reliability."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-gutter font-label-code-md text-xs">
          {techStack.map(([title, items]) => (
            <div
              key={title}
              className="p-space-md rounded-xl bg-surface-container border border-outline-variant/40 flex flex-col gap-3"
            >
              <div className="text-primary-fixed-dim font-bold uppercase tracking-wider">
                {title}
              </div>
              <ul className="space-y-2 text-on-surface">
                {items.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
