import { showcase } from "@/data";
import { Container, Section, SectionHeader } from "@/components/ui";

export function ShowcaseSection() {
  return (
    <Section bg="bg-surface-container-lowest" border id="demo">
      <Container className="flex flex-col gap-space-lg">
        <SectionHeader
          badge="Proof of Work"
          title="Featured Exchange Implementations"
          desc="Explore selected architectures deployed using the Bitclonex exchange core."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
          {showcase.map(([type, name, desc, tags]) => (
            <div
              key={name}
              className="p-space-md rounded-xl bg-surface-container border border-outline-variant/50 flex flex-col justify-between gap-4"
            >
              <div>
                <div className="flex justify-between items-center text-xs font-label-code-md text-outline pb-2">
                  <span>{type}</span>
                  <span className="text-primary-container font-bold">LIVE MAINNET</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                  {name}
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-2">{desc}</p>
              </div>
              <div className="space-y-2">
                <div className="flex flex-wrap gap-1 font-label-code-md text-[10px]">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-surface-container-high px-2 py-0.5 rounded text-on-surface"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href="#quote"
                  className="block w-full py-2 text-center text-xs font-bold rounded bg-surface-container-high hover:bg-primary-container hover:text-on-primary text-on-surface transition-all"
                >
                  Request Sandbox Access
                </a>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
