import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin, Github, Code } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center gradient-hero text-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Raman Sangwan
          </h1>
          <p className="text-2xl md:text-3xl mb-4 font-semibold">
            Tech Developer & Marketing Analytics Enthusiast
          </p>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed opacity-90">
            A Computer Science undergraduate with a strong foundation in programming and a passion for digital marketing analytics. 
            Skilled in building secure, data-driven software solutions while leveraging SEO and campaign insights to drive engagement. 
            Dedicated to combining technical problem-solving with creative strategy to deliver impactful digital experiences.
          </p>

          {/* Contact Info */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-10 text-sm md:text-base">
            <a href="mailto:ramansangwanxc@gmail.com" className="flex items-center gap-2 hover:scale-110 transition-smooth">
              <Mail className="w-5 h-5" />
              <span className="hidden md:inline">ramansangwanxc@gmail.com</span>
            </a>
            <a href="tel:+918700793860" className="flex items-center gap-2 hover:scale-110 transition-smooth">
              <Phone className="w-5 h-5" />
              <span>+91-8700793860</span>
            </a>
            <a href="https://linkedin.com/in/ramansangwanxc" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:scale-110 transition-smooth">
              <Linkedin className="w-5 h-5" />
              <span>LinkedIn</span>
            </a>
            <a href="https://github.com/ramansangwanxc" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:scale-110 transition-smooth">
              <Github className="w-5 h-5" />
              <span>GitHub</span>
            </a>
            <a href="https://leetcode.com/u/ramansangwanxc" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:scale-110 transition-smooth">
              <Code className="w-5 h-5" />
              <span>LeetCode</span>
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="hero" size="lg" onClick={() => window.open('/resume.pdf', '_blank')}>
              Download Resume
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="bg-white/10 border-white text-white hover:bg-white hover:text-primary border-2"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Projects
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="bg-white/10 border-white text-white hover:bg-white hover:text-primary border-2"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Contact Me
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
