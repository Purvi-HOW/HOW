import { motion } from "framer-motion";
import { ReactNode } from "react";

interface WisdomCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: "primary" | "accent" | "amber";
}

const glowMap = {
  primary: "hover:shadow-[inset_0_0_0_1px_hsl(240_80%_55%),var(--glass-glow-primary)]",
  accent: "hover:shadow-[inset_0_0_0_1px_hsl(330_80%_55%),var(--glass-glow-accent)]",
  amber: "hover:shadow-[inset_0_0_0_1px_hsl(42_90%_55%),var(--glass-glow-amber)]",
};

const WisdomCard = ({ children, className = "", glowColor = "primary" }: WisdomCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -4 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className={`glass-surface rounded-3xl p-8 transition-shadow duration-500 ${glowMap[glowColor]} ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default WisdomCard;
