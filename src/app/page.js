import { FloatingActions, Footer, Header } from "@/components/layout";
import { StructuredData } from "@/components/seo";
import {
  ComparisonSection,
  CostFactorsSection,
  CtaSection,
  EngineSection,
  FaqSection,
  FeaturesSection,
  HeroSection,
  HighlightsSection,
  IncludedDeliverablesSection,
  IntegrationsSection,
  LaunchRoadmapSection,
  MobileSection,
  ModulesSection,
  OverviewSection,
  PortalsSection,
  RevenueSection,
  SecuritySection,
  ShowcaseSection,
  TechStackSection,
  WalletSection,
  WhiteLabelSection,
  WhyBitclonexSection,
  WhyChooseSection,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      <StructuredData />
      <Header />

      <main className="w-full pt-16 sm:pt-20 bg-background flex-1 relative">
        <div className="flex flex-col w-full">
          <HeroSection />
          <HighlightsSection />
          <OverviewSection />
          <WhyChooseSection />
          <FeaturesSection />
          <ModulesSection />
          <EngineSection />
          <PortalsSection />
          <WalletSection />
          <MobileSection />
          <SecuritySection />
          <IntegrationsSection />
          <WhiteLabelSection />
          <RevenueSection />
          <TechStackSection />
          <LaunchRoadmapSection />
          <CostFactorsSection />
          <ComparisonSection />
          <IncludedDeliverablesSection />
          <WhyBitclonexSection />
          <ShowcaseSection />
          <FaqSection />
          <CtaSection />
        </div>
      </main>

      <FloatingActions />
      <Footer />
    </>
  );
}
