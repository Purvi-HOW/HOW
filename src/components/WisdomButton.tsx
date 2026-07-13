import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { ReactNode } from "react";

interface WisdomButtonProps {
  children: ReactNode;
  variant?: "primary" | "outline" | "ghost";
  size?: "default" | "lg";
  onClick?: () => void;
  className?: string;
  arrow?: boolean;
  type?: "button" | "submit";
}

const variants = {
  primary: "bg-primary text-primary-foreground hover:bg-primary/90",
  outline: "bg-transparent border border-border text-foreground hover:border-primary hover:text-primary",
  ghost: "text-foreground hover:text-primary",
};

const sizes = {
  default: "pl-5 pr-2 py-2 text-sm",
  lg: "pl-6 pr-3 py-3 text-sm",
};

const WisdomButton = ({
  children,
  variant = "primary",
  size = "default",
  onClick,
  className = "",
  arrow = true,
  type = "button",
}: WisdomButtonProps) => {
  return (
    <motion.button
      type={type}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`inline-flex items-center gap-2.5 rounded-full font-display font-semibold tracking-tight transition-colors duration-300 ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
      {arrow && (
        <span className={`inline-flex ${size === "lg" ? "h-8 w-8" : "h-7 w-7"} items-center justify-center rounded-full ${
          variant === "primary" ? "bg-background/20" : "bg-muted"
        }`}>
          <ArrowUpRight className={size === "lg" ? "h-4 w-4" : "h-3.5 w-3.5"} strokeWidth={2.5} />
        </span>
      )}
    </motion.button>
  );
};

export default WisdomButton;
