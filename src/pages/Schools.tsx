import { useNavigate } from "react-router-dom";
import AnimatedSection from "../components/AnimatedSection";
import WisdomCard from "../components/WisdomCard";
import WisdomButton from "../components/WisdomButton";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Atom, FlaskConical, Eye, BarChart3 } from "lucide-react";

const Schools = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="relative min-h-[70vh] flex items-center justify-center pt-24">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/3 left-1/3 w-[500px] h-[500px] rounded-full bg-accent/20 blur-3xl" />
        </div>
        <div className="relative container mx-auto px-6 text-center">
          <AnimatedSection>
            <div className="w-16 h-16 rounded-3xl bg-accent/10 flex items-center justify-center mx-auto mb-8">
              <Atom className="w-8 h-8 text-accent" strokeWidth={1.5} />
            </div>
            <h1 className="text-display text-[clamp(2.5rem,8vw,6rem)] font-extrabold text-balance mb-6">
              Interactive Science Learning{" "}
              <span className="gradient-text-accent">for Schools</span>
            </h1>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
              Science becomes meaningful when students can see, explore, and experiment with ideas. House of Wisdom (HOW) helps schools create engaging science learning environments.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-spacing">
        <div className="container mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-display text-3xl md:text-5xl font-extrabold mb-4">What Students Experience</h2>
            <p className="font-body text-muted-foreground max-w-xl mx-auto text-pretty">
              Students learn through interactive exploration rather than passive memorization.
            </p>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { icon: Eye, title: "Visualize Processes", desc: "See scientific processes unfold in real-time interactive environments." },
              { icon: FlaskConical, title: "Explore Experiments", desc: "Test hypotheses through guided simulations that reinforce understanding." },
              { icon: BarChart3, title: "Track Progress", desc: "Reinforced learning through structured assessments and progress tracking." },
            ].map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.1}>
                <WisdomCard glowColor="accent" className="h-full text-center">
                  <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-5">
                    <item.icon className="w-7 h-7 text-accent" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-display text-xl font-bold tracking-tight mb-3">{item.title}</h3>
                  <p className="font-body text-sm text-muted-foreground text-pretty">{item.desc}</p>
                </WisdomCard>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="section-spacing">
        <div className="container mx-auto px-6">
          <AnimatedSection className="max-w-5xl mx-auto">
            <WisdomCard glowColor="accent" className="p-12 md:p-16">
              <h2 className="text-display text-3xl md:text-4xl font-extrabold mb-6">Benefits for Schools</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  "Stronger conceptual understanding among students",
                  "Improved engagement in science learning",
                  "Structured assessments and quizzes",
                  "Insights into student progress",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 shrink-0" />
                    <span className="font-body text-foreground/80 text-pretty">{item}</span>
                  </div>
                ))}
              </div>
            </WisdomCard>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-spacing relative">
        <div className="absolute inset-0 gradient-mesh opacity-40" />
        <div className="relative container mx-auto px-6 text-center">
          <AnimatedSection>
            <h2 className="text-display text-3xl md:text-5xl font-extrabold mb-6">Ready to Transform Science Education?</h2>
            <p className="font-body text-muted-foreground max-w-lg mx-auto mb-10 text-pretty">
              Students develop deeper curiosity and stronger conceptual clarity.
            </p>
            <WisdomButton size="lg" onClick={() => navigate("/demo")}>
              Request a Demo
            </WisdomButton>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Schools;
