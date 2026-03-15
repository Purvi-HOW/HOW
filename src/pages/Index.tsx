import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import AnimatedSection from "../components/AnimatedSection";
import WisdomCard from "../components/WisdomCard";
import WisdomButton from "../components/WisdomButton";
import StatBlock from "../components/StatBlock";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import { Atom, BookOpen, BrainCircuit, Code2, GraduationCap, LineChart, Lightbulb, Target, TrendingUp, Users } from "lucide-react";
import logo from "@/assets/logo.jpeg";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-svh flex items-center justify-center">
        <div className="absolute inset-0 gradient-mesh" />
        <div className="absolute inset-0 opacity-30">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 blur-3xl"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-accent/10 to-amber/10 blur-3xl"
          />
        </div>
        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.div
            initial={{ filter: "blur(20px)", opacity: 0, scale: 0.95 }}
            animate={{ filter: "blur(0px)", opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <img src={logo} alt="House of Wisdom (HOW) logo" className="w-28 h-28 rounded-3xl mx-auto mb-10 shadow-2xl ring-2 ring-primary/20" />
            <h1 className="text-display text-[clamp(3rem,10vw,8rem)] font-extrabold text-balance">
              Where Learning <br />
              <span className="gradient-text-primary">Meets Real-World</span>
            </h1>
            <p className="font-body text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mt-8 text-pretty leading-relaxed">
              House of Wisdom (HOW) helps schools and universities create engaging learning environments where students understand concepts deeply, practice real-world applications, and prepare confidently for the careers of tomorrow.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
              <WisdomButton size="lg" onClick={() => navigate("/demo")}>
                Request Institutional Demo
              </WisdomButton>
              <WisdomButton variant="outline" size="lg" onClick={() => navigate("/schools")}>
                Explore the Platform
              </WisdomButton>
            </div>
          </motion.div>
        </div>
      </section>


      {/* A New Era */}
      <section className="section-spacing">
        <div className="container mx-auto px-6">
          <AnimatedSection className="max-w-[60ch] mx-auto text-center">
            <h2 className="text-display text-4xl md:text-6xl font-extrabold text-balance mb-8">
              A New Era of{" "}
              <span className="gradient-text-accent">Learning</span>
            </h2>
            <p className="font-body text-lg text-muted-foreground text-pretty leading-relaxed mb-6">
              Students today need more than theoretical knowledge. They need environments where ideas can be explored, tested, and applied.
            </p>
            <p className="font-body text-lg text-muted-foreground text-pretty leading-relaxed">
              House of Wisdom (HOW) provides institutions with a modern learning platform that combines interactive learning, guided practice, and career-focused skill development.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Built for Institutions */}
      <section className="section-spacing">
        <div className="container mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-display text-4xl md:text-6xl font-extrabold text-balance mb-6">
              Built for{" "}
              <span className="gradient-text-primary">Institutions</span>
            </h2>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              The platform adapts to different academic environments while maintaining a consistent focus on conceptual understanding and practical application.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <AnimatedSection delay={0.1}>
              <WisdomCard glowColor="accent" className="h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center">
                    <Atom className="w-6 h-6 text-accent" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-display text-2xl font-bold tracking-tight">For Schools</h3>
                </div>
                <p className="font-body text-muted-foreground mb-6 text-pretty">
                  Students learn science best when they can explore and experiment. Interactive environments where students visualize complex concepts and test ideas through simulations.
                </p>
                <div className="space-y-3 mb-8">
                  {["Interactive physics & chemistry simulations", "Visual concept explanations", "Structured assessments", "Learning progress insights"].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                      <span className="font-body text-sm text-foreground/80">{item}</span>
                    </div>
                  ))}
                </div>
                <a href="https://genz-lab-hq.lovable.app" target="_blank" rel="noopener noreferrer" className="inline-flex rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground transition-colors duration-500 hover:bg-accent/80 font-display tracking-tight">
                  Learn More
                </a>
              </WisdomCard>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <WisdomCard glowColor="amber" className="h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-amber/10 flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-amber" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-display text-2xl font-bold tracking-tight">For Universities</h3>
                </div>
                <p className="font-body text-muted-foreground mb-6 text-pretty">
                  University education must prepare students for the realities of professional careers. Interactive environments for applying theoretical knowledge.
                </p>
                <div className="space-y-3 mb-8">
                  {["Coding & algorithm challenges", "Business case simulations", "Financial analysis exercises", "Structured problem-solving"].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-amber mt-2 shrink-0" />
                      <span className="font-body text-sm text-foreground/80">{item}</span>
                    </div>
                  ))}
                </div>
                <Link to="/universities" className="font-display text-sm font-medium text-amber hover:underline tracking-tight">
                  Learn more →
                </Link>
              </WisdomCard>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Career Preparation */}
      <section className="section-spacing relative">
        <div className="absolute inset-0 gradient-mesh opacity-50" />
        <div className="relative container mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-display text-4xl md:text-6xl font-extrabold text-balance mb-6">
              From Learning to{" "}
              <span className="gradient-text-amber">Opportunity</span>
            </h2>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              House of Wisdom (HOW) integrates placement readiness directly into the learning environment.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { icon: BrainCircuit, title: "Structured Problem Solving", color: "primary" as const },
              { icon: Code2, title: "Technical Coding Prep", color: "accent" as const },
              { icon: LineChart, title: "Financial Modeling", color: "amber" as const },
              { icon: Target, title: "Case Practice", color: "primary" as const },
            ].map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.1}>
                <WisdomCard glowColor={item.color} className="text-center h-full">
                  <div className="w-14 h-14 rounded-2xl bg-muted flex items-center justify-center mx-auto mb-5">
                    <item.icon className="w-7 h-7 text-foreground" strokeWidth={1.5} />
                  </div>
                  <h4 className="font-display text-lg font-bold tracking-tight">{item.title}</h4>
                </WisdomCard>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Better Learning Experience */}
      <section className="section-spacing">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center max-w-5xl mx-auto">
            <AnimatedSection>
              <h2 className="text-display text-4xl md:text-5xl font-extrabold text-balance mb-6">
                A Better Learning{" "}
                <span className="gradient-text-primary">Experience</span>
              </h2>
              <p className="font-body text-muted-foreground text-pretty leading-relaxed mb-6">
                Students explore concepts, test their understanding, and receive guidance when they need it. Institutions gain tools to modernize their teaching approach while maintaining academic rigor.
              </p>
              <p className="font-body text-muted-foreground text-pretty leading-relaxed">
                This combination of engagement and structure allows students to develop both conceptual understanding and practical skills.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Lightbulb, label: "Active Learning", value: "3x" },
                  { icon: Users, label: "Student Engagement", value: "87%" },
                  { icon: BookOpen, label: "Concept Mastery", value: "94%" },
                  { icon: TrendingUp, label: "Career Readiness", value: "2.4x" },
                ].map((stat) => (
                  <WisdomCard key={stat.label} glowColor="primary" className="text-center p-6">
                    <stat.icon className="w-6 h-6 text-primary mx-auto mb-3" strokeWidth={1.5} />
                    <div className="font-display text-2xl font-bold tracking-tighter gradient-text-primary tabular-nums">
                      {stat.value}
                    </div>
                    <p className="font-body text-xs text-muted-foreground mt-1">{stat.label}</p>
                  </WisdomCard>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Designed for Educators */}
      <section className="section-spacing">
        <div className="container mx-auto px-6">
          <AnimatedSection className="max-w-5xl mx-auto">
            <WisdomCard glowColor="primary" className="p-12 md:p-16">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-display text-3xl md:text-5xl font-extrabold text-balance mb-6">
                    Designed for{" "}
                    <span className="gradient-text-accent">Educators</span>
                  </h2>
                  <p className="font-body text-muted-foreground text-pretty leading-relaxed">
                    House of Wisdom (HOW) supports educators by providing visibility into student progress and learning patterns. These insights help educators guide students more effectively.
                  </p>
                </div>
                <div className="space-y-6">
                  {[
                    { label: "Concept Mastery", width: "94%" },
                    { label: "Learning Engagement", width: "87%" },
                    { label: "Module Progress", width: "76%" },
                  ].map((bar) => (
                    <div key={bar.label}>
                      <div className="flex justify-between font-body text-sm mb-2">
                        <span className="text-foreground">{bar.label}</span>
                        <span className="text-muted-foreground tabular-nums">{bar.width}</span>
                      </div>
                      <div className="h-2 rounded-full bg-muted overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: bar.width }}
                          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                          viewport={{ once: true }}
                          className="h-full rounded-full bg-gradient-to-r from-primary to-secondary"
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

      {/* Future of Learning */}
      <section className="section-spacing">
        <div className="container mx-auto px-6">
          <AnimatedSection className="max-w-[60ch] mx-auto text-center">
            <h2 className="text-display text-4xl md:text-6xl font-extrabold text-balance mb-8">
              The Future of{" "}
              <span className="gradient-text-primary">Institutional Learning</span>
            </h2>
            <p className="font-body text-lg text-muted-foreground text-pretty leading-relaxed">
              Institutions adopting this approach are able to provide students with an educational experience that is both rigorous and forward-looking.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-spacing relative">
        <div className="absolute inset-0 gradient-mesh" />
        <div className="relative container mx-auto px-6 text-center">
          <AnimatedSection>
            <h2 className="text-display text-4xl md:text-6xl font-extrabold text-balance mb-6">
              Bring Modern Learning to{" "}
              <span className="gradient-text-primary">Your Institution</span>
            </h2>
            <p className="font-body text-lg text-muted-foreground max-w-xl mx-auto mb-12 text-pretty">
              Request a demo to see how the platform can support your institution.
            </p>
            <WisdomButton size="lg" onClick={() => navigate("/demo")}>
              Request Institutional Demo
            </WisdomButton>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
