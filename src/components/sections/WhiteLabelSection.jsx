import { themeRows } from "@/data";
import { Container, Section } from "@/components/ui";
import { cardStyles } from "@/lib";

export function WhiteLabelSection() {
  return (
    <Section bg="bg-surface-container-lowest">
      <Container className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
        <div className="lg:col-span-6 flex flex-col gap-space-md">
          <span className="font-label-badge text-label-badge text-primary-fixed-dim uppercase tracking-wider">
            Bespoke Identity
          </span>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface font-bold">
            100% White-Label Branding &amp; Modular Layouts
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            Maintain full control over your brand narrative. Bitclonex exchange architecture is
            decoupled from presentation layers, allowing your team to apply custom color systems,
            bespoke layout presets (Lite vs Pro trading views), and regional language packs without
            modifying underlying matching logic.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <div className="p-3 rounded bg-surface-container text-body-sm text-on-surface-variant">
              <strong className="text-on-surface block mb-1">Dual Layouts</strong>
              Toggle between streamlined beginner swap interfaces and multi-chart professional desks.
            </div>
            <div className="p-3 rounded bg-surface-container text-body-sm text-on-surface-variant">
              <strong className="text-on-surface block mb-1">Dynamic Geofencing</strong>
              Enforce IP-level product restrictions to comply with jurisdiction-specific financial
              regulations.
            </div>
          </div>
        </div>

        <div className="lg:col-span-6 bg-surface-container p-space-lg rounded-xl border border-outline-variant flex flex-col gap-4">
          <div className="flex items-center justify-between border-b border-outline-variant/40 pb-3">
            <span className={cardStyles.heading}>Theme &amp; UX Configuration</span>
            <span className="text-primary-container font-label-code-md text-xs">
              Live Preview Active
            </span>
          </div>
          <div className="space-y-3 font-label-code-md text-xs text-on-surface-variant">
            {themeRows.map(([label, value, color]) => (
              <div
                key={label}
                className="flex justify-between items-center p-2 rounded bg-surface-container-lowest"
              >
                <span>{label}</span>
                <span className={`${color} font-bold`}>{value}</span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
