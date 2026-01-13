import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-white"
    >
      {/* Soft background accents */}
      <div className="absolute inset-0">
        <div className="absolute top-[-15%] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-blue-100 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-20%] right-1/2 translate-x-1/2 w-[600px] h-[600px] bg-indigo-100 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 pt-24 relative z-10">
        <div className="max-w-4xl mx-auto text-center">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-blue-200 bg-blue-50">
            <span className="w-2 h-2 rounded-full bg-blue-600" />
            <span className="text-sm font-medium text-blue-700">
              All-in-One School Management Software
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-slate-900 leading-tight mb-6">
            Manage Your School
            <br />
            <span className="text-blue-600">Smarter & Faster</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-12">
            A powerful cloud-based platform to handle admissions, students, fees,
            attendance, exams, and parent communication — all from one dashboard.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() => scrollToSection("#contact")}
              className="px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-lg shadow-blue-600/30 transition-all"
            >
              Request Free Demo
            </button>

            <button
              onClick={() => scrollToSection("#features")}
              className="px-8 py-4 rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-100 transition-all"
            >
              Explore Features
            </button>
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-10">
            {[
              { value: "500+", label: "Schools Onboarded" },
              { value: "40%", label: "Admin Work Reduced" },
              { value: "99.9%", label: "System Uptime" },
              { value: "24/7", label: "Dedicated Support" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl font-semibold text-slate-900 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-600">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-6 h-10 rounded-full border border-slate-300 flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-slate-400 rounded-full animate-bounce" />
        </div>
      </div>
    </section>

  );
};

export default HeroSection;
