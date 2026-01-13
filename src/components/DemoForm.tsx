import { useState } from "react";
import { User, School, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

type Role =
  | ""
  | "Principal"
  | "Administrator"
  | "Teacher"
  | "IT Operations"
  | "Student"
  | "Other";

export default function DemoFormSection(): JSX.Element {
  const [role, setRole] = useState<Role>("");

  return (
    <section id="demo" className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 max-w-4xl">

        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Book a <span className="text-gradient">Personalized Demo</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Tell us your role — we’ll tailor the demo to your needs.
          </p>
        </div>

        {/* Form */}
        <form className="bg-card border border-border rounded-2xl p-8 md:p-10 space-y-6">

          {/* Role */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Your Role
            </label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value as Role)}
              className="w-full rounded-lg border border-border px-4 py-3 bg-background"
              aria-label="Your Role"
              required
            >
              <option value="">Select role</option>
              <option value="Principal">Principal</option>
              <option value="Administrator">Administrator</option>
              <option value="Teacher">Teacher</option>
              <option value="IT Operations">IT Operations</option>
              <option value="Student">Student</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Common Fields */}
          <div className="grid md:grid-cols-2 gap-6">
            <InputField icon={User} placeholder="Full Name" />
            <InputField icon={Mail} placeholder="Email Address" />
            <InputField icon={Phone} placeholder="Phone Number" />
            <InputField icon={School} placeholder="School / Institution Name" />
          </div>

          {/* Conditional Fields */}
          {role === "IT Operations" && (
            <InputField placeholder="Current ERP / System Used" />
          )}

          {role === "Student" && (
            <InputField placeholder="Class / Grade" />
          )}

          {role === "Other" && (
            <InputField placeholder="Please specify your role" />
          )}

          {/* CTA */}
          <div className="pt-4 text-center">
            <Button size="xl" className="w-full md:w-auto">
              Schedule My Demo
            </Button>
          </div>

        </form>
      </div>
    </section>
  );
}

/* ---------------------------------- */
/* Reusable Input Component (TSX safe) */
/* ---------------------------------- */

type InputFieldProps = {
  placeholder: string;
  icon?: React.ElementType;
};

function InputField({
  placeholder,
  icon: Icon,
}: InputFieldProps): JSX.Element {
  return (
    <div className="relative">
      {Icon && (
        <Icon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
      )}
      <input
        type="text"
        placeholder={placeholder}
        required
        className={`w-full rounded-lg border border-border px-4 py-3 bg-background focus:outline-none focus:ring-2 focus:ring-primary ${
          Icon ? "pl-10" : ""
        }`}
      />
    </div>
  );
}
