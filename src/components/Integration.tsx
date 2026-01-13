import {
  CreditCard,
  Mail,
  Video,
  Database,
  ArrowRight,
} from "lucide-react";

const integrations = [
  {
    icon: CreditCard,
    title: "Payments & Billing",
    description:
      "Collect fees, issue refunds, auto-generate receipts, and track transactions across branches with secure payment gateways.",
    accent: "text-green-600",
    bg: "bg-green-500/10",
  },
  {
    icon: Mail,
    title: "Email & SMS Automation",
    description:
      "Automated alerts for admissions, attendance, fees, exams, and announcements using smart templates.",
    accent: "text-blue-600",
    bg: "bg-blue-500/10",
  },
  {
    icon: Video,
    title: "Online Classes & Calendars",
    description:
      "Attach live class links, sync academic calendars, and manage virtual classrooms effortlessly.",
    accent: "text-purple-600",
    bg: "bg-purple-500/10",
  },
  {
    icon: Database,
    title: "Data, APIs & Integrations",
    description:
      "Export CSV/XLS data, connect third-party tools, and automate workflows using APIs & webhooks.",
    accent: "text-orange-600",
    bg: "bg-orange-500/10",
  },
];

export default function IntegrationsSection() {
  return (
    <section
  id="integrations"
  className="py-16 md:py-28 bg-gradient-to-b from-slate-50 to-slate-100 relative overflow-hidden"
>
  <div className="container mx-auto px-4">

    {/* Header */}
    <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
      <div>
        <span className="inline-block text-indigo-600 font-semibold text-sm uppercase tracking-wider mb-4">
          Integrations & Payments
        </span>

        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
          Everything Connects.{" "}
          <span className="text-gradient bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent">
            Nothing Feels Separate.
          </span>
        </h2>

        <p className="text-lg md:text-xl text-slate-600 max-w-xl">
          A unified school platform that seamlessly connects payments,
          communication, learning tools, and data — all powered by AI.
        </p>

        <button className="mt-8 inline-flex items-center gap-3 px-7 py-4 rounded-full bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-semibold hover:scale-105 transition-transform shadow-lg">
          View All Integrations
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>

      {/* Visual Grid */}
      <div className="grid sm:grid-cols-2 gap-6">
        {integrations.map((item, index) => (
          <div
            key={index}
            className="group relative rounded-3xl border border-slate-200 bg-white p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer"
          >
            {/* Icon */}
            <div
              className={`w-16 h-16 rounded-full flex items-center justify-center mb-5 bg-gradient-to-br from-indigo-500 to-blue-500 text-white transform group-hover:scale-110 transition-transform duration-300`}
            >
              <item.icon className="w-8 h-8" />
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-indigo-500 transition-colors duration-300">
              {item.title}
            </h3>

            {/* Description */}
            <p className="text-slate-600 text-sm leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>

    {/* Bottom strip */}
    <div className="mt-16 rounded-3xl bg-gradient-to-r from-indigo-50 via-blue-50 to-indigo-50 p-10 md:p-16 text-center shadow-inner">
      <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
        Built to Plug Into Your Existing Ecosystem
      </h3>
      <p className="text-slate-600 max-w-2xl mx-auto text-lg">
        Whether it’s payments, communication, learning tools, or analytics — 
        our platform adapts seamlessly to how your school already works.
      </p>
    </div>

  </div>
</section>

  );
}
