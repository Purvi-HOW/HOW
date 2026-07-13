import { Link } from "react-router-dom";
import logo from "@/assets/logo.jpeg";

const Footer = () => {
  return (
    <footer className="border-t border-border/60 mt-8">
      <div className="container mx-auto px-6 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-5">
              <img src={logo} alt="House of Wisdom logo" className="h-10 w-10 rounded-lg object-cover ring-1 ring-primary/30" />
              <h3 className="font-display text-xl font-semibold tracking-tight text-foreground">
                House of Wisdom <span className="text-primary">(HOW)</span>
              </h3>
            </div>
            <p className="font-body text-muted-foreground max-w-md text-pretty">
              Advancing learning environments for the next generation of students.
            </p>
          </div>
          <div className="md:col-span-3">
            <p className="font-mono-label text-muted-foreground mb-4">Platform</p>
            <div className="flex flex-col gap-2.5">
              <Link to="/schools" className="font-body text-sm text-foreground/80 hover:text-primary transition-colors">For Schools</Link>
              <Link to="/universities" className="font-body text-sm text-foreground/80 hover:text-primary transition-colors">For Universities</Link>
              <Link to="/demo" className="font-body text-sm text-foreground/80 hover:text-primary transition-colors">Request Demo</Link>
            </div>
          </div>
          <div className="md:col-span-4">
            <p className="font-mono-label text-muted-foreground mb-4">Connect</p>
            <div className="flex flex-col gap-2.5">
              <a href="mailto:hello@howschool.online" className="font-body text-sm text-foreground/80 hover:text-primary transition-colors">hello@howschool.online</a>
              <span className="font-body text-sm text-foreground/80">LinkedIn</span>
              <span className="font-body text-sm text-foreground/80">Twitter</span>
            </div>
          </div>
        </div>
        <div className="mt-16 pt-6 border-t border-border/40 flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
          <p className="font-mono-label text-muted-foreground">
            © 2026 House of Wisdom (HOW) · All rights reserved
          </p>
          <div className="flex items-center gap-2 font-mono-label text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            Live · Cohort 2026 open
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
