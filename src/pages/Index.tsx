import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProtectionSection from "@/components/ProtectionSection";
import WhyUsSection from "@/components/WhyUsSection";
import PricingSection from "@/components/PricingSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import TrustSection from "@/components/TrustSection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Palm Guard Security | Enterprise-Grade Digital Protection</title>
        <meta 
          name="description" 
          content="Enterprise-grade protection for your websites, email infrastructure, and digital identities. 24/7 monitoring, zero-trust architecture, and real-time threat detection." 
        />
        <meta name="keywords" content="cybersecurity, website protection, email security, DDoS mitigation, WAF, identity protection, enterprise security" />
        <link rel="canonical" href="https://palmguard.security" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Palm Guard Security | Enterprise-Grade Digital Protection" />
        <meta property="og:description" content="Enterprise-grade protection for your digital infrastructure. Zero-trust architecture with 24/7 monitoring." />
        <meta property="og:type" content="website" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Palm Guard Security",
            "description": "Enterprise-grade cybersecurity solutions for websites, email, and digital identities.",
            "url": "https://palmguard.security",
            "sameAs": [],
            "offers": {
              "@type": "AggregateOffer",
              "priceCurrency": "EUR",
              "lowPrice": "995",
              "highPrice": "1995",
              "offerCount": "3"
            }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <HeroSection />
          <ProtectionSection />
          <WhyUsSection />
          <PricingSection />
          <HowItWorksSection />
          <TrustSection />
          <FinalCTASection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
