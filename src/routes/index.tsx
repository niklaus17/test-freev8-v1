import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/webcase/Hero";
import { SocialProof } from "@/components/webcase/SocialProof";
import { WhatYouGet } from "@/components/webcase/WhatYouGet";
import { Testimonials } from "@/components/webcase/Testimonials";
import { HowItWorks } from "@/components/webcase/HowItWorks";
import { WhoItsFor } from "@/components/webcase/WhoItsFor";
import { Authority } from "@/components/webcase/Authority";
import { Faq } from "@/components/webcase/Faq";
import { FinalCta } from "@/components/webcase/FinalCta";
import { Footer } from "@/components/webcase/Footer";
import { SignupProvider } from "@/components/webcase/SignupContext";
import { SignupModal } from "@/components/webcase/SignupModal";
import { StickyCta } from "@/components/webcase/StickyCta";
import { LiveActivity } from "@/components/webcase/LiveActivity";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Curs Gratuit Web Design — Webcase | Primul Design în 20 Min" },
      {
        name: "description",
        content:
          "Învață web design în 7 zile cu mentor uman. Curs gratuit complet — 4 lecții, 2 teme cu feedback personal, diplomă inclusă. Începe astăzi.",
      },
      { property: "og:title", content: "Curs Gratuit Web Design — Webcase" },
      {
        property: "og:description",
        content:
          "4 lecții video, mentor uman real, diplomă personalizată. 100% gratuit, fără card. Primul design în 20 min.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "/" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Course",
          name: "Curs Gratuit Web Design Webcase",
          description:
            "Curs gratuit de 4 lecții cu mentor uman. Primul design în 20 de minute, diplomă inclusă.",
          provider: {
            "@type": "Organization",
            name: "Webcase",
            sameAs: "/",
          },
          inLanguage: "ro",
          offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "EUR",
            category: "Free",
          },
        }),
      },
    ],
  }),
});

function Index() {
  return (
    <SignupProvider>
      <main className="bg-background">
        <Hero />
        <SocialProof />
        <WhatYouGet />
        <Testimonials />
        <HowItWorks />
        <WhoItsFor />
        <Authority />
        <Faq />
        <FinalCta />
        <Footer />
      </main>
      <SignupModal />
      <LiveActivity />
      <StickyCta />
    </SignupProvider>
  );
}
