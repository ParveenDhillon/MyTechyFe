const HeroSection = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white"
    >
      {/* Background Accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-indigo-200/40 rounded-full blur-[140px]" />
        <div className="absolute -bottom-40 right-1/3 w-[700px] h-[700px] bg-blue-200/40 rounded-full blur-[140px]" />
      </div>

      <div className="container mx-auto px-4 pt-28 relative z-10">
        <div className="max-w-4xl mx-auto text-center">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 mb-8 rounded-full border border-indigo-200 bg-white/70 backdrop-blur-sm shadow-sm">
            <span className="w-2 h-2 rounded-full bg-indigo-600 animate-pulse" />
            <span className="text-sm font-semibold text-indigo-700">
              All-in-One School Management Platform
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
            Run Your School
            <br />
            <span className="bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
              Smarter, Faster & Stress-Free
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-base md:text-xl text-slate-600 max-w-2xl mx-auto mb-12 leading-relaxed">
            A modern cloud-based ERP that simplifies admissions, academics,
            attendance, fees, exams, and parent communication — all from a single,
            intelligent dashboard.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() => scrollToSection("#demo")}
              className="
                px-8 py-4 rounded-xl
                bg-gradient-to-r from-indigo-600 to-blue-600
                text-white font-semibold
                shadow-lg shadow-indigo-600/30
                hover:shadow-xl hover:shadow-indigo-600/40
                hover:scale-[1.03]
                transition-all duration-300
              "
            >
              Request Free Demo
            </button>

            <button
              onClick={() => scrollToSection("#features")}
              className="
                px-8 py-4 rounded-xl
                border border-slate-300
                bg-white/70 backdrop-blur-sm
                text-slate-700 font-medium
                hover:bg-slate-100
                hover:border-slate-400
                transition-all duration-300
              "
            >
              Explore Features
            </button>
          </div>

          {/* Trust Stats */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-10">
            {[
              { value: "500+", label: "Schools Onboarded" },
              { value: "40%", label: "Admin Work Reduced" },
              { value: "99.9%", label: "System Uptime" },
              { value: "24/7", label: "Dedicated Support" },
            ].map((stat, i) => (
              <div
                key={i}
                className="group text-center transition-transform hover:-translate-y-1"
              >
                <div className="text-3xl font-bold text-slate-900 mb-1">
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
