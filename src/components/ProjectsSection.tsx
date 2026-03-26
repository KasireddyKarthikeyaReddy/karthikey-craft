import { motion } from "framer-motion";
import { Gamepad2, Landmark, Shirt } from "lucide-react";

const projects = [
  {
    icon: Gamepad2,
    title: "Two-Player Trivia Battle Game",
    tags: ["JavaScript", "DOM", "API"],
    points: [
      "Browser-based multiplayer trivia game",
      "Multi-round, turn-based gameplay",
      "Integrated Trivia API",
      "Real-time score tracking",
    ],
  },
  {
    icon: Landmark,
    title: "BankLite — Banking Application",
    tags: ["Python", "OOP", "JSON"],
    points: [
      "Console-based Python application",
      "OOP-based design",
      "Account creation, deposit, withdrawal",
      "JSON data storage for persistence",
    ],
  },
  {
    icon: Shirt,
    title: "iLaundry — Laundry Management",
    tags: ["Django", "Auth", "MySQL"],
    points: [
      "Built using Django",
      "User authentication system",
      "Order tracking & payment system",
      "Admin + Customer modules",
    ],
  },
];

const ProjectsSection = () => (
  <section id="projects" className="py-24 bg-card/30">
    <div className="container mx-auto px-4">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-2 text-center">
          My <span className="text-gradient">Projects</span>
        </h2>
        <div className="w-16 h-1 bg-gradient-primary mx-auto rounded-full mb-12" />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.15 }}
            className="bg-card border border-border rounded-2xl p-6 card-hover flex flex-col"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
              <p.icon className="text-primary" size={22} />
            </div>
            <h3 className="font-display font-semibold text-foreground mb-3">{p.title}</h3>
            <div className="flex flex-wrap gap-2 mb-4">
              {p.tags.map((t) => (
                <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary font-medium">
                  {t}
                </span>
              ))}
            </div>
            <ul className="space-y-2 text-sm text-muted-foreground flex-1">
              {p.points.map((pt) => (
                <li key={pt} className="flex items-start gap-2">
                  <span className="text-primary mt-1.5 shrink-0 w-1 h-1 rounded-full bg-primary inline-block" />
                  {pt}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
