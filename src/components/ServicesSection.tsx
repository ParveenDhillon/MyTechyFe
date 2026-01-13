import {
  UserPlus,
  MessageSquareDiffIcon,
  ContactRoundIcon,
  PenLineIcon,
  UserCheck,
  Phone,
  HandshakeIcon,
  Calendar,
  UsersIcon,
  LibraryIcon,
  TrophyIcon,
  Monitor,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: UserPlus,
    title: "Admission Management",
    description:
      "Manage the complete admission lifecycle from inquiries and applications to enrollment with centralized records and automated workflows.",
  },
  {
    icon: MessageSquareDiffIcon,
    title: "Fees Management",
    description:
      "Handle fee structures, online payments, installments, receipts, refunds, and real-time fee tracking across classes and academic years.",
  },
  {
    icon: ContactRoundIcon,
    title: "Attendance",
    description:
      "Track student and staff attendance in real time with class-wise, subject-wise, and automated attendance reports.",
  },
  {
    icon: PenLineIcon,
    title: "Exams & Report Cards",
    description:
      "Plan exams, record marks, generate grades, and publish digital report cards with customizable assessment structures.",
  },
  {
    icon: UserCheck,
    title: "Student Information",
    description:
      "Maintain complete student profiles including academic history, documents, health records, and parent details in one place.",
  },
  {
    icon: Phone,
    title: "Parent-Teacher Portal",
    description:
      "Enable seamless communication between parents and teachers with announcements, performance updates, and meeting scheduling.",
  },
  {
    icon: HandshakeIcon,
    title: "Payroll & Staff",
    description:
      "Manage staff profiles, salaries, deductions, leaves, and payroll processing with compliance-ready reports.",
  },
  {
    icon: Calendar,
    title: "Timetable",
    description:
      "Create and manage class, teacher, and exam timetables efficiently with conflict detection and easy updates.",
  },
  {
    icon: UsersIcon,
    title: "Alumni",
    description:
      "Maintain alumni records, engagement activities, and communication to build long-term relationships beyond graduation.",
  },
  {
    icon: TrophyIcon,
    title: "Activities",
    description:
      "Organize and track co-curricular activities, events, competitions, and student participation records.",
  },
  {
    icon: LibraryIcon,
    title: "Library Management",
    description:
      "Manage books, issue and returns, fines, inventory, and student borrowing history digitally.",
  },
  {
    icon: Monitor,
    title: "Online Classes & Assessments",
    description:
      "Conduct virtual classes, share learning materials, assign assessments, and track student progress online.",
  },
];


const ServicesSection = () => {
  return (
    <section id="services" className="py-12 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Comprehensive IT Solutions for{" "}
            <span className="text-gradient">Modern Schools</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            From admissions to alumni—nurturing every student journey.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="
        group relative bg-white rounded-2xl p-7
        border border-slate-200
        transition-all duration-300
        hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-100 cursor-pointer
      "
            >
              {/* Icon */}
              <div
                className="
          mb-6 inline-flex items-center justify-center
          w-14 h-14 rounded-xl
          bg-blue-50 text-blue-600
          group-hover:bg-blue-600 group-hover:text-white
          transition-colors duration-300 cursor-pointer
        "
              >
                <service.icon className="w-7 h-7" />
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-slate-900 mb-3">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Learn More */}
              <div className="flex items-center text-sm font-medium text-blue-600">
                <span className="relative">
                  Learn more
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-600 transition-all duration-300 group-hover:w-full" />
                </span>
                <ArrowRight className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" />
              </div>

              {/* Hover border accent */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-transparent group-hover:ring-blue-200 transition" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;
