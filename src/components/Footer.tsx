import { Link } from "react-router-dom";
import logo from "@/assets/logo.jpeg";

const Footer = () => {
  return (
    <footer className="hairline-t mt-8">
      <div className="container mx-auto px-6 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-5">
              <img
                src={logo}
                alt="House of Wise"
                className="h-10 w-10 rounded-md object-cover ring-1 ring-primary/30"
              />

              <div>
                <p className="font-display text-lg font-semibold tracking-tight text-foreground leading-none">
                  House of Wise
                </p>

                <p className="font-mono-label text-muted-foreground mt-1.5">HOW · Formerly House of Wisdom</p>
              </div>
            </div>

            <p className="text-muted-foreground max-w-md text-pretty text-sm leading-relaxed">
              An institution for builders. India's AI-ready student movement — for those who want to think, build, and
              lead with AI as their native medium.
            </p>
          </div>

          <div className="md:col-span-3">
            <p className="font-mono-label text-muted-foreground mb-4">The House</p>

            <div className="flex flex-col gap-2.5">
              <Link to="/colleges" className="text-sm text-foreground/80 hover:text-primary transition-colors">
                For Colleges
              </Link>

              <Link to="/partners" className="text-sm text-foreground/80 hover:text-primary transition-colors">
                Partners & Mentors
              </Link>

              <Link to="/waitlist" className="text-sm text-foreground/80 hover:text-primary transition-colors">
                Student Waitlist
              </Link>
            </div>
          </div>

          <div className="md:col-span-4">
            <p className="font-mono-label text-muted-foreground mb-4">Contact</p>

            <div className="flex flex-col gap-2.5">
              <a
                href="mailto:hello@howschool.online?subject=Institutional%20Partnership%20Inquiry&body=Dear%20House%20of%20Wise%20Team,%0A%0AWe%20would%20like%20to%20learn%20more%20about%20the%20House%20of%20Wise%20AI%20Readiness%20Program%20for%20our%20institution.%0A%0AInstitution%20Name:%0AContact%20Person:%0ADesignation:%0AContact%20Number:%0A%0ARegards,"
                className="text-sm text-foreground/80 hover:text-primary transition-colors"
              >
                hello@howschool.online
              </a>

              <span className="text-sm text-foreground/60">Bengaluru · India</span>

              <div className="flex items-center gap-2 text-sm text-foreground/60">
                <a
                  href="https://www.linkedin.com/company/house-of-wise1/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  LinkedIn
                </a>

                <span>·</span>

                <a
                  href="https://www.instagram.com/houseofwisehq/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => {
                    e.preventDefault();
                    window.open("https://www.instagram.com/houseofwisehq/", "_blank", "noopener,noreferrer");
                  }}
                  className="hover:text-primary transition-colors"
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-6 hairline-t flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
          <p className="font-mono-label text-muted-foreground">© 2026 House of Wise · All rights reserved</p>

          <div className="flex items-center gap-2 font-mono-label text-sage">
            <span className="h-1.5 w-1.5 rounded-full bg-sage animate-pulse" />
            <span>Live · Cohort '26 Open</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
