import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import logo from "@/assets/logo.jpeg";

const Navbar = () => {
  const location = useLocation();

  const links = [
    { to: "/", label: "House" },
    { to: "/colleges", label: "For Colleges" },
    { to: "/partners", label: "Partners & Mentors" },
  ];

  return (
    <motion.nav
      initial={{ y: -12, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-4 left-4 right-4 z-50"
    >
      <div className="panel mx-auto max-w-6xl flex items-center justify-between pl-3 pr-3 py-2.5">
        <Link to="/" className="flex items-center gap-2.5">
          <img src={logo} alt="House of Wise" className="h-9 w-9 rounded-md object-cover ring-1 ring-primary/30" />
          <span className="font-display text-sm font-semibold tracking-tight text-foreground leading-tight">
            House of Wise <span className="text-muted-foreground font-mono text-xs">· HOW</span>
          </span>
        </Link>
        <div className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`rounded-full px-3.5 py-1.5 text-xs font-medium tracking-tight transition-colors duration-300 ${
                location.pathname === link.to
                  ? "text-foreground bg-muted"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {link.label}
            </Link>
        </div>
      </div>
    </motion.nav>

  );
};

export default Navbar;
