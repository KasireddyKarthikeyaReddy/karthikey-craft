import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, Code2, Sparkles } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const HeroSection = () => (
  <section id="home" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
    {/* Animated background elements */}
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-primary/8 blur-[150px]" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-primary/5 blur-[120px]" />
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--border)/0.3)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--border)/0.3)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,black_40%,transparent_100%)]" />
    </div>

    {/* Floating decorative elements */}
    <motion.div
      className="absolute top-32 left-[15%] text-primary/20"
      animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
    >
      <Code2 size={32} />
    </motion.div>
    <motion.div
      className="absolute bottom-40 right-[18%] text-primary/15"
      animate={{ y: [0, 12, 0], rotate: [0, -8, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
    >
      <Sparkles size={28} />
    </motion.div>
    <motion.div
      className="absolute top-1/2 left-[8%] w-2 h-2 rounded-full bg-primary/30"
      animate={{ y: [0, -20, 0], opacity: [0.3, 0.8, 0.3] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
    />
    <motion.div
      className="absolute top-1/3 right-[12%] w-1.5 h-1.5 rounded-full bg-primary/25"
      animate={{ y: [0, 15, 0], opacity: [0.2, 0.7, 0.2] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
    />

    <div className="container mx-auto px-4 text-center relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
      >
        {/* Profile Picture */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <Avatar className="w-32 h-32 mx-auto ring-4 ring-primary/30 ring-offset-4 ring-offset-background shadow-glow">
            <AvatarImage src="https://i.postimg.cc/Y9jxNjpT/karthik1.jpg" alt="Karthikeya Reddy Kasireddy" />
            <AvatarFallback className="text-2xl font-bold bg-primary/20 text-primary">KR</AvatarFallback>
          </Avatar>
        </motion.div>

        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-secondary/50 backdrop-blur-sm mb-8"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
          </span>
          <span className="text-sm text-muted-foreground">Available for opportunities</span>
        </motion.div>

        <h1 className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] mb-6">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="block text-foreground"
          >
            Karthikeya Reddy
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="block text-gradient mt-1"
          >
            Kasireddy
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="text-primary font-medium text-sm tracking-[0.2em] uppercase mb-6"
        >
          Python Full Stack Developer
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          I build modern, responsive, and scalable web applications using{" "}
          <span className="text-foreground font-medium">Python</span>,{" "}
          <span className="text-foreground font-medium">Django</span>, and{" "}
          <span className="text-foreground font-medium">React</span>.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.75 }}
          className="flex items-center justify-center gap-3 mb-16"
        >
          {[
            { href: "https://github.com/KasireddyKarthikeyaReddy", icon: Github, label: "GitHub" },
            { href: "https://www.linkedin.com/in/karthikeya80/", icon: Linkedin, label: "LinkedIn" },
            { href: "mailto:karthikeyaikreddy2003@gmail.com", icon: Mail, label: "Email" },
          ].map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target={label !== "Email" ? "_blank" : undefined}
              rel={label !== "Email" ? "noopener noreferrer" : undefined}
              className="group relative p-3.5 rounded-xl bg-secondary/60 border border-border text-muted-foreground hover:text-primary-foreground hover:border-primary/50 transition-all duration-300 hover:shadow-glow hover:bg-primary/90"
              aria-label={label}
            >
              <Icon size={20} />
            </a>
          ))}
        </motion.div>

        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="inline-flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
        >
          <span className="text-xs tracking-widest uppercase">Explore</span>
          <ArrowDown size={18} className="animate-bounce group-hover:text-primary" />
        </motion.a>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
