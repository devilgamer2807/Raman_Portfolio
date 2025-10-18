import { Card } from "@/components/ui/card";
import { Mail, Phone, Linkedin, Github, Code } from "lucide-react";

const Contact = () => {
  const contacts = [
    {
      icon: Phone,
      label: "Phone",
      value: "+91-8700793860",
      href: "tel:+918700793860",
    },
    {
      icon: Mail,
      label: "Email",
      value: "ramansangwanxc@gmail.com",
      href: "mailto:ramansangwanxc@gmail.com",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/ramansangwanxc",
      href: "https://linkedin.com/in/ramansangwanxc",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/ramansangwanxc",
      href: "https://github.com/ramansangwanxc",
    },
    {
      icon: Code,
      label: "LeetCode",
      value: "leetcode.com/u/ramansangwanxc",
      href: "https://leetcode.com/u/ramansangwanxc",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-muted-foreground text-lg">
            Let's connect and create something amazing together
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {contacts.map((contact, index) => (
            <a
              key={index}
              href={contact.href}
              target={contact.href.startsWith('http') ? '_blank' : undefined}
              rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            >
              <Card 
                className="p-6 hover:shadow-xl transition-smooth animate-fade-in-up group hover:scale-105 cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-14 h-14 rounded-full gradient-hero flex items-center justify-center mb-4 group-hover:scale-110 transition-smooth">
                    <contact.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold mb-2">{contact.label}</h3>
                  <p className="text-sm text-muted-foreground break-all">{contact.value}</p>
                </div>
              </Card>
            </a>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          <p className="text-muted-foreground">
            © 2025 Raman Sangwan. Built with passion and purpose.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
