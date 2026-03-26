import { motion } from "framer-motion";

const skills = [
  { name: "Python", level: 85 },
  { name: "Django", level: 80 },
  { name: "React", level: 75 },
  { name: "MySQL", level: 70 },
  { name: "HTML / CSS / JS", level: 90 },
  { name: "Node.js (Basics)", level: 50 },
  { name: "Problem Solving", level: 85 },
];

const SkillsSection = () => (
  <section id="skills" className="py-24 bg-card/30">
    <div className="container mx-auto px-4 max-w-3xl">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-2 text-center">
          My <span className="text-gradient">Skills</span>
        </h2>
        <div className="w-16 h-1 bg-gradient-primary mx-auto rounded-full mb-12" />
      </motion.div>

      <div className="space-y-6">
        {skills.map((skill, i) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
          >
            <div className="flex justify-between mb-2">
              <span className="text-sm font-medium text-foreground">{skill.name}</span>
              <span className="text-sm text-muted-foreground">{skill.level}%</span>
            </div>
            <div className="h-2 bg-secondary rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-primary rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.08 }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
