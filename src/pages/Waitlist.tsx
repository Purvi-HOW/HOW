import { useState } from "react";
import { motion } from "framer-motion";
import AnimatedSection from "../components/AnimatedSection";
import EyebrowLabel from "../components/EyebrowLabel";
import WisdomButton from "../components/WisdomButton";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { toast } from "sonner";
import { CheckCircle2 } from "lucide-react";

type Audience = "student" | "college" | "partner";

const Waitlist = () => {
  const [audience, setAudience] = useState<Audience>("student");
  const [form, setForm] = useState({
    name: "", email: "", whatsapp: "", org: "", role: "", year: "", stream: "", interest: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("You're on the list. We'll follow up shortly.");
    setForm({ name: "", email: "", whatsapp: "", org: "", role: "", year: "", stream: "", interest: "" });
  };

  const config: Record<Audience, { title: string; sub: string; fields: {key: string; label: string; type?: string; placeholder: string; select?: string[]}[]; cta: string; bullets: string[] }> = {
    student: {
      title: "Join the student waitlist",
      sub: "Get notified when the next HOW cohort opens on your campus.",
      cta: "Join the waitlist",
      bullets: ["Early access to the next cohort","Your HOW Score baseline","Project pathway recommendations"],
      fields: [
        { key: "name", label: "Name", placeholder: "Your full name" },
        { key: "email", label: "Email", type: "email", placeholder: "you@college.edu" },
        { key: "whatsapp", label: "WhatsApp", placeholder: "+91…" },
        { key: "org", label: "College", placeholder: "Your college name" },
        { key: "year", label: "Year", placeholder: "Select…", select: ["1st Year","2nd Year","3rd Year","Final Year","Postgraduate"] },
        { key: "stream", label: "Stream", placeholder: "e.g. Engineering, BBA, Design" },
        { key: "interest", label: "What are you most interested in?", placeholder: "Select…", select: ["AI projects","Career readiness","Community","Certification","Campus ambassador role"] },
      ],
    },
    college: {
      title: "Bring HOW to your campus",
      sub: "Book an institutional consultation. We'll design a program for your students.",
      cta: "Book consultation",
      bullets: ["30-minute institutional walkthrough","Sample cohort dashboard","Program pricing tailored to your college"],
      fields: [
        { key: "name", label: "Name", placeholder: "Your full name" },
        { key: "email", label: "Email", type: "email", placeholder: "you@institution.edu" },
        { key: "org", label: "Institution", placeholder: "College or university name" },
        { key: "role", label: "Role", placeholder: "e.g., Principal, Dean, Placement Head" },
        { key: "whatsapp", label: "Phone / WhatsApp", placeholder: "+91…" },
        { key: "interest", label: "Program of interest", placeholder: "Select…", select: ["AI Spark","AI Readiness Program","AI Innovation Hub","Not sure yet"] },
      ],
    },
    partner: {
      title: "Partner with House of Wise",
      sub: "Mentors, companies, founders, investors — shape the next AI-ready generation.",
      cta: "Become a partner",
      bullets: ["Mentor / guest session pathways","Hiring & internship access","Sponsored challenges & demo days"],
      fields: [
        { key: "name", label: "Name", placeholder: "Your full name" },
        { key: "email", label: "Email", type: "email", placeholder: "you@company.com" },
        { key: "org", label: "Organization", placeholder: "Company or independent" },
        { key: "role", label: "Role", placeholder: "e.g., Founder, VP Engineering" },
        { key: "interest", label: "How do you want to contribute?", placeholder: "Select…", select: ["Mentorship","Guest sessions","Hiring","Sponsored challenges","Research collaboration","Something else"] },
      ],
    },
  };

  const current = config[audience];

  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="relative pt-32 md:pt-40 pb-24">
        <div className="absolute inset-0 grid-bg pointer-events-none" />
        <div className="relative container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-10">
            <AnimatedSection className="lg:col-span-5 lg:sticky lg:top-32 self-start">
              <EyebrowLabel index="/waitlist">Take your next step</EyebrowLabel>
              <h1 className="text-display text-4xl md:text-6xl text-balance mt-8">
                Every audience has a <span className="gradient-brand-text">next step</span>.
              </h1>
              <p className="text-lg text-muted-foreground mt-8 text-pretty leading-relaxed max-w-lg">
                Join before the gap becomes impossible to ignore. The AI-ready generation is being built now.
              </p>
              <div className="mt-10 space-y-3">
                {current.bullets.map((line) => (
                  <div key={line} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" strokeWidth={2} />
                    <span className="text-sm text-foreground/80">{line}</span>
                  </div>
                ))}
              </div>
              <p className="font-mono-label text-muted-foreground mt-10">
                Or write to us at <a href="mailto:hello@howschool.online" className="text-primary hover:underline">hello@howschool.online</a>
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.15} className="lg:col-span-7">
              <div className="panel p-6 md:p-10">
                <div className="flex items-center gap-1 hairline-b pb-4 mb-6">
                  {(["student","college","partner"] as Audience[]).map((a) => (
                    <button
                      key={a}
                      onClick={() => setAudience(a)}
                      className={`rounded-full px-4 py-2 text-xs font-medium capitalize transition ${
                        audience === a ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {a}
                    </button>
                  ))}
                </div>

                <div className="mb-2">
                  <p className="font-mono-label text-primary">{audience === "student" ? "Student" : audience === "college" ? "College" : "Partner / Mentor"}</p>
                  <h2 className="text-2xl md:text-3xl font-semibold mt-3">{current.title}</h2>
                  <p className="text-sm text-muted-foreground mt-2">{current.sub}</p>
                </div>

                <motion.form onSubmit={handleSubmit} className="mt-6 space-y-4">
                  {current.fields.map((field) => (
                    <div key={field.key}>
                      <label className="font-mono-label text-muted-foreground mb-2 block">{field.label}</label>
                      {field.select ? (
                        <select
                          required
                          value={form[field.key as keyof typeof form]}
                          onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                          className="w-full rounded-md hairline bg-muted/40 px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition"
                        >
                          <option value="">{field.placeholder}</option>
                          {field.select.map((o) => <option key={o} value={o}>{o}</option>)}
                        </select>
                      ) : (
                        <input
                          type={field.type || "text"}
                          placeholder={field.placeholder}
                          required
                          value={form[field.key as keyof typeof form]}
                          onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                          className="w-full rounded-md hairline bg-muted/40 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition"
                        />
                      )}
                    </div>
                  ))}
                  <div className="pt-4">
                    <WisdomButton size="lg" type="submit" variant="brand" className="w-full justify-center">{current.cta}</WisdomButton>
                    <p className="text-xs text-muted-foreground text-center mt-5">
                      We'll only use your details to follow up about House of Wise.
                    </p>
                  </div>
                </motion.form>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Waitlist;
