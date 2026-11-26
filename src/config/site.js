/**
 * Global site metadata, branding, and legal copy configuration.
 */
export const siteConfig = {
  name: "Bitclonex",
  shortBadge: "CORE",
  fullName: "Bitclonex Web3 Solutions",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://bitclonex.com",
  title: "Binance Clone Script | Bitclonex Web3 Solutions",
  description:
    "Launch a customizable cryptocurrency exchange platform with advanced trading capabilities, integrated wallets, and scalable architecture.",
  keywords: [
    "Binance Clone Script",
    "Cryptocurrency Exchange Software",
    "White Label Crypto Exchange",
    "Spot and Futures Trading Engine",
    "P2P Crypto Exchange Script",
    "Bitclonex Web3 Solutions",
  ],
  logo: {
    alt: "Bitclonex Web3 Solutions Logo",
  },
  contact: {
    whatsappUrl: process.env.NEXT_PUBLIC_WHATSAPP_URL || "https://api.whatsapp.com",
  },
  footer: {
    summary:
      "Institutional-grade cryptocurrency exchange software and high-throughput Web3 digital asset matching engine architecture. Engineered for sovereign liquidity, non-custodial bridges, and regulatory compliance.",
    badges: ["TPS 100,000+", "Zero-Downtime HA"],
    copyright:
      "© 2024 Bitclonex Web3 Solutions Inc. All rights reserved. Highly confidential enterprise architecture systems.",
    disclaimer:
      "Disclaimer: Bitclonex provides enterprise software frameworks and developer tooling. Clients remain strictly accountable for local sovereign financial licensing and jurisdictional KYC/AML mandates.",
  },
};
