import { useEffect, useLayoutEffect } from "react";
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
  // Function to scroll to hash element
  const scrollToHash = () => {
    const hash = window.location.hash;
    if (hash) {
      // Remove the # from the hash
      const id = hash.substring(1);
      const element = document.getElementById(id);
      
      if (element) {
        // Get navbar height (h-20 = 80px)
        const navbarHeight = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
        return true;
      }
    }
    return false;
  };

  // Handle hash on initial page load (useLayoutEffect to run before paint)
  useLayoutEffect(() => {
    // Retry mechanism to handle cases where DOM isn't fully rendered yet
    let attempts = 0;
    const maxAttempts = 10;
    
    const tryScroll = () => {
      attempts++;
      const success = scrollToHash();
      
      if (!success && attempts < maxAttempts) {
        // Retry after a short delay if element not found
        setTimeout(tryScroll, 100);
      }
    };
    
    // Initial delay to ensure React has rendered components
    const timer = setTimeout(tryScroll, 200);
    
    return () => clearTimeout(timer);
  }, []);

  // Handle hash changes when navigating within the page
  useEffect(() => {
    const handleHashChange = () => {
      scrollToHash();
    };

    window.addEventListener('hashchange', handleHashChange);
    
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);
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
