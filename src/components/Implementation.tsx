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
    <section
      id="implementation"
      className="py-20 bg-slate-50 border-t border-slate-200"
    >
      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="max-w-3xl mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-900">
            Smooth Implementation.
            <span className="text-blue-600"> Zero Disruption.</span>
          </h2>

          <p className="mt-3 text-slate-600 text-lg">
            A simple, proven rollout process designed for real academic environments.
          </p>
        </div>

        {/* Process Row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

          {steps.map((step, index) => (
            <div
              key={index}
              className="
            flex items-start gap-4
            bg-white
            border border-slate-200
            rounded-xl
            p-5
            hover:shadow-sm
            transition
          "
            >
              {/* Icon */}
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center">
                <step.icon className="w-5 h-5" />
              </div>

              {/* Text */}
              <div>
                <h3 className="text-sm font-semibold text-slate-900">
                  {step.title}
                </h3>

                <p className="mt-1 text-sm text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}

        </div>

        {/* Trust Line */}
        <div className="mt-10 text-sm text-slate-500">
          Average go-live time: <span className="font-medium text-slate-700">2–4 weeks</span> · No downtime · Full staff support
        </div>

      </div>
    </section>

  );
}
