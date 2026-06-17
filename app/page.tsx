"use client";

import { motion } from "framer-motion";
import { Sprout, Lightbulb, Flame, ChevronRight } from "lucide-react";
import ValueCard from "@/components/ValueCard";
import Link from "next/link";

const FADE_UP = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const STAGGER = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

export default function Home() {
  const pillars = [
    { title: "Grow", icon: <Sprout className="w-8 h-8 text-emerald-400" />, description: "Learn new technologies, build projects, and continuously improve.", gradient: "from-emerald-400/10 to-transparent" },
    { title: "Innovate", icon: <Lightbulb className="w-8 h-8 text-primary" />, description: "Experiment boldly and transform ideas into experiences.", gradient: "from-primary/10 to-transparent" },
    { title: "Inspire", icon: <Flame className="w-8 h-8 text-orange-400" />, description: "Share knowledge, uplift others, and shape the future together.", gradient: "from-orange-400/10 to-transparent" }
  ];

  return (
    <main className="relative w-full">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[500px] bg-glow-conic blur-[120px] opacity-40 pointer-events-none" />

      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center px-6 pt-24 pb-24 text-center z-10 min-h-[80vh]">
        <motion.div variants={STAGGER} initial="hidden" animate="show" className="max-w-4xl flex flex-col items-center">
          <motion.div variants={FADE_UP} className="mb-6 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm font-medium tracking-wide flex items-center gap-2 text-muted">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            School of Electronics, DAVV Indore
          </motion.div>
          
          <motion.h1 variants={FADE_UP} className="text-5xl md:text-7xl font-display font-bold tracking-tight leading-tight mb-6 text-white">
            Game Development Cell <br className="hidden md:block"/> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">(GDC ELEX)</span>
          </motion.h1>
          
          <motion.p variants={FADE_UP} className="text-lg md:text-xl text-muted max-w-2xl mb-8 leading-relaxed font-light">
            Turning passion into creation through collaboration, innovation, and continuous learning.
          </motion.p>
          
          <motion.div variants={FADE_UP} className="flex flex-col sm:flex-row items-center gap-5 w-full justify-center">
            <Link href="/join" className="w-full sm:w-auto px-8 py-4 rounded-lg bg-white text-background font-medium flex items-center justify-center gap-2 hover:bg-gray-200 transition-all duration-300 group">
              Join GDC
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/projects" className="w-full sm:w-auto px-8 py-4 rounded-lg bg-surface border border-white/10 text-white hover:border-white/20 hover:bg-surfaceHover font-medium transition-all duration-300">
              Explore Projects
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Values Section */}
      <section className="relative py-24 px-6 max-w-7xl mx-auto w-full z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-white">Our Core Values</h2>
          <p className="text-muted text-lg max-w-2xl mx-auto font-light">A place where students don't just play games—they grow into creators.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <ValueCard key={pillar.title} {...pillar} delay={index * 0.2} />
          ))}
        </div>
      </section>
    </main>
  );
}