import { motion } from "framer-motion";
import { MapPin, GraduationCap, BookOpen } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const AboutSection = () => (
  <section id="about" className="py-24">
    <div className="container mx-auto px-4 max-w-4xl">
      <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-2 text-center">
          About <span className="text-gradient">Me</span>
        </h2>
        <div className="w-16 h-1 bg-gradient-primary mx-auto rounded-full mb-12" />
      </motion.div>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="bg-card border border-border rounded-2xl p-8 space-y-6"
      >
        <div className="flex items-start gap-4">
          <MapPin className="text-primary mt-1 shrink-0" size={20} />
          <p className="text-muted-foreground leading-relaxed">
            My name is <span className="text-foreground font-medium">Karthikeya</span>, and I'm from <span className="text-foreground font-medium">Kadapa</span>. I have completed my Bachelor's degree in Electrical and Electronics Engineering from MITS, Madanapalle in 2025.
          </p>
        </div>
        <div className="flex items-start gap-4">
          <BookOpen className="text-primary mt-1 shrink-0" size={20} />
          <p className="text-muted-foreground leading-relaxed">
            I am currently learning Python Full Stack development at <span className="text-foreground font-medium">Codegnan Destination</span> and expanding my skills in MERN Stack at <span className="text-foreground font-medium">HyperVerge Academy</span>.
          </p>
        </div>
        <div className="flex items-start gap-4">
          <GraduationCap className="text-primary mt-1 shrink-0" size={20} />
          <p className="text-muted-foreground leading-relaxed">
            I enjoy solving logical problems and building user-friendly interfaces. I am passionate about creating impactful web applications and continuously improving my development skills.
          </p>
        </div>
      </motion.div>
    </div>
  </section>
);

export default AboutSection;
