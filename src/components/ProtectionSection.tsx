import { motion } from "framer-motion";
import { Globe, Mail, User, Cloud, Shield, Zap, Bot, Database, Lock, Eye, Server, Wifi } from "lucide-react";

const protectionCategories = [
  {
    title: "Website Protection",
    icon: Globe,
    description: "Comprehensive defense for your web applications and infrastructure.",
    features: [
      { icon: Shield, label: "WAF (Web Application Firewall)" },
      { icon: Zap, label: "DDoS Mitigation" },
      { icon: Bot, label: "Bot & Abuse Protection" },
      { icon: Server, label: "CDN-Level Shielding" },
    ],
  },
  {
    title: "Email Security",
    icon: Mail,
    description: "Protect your communication channels from sophisticated threats.",
    features: [
      { icon: Shield, label: "Anti-Phishing Defense" },
      { icon: Lock, label: "Email Spoofing Protection" },
      { icon: Zap, label: "Malware & Ransomware Filtering" },
      { icon: Eye, label: "Threat Intelligence" },
    ],
  },
  {
    title: "Identity & Financials",
    icon: User,
    description: "Safeguard your digital identities and credentials.",
    features: [
      { icon: Eye, label: "Identity Breach Monitoring" },
      { icon: Database, label: "Dark Web Scans" },
      { icon: Lock, label: "Account Takeover Prevention" },
      { icon: Shield, label: "Credit Card Leak" },
    ],
  },
  {
    title: "Cloud & Infrastructure",
    icon: Cloud,
    description: "Enterprise-grade protection for your cloud environments.",
    features: [
      { icon: Wifi, label: "DNS Protection" },
      { icon: Lock, label: "Zero-Trust Access" },
      { icon: Eye, label: "Threat Intelligence Feeds" },
      { icon: Server, label: "Infrastructure Monitoring" },
    ],
  },
];

const ProtectionSection = () => {
  return (
    <section id="protection" className="py-32 relative">
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
            Comprehensive Protection
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            What We Protect
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Multi-layered security covering every aspect of your digital presence.
          </p>
        </motion.div>

        {/* Protection Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {protectionCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="premium-card p-8 group"
            >
              <div className="relative z-10">
                {/* Category Icon & Title */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="feature-icon shrink-0">
                    <category.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-semibold text-foreground mb-2">
                      {category.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* Features List */}
                <div className="grid grid-cols-2 gap-3">
                  {category.features.map((feature) => (
                    <motion.div
                      key={feature.label}
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-3 p-3 rounded-lg bg-secondary/30 border border-transparent hover:border-primary/20 transition-all duration-300"
                    >
                      <feature.icon className="w-4 h-4 text-primary shrink-0" />
                      <span className="text-sm text-foreground/90">{feature.label}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Section Divider */}
      <div className="section-divider mt-32" />
    </section>
  );
};

export default ProtectionSection;
