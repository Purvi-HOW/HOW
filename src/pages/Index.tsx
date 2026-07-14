import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";
import AnimatedSection from "../components/AnimatedSection";
import EyebrowLabel from "../components/EyebrowLabel";
import WisdomButton from "../components/WisdomButton";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import logo from "@/assets/logo.jpeg";

const scoreBands = [
  { range: "400–550", label: "AI Explorer", note: "You are beginning your AI journey." },
  { range: "551–700", label: "AI Builder", note: "You can use AI tools and complete guided projects." },
  { range: "701–820", label: "AI Practitioner", note: "You can apply AI to real problems and explain your work clearly." },
  { range: "821–920", label: "HOW Certified", note: "You have built credible proof of AI readiness." },
  { range: "921–1000", label: "HOW Visionary", note: "You are creating, leading, and helping others become AI-ready." },
];

const journey = [
  { layer: "Layer 0", tag: "Begin here", title: "Orientation", body: "Understand the AI shift, the changing economy, and why readiness matters." },
  { layer: "Layer 1", tag: "Learn", title: "Foundations", body: "Learn the language, concepts, tools, and responsible use of AI." },
  { layer: "Layer 2", tag: "Challenge", title: "Application", body: "Use AI to solve problems, improve workflows, and complete guided challenges." },
  { layer: "Layer 3", tag: "Build", title: "Creation", body: "Build real projects across domains and turn learning into visible proof." },
  { layer: "Layer 4", tag: "Refine", title: "Professional Readiness", body: "Develop communication, collaboration, presentation, portfolio, and workplace skills." },
  { layer: "Layer 5", tag: "Accelerate", title: "Career Acceleration", body: "Explore tracks, mentors, internships, challenges, and opportunity pathways." },
  { layer: "Layer 6", tag: "Belong", title: "Lifelong Community", body: "Stay connected through guilds, challenges, events, updates, and future pathways." },
];

const projects = [
  { tag: "Business + Tech", score: "+60", title: "AI Resume Screener", body: "Reviews resumes and suggests improvements.", stack: ["ChatGPT", "Sheets", "Python"] },
  { tag: "Technology", score: "+70", title: "Campus Helpdesk Bot", body: "Answers student and college queries instantly.", stack: ["LLM", "Docs", "No-code"] },
  { tag: "Career", score: "+65", title: "Placement Interview Coach", body: "Practice interviews, communication, and confidence.", stack: ["ChatGPT", "Voice", "Prompts"] },
  { tag: "Marketing", score: "+55", title: "Local Business Marketing Assistant", body: "AI workflows for content, campaigns, and engagement.", stack: ["Gemini", "Canva", "Automation"] },
  { tag: "Research", score: "+60", title: "Research Summarizer", body: "Turns long research material into clear summaries.", stack: ["Claude", "PDF", "RAG"] },
  { tag: "Social Impact", score: "+70", title: "Social Impact Dashboard", body: "Understand local problems with AI and data.", stack: ["Data", "Maps", "Charts"] },
];

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* HERO */}
      <section className="relative pt-32 md:pt-40 pb-24 overflow-hidden">
        <div className="absolute inset-0 grid-bg pointer-events-none" />
        <div className="absolute top-0 right-0 h-[520px] w-[520px] rounded-full blur-3xl opacity-20 gradient-brand-bg pointer-events-none" />

        <div className="relative container mx-auto px-6">
          <AnimatedSection>
            <EyebrowLabel index="01">AI-readiness movement · India</EyebrowLabel>
          </AnimatedSection>

          <div className="mt-8">
            <div className="max-w-5xl">
              <AnimatedSection delay={0.05}>
                <h1 className="text-display text-5xl md:text-7xl lg:text-[5.5rem] font-semibold text-balance">
                  India's <span className="gradient-brand-text">AI-ready student</span> movement starts here.
                </h1>
              </AnimatedSection>
              <AnimatedSection delay={0.15}>
                <p className="mt-8 max-w-2xl text-lg md:text-xl text-muted-foreground text-pretty leading-relaxed">
                  A new kind of learning ecosystem for students who want to think better, build faster, and become opportunity-ready in an AI-first world.
                </p>
              </AnimatedSection>
              <AnimatedSection delay={0.25}>
                <div className="flex flex-wrap items-center gap-3 mt-10">
                  <Link to="/colleges"><WisdomButton variant="brand" size="lg">Bring HOW to your College</WisdomButton></Link>
                  <Link to="/waitlist"><WisdomButton variant="outline" size="lg">Join Student Waitlist</WisdomButton></Link>
                  <Link to="/partners"><WisdomButton variant="ghost" size="lg" arrow={false}>Become a mentor or partner →</WisdomButton></Link>
                </div>
              </AnimatedSection>
              <AnimatedSection delay={0.35}>
                <p className="mt-10 text-sm text-muted-foreground max-w-xl">
                  No passive learning. No empty certificates. Only capability, proof, and community.
                </p>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>


      {/* THREE WAYS IN */}
      <section className="relative py-24">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <EyebrowLabel index="02">Three ways in</EyebrowLabel>
            <h2 className="mt-6 text-display text-4xl md:text-6xl text-balance max-w-3xl">
              Enter the movement from where you are.
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6 mt-14">
            {[
              { n: "01", t: "For Students", h: "Become AI-ready, not just AI-aware.", b: "Learn AI. Build projects. Earn your HOW Score. Join a serious community of future-ready students.", cta: "Read More", to: "/waitlist" },
              { n: "02", t: "For Colleges", h: "Bring measurable readiness to campus.", b: "A structured AI-readiness program with curriculum, projects, faculty enablement, dashboards, and measurable outcomes.", cta: "Partner with HOW", to: "/colleges" },
              { n: "03", t: "For Partners & Mentors", h: "Shape India's next AI builders.", b: "Support the ecosystem through mentorship, challenges, hiring pathways, and campus partnerships.", cta: "Partner with HOW", to: "/partners" },

            ].map((c, i) => (
              <AnimatedSection key={c.n} delay={i * 0.08}>
                <div className="panel p-8 h-full flex flex-col">
                  <div className="flex items-center justify-between hairline-b pb-4">
                    <span className="font-mono-label text-primary">{c.n}</span>
                    <span className="font-mono-label text-muted-foreground">{c.t}</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-semibold mt-6 text-balance">{c.h}</h3>
                  <p className="text-muted-foreground mt-4 text-pretty leading-relaxed flex-1">{c.b}</p>
                  <Link to={c.to} className="mt-8"><WisdomButton variant="outline">{c.cta}</WisdomButton></Link>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* SHIFT: OLD vs NEW */}
      <section className="relative py-24">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <EyebrowLabel index="04">A shift is happening</EyebrowLabel>
            <h2 className="mt-6 text-display text-4xl md:text-6xl text-balance max-w-4xl">
              Education is moving from certificates to <span className="gradient-brand-text">capability</span>.
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-6 mt-14">
            <AnimatedSection>
              <div className="panel p-8 h-full">
                <p className="font-mono-label text-muted-foreground">The old way</p>
                <ul className="mt-6 space-y-3">
                  {["Watch a session.", "Receive a certificate.", "Add a line to the resume.", "Wait for an opportunity."].map((x) => (
                    <li key={x} className="flex gap-3 text-foreground/70"><span className="text-muted-foreground">—</span>{x}</li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <div className="panel p-8 h-full border-primary/40">
                <p className="font-mono-label text-primary">The new way</p>
                <ul className="mt-6 space-y-3">
                  {["Learn the tools.", "Build real projects.", "Show public proof.", "Measure readiness.", "Enter a serious community.", "Create opportunities."].map((x) => (
                    <li key={x} className="flex gap-3 text-foreground"><Check className="h-4 w-4 text-primary mt-1 shrink-0" strokeWidth={2.5} />{x}</li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          </div>
          <AnimatedSection delay={0.2}>
            <p className="mt-10 text-lg text-muted-foreground max-w-3xl">
              The future will not reward students who only know about AI. It will reward students who know how to use it.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* HOW SCORE */}
      <section className="relative py-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-10">
            <AnimatedSection className="lg:col-span-5">
              <EyebrowLabel index="05">The HOW Score</EyebrowLabel>
              <h2 className="mt-6 text-display text-4xl md:text-5xl text-balance">
                Your AI readiness should be <span className="gradient-brand-text">visible</span>.
              </h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                Marks show academic performance. The HOW Score shows AI readiness. It helps students understand where they stand, what they have built, and what to improve next.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Every activity, challenge, project, presentation, collaboration, and assessment contributes to a student's readiness profile.
              </p>
              <div className="mt-8">
                <Link to="/waitlist"><WisdomButton variant="brand">Check your readiness level</WisdomButton></Link>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.15} className="lg:col-span-7">
              <div className="panel p-6 md:p-8">
                <div className="flex items-end justify-between hairline-b pb-5">
                  <div>
                    <p className="font-mono-label text-muted-foreground">Where are you today?</p>
                    <p className="mt-3 text-6xl font-semibold gradient-brand-text tabular-nums">720<span className="text-2xl text-muted-foreground">/1000</span></p>
                    <p className="mt-2 text-foreground/80">AI Practitioner</p>
                  </div>
                  <span className="chip text-cyan-signal">Live</span>
                </div>
                <div className="mt-6 space-y-3">
                  {scoreBands.map((b) => (
                    <div key={b.range} className="grid grid-cols-12 gap-4 items-center hairline rounded-md p-4">
                      <span className="col-span-3 font-mono text-xs text-muted-foreground tabular-nums">{b.range}</span>
                      <span className="col-span-3 text-foreground font-medium text-sm">{b.label}</span>
                      <span className="col-span-6 text-xs text-muted-foreground">{b.note}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* JOURNEY */}
      <section className="relative py-24">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <EyebrowLabel index="06">The AI readiness journey</EyebrowLabel>
            <h2 className="mt-6 text-display text-4xl md:text-6xl text-balance max-w-4xl">
              A structured journey from curiosity to capability.
            </h2>
            <p className="mt-6 text-muted-foreground max-w-2xl">
              Each layer moves students from awareness to confidence, from confidence to creation, and from creation to opportunity.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-14">
            {journey.map((j, i) => (
              <AnimatedSection key={j.layer} delay={i * 0.04}>
                <div className="panel p-6 h-full">
                  <div className="flex items-center justify-between">
                    <span className="font-mono-label text-primary">{j.layer}</span>
                    <span className="font-mono-label text-muted-foreground">{j.tag}</span>
                  </div>
                  <h3 className="mt-6 text-2xl font-semibold">{j.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{j.body}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="relative py-24">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <EyebrowLabel index="07">Project showcase</EyebrowLabel>
            <h2 className="mt-6 text-display text-4xl md:text-6xl text-balance max-w-4xl">
              Students don't just learn AI. They <span className="gradient-brand-text">build with it</span>.
            </h2>
            <p className="mt-6 text-muted-foreground max-w-2xl">
              Sample project pathways — replaced by real student builds, demos, and mentor feedback as cohorts ship.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-14">
            {projects.map((p, i) => (
              <AnimatedSection key={p.title} delay={i * 0.04}>
                <div className="panel p-6 h-full">
                  <div className="flex items-center justify-between">
                    <span className="font-mono-label text-muted-foreground">{p.tag}</span>
                    <span className="font-mono text-xs text-sage tabular-nums">{p.score}</span>
                  </div>
                  <h3 className="mt-6 text-xl font-semibold">{p.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.body}</p>
                  <div className="flex gap-1.5 mt-5 flex-wrap">
                    {p.stack.map((s) => (
                      <span key={s} className="text-[10px] font-mono uppercase tracking-wider px-2 py-1 rounded bg-muted text-muted-foreground">{s}</span>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* GUILD */}
      <section className="relative py-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-10">
            <AnimatedSection className="lg:col-span-6">
              <EyebrowLabel index="08">Community · The Guild</EyebrowLabel>
              <h2 className="mt-6 text-display text-4xl md:text-5xl text-balance">
                Learn with people who are serious about their future.
              </h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                Not just a program — a community for ambitious students who want to become more capable, more visible, and more prepared. Inside the HOW Guild:
              </p>
              <div className="flex flex-wrap gap-2 mt-6">
                {["Weekly AI challenges","Build sprints","Mentor sessions","Demo days","Campus circles","Peer learning","Career track discussions","Project showcases","Leaderboards","Community recognition"].map((t) => (
                  <span key={t} className="chip">{t}</span>
                ))}
              </div>
              <p className="mt-8 text-foreground/80 italic">"The right community changes how fast you grow."</p>
              <div className="mt-6">
                <Link to="/waitlist"><WisdomButton variant="brand">Apply to join the Guild</WisdomButton></Link>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.15} className="lg:col-span-6 space-y-4">
              <div className="panel p-6">
                <div className="flex items-center justify-between">
                  <span className="font-mono-label text-muted-foreground">This week's challenge</span>
                  <span className="chip text-peach">48h</span>
                </div>
                <p className="mt-4 text-lg font-medium">Ship an AI micro-tool in 48 hours</p>
                <p className="text-sm text-muted-foreground mt-2">Solo or in pairs · +40 HOW Score on submit</p>
              </div>
              <div className="panel p-6">
                <span className="font-mono-label text-muted-foreground">Mentor spotlight</span>
                <div className="flex items-center gap-4 mt-4">
                  <div className="h-12 w-12 rounded-full gradient-brand-bg text-background flex items-center justify-center font-semibold">RV</div>
                  <div>
                    <p className="font-medium">Rahul V.</p>
                    <p className="text-xs text-muted-foreground mt-1">AI Product Lead · hosting Thu 7PM</p>
                  </div>
                </div>
                <p className="mt-4 text-foreground/80 italic text-sm">"Build in public. Your projects are your proof."</p>
              </div>
              <div className="panel p-6">
                <span className="font-mono-label text-muted-foreground">Campus leaderboard</span>
                <div className="mt-4 space-y-2">
                  {[{r:1,n:"Ananya R.",s:720},{r:2,n:"Kabir M.",s:705},{r:3,n:"Sneha T.",s:690}].map((row) => (
                    <div key={row.r} className="flex items-center justify-between hairline-b pb-2 last:border-0">
                      <span className="text-sm"><span className="font-mono text-primary mr-3">0{row.r}</span>{row.n}</span>
                      <span className="font-mono text-sm text-foreground/80 tabular-nums">{row.s}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* TRANSFORMATION */}
      <section className="relative py-24">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <EyebrowLabel index="09">Student transformation</EyebrowLabel>
            <h2 className="mt-6 text-display text-4xl md:text-6xl text-balance max-w-4xl">
              From student to <span className="gradient-brand-text">AI-ready builder</span>.
            </h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-6 mt-14">
            <AnimatedSection>
              <div className="panel p-8 h-full">
                <p className="font-mono-label text-muted-foreground">Before House of Wise</p>
                <ul className="mt-6 space-y-3 text-foreground/70">
                  {["I know AI is important.","I have watched videos.","I have attended workshops.","I have certificates.","I do not know what to build.","I do not know how to show my skills.","I am not sure where I stand."].map((x) => (
                    <li key={x} className="flex gap-3"><span className="text-muted-foreground">—</span>{x}</li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <div className="panel p-8 h-full border-primary/40">
                <p className="font-mono-label text-primary">After House of Wise</p>
                <ul className="mt-6 space-y-3 text-foreground">
                  {["I understand how AI works.","I have built real projects.","I have a visible portfolio.","I have a HOW Score.","I know my career track.","I can explain my work.","I belong to a serious builder community."].map((x) => (
                    <li key={x} className="flex gap-3"><Check className="h-4 w-4 text-primary mt-1 shrink-0" strokeWidth={2.5} />{x}</li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="relative py-24">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <EyebrowLabel index="10">Why House of Wise</EyebrowLabel>
            <h2 className="mt-6 text-display text-4xl md:text-6xl text-balance max-w-4xl">
              Built with the seriousness the future deserves.
            </h2>
            <p className="mt-6 text-muted-foreground max-w-2xl">
              Designed for students, colleges, and partners who believe education must move beyond passive learning.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-12">
            {["Measurable readiness","Practical projects","Institutional implementation","Student confidence","Faculty enablement","Community-driven growth","Career-linked outcomes","Long-term ecosystem"].map((t, i) => (
              <AnimatedSection key={t} delay={i * 0.03}>
                <div className="hairline rounded-md p-5">
                  <span className="font-mono-label text-primary">0{i + 1}</span>
                  <p className="mt-3 text-foreground font-medium text-sm">{t}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative py-32">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <div className="panel p-10 md:p-16 text-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-10 gradient-brand-bg pointer-events-none" />
              <div className="relative">
                <EyebrowLabel index="11" className="justify-center">Take your next step</EyebrowLabel>
                <h2 className="mt-6 text-display text-4xl md:text-6xl text-balance max-w-4xl mx-auto">
                  The <span className="gradient-brand-text">AI-ready generation</span> is being built now.
                </h2>
                <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">
                  The future will not wait for students to feel ready — so we are building the place where they become ready.
                </p>
                <div className="flex flex-wrap justify-center gap-3 mt-10">
                  <Link to="/waitlist"><WisdomButton variant="brand" size="lg">Join student waitlist</WisdomButton></Link>
                  <Link to="/colleges"><WisdomButton variant="outline" size="lg">For colleges</WisdomButton></Link>
                  <Link to="/partners"><WisdomButton variant="outline" size="lg">For partners</WisdomButton></Link>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
