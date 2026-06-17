"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ValueCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  gradient: string;
  delay: number;
}

export default function ValueCard({ title, description, icon, gradient, delay }: ValueCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      className="relative overflow-hidden bg-surface border border-white/5 rounded-2xl p-10 hover:border-white/15 transition-colors duration-500 group"
    >
      <div className={`absolute top-0 left-0 w-full h-full bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
      
      <div className="relative z-10">
        <div className="w-16 h-16 rounded-xl bg-background border border-white/5 flex items-center justify-center mb-6 shadow-xl">
          {icon}
        </div>
        <h3 className="text-2xl font-display font-bold mb-3 text-white">{title}</h3>
        <p className="text-muted leading-relaxed font-light">
          {description}
        </p>
      </div>
    </motion.div>
  );
}
