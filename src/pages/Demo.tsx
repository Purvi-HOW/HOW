import { useState } from "react";
import { motion } from "framer-motion";
import AnimatedSection from "../components/AnimatedSection";
import WisdomButton from "../components/WisdomButton";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { toast } from "sonner";

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

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="relative min-h-svh flex items-center justify-center pt-24 pb-16">
        <div className="absolute inset-0 gradient-mesh opacity-30" />
        <div className="relative container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <AnimatedSection className="text-center mb-12">
              <h1 className="text-display text-4xl md:text-6xl font-extrabold text-balance mb-6">
                See House of Wisdom (HOW){" "}
                <span className="gradient-text-primary">in Action</span>
              </h1>
              <p className="font-body text-lg text-muted-foreground text-pretty">
                Discover how House of Wisdom (HOW) can help your institution create engaging learning environments and prepare students for future careers.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <motion.form
                onSubmit={handleSubmit}
                className="glass-surface rounded-3xl p-8 md:p-12 space-y-6"
              >
                {[
                  { key: "name", label: "Name", type: "text", placeholder: "Your full name" },
                  { key: "institution", label: "Institution", type: "text", placeholder: "School or university name" },
                  { key: "role", label: "Role", type: "text", placeholder: "e.g., Provost, Director, Dean" },
                  { key: "students", label: "Number of Students", type: "text", placeholder: "Approximate number" },
                  { key: "email", label: "Email", type: "email", placeholder: "your@institution.edu" },
                ].map((field) => (
                  <div key={field.key}>
                    <label className="font-display text-sm font-medium text-foreground mb-2 block tracking-tight">
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      placeholder={field.placeholder}
                      required
                      value={form[field.key as keyof typeof form]}
                      onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                      className="w-full rounded-2xl border border-border bg-muted/50 px-5 py-3.5 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all"
                    />
                  </div>
                ))}
                <div className="pt-4">
                  <WisdomButton size="lg" className="w-full">
                    Request Institutional Demo
                  </WisdomButton>
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
