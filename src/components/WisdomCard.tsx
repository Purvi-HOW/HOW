import { motion } from "framer-motion";
import { ReactNode } from "react";

interface WisdomCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: "primary" | "accent" | "amber";
  interactive?: boolean;
}

const glowMap = {
  primary: "hover:border-primary/50 hover:shadow-[0_30px_80px_-30px_hsl(328_90%_45%/0.5)]",
  accent: "hover:border-accent/50 hover:shadow-[0_30px_80px_-30px_hsl(328_90%_45%/0.5)]",
  amber: "hover:border-amber/50 hover:shadow-[0_30px_80px_-30px_hsl(42_95%_45%/0.4)]",
};

const WisdomCard = ({ children, className = "", glowColor = "primary", interactive = true }: WisdomCardProps) => {
  return (
    <motion.div
      whileHover={interactive ? { y: -3 } : undefined}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className={`panel p-6 md:p-8 transition-all duration-500 ${interactive ? glowMap[glowColor] : ""} ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default WisdomCard;
