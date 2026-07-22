import { useState } from "react";
import { motion } from "framer-motion";
import AnimatedSection from "../components/AnimatedSection";
import EyebrowLabel from "../components/EyebrowLabel";
import WisdomButton from "../components/WisdomButton";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { toast } from "sonner";
import { CheckCircle2 } from "lucide-react";

import { submitCollegeApplication, submitPartnerApplication } from "../services/applicationService";

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

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};

    // Name
    if (!form.name.trim()) {
      newErrors.name = "Please enter your full name.";
    } else if (form.name.trim().length < 3) {
      newErrors.name = "Name must contain at least 3 characters.";
    } else if (!/^[A-Za-z ]+$/.test(form.name)) {
      newErrors.name = "Only alphabets are allowed.";
    }

    // Email
    if (!form.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(form.email)) {
      newErrors.email = "Please enter a valid institutional or personal email.";
    }

    // Phone
    if (!form.whatsapp.trim()) {
      newErrors.whatsapp = "Phone number is required.";
    } else if (!/^[0-9]{10}$/.test(form.whatsapp)) {
      newErrors.whatsapp = "Please enter a valid 10-digit phone number.";
    }

    // Institution
    if (!form.org.trim()) {
      newErrors.org = "Institution name is required.";
    }

    // Role
    if (!form.role.trim()) {
      newErrors.role = "Role is required.";
    }

    // Program
    if (!form.interest.trim()) {
      newErrors.interest = "Please select a program.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setLoading(true);

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
      } else {
        const { error } = await submitPartnerApplication({
          company_name: form.org,
          contact_person: form.name,
          designation: form.role,
          email: form.email,
          phone: form.whatsapp,
          website: "",
          company_type: "",
          partnership_interest: form.interest,
          message: "",
        });

        if (error) throw error;
      }

      setLoading(false);
      setShowSuccess(true);

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

      setErrors({});
    } catch (error) {
      console.error(error);

      setLoading(false);

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
      title: "Bring House of Wise to Your Campus",
      sub: "Schedule a consultation with our team to explore how House of Wise can help your institution become an AI-First Campus.",
      cta: "Book Consultation",
      bullets: [
        "30-minute consultation with our team",
        "Personalized AI adoption roadmap",
        "Live demo of the House of Wise ecosystem",
      ],
      fields: [
        {
          key: "name",
          label: "Full Name",
          placeholder: "Enter your full name",
        },
        {
          key: "email",
          label: "Institutional Email",
          type: "email",
          placeholder: "name@college.edu",
        },
        {
          key: "org",
          label: "Institution",
          placeholder: "College or University Name",
        },
        {
          key: "role",
          label: "Designation",
          placeholder: "Principal, Dean, Placement Head...",
        },
        {
          key: "whatsapp",
          label: "Phone / WhatsApp",
          type: "tel",
          placeholder: "9876543210",
        },
        {
          key: "interest",
          label: "Program of Interest",
          placeholder: "Select a program",
          select: [
            "AI Spark",
            "AI Readiness Program",
            "AI Innovation Hub",
            "Faculty AI Enablement",
            "Institution-wide AI Transformation",
            "Not Sure Yet",
          ],
        },
      ],
    },

    partner: {
      title: "Partner with House of Wise",
      sub: "Join our ecosystem of AI companies, mentors, founders, investors, and industry leaders shaping the future of AI education.",
      cta: "Become a Partner",
      bullets: [
        "Mentorship & Guest Sessions",
        "Hiring & Internship Opportunities",
        "Sponsored Challenges & Innovation Programs",
      ],
      fields: [
        {
          key: "name",
          label: "Full Name",
          placeholder: "Enter your full name",
        },
        {
          key: "email",
          label: "Work Email",
          type: "email",
          placeholder: "name@company.com",
        },
        {
          key: "org",
          label: "Company / Organization",
          placeholder: "Company Name",
        },
        {
          key: "role",
          label: "Designation",
          placeholder: "Founder, VP Engineering, AI Lead...",
        },
        {
          key: "whatsapp",
          label: "Phone Number",
          type: "tel",
          placeholder: "9876543210",
        },
        {
          key: "interest",
          label: "How would you like to collaborate?",
          placeholder: "Select an option",
          select: [
            "Mentorship",
            "Guest Sessions",
            "Hiring",
            "Sponsored Challenges",
            "Research Collaboration",
            "AI Lab Partnership",
            "Other",
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
              <EyebrowLabel index="/waitlist">Take your next step</EyebrowLabel>

              <h1 className="text-display text-4xl md:text-6xl mt-8">
                Every audience has a <span className="gradient-brand-text">next step</span>.
              </h1>

              <p className="text-lg text-muted-foreground mt-8 leading-relaxed">
                Join before the gap becomes impossible to ignore. The AI-ready generation is being built now.
              </p>

              <div className="mt-10 space-y-3">
                {current.bullets.map((line) => (
                  <div key={line} className="flex gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-1" />
                    <span>{line}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.15} className="lg:col-span-7">
              <div className="panel p-8">
                <div className="flex gap-2 mb-8">
                  {(["college", "partner"] as Audience[]).map((a) => (
                    <button
                      key={a}
                      onClick={() => setAudience(a)}
                      className={`rounded-full px-4 py-2 ${
                        audience === a ? "bg-primary text-white" : "text-muted-foreground"
                      }`}
                    >
                      {a}
                    </button>
                  ))}
                </div>

                <h2 className="text-3xl font-semibold">{current.title}</h2>

                <p className="text-muted-foreground mt-2">{current.sub}</p>

                <motion.form onSubmit={handleSubmit} className="mt-8 space-y-5">
                  {current.fields.map((field) => (
                    <div key={field.key}>
                      <label className="block mb-2 font-medium">{field.label}</label>

                      {field.select ? (
                        <>
                          <select
                            required
                            value={form[field.key as keyof typeof form]}
                            onChange={(e) => {
                              const value = e.target.value;

                              setForm((prev) => ({
                                ...prev,
                                [field.key]: value,
                              }));

                              if (errors[field.key]) {
                                setErrors((prev) => ({
                                  ...prev,
                                  [field.key]: "",
                                }));
                              }
                            }}
                            className={`w-full rounded-md border ${
                              errors[field.key] ? "border-red-500 ring-1 ring-red-500" : "border-gray-300"
                            } bg-white text-black px-4 py-3 placeholder:text-gray-500
          focus:outline-none focus:ring-2 focus:ring-primary
          focus:border-primary transition-all duration-300`}
                          >
                            <option value="">{field.placeholder}</option>

                            {field.select.map((item) => (
                              <option key={item} value={item}>
                                {item}
                              </option>
                            ))}
                          </select>

                          {errors[field.key] && <p className="text-red-500 text-sm mt-2">{errors[field.key]}</p>}
                        </>
                      ) : (
                        <>
                          <input
                            required
                            type={field.type || "text"}
                            placeholder={field.placeholder}
                            value={form[field.key as keyof typeof form]}
                            onChange={(e) => {
                              const value = e.target.value;

                              setForm((prev) => ({
                                ...prev,
                                [field.key]: value,
                              }));

                              const newErrors = { ...errors };

                              switch (field.key) {
                                case "name":
                                  if (value.length >= 3 && /^[A-Za-z ]+$/.test(value)) {
                                    delete newErrors.name;
                                  }
                                  break;

                                case "email":
                                  if (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                                    delete newErrors.email;
                                  }
                                  break;

                                case "whatsapp":
                                  if (/^[0-9]{10}$/.test(value)) {
                                    delete newErrors.whatsapp;
                                  }
                                  break;

                                case "org":
                                  if (value.trim() !== "") {
                                    delete newErrors.org;
                                  }
                                  break;

                                case "role":
                                  if (value.trim() !== "") {
                                    delete newErrors.role;
                                  }
                                  break;
                              }

                              setErrors(newErrors);
                            }}
                            className={`w-full rounded-md border ${
                              errors[field.key] ? "border-red-500 ring-1 ring-red-500" : "border-gray-300"
                            } bg-white text-black px-4 py-3
          placeholder:text-gray-500
          focus:outline-none
          focus:ring-2
          focus:ring-primary
          focus:border-primary
          transition-all duration-300`}
                          />

                          {errors[field.key] && <p className="text-red-500 text-sm mt-2">{errors[field.key]}</p>}
                        </>
                      )}
                    </div>
                  ))}
                  <WisdomButton
                    type="submit"
                    variant="brand"
                    size="lg"
                    disabled={loading || Object.keys(errors).length > 0}
                    className={`w-full justify-center transition-all duration-300 ${
                      loading || Object.keys(errors).length > 0 ? "opacity-60 cursor-not-allowed" : ""
                    }`}
                  >
                    {loading ? (
                      <div className="flex items-center gap-3">
                        <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Booking your consultation...</span>
                      </div>
                    ) : (
                      current.cta
                    )}
                  </WisdomButton>
                </motion.form>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {showSuccess && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-6"
          onClick={() => setShowSuccess(false)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-xl rounded-3xl border border-white/10 bg-[#0B0B0F] p-10 text-center shadow-2xl"
          >
            <div className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-r from-green-500 to-emerald-400 text-5xl text-white shadow-lg">
              ✓
            </div>

            <h2 className="text-4xl font-bold text-white">Consultation Request Received!</h2>

            <p className="mt-6 text-lg leading-8 text-zinc-300">
              Thank you for your interest in
              <span className="font-semibold text-white"> House of Wise</span>.
            </p>

            <p className="mt-4 text-zinc-400 leading-8">
              Our team has successfully received your consultation request.
            </p>

            <p className="mt-4 text-zinc-400 leading-8">
              A member of our team will reach out within
              <span className="font-semibold text-white"> 24–48 hours</span> to understand your institution's goals and
              schedule your consultation.
            </p>

            <p className="mt-4 text-zinc-300">
              We look forward to helping you build an
              <span className="font-semibold text-white"> AI-First Campus.</span>
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <button
                onClick={() => {
                  setShowSuccess(false);
                  window.location.href = "/";
                }}
                className="rounded-full bg-gradient-to-r from-purple-600 to-orange-500 px-8 py-3 font-semibold text-white transition-all hover:scale-105"
              >
                Explore House of Wise
              </button>

              <button
                onClick={() => setShowSuccess(false)}
                className="rounded-full border border-zinc-700 px-8 py-3 text-zinc-300 transition-all hover:bg-zinc-800"
              >
                Close
              </button>
            </div>
          </motion.div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Waitlist;
