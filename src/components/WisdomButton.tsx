import { motion } from "framer-motion";
import { ReactNode } from "react";

interface WisdomButtonProps {
  children: ReactNode;
  variant?: "primary" | "outline" | "ghost";
  size?: "default" | "lg";
  onClick?: () => void;
  className?: string;
}

const variants = {
  primary:
    "bg-foreground text-background hover:bg-primary",
  outline:
    "border border-foreground/20 text-foreground hover:border-primary hover:text-primary",
  ghost:
    "text-foreground hover:text-primary",
};

const sizes = {
  default: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

const WisdomButton = ({
  children,
  variant = "primary",
  size = "default",
  onClick,
  className = "",
}: WisdomButtonProps) => {
  return (
    <motion.button
      whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`rounded-full font-display font-medium tracking-tight transition-colors duration-500 ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </motion.button>
  );
};

export default WisdomButton;
