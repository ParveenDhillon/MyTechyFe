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
    <section className="py-16 md:py-28 bg-gradient-to-b from-slate-50 to-slate-100 relative overflow-hidden">
  {/* Background decoration */}
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute top-10 left-1/4 w-64 h-64 bg-indigo-100/30 rounded-full blur-3xl" />
    <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-blue-100/30 rounded-full blur-3xl" />
  </div>

  <div className="container mx-auto px-4 relative z-10">
    {/* Header */}
    <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
      <span className="inline-block text-indigo-600 font-semibold text-xs sm:text-sm uppercase tracking-wider mb-3">
        Trusted by Educational Institutions
      </span>

      <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4 md:mb-6">
        Impactful Numbers Behind{" "}
        <span className="text-gradient bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent">
          Smarter School Management
        </span>
      </h2>

      <p className="text-gray-600 text-base sm:text-lg">
        We empower schools with reliable technology to manage admissions,
        academics, communication, and operations — all in one platform.
      </p>
    </div>

    {/* Stats Grid */}
    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="
            relative
            text-center 
            bg-white 
            rounded-3xl 
            border border-gray-200 
            px-4 py-6 sm:p-6 md:p-8
            shadow-sm
            hover:shadow-xl
            hover:-translate-y-1
            transition-all
          "
        >
          {/* Icon */}
          <div className="mx-auto mb-3 sm:mb-4 w-14 h-14 rounded-full bg-gradient-to-br from-indigo-500 to-blue-500 text-white flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
            <stat.icon className="w-7 h-7" />
          </div>

          {/* Counter */}
          <AnimatedCounter
            end={stat.value}
            suffix={stat.suffix}
          />

          {/* Label */}
          <div className="mt-2 font-semibold text-base text-slate-900">
            {stat.label}
          </div>

          {/* Description */}
          <div className="mt-1 text-sm text-gray-600 leading-snug">
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
