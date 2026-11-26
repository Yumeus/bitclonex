import { telemetry } from "@/data";
import { Container, Section } from "@/components/ui";
import { cardStyles } from "@/lib";

export function EngineSection() {
  return (
    <Section bg="bg-surface-container-lowest" border>
      <Container className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
        <div className="lg:col-span-6 flex flex-col gap-space-md">
          <span className="font-label-badge text-label-badge text-primary-fixed-dim uppercase tracking-wider">
            Proprietary Core
          </span>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface font-bold">
            Ultra-Low Latency Order Matching &amp; Global Liquidity Bridges
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            At the heart of the Bitclonex exchange platform is an in-memory matching engine written
            in Go and Rust. Capable of sustaining over 3.5 million transactions per second with
            sub-millisecond execution times, our architecture prevents order book queuing during high
            market volatility.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-surface-container p-space-md rounded-lg">
              <span className="font-label-code-lg text-label-code-lg text-primary-container font-bold">
                {"< 0.4ms"}
              </span>
              <span className="text-on-surface-variant block font-body-sm text-xs pt-1">
                Average Order Processing Latency
              </span>
            </div>
            <div className="bg-surface-container p-space-md rounded-lg">
              <span className="font-label-code-lg text-label-code-lg text-primary-container font-bold">
                FIX 4.4 / WSS
              </span>
              <span className="text-on-surface-variant block font-body-sm text-xs pt-1">
                Institutional Connectivity Protocol
              </span>
            </div>
          </div>
          <p className={cardStyles.description}>
            Connect seamlessly to premier Tier-1 liquidity providers including Binance, OKX, and
            Kraken via aggregated API bridges, ensuring razor-thin bid/ask spreads from day one.
          </p>
        </div>

        <div className="lg:col-span-6 bg-surface-container rounded-xl p-space-lg border border-outline-variant flex flex-col gap-4">
          <div className="flex items-center justify-between border-b border-outline-variant/40 pb-3">
            <span className={cardStyles.heading}>Engine Throughput Telemetry</span>
            <span className="font-label-badge text-label-badge text-primary-fixed-dim bg-primary-container/10 px-2.5 py-1 rounded">
              STRESS TEST BENCHMARK
            </span>
          </div>
          <div className="space-y-3 font-label-code-md text-xs">
            {telemetry.map(([label, value, width]) => (
              <div key={label}>
                <div className="flex justify-between text-on-surface-variant mb-1">
                  <span>{label}</span>
                  <span className="text-primary-container">{value}</span>
                </div>
                <div className="w-full bg-surface-container-high h-2 rounded-full overflow-hidden">
                  <div className={`bg-primary-container h-full ${width}`} />
                </div>
              </div>
            ))}
          </div>
          <div className="bg-surface-container-lowest p-3 rounded text-on-surface-variant text-xs font-label-code-md">
            Aggregate Liquidity Source: Binance Broker API + Kraken Institutional + Custom Darkpool
            Engine.
          </div>
        </div>
      </Container>
    </Section>
  );
}
