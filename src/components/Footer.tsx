import {
  LayoutDashboard,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Phone,
  Mail,
  ArrowUp,
  GraduationCap,
} from "lucide-react";

const productLinks = [
  { label: "Features", href: "#features" },
  { label: "Modules", href: "#modules" },
  { label: "Why Our Software", href: "#why-us" },
  { label: "Pricing", href: "#pricing" },
  { label: "Request Demo", href: "#demo" },
];

const moduleLinks = [
  { label: "Admissions CRM", href: "#modules" },
  { label: "Student Management", href: "#modules" },
  { label: "Fee & Accounts", href: "#modules" },
  { label: "Attendance & Exams", href: "#modules" },
  { label: "Parent & Staff Portal", href: "#modules" },
];

const companyLinks = [
  { label: "About Company", href: "#about" },
  { label: "How It Works", href: "#workflow" },
  { label: "Use Cases", href: "#use-cases" },
  { label: "Support", href: "#support" },
  { label: "Contact Sales", href: "#contact" },
];

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
];

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-foreground text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Product Info */}
          <div>
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("#home");
              }}
              className="flex items-center gap-2 mb-6"
            >
              <div className="p-2 rounded-lg bg-accent">
                <GraduationCap className="w-6 h-6 text-accent-foreground" />
              </div>
              <span className="text-xl font-bold">EduTechyFe</span>
            </a>

            <p className="text-primary-foreground/70 leading-relaxed mb-6">
              A modern school management software designed to digitize
              admissions, academics, fees, communication, and reporting —
              all from one powerful platform.
            </p>

            <div className="flex gap-3">
              {socialLinks.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Product</h3>
            <ul className="space-y-3">
              {productLinks.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="text-primary-foreground/70 hover:text-accent transition"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Modules */}
          <div>
            <h3 className="text-lg font-bold mb-6">Core Modules</h3>
            <ul className="space-y-3">
              {moduleLinks.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-accent transition"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact / Sales */}
          <div>
            <h3 className="text-lg font-bold mb-6">Talk to Us</h3>
            <ul className="space-y-4 text-primary-foreground/70">
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5" />
                <span>Sales & Demo Support</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5" />
                <span>sales@schoolerppro.com</span>
              </li>
              <li>
                <a
                  href="#demo"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("#demo");
                  }}
                  className="inline-block mt-4 px-6 py-3 rounded-lg bg-accent text-accent-foreground font-medium hover:opacity-90 transition"
                >
                  Request Free Demo
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/60 text-sm">
            © {new Date().getFullYear()} EduTechyFe
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-primary-foreground/60 hover:text-accent">
              Privacy Policy
            </a>
            <a href="#" className="text-primary-foreground/60 hover:text-accent">
              Terms of Use
            </a>
          </div>
        </div>
      </div>

      {/* Scroll to Top */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 w-12 h-12 rounded-full bg-accent text-accent-foreground shadow-lg hover:-translate-y-1 transition z-40 flex items-center justify-center"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </footer>
  );
};

export default Footer;
