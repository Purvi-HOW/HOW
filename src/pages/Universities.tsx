import { useNavigate } from "react-router-dom";
import AnimatedSection from "../components/AnimatedSection";
import WisdomCard from "../components/WisdomCard";
import WisdomButton from "../components/WisdomButton";
import EyebrowLabel from "../components/EyebrowLabel";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { GraduationCap, Code2, Briefcase, TrendingUp, Target, CheckCircle2 } from "lucide-react";

const Universities = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="relative pt-32 md:pt-40 pb-16">
        <div className="absolute inset-0 grid-bg pointer-events-none" />
        <div className="relative container mx-auto px-6">
          <AnimatedSection className="max-w-4xl">
            <EyebrowLabel index="/universities">For Universities</EyebrowLabel>
            <h1 className="text-display text-[clamp(2.5rem,7vw,5.5rem)] font-semibold text-balance mt-8">
              Practical learning{" "}
              <span className="gradient-text-amber">for universities.</span>
            </h1>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mt-8 text-pretty leading-relaxed">
              University education must connect theory with real-world application. House of Wisdom (HOW) provides interactive environments where students practice applying their knowledge and develop skills relevant to professional careers.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-spacing">
        <div className="container mx-auto px-6">
          <AnimatedSection className="max-w-3xl mb-14">
            <EyebrowLabel index="/practice">What students practice</EyebrowLabel>
            <h2 className="text-display text-3xl md:text-5xl font-semibold mt-8 text-balance">
              Structured exercises that build confidence.
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: Code2, title: "Coding & algorithm challenges", n: "01" },
              { icon: Briefcase, title: "Business case simulations", n: "02" },
              { icon: TrendingUp, title: "Financial modeling exercises", n: "03" },
              { icon: Target, title: "Problem-solving scenarios", n: "04" },
            ].map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.08}>
                <WisdomCard glowColor="amber" className="h-full">
                  <div className="flex items-center justify-between mb-10">
                    <span className="font-mono-label text-amber">{item.n}</span>
                    <item.icon className="w-5 h-5 text-amber" strokeWidth={1.75} />
                  </div>
                  <h3 className="font-display text-lg font-semibold tracking-tight leading-tight">{item.title}</h3>
                </WisdomCard>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="section-spacing">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <WisdomCard glowColor="amber" interactive={false} className="p-8 md:p-14">
              <EyebrowLabel index="/placements">Placement Preparation</EyebrowLabel>
              <h2 className="text-display text-3xl md:text-5xl font-semibold mt-8 mb-6 text-balance max-w-2xl">
                Simulate real{" "}
                <span className="gradient-text-amber">recruitment processes.</span>
              </h2>
              <p className="font-body text-muted-foreground max-w-xl text-pretty mb-10">
                Environments designed to simulate real recruitment processes. Students develop the skills required for:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Technical interviews",
                  "Consulting case discussions",
                  "Analytical problem solving",
                  "Financial reasoning",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-xl border border-border/50 bg-muted/30 p-4">
                    <CheckCircle2 className="w-4 h-4 text-amber mt-1 shrink-0" strokeWidth={2} />
                    <span className="font-body text-foreground/85">{item}</span>
                  </div>
                ))}
              </div>
              <p className="font-body text-muted-foreground text-pretty mt-8 max-w-xl">
                This preparation helps students approach placements with confidence and practical understanding.
              </p>
            </WisdomCard>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-spacing">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <div className="panel p-10 md:p-16 relative overflow-hidden">
              <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
              <div className="relative flex flex-col md:flex-row md:items-end justify-between gap-8">
                <div className="max-w-2xl">
                  <EyebrowLabel index="/next">Ready to begin</EyebrowLabel>
                  <h2 className="text-display text-3xl md:text-5xl font-semibold mt-6 text-balance">
                    Prepare students for{" "}
                    <span className="gradient-text-amber">careers.</span>
                  </h2>
                </div>
                <div className="flex items-center gap-3">
                  <WisdomButton size="lg" onClick={() => navigate("/demo")}>
                    Request a demo
                  </WisdomButton>
                  <a href="https://wisdomforge-ai.lovable.app" target="_blank" rel="noopener noreferrer"
                     className="inline-flex items-center gap-2 rounded-full border border-border pl-5 pr-3 py-3 text-sm font-semibold text-foreground hover:border-amber hover:text-amber transition font-display">
                    <GraduationCap className="w-4 h-4" strokeWidth={2} />
                    Open Universities app
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

export default Universities;
