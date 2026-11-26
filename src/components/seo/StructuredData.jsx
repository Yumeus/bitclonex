import { siteConfig } from "@/config";
import { faqs } from "@/data";

export function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.fullName,
    url: siteConfig.url,
    description: siteConfig.description,
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Bitclonex Binance Clone Script",
    applicationCategory: "FinanceApplication",
    operatingSystem: "Web, iOS, Android",
    description: siteConfig.description,
    provider: {
      "@type": "Organization",
      name: siteConfig.fullName,
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(([question, answer]) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: {
        "@type": "Answer",
        text: answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
