import { useEffect, useRef, useState } from "react";
import { School, Users, BookOpen, GraduationCap } from "lucide-react";

/* =======================
   DATA CONFIG
======================= */

const stats = [
  {
    icon: School,
    value: 5,
    suffix: "+",
    label: "Years in Education Tech",
    description: "Supporting schools since 2014",
  },
  {
    icon: Users,
    value: 100,
    suffix: "+",
    label: "Partner Schools",
    description: "Institutions using our platform daily",
  },
  {
    icon: BookOpen,
    value: 20000,
    suffix: "+",
    label: "Students Managed",
    description: "Admissions, academics & attendance",
  },
  {
    icon: GraduationCap,
    value: 50,
    suffix: "+",
    label: "Cities Covered",
    description: "Trusted across multiple regions",
  },
];

/* =======================
   ANIMATED COUNTER
======================= */

type AnimatedCounterProps = {
  end: number;
  duration?: number;
  suffix?: string;
};

const AnimatedCounter = ({
  end,
  duration = 2000,
  suffix = "",
}: AnimatedCounterProps) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));

      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, [isVisible, end, duration]);

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-bold text-accent">
      {count.toLocaleString()}
      {suffix}
    </div>
  );
};

/* =======================
   STATS SECTION
======================= */

const StatsSection = () => {
  return (
    <section className="py-20 md:py-28 hero-gradient hero-pattern relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-1/4 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
            Trusted by Educational Institutions
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-950 mb-6">
            Impactful Numbers Behind{" "}
            <span className="text-accent">
              Smarter School Management
            </span>
          </h2>

          <p className="text-gray-700 text-lg">
            We empower schools with reliable technology to manage admissions,
            academics, communication, and operations — all in one platform.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 md:p-8 bg-white/70 backdrop-blur-sm rounded-2xl border border-gray-200 hover:shadow-lg transition-all"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-accent/15 text-accent mb-4">
                <stat.icon className="w-7 h-7" />
              </div>

              <AnimatedCounter
                end={stat.value}
                suffix={stat.suffix}
              />

              <div className="font-semibold mt-2 text-blue-950">
                {stat.label}
              </div>

              <div className="text-sm text-gray-600 mt-1">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
