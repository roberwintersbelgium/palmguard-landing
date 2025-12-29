import { motion } from "framer-motion";
import { Cloud, Shield, Zap, Clock, FileCheck, Users } from "lucide-react";

const features = [
  {
    icon: Cloud,
    title: "Enterprise-Grade Infrastructure",
    description: "Built on globally distributed cloud infrastructure for maximum reliability and performance.",
  },
  {
    icon: Shield,
    title: "Zero-Trust Security Model",
    description: "Every request is verified, every connection is encrypted, every access is authenticated.",
  },
  {
    icon: Zap,
    title: "Real-Time Threat Intelligence",
    description: "Continuous monitoring with AI-powered threat detection and automatic response.",
  },
  {
    icon: FileCheck,
    title: "GDPR & ISO-Aligned",
    description: "Security practices aligned with international compliance standards and regulations.",
  },
  {
    icon: Clock,
    title: "24/7 Monitoring & Response",
    description: "Round-the-clock security operations center with immediate incident response.",
  },
  {
    icon: Users,
    title: "Dedicated Security Team",
    description: "Expert security engineers available to support your organization's unique needs.",
  },
];

const WhyUsSection = () => {
  return (
    <section id="why-us" className="py-32 relative">
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
            Why Palm Guard
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Security Without Compromise
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We combine cutting-edge technology with proven security practices 
            to deliver protection you can trust.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-500 h-full">
                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 rounded-2xl" style={{ background: "radial-gradient(ellipse at center, hsl(187 100% 42% / 0.1), transparent 70%)" }} />
                </div>

                <div className="relative z-10">
                  <div className="feature-icon mb-6 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-heading font-semibold text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 p-8 rounded-2xl bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border border-primary/20"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "99.99%", label: "Uptime SLA" },
              { value: "< 50ms", label: "Response Time" },
              { value: "1M+", label: "Threats Blocked Daily" },
              { value: "500+", label: "Protected Organizations" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
              >
                <div className="text-3xl md:text-4xl font-heading font-bold text-gradient mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Section Divider */}
      <div className="section-divider mt-32" />
    </section>
  );
};

export default WhyUsSection;
