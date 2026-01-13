import { Target, Eye, Rocket, MonitorSpeakerIcon, IdCard, IdCardIcon } from "lucide-react";
import {
  Users,
  User,
  Settings,
} from "lucide-react";
const AboutSection = () => {
  return (
    <section id="about" className="pt-4 md:pt-24 pb-4 bg-gradient-to-b from-slate-50 to-slate-100">
  <div className="container mx-auto px-4">

    {/* Section Header */}
    <div className="max-w-3xl mx-auto text-center mb-20">
      <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
        Built for Every Role in Your School
      </h2>
      <p className="mt-4 text-lg md:text-xl text-slate-600">
        Smart, role-based access ensures each user sees exactly what they need — nothing more, nothing less.
      </p>
    </div>

    {/* Role Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

      {/* Administrator */}
      <div className="group bg-white rounded-3xl p-8 shadow-lg border border-slate-200 hover:shadow-2xl transition-all duration-300 cursor-pointer">
        <div className="mb-6 w-16 h-16 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white text-2xl transform group-hover:scale-110 transition-transform duration-300">
          <Settings className="w-8 h-8" />
        </div>
        <h3 className="text-xl font-bold mb-3 text-slate-900 group-hover:text-indigo-600 transition-colors duration-300">
          Administrators
        </h3>
        <p className="text-slate-600 text-sm leading-relaxed">
          Centralized dashboards to manage staff, monitor academics, track finances, and make data-driven decisions with confidence.
        </p>
      </div>

      {/* Teachers */}
      <div className="group bg-white rounded-3xl p-8 shadow-lg border border-slate-200 hover:shadow-2xl transition-all duration-300 cursor-pointer">
        <div className="mb-6 w-16 h-16 rounded-full bg-gradient-to-br from-green-400 to-teal-500 flex items-center justify-center text-white text-2xl transform group-hover:scale-110 transition-transform duration-300">
          <User className="w-8 h-8" />
        </div>
        <h3 className="text-xl font-bold mb-3 text-slate-900 group-hover:text-green-500 transition-colors duration-300">
          Teachers
        </h3>
        <p className="text-slate-600 text-sm leading-relaxed">
          Easily manage classes, mark attendance, assign homework, conduct exams, and track student progress from one dashboard.
        </p>
      </div>

      {/* Parents */}
      <div className="group bg-white rounded-3xl p-8 shadow-lg border border-slate-200 hover:shadow-2xl transition-all duration-300 cursor-pointer">
        <div className="mb-6 w-16 h-16 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center text-white text-2xl transform group-hover:scale-110 transition-transform duration-300">
          <Users className="w-8 h-8" />
        </div>
        <h3 className="text-xl font-bold mb-3 text-slate-900 group-hover:text-yellow-500 transition-colors duration-300">
          Parents
        </h3>
        <p className="text-slate-600 text-sm leading-relaxed">
          Stay informed with real-time access to attendance, results, fees, announcements, and direct communication with teachers.
        </p>
      </div>

      {/* Students */}
      <div className="group bg-white rounded-3xl p-8 shadow-lg border border-slate-200 hover:shadow-2xl transition-all duration-300 cursor-pointer">
        <div className="mb-6 w-16 h-16 rounded-full bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center text-white text-2xl transform group-hover:scale-110 transition-transform duration-300">
          <IdCardIcon className="w-8 h-8" />
        </div>
        <h3 className="text-xl font-bold mb-3 text-slate-900 group-hover:text-pink-500 transition-colors duration-300">
          Students
        </h3>
        <p className="text-slate-600 text-sm leading-relaxed">
          View timetables, submit assignments, check exam schedules, and access learning resources anytime, anywhere.
        </p>
      </div>

    </div>
  </div>
</section>


  );
};

export default AboutSection;
