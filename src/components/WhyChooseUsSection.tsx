import {
  Layers,
  Brain,
  Database,
  MessageSquare,
  ShieldCheck,
  Headphones,
  CheckCircleIcon,
} from "lucide-react";

const features = [
  {
    icon: Layers,
    title: "All-in-One School Platform",
    description:
      "Admissions, academics, fees, attendance, exams, and communication — all managed from one unified system.",
  },
  {
    icon: Brain,
    title: "Smart Automation & Insights",
    description:
      "Automated workflows, performance tracking, and actionable insights to reduce manual effort and errors.",
  },
  {
    icon: Database,
    title: "Single Source of Truth",
    description:
      "Centralized and secure data for students, staff, classes, finances, and reports — always up to date.",
  },
  {
    icon: MessageSquare,
    title: "Built-in Communication",
    description:
      "Real-time messaging, alerts, and announcements connecting admins, teachers, parents, and students.",
  },
  {
    icon: ShieldCheck,
    title: "Secure & Reliable",
    description:
      "Role-based access, data security, regular backups, and high availability you can trust.",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    description:
      "Implementation assistance, training, and ongoing support to ensure long-term success.",
  },
];

const WhyChooseUsSection = () => {
  return (
    <section id="why-us" className="py-16 md:py-20 bg-slate-50">
      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block mb-4 text-sm font-semibold uppercase tracking-wide text-blue-600">
            Why Schools Choose Us
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-slate-900 mb-5">
            A Smarter Way to
            <span className="text-blue-600"> Manage Your School</span>
          </h2>

          <p className="text-lg text-slate-600">
            Designed specifically for educational institutions to simplify
            operations, improve communication, and support better decision-making.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl border border-slate-200 p-8 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-100"
            >
              {/* Icon */}
              <div className="mb-6 w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <feature.icon className="w-7 h-7" />
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-slate-900 mb-3">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Trust Line */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-2 text-sm text-slate-600 bg-white border border-slate-200 rounded-full px-5 py-3 shadow-sm">
            <CheckCircleIcon className="w-5 h-5 text-blue-600" />
            Trusted by schools for smooth operations and better outcomes
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUsSection;
