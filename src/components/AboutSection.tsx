import { Target, Eye, Rocket, MonitorSpeakerIcon, IdCard, IdCardIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Users,
  User,
  Settings,
} from "lucide-react";
const AboutSection = () => {
  return (
    <section id="about" className="py-16 md:py-20 bg-slate-50">
      <div className="container mx-auto px-4">

        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-slate-900 leading-tight">
            Built for Every Role in Your School
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Smart, role-based access ensures each user sees exactly what they need —
            nothing more, nothing less.
          </p>
        </div>

        {/* Role Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Administrator */}
          <div className="group bg-white rounded-2xl border border-slate-200 p-7 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-100 cursor-pointer">
            <div className="mb-6 w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
              <Settings className="w-7 h-7" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-3">
              Administrators
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Centralized dashboards to manage staff, monitor academics, track
              finances, and make data-driven decisions with confidence.
            </p>
          </div>

          {/* Teachers */}
          <div className="group bg-white rounded-2xl border border-slate-200 p-7 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-100 cursor-pointer">
            <div className="mb-6 w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
              <User className="w-7 h-7" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-3">
              Teachers
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Easily manage classes, mark attendance, assign homework, conduct exams,
              and track student progress from one dashboard.
            </p>
          </div>

          {/* Parents */}
          <div className="group bg-white rounded-2xl border border-slate-200 p-7 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-100 cursor-pointer">
            <div className="mb-6 w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
              <Users className="w-7 h-7" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-3">
              Parents
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Stay informed with real-time access to attendance, results, fees,
              announcements, and direct communication with teachers.
            </p>
          </div>

          {/* Students */}
          <div className="group bg-white rounded-2xl border border-slate-200 p-7 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-100 cursor-pointer">
            <div className="mb-6 w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
              <IdCardIcon className="w-7 h-7" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-3">
              Students
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              View timetables, submit assignments, check exam schedules, and access
              learning resources anytime, anywhere.
            </p>
          </div>

        </div>
      </div>
    </section>

  );
};

export default AboutSection;
