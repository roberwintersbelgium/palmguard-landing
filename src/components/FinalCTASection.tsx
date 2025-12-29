import { motion } from "framer-motion";
import { Shield, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const FinalCTASection = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent" />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-20"
          style={{
            background: "radial-gradient(circle, hsl(187 100% 42% / 0.3) 0%, transparent 60%)",
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex p-4 rounded-2xl bg-primary/10 border border-primary/30 mb-8"
          >
            <Shield className="w-10 h-10 text-primary" />
          </motion.div>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6"
          >
            Security is not optional.{" "}
            <span className="text-gradient">Make it invisible.</span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-muted-foreground mb-10 leading-relaxed"
          >
            Join hundreds of organizations that trust Palm Guard to protect their 
            digital infrastructure. Start with a security consultation today.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button className="btn-primary text-base group">
              Request Consultation
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" className="btn-secondary text-base">
              Start Protection
            </Button>
          </motion.div>

          {/* Trust Note */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-8 text-sm text-muted-foreground"
          >
            Free security assessment included • No commitment required
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
