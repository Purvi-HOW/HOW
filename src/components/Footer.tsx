import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border/50 bg-muted/30">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <h3 className="font-display text-2xl font-bold tracking-tighter text-foreground mb-4">
              House of Wisdom <span className="text-primary">(HOW)</span>
            </h3>
            <p className="font-body text-muted-foreground max-w-md text-pretty">
              Advancing learning environments for the next generation of students.
            </p>
          </div>
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4 tracking-tight">Platform</h4>
            <div className="flex flex-col gap-3">
              <Link to="/schools" className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors">For Schools</Link>
              <Link to="/universities" className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors">For Universities</Link>
              <Link to="/demo" className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors">Request Demo</Link>
            </div>
          </div>
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4 tracking-tight">Connect</h4>
            <div className="flex flex-col gap-3">
              <span className="font-body text-sm text-muted-foreground">hello@houseofwisdom.edu</span>
              <span className="font-body text-sm text-muted-foreground">LinkedIn</span>
              <span className="font-body text-sm text-muted-foreground">Twitter</span>
            </div>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-border/30 flex justify-between items-center">
          <p className="font-body text-xs text-muted-foreground">
            &copy; 2026 House of Wisdom (HOW). All rights reserved.
          </p>
          <div className="flex gap-6">
            <span className="font-body text-xs text-muted-foreground">Privacy</span>
            <span className="font-body text-xs text-muted-foreground">Terms</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
