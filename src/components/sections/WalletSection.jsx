import { walletCards } from "@/data";
import { Container, Icon, Section, SectionHeader } from "@/components/ui";
import { cardStyles } from "@/lib";

export function WalletSection() {
  return (
    <Section bg="bg-surface-container-lowest">
      <Container className="flex flex-col gap-space-lg">
        <SectionHeader
          badge="Sovereign Vaults"
          title="Cryptographic Wallet Infrastructure & Multi-Chain Node Support"
          desc="Protecting institutional liquidity through hardened multi-signature isolation and native blockchain node clusters."
        />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-gutter">
          {walletCards.map(([icon, title, desc]) => (
            <div
              key={title}
              className="p-space-lg rounded-xl bg-surface-container border border-outline-variant flex flex-col gap-3"
            >
              <div className="w-10 h-10 rounded bg-primary-container/10 flex items-center justify-center text-primary-container">
                <Icon name={icon} />
              </div>
              <h3 className={cardStyles.heading}>{title}</h3>
              <p className={cardStyles.description}>{desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
