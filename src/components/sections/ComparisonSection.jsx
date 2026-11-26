import { comparison } from "@/data";
import { Container, Section, SectionHeader } from "@/components/ui";

export function ComparisonSection() {
  return (
    <Section>
      <Container className="flex flex-col gap-space-lg">
        <SectionHeader
          badge="Strategic Comparison"
          title="Binance Clone Script vs. Building from Scratch"
          desc="Evaluate capital efficiency, delivery velocity, and operational risk factors side-by-side."
        />
        <div className="overflow-x-auto rounded-xl border border-outline-variant/50 bg-surface-container">
          <table className="w-full min-w-[540px] text-left font-body-sm">
            <thead>
              <tr className="border-b border-outline-variant/50 bg-surface-container-high text-on-surface font-headline-sm text-xs uppercase tracking-wider">
                <th className="p-3 sm:p-4">Operational Factor</th>
                <th className="p-3 sm:p-4 text-primary-container">Bitclonex Binance Clone</th>
                <th className="p-3 sm:p-4 text-outline">Building In-House from Scratch</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/30 text-on-surface-variant font-label-code-md text-xs">
              {comparison.map(([factor, ours, theirs]) => (
                <tr key={factor}>
                  <td className="p-3 sm:p-4 font-bold text-on-surface font-body-sm">{factor}</td>
                  <td className="p-3 sm:p-4 text-primary-fixed-dim font-bold">{ours}</td>
                  <td className="p-3 sm:p-4">{theirs}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    </Section>
  );
}
