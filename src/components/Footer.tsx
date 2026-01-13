import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Phone,
  Mail,
  ArrowUp,
  GraduationCap,
} from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-950 text-slate-300 relative">

      {/* Top CTA Strip */}
      <div className="border-b border-white/10">
        <div className="container mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-semibold text-white">
              Ready to modernize your school?
            </h3>
            <p className="text-slate-400 mt-1">
              See how EduTechyFe fits your academic workflow.
            </p>
          </div>

          <button
            onClick={() => scrollToSection("#demo")}
            className="px-7 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition"
          >
            Request a Demo
          </button>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}
          <div>
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("#home");
              }}
              className="flex items-center gap-3 mb-5"
            >
              <div className="p-2 rounded-lg bg-blue-600">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-semibold text-white">
                EduTechyFe
              </span>
            </a>

            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              A modern school management platform helping institutions
              streamline admissions, academics, fees, communication, and reporting.
            </p>

            <div className="flex gap-3 mt-6">
              {[
                { icon: Facebook, label: "Facebook" },
                { icon: Twitter, label: "Twitter" },
                { icon: Linkedin, label: "LinkedIn" },
                { icon: Instagram, label: "Instagram" },
              ].map(({ icon: Icon, label }, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label={label}
                  title={label}
                  className="w-9 h-9 rounded-md bg-white/5 hover:bg-white/10 flex items-center justify-center transition"
                >
                  <Icon className="w-4 h-4 text-slate-300" />
                </a>
              ))}
            </div>

          </div>

          {/* Product */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-5 uppercase tracking-wide">
              Product
            </h4>
            <ul className="space-y-3 text-sm">
              {["Features", "Modules", "Why Choose Us", "Pricing", "Demo"].map(
                (item, i) => (
                  <li key={i}>
                    <a
                      href="#"
                      className="hover:text-white transition"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Modules */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-5 uppercase tracking-wide">
              Solutions
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                "Admissions CRM",
                "Student Management",
                "Fee & Accounts",
                "Attendance & Exams",
                "Parent & Staff Portal",
              ].map((item, i) => (
                <li key={i}>
                  <a href="#" className="hover:text-white transition">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-5 uppercase tracking-wide">
              Contact
            </h4>

            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4" />
                <span>Sales & Demo Support</span>
              </li>

              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4" />
                <span>sales@schoolerppro.com</span>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-400">
          <span>
            © {new Date().getFullYear()} EduTechyFe. All rights reserved.
          </span>

          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition">
              Privacy
            </a>
            <a href="#" className="hover:text-white transition">
              Terms
            </a>
            <a href="#" className="hover:text-white transition">
              Security
            </a>
          </div>
        </div>
      </div>

      {/* Scroll To Top */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 w-11 h-11 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-lg transition flex items-center justify-center z-40"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-4 h-4" />
      </button>
    </footer>
  );
};

export default Footer;
