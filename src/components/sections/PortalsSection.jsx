import { Container, Icon, Section, SectionHeader } from "@/components/ui";
import { cardStyles } from "@/lib";

export function PortalsSection() {
  return (
    <Section>
      <Container className="flex flex-col gap-space-lg">
        <SectionHeader
          badge="Dual Interfaces"
          title="Intuitive User Portal & Command-Center Admin Console"
          desc="Purpose-built ergonomics for both high-net-worth retail users and compliance-driven exchange administrators."
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter">
          {/* User Portal */}
          <div className="p-space-lg rounded-xl bg-surface-container border border-outline-variant/60 flex flex-col gap-4">
            <div className="flex items-center justify-between border-b border-outline-variant/40 pb-3">
              <div>
                <span className="text-primary-fixed-dim text-xs font-label-code-md block">
                  CLIENT EXPERIENCE
                </span>
                <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                  Trader Portal &amp; Portfolio Console
                </h3>
              </div>
              <Icon name="account_circle" className="text-primary-container" />
            </div>
            <div className="bg-surface-container-lowest p-4 rounded-lg flex flex-col gap-3 font-label-code-md">
              <div className="flex justify-between items-center">
                <div>
                  <span className="text-outline text-xs block">Estimated Net Worth</span>
                  <span className="font-headline-md text-headline-md text-on-surface font-bold">
                    $142,850.24{" "}
                    <span className="text-xs text-primary-container">+12.4% this month</span>
                  </span>
                </div>
                <span className="px-2.5 py-1 rounded bg-surface-container text-xs text-on-surface-variant">
                  VIP Level 3
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-2 text-xs">
                <div className="bg-surface-container p-2 rounded">
                  <span className="text-outline block text-[10px]">BTC Allocated</span>
                  <span className="text-on-surface font-bold">1.450 BTC</span>
                </div>
                <div className="bg-surface-container p-2 rounded">
                  <span className="text-outline block text-[10px]">USDT Margin</span>
                  <span className="text-on-surface font-bold">43,620.00</span>
                </div>
                <div className="bg-surface-container p-2 rounded">
                  <span className="text-outline block text-[10px]">2FA Status</span>
                  <span className="text-primary-container font-bold">Enforced (YubiKey)</span>
                </div>
              </div>
            </div>
            <p className={cardStyles.description}>
              Full self-service access: multi-currency deposit/withdrawal flows, transaction
              history, sub-account creation, referral management, and customizable workspace
              widgets.
            </p>
          </div>

          {/* Admin Console */}
          <div className="p-space-lg rounded-xl bg-surface-container border border-outline-variant/60 flex flex-col gap-4">
            <div className="flex items-center justify-between border-b border-outline-variant/40 pb-3">
              <div>
                <span className="text-primary-fixed-dim text-xs font-label-code-md block">
                  EXCHANGE GOVERNANCE
                </span>
                <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                  Super-Admin Command Console
                </h3>
              </div>
              <Icon name="shield" className="text-primary-container" />
            </div>
            <div className="bg-surface-container-lowest p-4 rounded-lg flex flex-col gap-3 font-label-code-md">
              <div className="flex justify-between items-center">
                <div>
                  <span className="text-outline text-xs block">24h Exchange Turnaround Volume</span>
                  <span className="font-headline-md text-headline-md text-on-surface font-bold">
                    $14,820,490{" "}
                    <span className="text-xs text-primary-container">Revenue: $11.8K</span>
                  </span>
                </div>
                <span className="px-2.5 py-1 rounded bg-primary-container/10 text-xs text-primary-fixed-dim">
                  All Nodes Healthy
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-2 text-xs">
                <div className="bg-surface-container p-2 rounded">
                  <span className="text-outline block text-[10px]">Pending KYC</span>
                  <span className="text-on-surface font-bold">18 Documents</span>
                </div>
                <div className="bg-surface-container p-2 rounded">
                  <span className="text-outline block text-[10px]">Maker / Taker</span>
                  <span className="text-on-surface font-bold">0.08% / 0.12%</span>
                </div>
                <div className="bg-surface-container p-2 rounded">
                  <span className="text-outline block text-[10px]">Anomaly Score</span>
                  <span className="text-primary-container font-bold">0 Alerts Active</span>
                </div>
              </div>
            </div>
            <p className={cardStyles.description}>
              Granular controls over fee structures, market pairs, cold-to-hot float thresholds, KYC
              approval workflows, and emergency kill-switches with dual-admin cryptographic
              sign-off.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
