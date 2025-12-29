import { Shield } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card/50">
      <div className="container mx-auto px-6 py-16">
        <div className="mb-12">
          {/* Brand */}
          <div>
            <a href="#" className="flex items-center gap-2 mb-4">
              <Shield className="w-6 h-6 text-primary" />
              <span className="font-heading font-bold text-lg text-foreground">
                Palm Guard<span className="text-primary">.</span>
              </span>
            </a>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Enterprise-grade security for your digital infrastructure.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Palm Guard Security. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-xs text-muted-foreground">
              Built with security-first principles
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
