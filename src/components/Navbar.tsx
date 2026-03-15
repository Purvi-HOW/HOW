import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  const location = useLocation();

  const links = [
    { to: "/", label: "Home" },
    { to: "/schools", label: "For Schools" },
    { to: "/universities", label: "For Universities" },
    { to: "/demo", label: "Request Demo" },
  ];

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 glass-surface"
    >
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <Link to="/" className="font-display text-xl font-bold tracking-tighter text-foreground">
          House of Wisdom
        </Link>
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`font-body text-sm tracking-tight transition-colors duration-300 ${
                location.pathname === link.to
                  ? "text-primary font-medium"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <Link
          to="/demo"
          className="hidden md:inline-flex rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-colors duration-500 hover:bg-primary font-display tracking-tight"
        >
          Get Started
        </Link>
      </div>
    </motion.nav>
  );
};

export default Navbar;
