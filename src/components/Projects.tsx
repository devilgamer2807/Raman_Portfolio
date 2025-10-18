import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Code2, TrendingUp } from "lucide-react";

const Projects = () => {
  const [filter, setFilter] = useState<'all' | 'tech' | 'marketing'>('all');

  const projects = [
    {
      type: 'tech',
      title: "End-to-End Encrypted Cryptography-Based Real-Time Chat",
      date: "Jan 2023",
      description: "Developed a LAN-based encrypted chat system using Python, Socket, and RSA-Cryptography. Built a multi-threaded server supporting 300+ clients with 60% improved throughput. Focused on data privacy, security, and seamless real-time communication.",
      technologies: ["Python", "Socket Programming", "RSA", "Multithreading"],
    },
    {
      type: 'marketing',
      title: "Digital Marketing Campaign Analysis",
      date: "Mar 2024",
      description: "Optimized ad conversions by 25% using KPI tracking and Google Analytics. Conducted SEO audits via SEMrush and enhanced social engagement by 40%. Designed strategic content calendars and keyword plans for multi-channel campaigns.",
      technologies: ["Google Analytics", "SEMrush", "Meta Ads Manager", "SEO"],
    },
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.type === filter);

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Projects
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            My work across technical and marketing domains
          </p>

          {/* Filter Buttons */}
          <div className="flex justify-center gap-4 flex-wrap">
            <Button
              variant={filter === 'all' ? 'hero' : 'outline'}
              onClick={() => setFilter('all')}
              className="min-w-[120px]"
            >
              All Projects
            </Button>
            <Button
              variant={filter === 'tech' ? 'tech' : 'outline'}
              onClick={() => setFilter('tech')}
              className="min-w-[120px]"
            >
              <Code2 className="w-4 h-4 mr-2" />
              Technical
            </Button>
            <Button
              variant={filter === 'marketing' ? 'marketing' : 'outline'}
              onClick={() => setFilter('marketing')}
              className="min-w-[120px]"
            >
              <TrendingUp className="w-4 h-4 mr-2" />
              Marketing
            </Button>
          </div>
        </div>

        <div className="max-w-5xl mx-auto space-y-6">
          {filteredProjects.map((project, index) => (
            <Card 
              key={index} 
              className={`p-8 hover:shadow-xl transition-smooth animate-fade-in-up border-l-4 ${
                project.type === 'tech' ? 'border-l-primary' : 'border-l-secondary'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className={`w-12 h-12 rounded-full ${
                  project.type === 'tech' ? 'gradient-tech' : 'gradient-marketing'
                } flex items-center justify-center flex-shrink-0`}>
                  {project.type === 'tech' ? (
                    <Code2 className="w-6 h-6 text-white" />
                  ) : (
                    <TrendingUp className="w-6 h-6 text-white" />
                  )}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{project.date}</p>
                  <p className="text-foreground leading-relaxed mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge 
                        key={tech}
                        variant="secondary"
                        className={`${
                          project.type === 'tech' 
                            ? 'bg-primary/10 text-primary' 
                            : 'bg-secondary/10 text-secondary'
                        }`}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
