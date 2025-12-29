import { motion } from "framer-motion";
import { Shield, Layers, Lock, Eye } from "lucide-react";

const principles = [
  {
    icon: Shield,
    title: "Zero Trust",
    description: "Never trust, always verify. Every request is authenticated and authorized.",
  },
  {
    icon: Layers,
    title: "Defense in Depth",
    description: "Multiple security layers ensure no single point of failure.",
  },
  {
    icon: Lock,
    title: "Encryption Everywhere",
    description: "End-to-end encryption for data at rest and in transit.",
  },
  {
    icon: Eye,
    title: "Continuous Monitoring",
    description: "Real-time visibility into your security posture.",
  },
];

const TrustSection = () => {
  return (
    <section className="py-32 relative">
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
            Trusted by Industry Leaders
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Enterprise Trust
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From startups to enterprises, organizations trust Palm Guard 
            to protect their most critical assets.
          </p>
        </motion.div>

        {/* Logo Placeholder Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-8 mb-20"
        >
          {[1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className="w-32 h-12 rounded-lg bg-secondary/50 border border-border flex items-center justify-center"
            >
              <span className="text-xs text-muted-foreground">Client Logo</span>
            </div>
          ))}
        </motion.div>

        {/* Security Principles */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {principles.map((principle, index) => (
            <motion.div
              key={principle.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center p-6"
            >
              <div className="inline-flex p-3 rounded-xl bg-primary/10 border border-primary/30 mb-4">
                <principle.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-foreground mb-2">
                {principle.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {principle.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 max-w-3xl mx-auto"
        >
          <div className="relative p-8 rounded-2xl bg-card border border-border">
            {/* Quote Mark */}
            <div className="absolute -top-4 left-8 text-6xl text-primary/30 font-serif">"</div>
            
            <div className="relative z-10">
              <p className="text-lg text-foreground/90 mb-6 italic leading-relaxed">
                Since implementing Palm Guard, we've seen a 99.7% reduction in security incidents. 
                Their team operates as an extension of ours, providing expertise we couldn't build in-house.
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary border border-border flex items-center justify-center">
                  <span className="text-sm font-medium text-muted-foreground">CTO</span>
                </div>
                <div>
                  <div className="font-medium text-foreground">Technology Executive</div>
                  <div className="text-sm text-muted-foreground">Series B Fintech Company</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Section Divider */}
      <div className="section-divider mt-32" />
    </section>
  );
};

export default TrustSection;
