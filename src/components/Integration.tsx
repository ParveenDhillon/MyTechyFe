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
      className="py-12 md:py-24 bg-muted/30"
    >
      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
              Integrations & Payments
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Everything Connects.{" "}
              <span className="text-gradient">
                Nothing Feels Separate.
              </span>
            </h2>

            <p className="text-muted-foreground text-lg max-w-xl">
              A unified school platform that seamlessly connects payments,
              communication, learning tools, and data — all powered by AI.
            </p>

            <button className="mt-8 inline-flex items-center gap-3 px-7 py-4 rounded-full bg-primary text-primary-foreground font-semibold hover:scale-105 transition-transform">
              View All Integrations
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          {/* Visual Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {integrations.map((item, index) => (
              <div
                key={index}
                className="group rounded-2xl border border-border bg-card p-6 hover:shadow-lg transition-all"
              >
                <div
                  className={`w-14 h-14 rounded-xl ${item.bg} flex items-center justify-center mb-5`}
                >
                  <item.icon className={`w-7 h-7 ${item.accent}`} />
                </div>

                <h3 className="text-lg font-bold text-foreground mb-2">
                  {item.title}
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom strip */}
        <div className="mt-16 rounded-2xl bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 p-8 md:p-12 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-3">
            Built to Plug Into Your Existing Ecosystem
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Whether it’s payments, communication, learning tools, or analytics —
            our platform adapts to how your school already works.
          </p>
        </div>

      </div>
    </section>
  );
}
