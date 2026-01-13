import { Search, Database, GraduationCap, Rocket } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Understand Your School",
    description:
      "We review your academic structure, classes, fee setup, and daily workflows to plan a smooth rollout.",
  },
  {
    icon: Database,
    title: "Import Your Data",
    description:
      "Student records, staff details, classes, and fee data are securely migrated without any data loss.",
  },
  {
    icon: GraduationCap,
    title: "Train Your Team",
    description:
      "Simple, role-based training for admins, teachers, and staff so everyone is confident from day one.",
  },
  {
    icon: Rocket,
    title: "Launch & Support",
    description:
      "We go live with your system and provide hands-on support to ensure everything runs smoothly.",
  },
];

export default function ImplementationTimeline() {
  return (
    <section id="implementation" className="py-16 md:py-20 bg-slate-50">
      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block mb-4 text-sm font-semibold uppercase tracking-wide text-blue-600">
            Implementation Process
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-slate-900 mb-5">
            Get Started Without Disrupting
            <span className="text-blue-600 block">
              Your Academic Schedule
            </span>
          </h2>

          <p className="text-lg text-slate-600">
            Our step-by-step onboarding ensures your school goes digital
            smoothly, safely, and on time.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-6xl mx-auto">

          {/* Connector Line */}
          <div className="hidden md:block absolute top-12 left-0 right-0 h-px bg-slate-300" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            {steps.map((step, index) => (
              <div key={index} className="text-center relative">

                {/* Icon */}
                <div className="relative z-10 mx-auto mb-4 w-20 h-20 rounded-2xl bg-white border border-slate-200 flex items-center justify-center shadow-sm">
                  <step.icon className="w-9 h-9 text-blue-600" />
                </div>

                {/* Step */}
                <div className="text-sm font-semibold text-blue-600">
                  Step {index + 1}
                </div>

                {/* Title */}
                <h3 className="mt-2 text-lg font-semibold text-slate-900">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-sm text-slate-600 leading-relaxed px-3">
                  {step.description}
                </p>

              </div>
            ))}
          </div>
        </div>

        {/* Reassurance */}
        <div className="mt-20 max-w-4xl mx-auto text-center bg-white border border-slate-200 rounded-2xl p-10 shadow-sm">
          <h3 className="text-2xl font-semibold text-slate-900 mb-3">
            Live in Weeks — Not Months
          </h3>
          <p className="text-slate-600 max-w-2xl mx-auto">
            With our proven onboarding approach, schools experience quick
            adoption, minimal downtime, and long-term operational success.
          </p>
        </div>

      </div>
    </section>
  );
}
