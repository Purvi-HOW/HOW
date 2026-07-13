import { useNavigate } from "react-router-dom";
import AnimatedSection from "../components/AnimatedSection";
import WisdomCard from "../components/WisdomCard";
import WisdomButton from "../components/WisdomButton";
import EyebrowLabel from "../components/EyebrowLabel";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Atom, FlaskConical, Eye, BarChart3, CheckCircle2 } from "lucide-react";

const Schools = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="relative pt-32 md:pt-40 pb-16">
        <div className="absolute inset-0 grid-bg pointer-events-none" />
        <div className="relative container mx-auto px-6">
          <AnimatedSection className="max-w-4xl">
            <EyebrowLabel index="/schools">For Schools</EyebrowLabel>
            <h1 className="text-display text-[clamp(2.5rem,7vw,5.5rem)] font-semibold text-balance mt-8">
              Interactive science learning{" "}
              <span className="gradient-text-primary">for schools.</span>
            </h1>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mt-8 text-pretty leading-relaxed">
              Science becomes meaningful when students can see, explore, and experiment with ideas. House of Wisdom (HOW) helps schools create engaging science learning environments where students develop curiosity and conceptual understanding.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-spacing">
        <div className="container mx-auto px-6">
          <AnimatedSection className="max-w-3xl mb-14">
            <EyebrowLabel index="/experience">What students experience</EyebrowLabel>
            <h2 className="text-display text-3xl md:text-5xl font-semibold mt-8 text-balance">
              Interactive exploration, not passive memorization.
            </h2>
            <p className="font-body text-muted-foreground max-w-xl mt-6 text-pretty">
              Students visualize scientific processes, explore experiments through simulations, and reinforce their understanding through guided practice.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              { icon: Eye, title: "Visualize processes", desc: "See scientific processes unfold in real-time interactive environments.", n: "01" },
              { icon: FlaskConical, title: "Explore experiments", desc: "Test hypotheses through guided simulations that reinforce understanding.", n: "02" },
              { icon: BarChart3, title: "Track progress", desc: "Reinforced learning through structured assessments and progress tracking.", n: "03" },
            ].map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.1}>
                <WisdomCard glowColor="primary" className="h-full">
                  <div className="flex items-center justify-between mb-10">
                    <span className="font-mono-label text-primary">{item.n}</span>
                    <item.icon className="w-5 h-5 text-primary" strokeWidth={1.75} />
                  </div>
                  <h3 className="font-display text-xl font-semibold tracking-tight mb-3">{item.title}</h3>
                  <p className="font-body text-sm text-muted-foreground text-pretty leading-relaxed">{item.desc}</p>
                </WisdomCard>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="section-spacing">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <WisdomCard glowColor="primary" interactive={false} className="p-8 md:p-14">
              <EyebrowLabel index="/benefits">Benefits for schools</EyebrowLabel>
              <h2 className="text-display text-3xl md:text-5xl font-semibold mt-8 mb-10 text-balance max-w-2xl">
                What schools gain when they{" "}
                <span className="gradient-text-primary">adopt HOW.</span>
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Stronger conceptual understanding among students",
                  "Improved engagement in science learning",
                  "Structured assessments and quizzes",
                  "Insights into student progress",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-xl border border-border/50 bg-muted/30 p-4">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-1 shrink-0" strokeWidth={2} />
                    <span className="font-body text-foreground/85 text-pretty">{item}</span>
                  </div>
                ))}
              </div>
              <p className="font-body text-muted-foreground text-pretty mt-8 max-w-xl">
                This approach supports both academic excellence and student curiosity — students develop deeper curiosity and stronger conceptual clarity.
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
                    Ready to transform{" "}
                    <span className="gradient-text-primary">science education?</span>
                  </h2>
                </div>
                <div className="flex items-center gap-3">
                  <WisdomButton size="lg" onClick={() => navigate("/demo")}>
                    Request a demo
                  </WisdomButton>
                  <a href="https://genz-lab-hq.lovable.app" target="_blank" rel="noopener noreferrer"
                     className="inline-flex items-center gap-2 rounded-full border border-border pl-5 pr-3 py-3 text-sm font-semibold text-foreground hover:border-primary hover:text-primary transition font-display">
                    <Atom className="w-4 h-4" strokeWidth={2} />
                    Open Schools app
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

export default Schools;
