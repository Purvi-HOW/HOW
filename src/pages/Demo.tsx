import { useState } from "react";
import { motion } from "framer-motion";
import AnimatedSection from "../components/AnimatedSection";
import EyebrowLabel from "../components/EyebrowLabel";
import WisdomButton from "../components/WisdomButton";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { toast } from "sonner";
import { CheckCircle2 } from "lucide-react";

const Demo = () => {
  const [form, setForm] = useState({
    name: "",
    institution: "",
    role: "",
    students: "",
    email: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you! We'll be in touch shortly.");
    setForm({ name: "", institution: "", role: "", students: "", email: "" });
  };

  const fields = [
    { key: "name", label: "Name", type: "text", placeholder: "Your full name" },
    { key: "institution", label: "Institution", type: "text", placeholder: "School or university name" },
    { key: "role", label: "Role", type: "text", placeholder: "e.g., Provost, Director, Dean" },
    { key: "students", label: "Number of Students", type: "text", placeholder: "Approximate number" },
    { key: "email", label: "Email", type: "email", placeholder: "your@institution.edu" },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="relative pt-32 md:pt-40 pb-24">
        <div className="absolute inset-0 grid-bg pointer-events-none" />
        <div className="relative container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-10">
            <AnimatedSection className="lg:col-span-5 lg:sticky lg:top-32 self-start">
              <EyebrowLabel index="/demo">Institutional demo</EyebrowLabel>
              <h1 className="text-display text-4xl md:text-6xl font-semibold text-balance mt-8">
                See House of Wisdom (HOW){" "}
                <span className="gradient-text-primary">in action.</span>
              </h1>
              <p className="font-body text-lg text-muted-foreground mt-8 text-pretty leading-relaxed max-w-lg">
                Discover how House of Wisdom (HOW) can help your institution create engaging learning environments and prepare students for future careers.
              </p>
              <div className="mt-10 space-y-3">
                {[
                  "30-minute personalized walkthrough",
                  "Sample cohort dashboards & analytics",
                  "Pricing tailored to your institution",
                ].map((line) => (
                  <div key={line} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" strokeWidth={2} />
                    <span className="font-body text-sm text-foreground/80">{line}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.15} className="lg:col-span-7">
              <motion.form
                onSubmit={handleSubmit}
                className="panel p-6 md:p-10 space-y-5"
              >
                <div className="flex items-center justify-between pb-4 border-b border-border/50 mb-2">
                  <span className="font-mono-label text-muted-foreground">Request form</span>
                  <div className="flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                    <span className="font-mono-label text-primary">Live</span>
                  </div>
                </div>

                {fields.map((field) => (
                  <div key={field.key}>
                    <label className="font-mono-label text-muted-foreground mb-2 block">
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      placeholder={field.placeholder}
                      required
                      value={form[field.key as keyof typeof form]}
                      onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                      className="w-full rounded-lg border border-border bg-muted/40 px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all"
                    />
                  </div>
                ))}
                <div className="pt-4">
                  <WisdomButton size="lg" type="submit" className="w-full justify-center">
                    Request Institutional Demo
                  </WisdomButton>
                  <p className="font-mono-label text-muted-foreground text-center mt-5">
                    Or write to us at <a href="mailto:hello@howschool.online" className="text-primary hover:underline">hello@howschool.online</a>
                  </p>
                </div>
              </motion.form>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Demo;
