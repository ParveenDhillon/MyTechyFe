import { useState, useEffect } from "react";
import { Menu, X, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "#home", label: "Overview" },
  { href: "#services", label: "Modules" },
  { href: "#about", label: "Role-based" },
  { href: "#why-us", label: "Why Choose Us" },
  { href: "#integrations", label: "Integration" },
  { href: "#implementation", label: "Implementation"},
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? "bg-card/95 backdrop-blur-md shadow-lg"
        : "bg-transparent"
        }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#home");
            }}
            className="flex items-center gap-2 group"
          >
            <div className={`p-2 rounded-lg transition-colors duration-300 ${isScrolled ? "bg-primary" : "bg-accent"
              }`}>
              <Code2 className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className={`text-xl font-bold transition-colors duration-300 ${isScrolled ? "text-foreground" : "text-primary-foreground"
              }`}>
              EduTechyFe
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className={`font-medium transition-colors duration-200 hover:text-accent ${isScrolled ? "text-foreground/80" : "text-primary-foreground/90"
                  }`}
              >
                {link.label}
              </a>
            ))}
            <Button
              variant={isScrolled ? "default" : "hero"}
              size="sm"
              className={`relative overflow-hidden px-5 py-2 rounded-lg font-semibold text-white bg-gradient-to-r from-blue-400 to-blue-500 shadow-md hover:from-green-500 hover:to-green-600 hover:scale-105 transition-all duration-300 transform`}
              onClick={() => scrollToSection("#contact")}
            >
              Get Demo
              {/* Optional animated underline */}
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </Button>

          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className={`w-6 h-6 ${isScrolled ? "text-foreground" : "text-primary-foreground"}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? "text-foreground" : "text-primary-foreground"}`} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-card rounded-lg shadow-xl mb-4 animate-fade-in overflow-hidden">
            <div className="py-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className="block px-6 py-3 text-foreground hover:bg-secondary transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="px-6 pt-4">
                <Button
                  variant="default"
                  className="w-full bg-gradient-to-r from-blue-400 to-blue-500 shadow-md hover:from-green-500 hover:to-green-600"
                  onClick={() => scrollToSection("#contact")}
                >
                  Get Demo
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
