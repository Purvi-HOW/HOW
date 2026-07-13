import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import AnimatedSection from "../components/AnimatedSection";
import WisdomCard from "../components/WisdomCard";
import WisdomButton from "../components/WisdomButton";
import EyebrowLabel from "../components/EyebrowLabel";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  Atom, BookOpen, BrainCircuit, Code2, GraduationCap, LineChart,
  Lightbulb, Target, TrendingUp, Users, ArrowUpRight, Sparkles, CheckCircle2
} from "lucide-react";
import logo from "@/assets/logo.jpeg";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />

      {/* HERO */}
      <section className="relative pt-32 md:pt-40 pb-20">
        <div className="absolute inset-0 grid-bg pointer-events-none" />
        <div className="relative container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            {/* Left: Hero text */}
            <motion.div
              initial={{ filter: "blur(16px)", opacity: 0 }}
              animate={{ filter: "blur(0px)", opacity: 1 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7"
            >
              <EyebrowLabel index="/01">Institutional learning platform · India</EyebrowLabel>

              <h1 className="text-display text-[clamp(2.5rem,7vw,5.5rem)] font-semibold text-balance mt-8">
                Where learning meets{" "}
                <span className="gradient-text-primary">real-world skills.</span>
              </h1>

              <p className="font-body text-base md:text-lg text-muted-foreground max-w-xl mt-8 text-pretty leading-relaxed">
                House of Wisdom (HOW) helps schools and universities create engaging learning environments where students understand concepts deeply, practice real-world applications, and prepare confidently for the careers of tomorrow.
              </p>

              <div className="divider-line my-10 max-w-md" />

              <div className="grid grid-cols-3 gap-6 max-w-lg">
                <div>
                  <p className="font-mono-label text-primary mb-2">Schools</p>
                  <p className="font-body text-sm text-foreground/80 leading-snug">an engaged science ecosystem</p>
                </div>
                <div>
                  <p className="font-mono-label text-primary mb-2">Universities</p>
                  <p className="font-body text-sm text-foreground/80 leading-snug">a career-readiness program</p>
                </div>
                <div>
                  <p className="font-mono-label text-primary mb-2">Educators</p>
                  <p className="font-body text-sm text-foreground/80 leading-snug">visibility into every learner</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-12">
                <WisdomButton size="lg" onClick={() => navigate("/demo")}>
                  Request Institutional Demo
                </WisdomButton>
                <WisdomButton variant="outline" size="lg" arrow={false} onClick={() => navigate("/schools")}>
                  Explore the Platform
                </WisdomButton>
              </div>

              <p className="font-mono-label text-muted-foreground mt-10">
                No passive learning · No empty certificates · Only capability, proof & community
              </p>
            </motion.div>

            {/* Right: Institutional stat card */}
            <motion.div
              initial={{ opacity: 0, y: 20, filter: "blur(16px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5"
            >
              <div className="panel p-6">
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono-label text-muted-foreground">Institution profile</span>
                  <span className="font-mono-label text-muted-foreground">HOW · 2026</span>
                </div>

                <div className="flex items-center gap-3 pb-5 border-b border-border/50">
                  <img src={logo} alt="Institution" className="h-11 w-11 rounded-lg object-cover ring-1 ring-primary/40" />
                  <div>
                    <p className="font-display text-base font-semibold text-foreground">Meridian University</p>
                    <p className="font-body text-xs text-muted-foreground">Engineering · Business · Sciences</p>
                  </div>
                </div>

                <div className="mt-5">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono-label text-muted-foreground">Readiness Index</span>
                    <span className="font-display text-xl font-semibold tabular-nums">
                      <span className="text-foreground">840</span>
                      <span className="text-muted-foreground text-sm"> / 1000</span>
                    </span>
                  </div>
                  <div className="h-1.5 rounded-full bg-muted overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "84%" }}
                      transition={{ duration: 1.4, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                      className="h-full rounded-full bg-gradient-to-r from-primary via-accent to-amber"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2 mt-5">
                  {[
                    { label: "Concept mastery", value: "94%" },
                    { label: "Engagement", value: "87%" },
                    { label: "Placement", value: "2.4x" },
                  ].map((s) => (
                    <div key={s.label} className="rounded-lg bg-muted/50 border border-border/40 p-3">
                      <p className="font-mono-label text-muted-foreground mb-1.5" style={{ fontSize: "0.6rem" }}>{s.label}</p>
                      <p className="font-display text-lg font-semibold text-foreground tabular-nums">{s.value}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-5 rounded-lg border border-border/40 bg-muted/30 p-4">
                  <p className="font-mono-label text-muted-foreground mb-2">Latest cohort activity</p>
                  <div className="flex items-center justify-between">
                    <p className="font-display text-sm font-semibold text-foreground">Applied Finance Case Sprint</p>
                    <span className="font-mono-label text-primary">Live</span>
                  </div>
                  <div className="flex gap-1.5 mt-3">
                    {["Analysis", "Modeling", "Interviews"].map((t) => (
                      <span key={t} className="rounded-md border border-border/60 bg-background/40 px-2 py-1 font-mono text-[0.65rem] text-foreground/70">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* A NEW ERA */}
      <section className="section-spacing relative">
        <div className="container mx-auto px-6">
          <AnimatedSection className="max-w-3xl">
            <EyebrowLabel index="/02">The shift</EyebrowLabel>
            <h2 className="text-display text-4xl md:text-6xl font-semibold text-balance mt-8">
              A new era of{" "}
              <span className="gradient-text-primary">learning.</span>
            </h2>
            <div className="mt-10 space-y-5 max-w-2xl">
              <p className="font-body text-lg text-foreground/80 text-pretty leading-relaxed">
                Students today need more than theoretical knowledge. They need environments where ideas can be explored, tested, and applied.
              </p>
              <p className="font-body text-lg text-muted-foreground text-pretty leading-relaxed">
                House of Wisdom (HOW) provides institutions with a modern learning platform that combines interactive learning, guided practice, and career-focused skill development.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* BUILT FOR INSTITUTIONS */}
      <section className="section-spacing">
        <div className="container mx-auto px-6">
          <AnimatedSection className="max-w-3xl mb-16">
            <EyebrowLabel index="/03">Two ways in</EyebrowLabel>
            <h2 className="text-display text-4xl md:text-6xl font-semibold text-balance mt-8">
              Built for the{" "}
              <span className="gradient-text-primary">institutions</span>{" "}
              shaping tomorrow.
            </h2>
            <p className="font-body text-lg text-muted-foreground mt-6 text-pretty">
              The platform adapts to different academic environments while maintaining a consistent focus on conceptual understanding and practical application.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-6">
            <AnimatedSection delay={0.1}>
              <WisdomCard glowColor="primary" className="h-full">
                <div className="flex items-center justify-between mb-8">
                  <span className="font-mono-label text-muted-foreground">01 · For Schools</span>
                  <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <Atom className="w-5 h-5 text-primary" strokeWidth={1.75} />
                  </div>
                </div>
                <h3 className="font-display text-2xl md:text-3xl font-semibold tracking-tight mb-4">
                  Building strong foundations in <span className="gradient-text-primary">science</span>.
                </h3>
                <p className="font-body text-muted-foreground mb-8 text-pretty">
                  Students learn science best when they can explore and experiment. Interactive environments where students visualize complex concepts and test ideas through simulations.
                </p>
                <div className="space-y-2.5 mb-8">
                  {["Interactive physics & chemistry simulations", "Visual concept explanations", "Structured assessments", "Learning progress insights"].map((item) => (
                    <div key={item} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" strokeWidth={2} />
                      <span className="font-body text-sm text-foreground/80">{item}</span>
                    </div>
                  ))}
                </div>
                <a href="https://genz-lab-hq.lovable.app" target="_blank" rel="noopener noreferrer"
                   className="inline-flex items-center gap-2 rounded-full bg-primary pl-5 pr-2 py-2 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90 font-display">
                  Enter the Schools platform
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-background/20">
                    <ArrowUpRight className="h-4 w-4" strokeWidth={2.5} />
                  </span>
                </a>
              </WisdomCard>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <WisdomCard glowColor="amber" className="h-full">
                <div className="flex items-center justify-between mb-8">
                  <span className="font-mono-label text-muted-foreground">02 · For Universities</span>
                  <div className="w-11 h-11 rounded-xl bg-amber/10 border border-amber/20 flex items-center justify-center">
                    <GraduationCap className="w-5 h-5 text-amber" strokeWidth={1.75} />
                  </div>
                </div>
                <h3 className="font-display text-2xl md:text-3xl font-semibold tracking-tight mb-4">
                  From classroom knowledge to <span className="gradient-text-amber">professional skills</span>.
                </h3>
                <p className="font-body text-muted-foreground mb-8 text-pretty">
                  University education must prepare students for the realities of professional careers. Interactive environments for applying theoretical knowledge.
                </p>
                <div className="space-y-2.5 mb-8">
                  {["Coding & algorithm challenges", "Business case simulations", "Financial analysis exercises", "Structured problem-solving"].map((item) => (
                    <div key={item} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-amber mt-0.5 shrink-0" strokeWidth={2} />
                      <span className="font-body text-sm text-foreground/80">{item}</span>
                    </div>
                  ))}
                </div>
                <a href="https://wisdomforge-ai.lovable.app" target="_blank" rel="noopener noreferrer"
                   className="inline-flex items-center gap-2 rounded-full bg-amber pl-5 pr-2 py-2 text-sm font-semibold text-amber-foreground transition hover:bg-amber/90 font-display">
                  Enter the Universities platform
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-background/20">
                    <ArrowUpRight className="h-4 w-4" strokeWidth={2.5} />
                  </span>
                </a>
              </WisdomCard>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* FROM LEARNING TO OPPORTUNITY */}
      <section className="section-spacing relative">
        <div className="container mx-auto px-6">
          <AnimatedSection className="max-w-3xl mb-14">
            <EyebrowLabel index="/04">Career readiness</EyebrowLabel>
            <h2 className="text-display text-4xl md:text-6xl font-semibold text-balance mt-8">
              From learning to{" "}
              <span className="gradient-text-primary">opportunity.</span>
            </h2>
            <p className="font-body text-lg text-muted-foreground mt-6 text-pretty">
              House of Wisdom (HOW) integrates placement readiness directly into the learning environment. By the time students graduate, they are not only knowledgeable but also prepared for professional challenges.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: BrainCircuit, title: "Structured Problem Solving", n: "01" },
              { icon: Code2, title: "Technical Coding Prep", n: "02" },
              { icon: LineChart, title: "Financial Modeling & Analysis", n: "03" },
              { icon: Target, title: "Consulting Case Practice", n: "04" },
            ].map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.08}>
                <WisdomCard glowColor="primary" className="h-full">
                  <div className="flex items-center justify-between mb-8">
                    <span className="font-mono-label text-primary">{item.n}</span>
                    <item.icon className="w-5 h-5 text-foreground/60" strokeWidth={1.75} />
                  </div>
                  <h4 className="font-display text-lg font-semibold tracking-tight leading-tight">{item.title}</h4>
                </WisdomCard>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* BETTER LEARNING EXPERIENCE */}
      <section className="section-spacing">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            <AnimatedSection className="lg:col-span-5 lg:sticky lg:top-32">
              <EyebrowLabel index="/05">Experience</EyebrowLabel>
              <h2 className="text-display text-4xl md:text-5xl font-semibold text-balance mt-8">
                A better learning{" "}
                <span className="gradient-text-primary">experience.</span>
              </h2>
              <p className="font-body text-muted-foreground text-pretty leading-relaxed mt-6">
                Students explore concepts, test their understanding, and receive guidance when they need it. Institutions gain tools to modernize their teaching approach while maintaining academic rigor.
              </p>
              <p className="font-body text-muted-foreground text-pretty leading-relaxed mt-4">
                This combination of engagement and structure allows students to develop both conceptual understanding and practical skills.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.15} className="lg:col-span-7">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Lightbulb, label: "Active Learning", value: "3x", desc: "vs. passive lectures" },
                  { icon: Users, label: "Student Engagement", value: "87%", desc: "monthly active learners" },
                  { icon: BookOpen, label: "Concept Mastery", value: "94%", desc: "assessment scores" },
                  { icon: TrendingUp, label: "Career Readiness", value: "2.4x", desc: "placement success" },
                ].map((stat) => (
                  <WisdomCard key={stat.label} glowColor="primary" className="p-6">
                    <div className="flex items-center justify-between mb-8">
                      <stat.icon className="w-5 h-5 text-primary" strokeWidth={1.75} />
                      <span className="font-mono-label text-muted-foreground">{stat.desc}</span>
                    </div>
                    <div className="font-display text-4xl font-semibold tabular-nums gradient-text-primary">
                      {stat.value}
                    </div>
                    <p className="font-body text-sm text-foreground/70 mt-2">{stat.label}</p>
                  </WisdomCard>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* DESIGNED FOR EDUCATORS */}
      <section className="section-spacing">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <WisdomCard glowColor="primary" interactive={false} className="p-8 md:p-14">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <EyebrowLabel index="/06">Educators</EyebrowLabel>
                  <h2 className="text-display text-3xl md:text-5xl font-semibold text-balance mt-8 mb-6">
                    Designed for{" "}
                    <span className="gradient-text-primary">educators.</span>
                  </h2>
                  <p className="font-body text-muted-foreground text-pretty leading-relaxed">
                    House of Wisdom (HOW) supports educators by providing visibility into student progress and learning patterns. These insights help educators guide students more effectively and ensure stronger learning outcomes.
                  </p>
                </div>
                <div className="space-y-5">
                  {[
                    { label: "Concept Mastery", width: "94%" },
                    { label: "Learning Engagement", width: "87%" },
                    { label: "Module Progress", width: "76%" },
                  ].map((bar) => (
                    <div key={bar.label}>
                      <div className="flex justify-between font-body text-sm mb-2">
                        <span className="text-foreground">{bar.label}</span>
                        <span className="text-muted-foreground tabular-nums font-mono">{bar.width}</span>
                      </div>
                      <div className="h-1.5 rounded-full bg-muted overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: bar.width }}
                          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                          viewport={{ once: true }}
                          className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </WisdomCard>
          </AnimatedSection>
        </div>
      </section>

      {/* FUTURE OF LEARNING */}
      <section className="section-spacing">
        <div className="container mx-auto px-6">
          <AnimatedSection className="max-w-4xl">
            <EyebrowLabel index="/07">The future</EyebrowLabel>
            <h2 className="text-display text-4xl md:text-6xl font-semibold text-balance mt-8">
              The future of{" "}
              <span className="gradient-text-primary">institutional learning.</span>
            </h2>
            <p className="font-body text-lg text-muted-foreground text-pretty leading-relaxed mt-6 max-w-2xl">
              The future of education will combine technology with strong academic principles. Institutions adopting this approach are able to provide students with an educational experience that is both rigorous and forward-looking.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="section-spacing relative">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <div className="panel p-10 md:p-16 relative overflow-hidden">
              <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
              <div className="relative">
                <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 mb-8">
                  <Sparkles className="w-3.5 h-3.5 text-primary" strokeWidth={2} />
                  <span className="font-mono-label text-primary" style={{ letterSpacing: "0.1em" }}>Cohort 2026 open</span>
                </div>
                <h2 className="text-display text-4xl md:text-6xl font-semibold text-balance max-w-3xl">
                  Bring modern learning to{" "}
                  <span className="gradient-text-primary">your institution.</span>
                </h2>
                <p className="font-body text-lg text-muted-foreground max-w-xl mt-6 text-pretty">
                  House of Wisdom (HOW) partners with schools and universities to create engaging learning environments that prepare students for the future.
                </p>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-10">
                  <WisdomButton size="lg" onClick={() => navigate("/demo")}>
                    Request Institutional Demo
                  </WisdomButton>
                  <a href="mailto:hello@howschool.online" className="font-mono-label text-muted-foreground hover:text-primary transition-colors">
                    hello@howschool.online
                  </a>
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
