import { Link } from "react-router-dom";
import AnimatedSection from "../components/AnimatedSection";
import EyebrowLabel from "../components/EyebrowLabel";
import WisdomButton from "../components/WisdomButton";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Check } from "lucide-react";

const receive = [
  "AI Readiness Curriculum",
  "Student Learning Platform",
  "HOW Score Dashboard",
  "Faculty Enablement",
  "Project-Based Learning",
  "Certification",
  "Career Readiness Tracks",
  "Mentor Network",
  "Demo Day Framework",
  "Implementation Support",
];

const impact = [
  {
    t: "Placement Readiness",
    b: "Students graduate with practical AI exposure, portfolio proof, communication ability, and improved confidence.",
  },
  {
    t: "NAAC & Accreditation Alignment",
    b: "Supports experiential learning, innovation, employability, faculty development, and industry linkage.",
  },
  {
    t: "Faculty Enablement",
    b: "Structured support to understand and integrate AI-readiness thinking into academics.",
  },
  { t: "Institutional Differentiation", b: "The college positions itself as an early mover in AI-ready education." },
  {
    t: "Student Engagement",
    b: "Learning becomes a challenge-based, community-driven journey rather than passive content.",
  },
  {
    t: "Industry Connection",
    b: "Access mentors, partners, project pathways, and future collaboration opportunities.",
  },
];

const phases = [
  { w: "Week 1", n: "01", b: "Campus onboarding, faculty orientation, student launch." },
  { w: "Month 1", n: "02", b: "AI foundations, readiness mindset, tool literacy, guided challenges." },
  { w: "Month 2", n: "03", b: "Projects, mentorship, collaboration, applied workflows." },
  { w: "Month 3", n: "04", b: "Portfolio development, HOW Score assessment, certification, demo day." },
];

const tiers = [
  {
    name: "AI Spark",
    desc: "For institutions beginning their AI journey.",
    items: [
      "AI awareness sessions",
      "Introductory workshops",
      "Leadership orientation",
      "Faculty introduction",
      "Student inspiration session",
    ],
    cta: "Start with AI Spark",
  },
  {
    name: "AI Readiness Program",
    desc: "For institutions that want structured student transformation.",
    items: [
      "Full AI readiness curriculum",
      "Student learning platform",
      "Project-based learning",
      "HOW Score",
      "Mentorship",
      "Certification",
      "Faculty support",
      "Demo day",
      "Institutional dashboard",
    ],
    cta: "Bring this to campus",
    featured: true,
  },
  {
    name: "AI Innovation Hub",
    desc: "For institutions ready to build a long-term AI ecosystem.",
    items: [
      "Campus AI community",
      "Advanced student projects",
      "Industry challenges",
      "Partner network",
      "Faculty development",
      "Student innovation cells",
      "Annual demo days",
      "Research collaborations",
    ],
    cta: "Build an AI hub",
  },
];

const Colleges = () => (
  <div className="min-h-screen">
    <Navbar />

    <section className="relative pt-32 md:pt-40 pb-20 overflow-hidden">
      <div className="absolute inset-0 grid-bg pointer-events-none" />
      <div className="relative container mx-auto px-6">
        <AnimatedSection>
          <EyebrowLabel index="/colleges">For Colleges</EyebrowLabel>
          <h1 className="mt-8 text-display text-5xl md:text-7xl text-balance max-w-5xl">
            Bring measurable <span className="gradient-brand-text">AI readiness</span> to your campus.
          </h1>
          <p className="mt-8 max-w-3xl text-lg text-muted-foreground leading-relaxed">
            Every college is being asked the same question: are your students ready for the future of work? House of
            Wise helps institutions answer with confidence — a structured program combining curriculum, platform,
            assessments, projects, faculty enablement, certification, and community.
          </p>
          <p className="mt-4 max-w-3xl text-lg text-foreground/80">
            The result is not just awareness — it is measurable student progress.
          </p>
          <div className="flex flex-wrap gap-3 mt-10">
            <Link to="/waitlist">
              <WisdomButton variant="brand" size="lg">
                Book an institutional consultation
              </WisdomButton>
            </Link>
            <Link to="/waitlist">
              <WisdomButton variant="outline" size="lg">
                Download program overview
              </WisdomButton>
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>

    {/* Cohort snapshot */}
    <section className="py-20">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <div className="panel p-8 md:p-10">
            <div className="flex items-center justify-between hairline-b pb-4">
              <span className="font-mono-label text-muted-foreground">Cohort readiness · sample</span>
              <span className="font-mono-label text-primary">Batch 2026</span>
            </div>
            <div className="grid md:grid-cols-4 gap-6 mt-8">
              {[
                { l: "Students", v: "240" },
                { l: "Avg HOW Score", v: "694" },
                { l: "Projects shipped", v: "312" },
                { l: "Demo-ready", v: "46%" },
              ].map((s) => (
                <div key={s.l}>
                  <p className="font-mono-label text-muted-foreground">{s.l}</p>
                  <p className="mt-2 text-4xl font-semibold gradient-brand-text tabular-nums">{s.v}</p>
                </div>
              ))}
            </div>
            <div className="mt-10">
              <p className="font-mono-label text-muted-foreground mb-4">Readiness distribution</p>
              <div className="flex h-3 rounded-full overflow-hidden">
                <div style={{ width: "18%" }} className="bg-cyan-signal" title="Explorer 18%" />
                <div style={{ width: "34%" }} className="bg-violet" title="Builder 34%" />
                <div style={{ width: "28%" }} className="bg-primary" title="Practitioner 28%" />
                <div style={{ width: "14%" }} className="bg-peach" title="Certified 14%" />
                <div style={{ width: "6%" }} className="bg-sage" title="Visionary 6%" />
              </div>
              <div className="flex flex-wrap gap-4 mt-4 text-xs text-muted-foreground">
                <span>
                  <span className="inline-block h-2 w-2 rounded-full bg-cyan-signal mr-2" />
                  Explorer 18%
                </span>
                <span>
                  <span className="inline-block h-2 w-2 rounded-full bg-violet mr-2" />
                  Builder 34%
                </span>
                <span>
                  <span className="inline-block h-2 w-2 rounded-full bg-primary mr-2" />
                  Practitioner 28%
                </span>
                <span>
                  <span className="inline-block h-2 w-2 rounded-full bg-peach mr-2" />
                  Certified 14%
                </span>
                <span>
                  <span className="inline-block h-2 w-2 rounded-full bg-sage mr-2" />
                  Visionary 6%
                </span>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>

    {/* What colleges receive */}
    <section className="py-20">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <EyebrowLabel>What colleges receive</EyebrowLabel>
          <h2 className="mt-6 text-display text-3xl md:text-5xl text-balance max-w-3xl">
            A complete AI-readiness stack.
          </h2>
        </AnimatedSection>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mt-10">
          {receive.map((r) => (
            <div key={r} className="hairline rounded-md p-4">
              <Check className="h-4 w-4 text-primary mb-3" strokeWidth={2.5} />
              <p className="text-sm font-medium">{r}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Impact */}
    <section className="py-20">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <EyebrowLabel>Institutional impact</EyebrowLabel>
          <h2 className="mt-6 text-display text-4xl md:text-5xl text-balance max-w-3xl">
            Built for student outcomes. Designed for <span className="gradient-brand-text">institutional impact</span>.
          </h2>
        </AnimatedSection>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-14">
          {impact.map((c, i) => (
            <AnimatedSection key={c.t} delay={i * 0.05}>
              <div className="panel p-6 h-full">
                <span className="font-mono-label text-primary">0{i + 1}</span>
                <h3 className="mt-5 text-xl font-semibold">{c.t}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{c.b}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* Implementation */}
    <section className="py-20">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <EyebrowLabel>Implementation</EyebrowLabel>
          <h2 className="mt-6 text-display text-4xl md:text-5xl text-balance max-w-3xl">
            Simple to launch. Powerful to scale.
          </h2>
          <p className="mt-6 text-muted-foreground max-w-2xl">
            House of Wise integrates into existing academic environments without unnecessary operational complexity.
          </p>
        </AnimatedSection>
        <div className="grid md:grid-cols-4 gap-4 mt-12">
          {phases.map((p, i) => (
            <AnimatedSection key={p.w} delay={i * 0.05}>
              <div className="panel p-6 h-full">
                <div className="flex items-center justify-between">
                  <span className="font-mono-label text-primary">{p.n}</span>
                  <span className="font-mono-label text-muted-foreground">{p.w}</span>
                </div>
                <p className="mt-6 text-sm text-foreground/80 leading-relaxed">{p.b}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
        <div className="grid md:grid-cols-2 gap-6 mt-10">
          <div className="panel p-8">
            <h3 className="text-xl font-semibold">House of Wise provides</h3>
            <div className="flex flex-wrap gap-2 mt-5">
              {[
                "Curriculum",
                "Platform",
                "Content",
                "Mentors",
                "Assessments",
                "Dashboards",
                "Certification",
                "Program support",
                "Community access",
              ].map((x) => (
                <span key={x} className="chip">
                  {x}
                </span>
              ))}
            </div>
          </div>
          <div className="panel p-8">
            <h3 className="text-xl font-semibold">Institution provides</h3>
            <div className="flex flex-wrap gap-2 mt-5">
              {[
                "Students",
                "Faculty coordinator",
                "Academic schedule",
                "Classroom or lab access",
                "Leadership support",
              ].map((x) => (
                <span key={x} className="chip">
                  {x}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Partnership models */}
    <section className="py-20">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <EyebrowLabel>Partnership models</EyebrowLabel>
          <h2 className="mt-6 text-display text-4xl md:text-5xl text-balance max-w-3xl">
            Choose the level of AI readiness your institution wants to build.
          </h2>
        </AnimatedSection>
        <div className="grid md:grid-cols-3 gap-4 mt-14">
          {tiers.map((t, i) => (
            <AnimatedSection key={t.name} delay={i * 0.05}>
              <div
                className={`panel p-8 h-full flex flex-col ${t.featured ? "border-primary/60 shadow-[0_0_0_1px_hsl(var(--primary)/0.3)]" : ""}`}
              >
                {t.featured && <span className="chip text-primary mb-4 w-fit">Recommended</span>}
                <h3 className="text-2xl font-semibold">{t.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{t.desc}</p>
                <p className="mt-6 text-3xl font-semibold gradient-brand-text">{t.price}</p>
                <ul className="mt-6 space-y-2 flex-1">
                  {t.items.map((x) => (
                    <li key={x} className="flex gap-2 text-sm text-foreground/80">
                      <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" strokeWidth={2.5} />
                      {x}
                    </li>
                  ))}
                </ul>
                <Link to="/waitlist" className="mt-8">
                  <WisdomButton variant={t.featured ? "brand" : "outline"} className="w-full justify-center">
                    {t.cta}
                  </WisdomButton>
                </Link>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    <Footer />
  </div>
);

export default Colleges;
