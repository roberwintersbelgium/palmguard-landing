import { motion } from "framer-motion";
import { Link, Shield, Activity } from "lucide-react";

const steps = [
  {
    number: 1,
    icon: Link,
    title: "Connect Your Systems",
    description: "Link your domains, email infrastructure, and cloud environments to Palm Guard's security platform.",
  },
  {
    number: 2,
    icon: Shield,
    title: "Deploy Protection Layers",
    description: "Our security team configures WAF rules, DDoS mitigation, and threat detection tailored to your infrastructure.",
  },
  {
    number: 3,
    icon: Activity,
    title: "Continuous Monitoring",
    description: "Real-time threat detection and automatic response, with expert security analysts monitoring 24/7.",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-32 relative">
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
            Getting Started
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            How It Works
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Getting protected is simple. Our team handles the complexity 
            so you can focus on your business.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Connection Line */}
            <div className="hidden md:block absolute left-[calc(3rem-1px)] top-12 bottom-12 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-primary/20" />

            <div className="space-y-12">
              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="relative flex items-start gap-8"
                >
                  {/* Step Number */}
                  <div className="relative z-10 shrink-0">
                    <div className="step-number">
                      {step.number}
                    </div>
                    {/* Glow */}
                    <div className="absolute inset-0 blur-xl bg-primary/30 rounded-full" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-2">
                    <div className="flex items-center gap-3 mb-3">
                      <step.icon className="w-5 h-5 text-primary" />
                      <h3 className="text-xl font-heading font-semibold text-foreground">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Visual Element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-20 max-w-3xl mx-auto"
        >
          <div className="relative p-8 rounded-2xl bg-card border border-border overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 opacity-50">
              <motion.div
                className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent"
                animate={{ x: ["-100%", "100%"] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />
            </div>

            <div className="relative z-10 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-4">
                <Activity className="w-4 h-4 text-primary animate-pulse" />
                <span className="text-sm text-primary font-medium">Protection Active</span>
              </div>
              <p className="text-muted-foreground">
                Average deployment time: <span className="text-foreground font-semibold">24-48 hours</span>
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Section Divider */}
      <div className="section-divider mt-32" />
    </section>
  );
};

export default HowItWorksSection;
