import { useState, useEffect } from "react";
import { Menu, X, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "#home", label: "Overview" },
  { href: "#services", label: "Modules" },
  { href: "#about", label: "Role-based" },
  { href: "#why-us", label: "Why Choose Us" },
  { href: "#integrations", label: "Integration" },
  { href: "#implementation", label: "Implementation" },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");

  /* Active section tracking */
  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map((l) => l.href);
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.querySelector(sections[i]);
        if (el && el.getBoundingClientRect().top <= 100) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/85 backdrop-blur-xl border-b border-slate-200/60">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* LOGO */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#home");
            }}
            className="flex items-center gap-3 group"
          >
            <div className="p-2.5 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 shadow-sm">
              <Code2 className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-slate-900 tracking-tight">
              EduTechyFe
            </span>
          </a>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className={`
                  relative font-medium transition-colors
                  ${
                    activeSection === link.href
                      ? "text-indigo-600"
                      : "text-slate-700 hover:text-indigo-600"
                  }
                `}
              >
                {link.label}
                {activeSection === link.href && (
                  <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-indigo-600 rounded-full" />
                )}
              </button>
            ))}

            <Button
              onClick={() => scrollToSection("#contact")}
              className="
                ml-2 px-6 py-2.5 rounded-xl
                bg-gradient-to-r from-indigo-500 to-purple-600
                text-white font-semibold
                shadow-md hover:shadow-lg
                hover:from-indigo-600 hover:to-purple-700
                transition-all
              "
            >
              Get Demo
            </Button>
          </div>

          {/* MOBILE TOGGLE */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-slate-900" />
            ) : (
              <Menu className="w-6 h-6 text-slate-900" />
            )}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
<div
  className={`md:hidden fixed left-0 right-0 top-16 mx-4 rounded-2xl shadow-xl overflow-hidden
    bg-white/95 backdrop-blur-md
    transform transition-all duration-300 ease-out
    ${isMobileMenuOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}`}
>
  <div className="py-4 flex flex-col gap-2">
    {/* Nav Links */}
    {navLinks.map((link) => (
      <a
        key={link.href}
        href={link.href}
        onClick={(e) => {
          e.preventDefault();
          scrollToSection(link.href);
        }}
        className="
          block px-6 py-3
          text-gray-900 font-medium
          rounded-lg
          hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-600
          hover:text-white
          transition-all duration-300
          transform hover:scale-105
        "
      >
        {link.label}
      </a>
    ))}

    {/* CTA Button */}
    <div className="px-6 pt-4">
      <Button
        className="
          w-full py-3 rounded-xl
          bg-gradient-to-r from-indigo-500 to-purple-600
          text-white font-semibold
          shadow-md hover:shadow-lg
          transform hover:scale-105
          transition-all duration-300
        "
        onClick={() => scrollToSection("#contact")}
      >
        Get Demo
      </Button>
    </div>
  </div>
</div>

    </nav>
  );
};

export default Navbar;
