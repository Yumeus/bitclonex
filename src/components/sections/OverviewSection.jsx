import { overviewPoints, terminalLines } from "@/data";
import { Container, Icon, Section } from "@/components/ui";

export function OverviewSection() {
  return (
    <Section bg="bg-surface-container-lowest" border>
      <Container className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
        <div className="lg:col-span-6 flex flex-col gap-space-md">
          <span className="font-label-badge text-label-badge text-primary-fixed-dim uppercase tracking-wider">
            Architecture Overview
          </span>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface font-bold">
            Turnkey Exchange Platform with Complete Sovereign Ownership
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            Bitclonex delivers a battle-tested Binance clone script architected for institutional
            trading desks and Web3 startups seeking rapid market entry. Unlike closed SaaS
            aggregators, our turnkey software provides full source code ownership, private cloud
            deployment, and zero vendor lock-in.
          </p>
          <div className="flex flex-col gap-3 pt-2">
            {overviewPoints.map(([title, desc]) => (
              <div key={title} className="flex items-start gap-3">
                <Icon name="check_circle" className="text-primary-container text-xl mt-0.5" />
                <div>
                  <strong className="text-on-surface block font-headline-sm text-[16px]">
                    {title}
                  </strong>
                  <p className="text-on-surface-variant font-body-sm">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-6 bg-surface-container rounded-xl p-space-md border border-outline-variant font-label-code-md text-xs shadow-2xl">
          <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-outline-variant/50 text-outline">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-error-container" />
              <span className="w-3 h-3 rounded-full bg-surface-variant" />
              <span className="w-3 h-3 rounded-full bg-primary-container" />
              <span className="ml-2 font-mono text-on-surface">bitclonex-core-daemon.go</span>
            </div>
            <span>v4.18.2-release</span>
          </div>
          <div className="py-4 space-y-2 text-on-surface-variant leading-relaxed">
            {terminalLines.map(([color, tag, text]) => (
              <p key={tag}>
                <span className={color}>{tag}</span> {text}
              </p>
            ))}
            <p className="text-outline">
              {"// Listening on :8443 (WSS / REST CCXT Compatible Endpoint)"}
            </p>
          </div>
          <div className="bg-surface-container-lowest p-3 rounded border border-outline-variant/30 flex items-center justify-between">
            <span className="text-primary-fixed-dim">
              Health: 100% Passing (142 Microservices)
            </span>
            <span className="text-outline">HA Cluster Active</span>
          </div>
        </div>
      </Container>
    </Section>
  );
}
