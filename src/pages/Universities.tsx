import { useNavigate } from "react-router-dom";
import AnimatedSection from "../components/AnimatedSection";
import WisdomCard from "../components/WisdomCard";
import WisdomButton from "../components/WisdomButton";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { GraduationCap, Code2, Briefcase, TrendingUp, Target } from "lucide-react";

const Universities = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="relative min-h-[70vh] flex items-center justify-center pt-24">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/3 right-1/3 w-[500px] h-[500px] rounded-full bg-amber/20 blur-3xl" />
        </div>
        <div className="relative container mx-auto px-6 text-center">
          <AnimatedSection>
            <div className="w-16 h-16 rounded-3xl bg-amber/10 flex items-center justify-center mx-auto mb-8">
              <GraduationCap className="w-8 h-8 text-amber" strokeWidth={1.5} />
            </div>
            <h1 className="text-display text-[clamp(2.5rem,8vw,6rem)] font-extrabold text-balance mb-6">
              Practical Learning{" "}
              <span className="gradient-text-amber">for Universities</span>
            </h1>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
              University education must connect theory with real-world application. House of Wisdom provides interactive environments for practical skill development.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-spacing">
        <div className="container mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-display text-3xl md:text-5xl font-extrabold mb-4">What Students Practice</h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { icon: Code2, title: "Coding Challenges" },
              { icon: Briefcase, title: "Business Cases" },
              { icon: TrendingUp, title: "Financial Analysis" },
              { icon: Target, title: "Problem Solving" },
            ].map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.1}>
                <WisdomCard glowColor="amber" className="h-full text-center">
                  <div className="w-14 h-14 rounded-2xl bg-amber/10 flex items-center justify-center mx-auto mb-5">
                    <item.icon className="w-7 h-7 text-amber" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-display text-lg font-bold tracking-tight">{item.title}</h3>
                </WisdomCard>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="section-spacing">
        <div className="container mx-auto px-6">
          <AnimatedSection className="max-w-5xl mx-auto">
            <WisdomCard glowColor="amber" className="p-12 md:p-16">
              <h2 className="text-display text-3xl md:text-4xl font-extrabold mb-4">
                Placement <span className="gradient-text-amber">Preparation</span>
              </h2>
              <p className="font-body text-muted-foreground mb-8 max-w-xl text-pretty">
                Environments designed to simulate real recruitment processes. Students develop the skills required for:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  "Technical interviews",
                  "Consulting case discussions",
                  "Analytical problem solving",
                  "Financial reasoning",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-amber mt-2 shrink-0" />
                    <span className="font-body text-foreground/80">{item}</span>
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
            <h2 className="text-display text-3xl md:text-5xl font-extrabold mb-6">Prepare Students for Careers</h2>
            <p className="font-body text-muted-foreground max-w-lg mx-auto mb-10 text-pretty">
              Students approach placements with confidence and practical understanding.
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

export default Universities;
