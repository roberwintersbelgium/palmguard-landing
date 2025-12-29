import { motion } from "framer-motion";
import { Check, Zap, Shield, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";

const pricingTiers = [
  {
    name: "Core Protection",
    price: "€995",
    period: "/month",
    description: "Essential security for freelancers and growing businesses",
    icon: Shield,
    popular: false,
    features: [
      "Website firewall & DDoS protection",
      "Basic CDN & performance shielding",
      "Email phishing & spam protection",
      "Weekly security reports",
      "Business-hours support",
    ],
    cta: "Start Protection",
  },
  {
    name: "Advanced Defense",
    price: "€1,995",
    period: "/month",
    description: "Complete security for startups and established organizations",
    icon: Zap,
    popular: true,
    features: [
      "Everything in Core, plus:",
      "Advanced WAF rules & custom policies",
      "Real-time DDoS mitigation",
      "Identity breach monitoring",
      "Dark web credential scanning",
      "Priority 24/7 monitoring",
      "Monthly security audits",
    ],
    cta: "Get Advanced Defense",
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: " Pricing",
    description: "Fully managed security for enterprises",
    icon: Crown,
    popular: false,
    features: [
      "Fully managed security stack",
      "Custom threat intelligence feeds",
      "Dedicated security engineer",
      "Incident response & forensics",
      "SLA-backed uptime guarantees",
      "Compliance & penetration testing",
      "Executive security briefings",
    ],
    cta: "Talk to Security Team",
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-32 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider mb-4 block">
            Pricing
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Investment in Security
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Choose the protection level that matches your organization's needs. 
            All plans include our core security infrastructure.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`relative rounded-2xl p-8 ${
                tier.popular
                  ? "pricing-popular"
                  : "bg-card border border-border"
              }`}
            >
              {/* Popular Badge */}
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-primary text-primary-foreground text-xs font-bold px-4 py-1.5 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Tier Header */}
              <div className="text-center mb-8">
                <div className={`inline-flex p-3 rounded-xl mb-4 ${
                  tier.popular 
                    ? "bg-primary/20" 
                    : "bg-secondary"
                }`}>
                  <tier.icon className={`w-6 h-6 ${tier.popular ? "text-primary" : "text-muted-foreground"}`} />
                </div>
                <h3 className="text-xl font-heading font-semibold text-foreground mb-2">
                  {tier.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {tier.description}
                </p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className={`text-4xl font-heading font-bold ${tier.popular ? "text-gradient" : "text-foreground"}`}>
                    {tier.price}
                  </span>
                  <span className="text-muted-foreground text-sm">{tier.period}</span>
                </div>
              </div>

              {/* Features List */}
              <ul className="space-y-4 mb-8">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 shrink-0 mt-0.5 ${
                      tier.popular ? "text-primary" : "text-muted-foreground"
                    }`} />
                    <span className="text-sm text-foreground/90">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Button
                className={`w-full ${
                  tier.popular
                    ? "btn-primary"
                    : "btn-secondary"
                }`}
              >
                {tier.cta}
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Trust Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center text-sm text-muted-foreground mt-12"
        >
          All plans include 30-day onboarding support and a security assessment. 
          No long-term contracts required.
        </motion.p>
      </div>

      {/* Section Divider */}
      <div className="section-divider mt-32" />
    </section>
  );
};

export default PricingSection;
