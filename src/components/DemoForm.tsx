import { useState } from "react";
import { User, School, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

type Role = "" | "Principal" | "Administrator" | "Teacher" | "IT Operations" | "Student" | "Other";

export default function DemoFormSection(): JSX.Element {
  const [role, setRole] = useState<Role>("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [school, setSchool] = useState("");
  const [otherInfo, setOtherInfo] = useState("");

  // Load previous submissions from localStorage
  const getSubmissions = (): unknown[] => {
    const data = localStorage.getItem("demoSubmissions");
    return data ? JSON.parse(data) : [];
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const submission = {
      timestamp: new Date().toLocaleString(),
      role,
      name,
      email,
      phone,
      school,
      otherInfo,
    };

    // Save to localStorage
    const submissions = getSubmissions();
    submissions.push(submission);
    localStorage.setItem("demoSubmissions", JSON.stringify(submissions, null, 2));

    alert("Submission saved locally! You can view it below or download it.");

    // Clear form
    setRole("");
    setName("");
    setEmail("");
    setPhone("");
    setSchool("");
    setOtherInfo("");
  };

  const downloadSubmissions = () => {
    const data = localStorage.getItem("demoSubmissions");
    if (!data) return alert("No submissions to download!");
    const blob = new Blob([data], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "submissions.json";
    a.click();
    URL.revokeObjectURL(url);
  };

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
        <form className="bg-card border border-border rounded-2xl p-8 md:p-10 space-y-6" onSubmit={handleSubmit}>

          {/* Role */}
          <div>
            <label className="block text-sm font-medium mb-2">Your Role</label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value as Role)}
              className="w-full rounded-lg border border-border px-4 py-3 bg-background"
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
            <InputField icon={User} placeholder="Full Name" value={name} setValue={setName} />
            <InputField icon={Mail} placeholder="Email Address" value={email} setValue={setEmail} />
            <InputField icon={Phone} placeholder="Phone Number" value={phone} setValue={setPhone} />
            <InputField icon={School} placeholder="School / Institution Name" value={school} setValue={setSchool} />
          </div>

          {/* Conditional Fields */}
          {role === "IT Operations" && <InputField placeholder="Current ERP / System Used" value={otherInfo} setValue={setOtherInfo} />}
          {role === "Student" && <InputField placeholder="Class / Grade" value={otherInfo} setValue={setOtherInfo} />}
          {role === "Other" && <InputField placeholder="Please specify your role" value={otherInfo} setValue={setOtherInfo} />}

          {/* CTA */}
          <div className="pt-4 text-center flex flex-col gap-4 md:flex-row md:justify-center">
            <Button type="submit" size="xl" className="w-full md:w-auto">Schedule My Demo</Button>
            <Button onClick={downloadSubmissions} variant="outline" size="xl" className="w-full md:w-auto">
              Download Submissions
            </Button>
          </div>

        </form>

        {/* Local submissions view */}
        <div className="mt-10">
          <h3 className="text-xl font-semibold mb-4">Submissions Stored Locally</h3>
          <pre className="bg-white border border-border p-4 rounded-2xl max-h-96 overflow-auto text-sm">
            {localStorage.getItem("demoSubmissions") || "No submissions yet."}
          </pre>
        </div>

      </div>
    </section>
  );
}

type InputFieldProps = {
  placeholder: string;
  icon?: React.ElementType;
  value: string;
  setValue: (v: string) => void;
};

function InputField({ placeholder, icon: Icon, value, setValue }: InputFieldProps): JSX.Element {
  return (
    <div className="relative">
      {Icon && <Icon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />}
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        required
        className={`w-full rounded-lg border border-border px-4 py-3 bg-background focus:outline-none focus:ring-2 focus:ring-primary ${Icon ? "pl-10" : ""}`}
      />
    </div>
  );
}
