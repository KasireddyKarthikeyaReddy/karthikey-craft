import { motion } from "framer-motion";
import { Mail, Phone, Github, Linkedin, Send } from "lucide-react";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const contacts = [
  { icon: Mail, label: "Email", value: "karthikeyaikreddy2003@gmail.com", href: "mailto:karthikeyaikreddy2003@gmail.com" },
  { icon: Phone, label: "Phone", value: "8074744728", href: "tel:8074744728" },
  { icon: Github, label: "GitHub", value: "KasireddyKarthikeyaReddy", href: "https://github.com/KasireddyKarthikeyaReddy" },
  { icon: Linkedin, label: "LinkedIn", value: "karthikeya80", href: "https://www.linkedin.com/in/karthikeya80/" },
];

const SERVICE_ID = "service_lfvlisf";
const TEMPLATE_ID = "template_57gpxbh";
const PUBLIC_KEY = "QsjR4MVkGuYjeWtnL";

const ContactSection = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSubmitting(true);
    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY);
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      formRef.current.reset();
    } catch (error) {
      console.error("EmailJS error:", error);
      toast({
        title: "Failed to send",
        description: "Something went wrong. Please try again or email me directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-4 max-w-2xl">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-2 text-center">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-primary mx-auto rounded-full mb-12" />
        </motion.div>

        {/* Contact Form */}
        <motion.form
          ref={formRef}
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-card border border-border rounded-xl p-6 mb-8 space-y-4"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="from_name" className="text-sm text-muted-foreground mb-1 block">Name</label>
              <Input id="from_name" name="from_name" placeholder="Your name" required maxLength={100} />
            </div>
            <div>
              <label htmlFor="from_email" className="text-sm text-muted-foreground mb-1 block">Email</label>
              <Input id="from_email" name="from_email" type="email" placeholder="Your email" required maxLength={255} />
            </div>
          </div>
          <div>
            <label htmlFor="message" className="text-sm text-muted-foreground mb-1 block">Message</label>
            <Textarea id="message" name="message" placeholder="Your message..." required maxLength={1000} rows={5} />
          </div>
          <Button type="submit" disabled={isSubmitting} className="w-full">
            {isSubmitting ? "Sending..." : (
              <>
                <Send size={16} className="mr-2" /> Send Message
              </>
            )}
          </Button>
        </motion.form>

        {/* Contact Links */}
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
};

export default ContactSection;
