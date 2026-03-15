import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

interface StatBlockProps {
  value: string;
  label: string;
  delay?: number;
}

const StatBlock = ({ value, label, delay = 0 }: StatBlockProps) => (
  <AnimatedSection delay={delay} className="text-center">
    <motion.div
      className="font-display text-5xl md:text-6xl font-extrabold tracking-tighter gradient-text-primary tabular-nums"
    >
      {value}
    </motion.div>
    <p className="font-body text-sm text-muted-foreground mt-2 tracking-tight">{label}</p>
  </AnimatedSection>
);

export default StatBlock;
