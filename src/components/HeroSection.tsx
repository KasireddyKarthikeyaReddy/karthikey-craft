import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const HeroSection = () => (
  <section id="home" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
    {/* Subtle background glow */}
    <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

    <div className="container mx-auto px-4 text-center relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <p className="text-primary font-medium text-sm tracking-widest uppercase mb-4">
          Full Stack Web Developer
        </p>
        <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-bold leading-tight mb-6">
          Karthikeya Reddy{" "}
          <span className="text-gradient">Kasireddy</span>
        </h1>
        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10">
          I build modern, responsive, and scalable web applications using Python, Django, and React.
        </p>

        <div className="flex items-center justify-center gap-4 mb-12">
          <a
            href="https://github.com/KasireddyKarthikeyaReddy"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
          >
            <Github size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/karthikeya80/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="mailto:karthikeyaikreddy2003@gmail.com"
            className="p-3 rounded-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
          >
            <Mail size={20} />
          </a>
        </div>

        <a href="#about" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
          <ArrowDown size={16} className="animate-bounce" />
          <span className="text-sm">Scroll down</span>
        </a>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
