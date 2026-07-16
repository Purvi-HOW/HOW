import { useState } from "react";
import { motion } from "framer-motion";
import AnimatedSection from "../components/AnimatedSection";
import EyebrowLabel from "../components/EyebrowLabel";
import WisdomButton from "../components/WisdomButton";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { toast } from "sonner";
import { CheckCircle2 } from "lucide-react";

import {
  submitCollegeApplication,
  submitPartnerApplication,
} from "../services/applicationService";

type Audience = "college" | "partner";

const Waitlist = () => {
  const [audience, setAudience] = useState<Audience>("college");

  const [form, setForm] = useState({
    name: "",
    email: "",
    whatsapp: "",
    org: "",
    role: "",
    year: "",
    stream: "",
    interest: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      if (audience === "college") {
        const { error } = await submitCollegeApplication({
          college_name: form.org,
          contact_person: form.name,
          designation: form.role,
          email: form.email,
          phone: form.whatsapp,
          city: "",
          state: "",
          student_count: null,
          website: "",
          message: form.interest,
        });

        if (error) throw error;

        toast.success("College application submitted successfully!");
      } else if (audience === "partner") {
        const { error } = await submitPartnerApplication({
          company_name: form.org,
          contact_person: form.name,
          designation: form.role,
          email: form.email,
          phone: "",
          website: "",
          company_type: "",
          partnership_interest: form.interest,
          message: "",
        });

        if (error) throw error;

        toast.success("Partner application submitted successfully!");
      } else {
        toast.success("Partner application submitted successfully!");
      }

      setForm({
        name: "",
        email: "",
        whatsapp: "",
        org: "",
        role: "",
        year: "",
        stream: "",
        interest: "",
      });
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong. Please try again.");
    }
  };

  const config: Record<
    Audience,
    {
      title: string;
      sub: string;
      fields: {
        key: string;
        label: string;
        type?: string;
        placeholder: string;
        select?: string[];
      }[];
      cta: string;
      bullets: string[];
    }
  > = {
    
    college: {
      title: "Bring HOW to your campus",
      sub: "Book an institutional consultation. We'll design a program for your students.",
      cta: "Book consultation",
      bullets: [
        "30-minute institutional walkthrough",
        "Sample cohort dashboard",
        "Program pricing tailored to your college",
      ],
      fields: [
        {
          key: "name",
          label: "Name",
          placeholder: "Your full name",
        },
        {
          key: "email",
          label: "Email",
          type: "email",
          placeholder: "you@institution.edu",
        },
        {
          key: "org",
          label: "Institution",
          placeholder: "College or university name",
        },
        {
          key: "role",
          label: "Role",
          placeholder: "Principal, Dean, Placement Head",
        },
        {
          key: "whatsapp",
          label: "Phone / WhatsApp",
          placeholder: "+91...",
        },
        {
          key: "interest",
          label: "Program of interest",
          placeholder: "Select...",
          select: [
            "AI Spark",
            "AI Readiness Program",
            "AI Innovation Hub",
            "Not sure yet",
          ],
        },
      ],
    },

    partner: {
      title: "Partner with House of Wise",
      sub: "Mentors, companies, founders, investors — shape the next AI-ready generation.",
      cta: "Become a partner",
      bullets: [
        "Mentor / guest session pathways",
        "Hiring & internship access",
        "Sponsored challenges & demo days",
      ],
      fields: [
        {
          key: "name",
          label: "Name",
          placeholder: "Your full name",
        },
        {
          key: "email",
          label: "Email",
          type: "email",
          placeholder: "you@company.com",
        },
        {
          key: "org",
          label: "Organization",
          placeholder: "Company or independent",
        },
        {
          key: "role",
          label: "Role",
          placeholder: "Founder, VP Engineering",
        },
        {
          key: "interest",
          label: "How do you want to contribute?",
          placeholder: "Select...",
          select: [
            "Mentorship",
            "Guest sessions",
            "Hiring",
            "Sponsored challenges",
            "Research collaboration",
            "Something else",
          ],
        },
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
              <EyebrowLabel index="/waitlist">
                Take your next step
              </EyebrowLabel>

              <h1 className="text-display text-4xl md:text-6xl mt-8">
                Every audience has a{" "}
                <span className="gradient-brand-text">
                  next step
                </span>.
              </h1>

              <p className="text-lg text-muted-foreground mt-8 leading-relaxed">
                Join before the gap becomes impossible to ignore.
                The AI-ready generation is being built now.
              </p>

              <div className="mt-10 space-y-3">
                {current.bullets.map((line) => (
                  <div key={line} className="flex gap-2">
                    <CheckCircle2
                      className="w-4 h-4 text-primary mt-1"
                    />
                    <span>{line}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.15} className="lg:col-span-7">

              <div className="panel p-8">

                <div className="flex gap-2 mb-8">
                  {(["college","partner"] as Audience[]).map((a) => (
                    <button
                      key={a}
                      onClick={() => setAudience(a)}
                      className={`rounded-full px-4 py-2 ${
                        audience===a
                        ? "bg-primary text-white"
                        : "text-muted-foreground"
                      }`}
                    >
                      {a}
                    </button>
                  ))}
                </div>

                <h2 className="text-3xl font-semibold">
                  {current.title}
                </h2>

                <p className="text-muted-foreground mt-2">
                  {current.sub}
                </p>

                <motion.form
                  onSubmit={handleSubmit}
                  className="mt-8 space-y-5"
                >
                  {current.fields.map((field) => (
                    <div key={field.key}>
                      <label className="block mb-2">
                        {field.label}
                      </label>

                      {field.select ? (
                        <select
                          required
                          value={form[field.key as keyof typeof form]}
                          onChange={(e)=>
                            setForm({
                              ...form,
                              [field.key]:e.target.value
                            })
                          }
                          className="w-full rounded-md border border-gray-300 bg-white text-black placeholder:text-gray-500 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                        >
                          <option value="">
                            {field.placeholder}
                          </option>

                          {field.select.map((item)=>(
                            <option key={item}>
                              {item}
                            </option>
                          ))}
                        </select>
                      ) : (
                        <input
                          required
                          type={field.type || "text"}
                          placeholder={field.placeholder}
                          value={form[field.key as keyof typeof form]}
                          onChange={(e)=>
                            setForm({
                              ...form,
                              [field.key]:e.target.value
                            })
                          }
                          className="w-full rounded-md border border-gray-300 bg-white text-black placeholder:text-gray-500 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                        />
                      )}
                    </div>
                  ))}

                  <WisdomButton
                    type="submit"
                    variant="brand"
                    size="lg"
                    className="w-full justify-center"
                  >
                    {current.cta}
                  </WisdomButton>

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