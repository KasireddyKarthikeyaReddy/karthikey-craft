import { motion } from "framer-motion";
import { Mail, Phone, Github, Linkedin } from "lucide-react";

const contacts = [
  { icon: Mail, label: "Email", value: "karthikeyaikreddy2003@gmail.com", href: "mailto:karthikeyaikreddy2003@gmail.com" },
  { icon: Phone, label: "Phone", value: "8074744728", href: "tel:8074744728" },
  { icon: Github, label: "GitHub", value: "KasireddyKarthikeyaReddy", href: "https://github.com/KasireddyKarthikeyaReddy" },
  { icon: Linkedin, label: "LinkedIn", value: "karthikeya80", href: "https://www.linkedin.com/in/karthikeya80/" },
];

const ContactSection = () => (
  <section id="contact" className="py-24">
    <div className="container mx-auto px-4 max-w-2xl">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-2 text-center">
          Get In <span className="text-gradient">Touch</span>
        </h2>
        <div className="w-16 h-1 bg-gradient-primary mx-auto rounded-full mb-12" />
      </motion.div>

      <div className="space-y-4">
        {contacts.map((c, i) => (
          <motion.a
            key={c.label}
            href={c.href}
            target={c.href.startsWith("http") ? "_blank" : undefined}
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="flex items-center gap-4 bg-card border border-border rounded-xl p-4 card-hover group"
          >
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <c.icon className="text-primary" size={18} />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">{c.label}</p>
              <p className="text-sm font-medium text-foreground">{c.value}</p>
            </div>
          </motion.a>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="text-center text-muted-foreground text-sm mt-16"
      >
        © 2025 Karthikeya Reddy Kasireddy. All rights reserved.
      </motion.p>
    </div>
  </section>
);

export default ContactSection;
