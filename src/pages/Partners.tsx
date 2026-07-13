import { Link } from "react-router-dom";
import AnimatedSection from "../components/AnimatedSection";
import EyebrowLabel from "../components/EyebrowLabel";
import WisdomButton from "../components/WisdomButton";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const supports = ["Mentorship","Guest sessions","Hiring pathways","Project challenges","Campus partnerships","Sponsorships","Research collaborations","Demo day participation","Career pathway creation"];
const reasons = [
  "Access emerging AI-ready talent",
  "Shape student capability early",
  "Support future-facing education",
  "Build brand trust with campuses",
  "Participate in a growing AI ecosystem",
];

const Partners = () => (
  <div className="min-h-screen">
    <Navbar />

    <section className="relative pt-32 md:pt-40 pb-20 overflow-hidden">
      <div className="absolute inset-0 grid-bg pointer-events-none" />
      <div className="relative container mx-auto px-6">
        <AnimatedSection>
          <EyebrowLabel index="/partners">For Partners & Mentors</EyebrowLabel>
          <h1 className="mt-8 text-display text-5xl md:text-7xl text-balance max-w-5xl">
            Help build India's <span className="gradient-brand-text">AI-ready generation</span>.
          </h1>
          <p className="mt-8 max-w-3xl text-lg text-muted-foreground leading-relaxed">
            House of Wise invites mentors, companies, founders, educators, creators, investors, and ecosystem partners to contribute to the next generation of AI-ready talent.
          </p>
          <div className="flex flex-wrap gap-3 mt-10">
            <Link to="/waitlist"><WisdomButton variant="brand" size="lg">Become a HOW partner</WisdomButton></Link>
            <Link to="/waitlist"><WisdomButton variant="outline" size="lg">Talk to the team</WisdomButton></Link>
          </div>
        </AnimatedSection>
      </div>
    </section>

    <section className="py-16">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <div className="panel p-8 md:p-10">
            <span className="font-mono-label text-muted-foreground">Support through</span>
            <div className="flex flex-wrap gap-2 mt-6">
              {supports.map((s) => <span key={s} className="chip">{s}</span>)}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>

    <section className="py-20">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <EyebrowLabel>Why partners join</EyebrowLabel>
          <h2 className="mt-6 text-display text-4xl md:text-5xl text-balance max-w-3xl">
            Meet the builders before the world does.
          </h2>
        </AnimatedSection>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-14">
          {reasons.map((r, i) => (
            <AnimatedSection key={r} delay={i*0.05}>
              <div className="panel p-8 h-full">
                <span className="font-mono-label text-primary">0{i+1}</span>
                <p className="mt-5 text-xl font-medium leading-snug text-balance">{r}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* Community language */}
    <section className="py-20">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <EyebrowLabel>The community</EyebrowLabel>
          <h2 className="mt-6 text-display text-4xl md:text-5xl text-balance max-w-3xl">
            We do not have <span className="gradient-brand-text">students</span>.
          </h2>
          <p className="mt-6 text-muted-foreground max-w-2xl">
            The words we use to describe our people shape what those people believe about themselves. We chose these deliberately.
          </p>
        </AnimatedSection>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
          {[
            {n:"01",t:"Builders",b:"Everyone in the House. If you're making something, you belong to this word."},
            {n:"02",t:"Fellows",b:"Selected members of a cohort or program. Signals rigor and belonging."},
            {n:"03",t:"Explorers",b:"Newcomers in their first year. Curiosity without hierarchy."},
            {n:"04",t:"Operators",b:"Members who run programs, chapters, or infrastructure inside the House."},
            {n:"05",t:"Founders",b:"Builders who have shipped a company from inside the House."},
            {n:"06",t:"Researchers",b:"Members pursuing original work at the frontier of AI."},
            {n:"07",t:"Creators",b:"Members whose work reaches audiences — writers, designers, filmmakers, artists."},
            {n:"08",t:"Guild Members",b:"Alumni. Lifelong participants in the House. The room you never leave."},
          ].map((c, i) => (
            <AnimatedSection key={c.n} delay={i*0.04}>
              <div className="panel p-6 h-full">
                <span className="font-mono-label text-primary">{c.n}</span>
                <h3 className="mt-5 text-lg font-semibold">{c.t}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{c.b}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    <Footer />
  </div>
);

export default Partners;
