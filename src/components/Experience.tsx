import { Card } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      role: "Marketing Intern",
      company: "Groupe SEB India",
      period: "Jun 2025 – Jul 2025",
      description: "Supported digital campaigns, managed social posts, and conducted market analysis. Contributed to social media strategies and team projects effectively.",
    },
    {
      role: "Digital Marketing & Business Development Intern",
      company: "Younity.in",
      period: "Jun 2024 – Aug 2024",
      description: "Executed outreach campaigns that boosted engagement by 30%. Developed ad creatives and optimized LinkedIn & Instagram visibility.",
    },
    {
      role: "Business Development Specialist Intern",
      company: "Younity.in",
      period: "Jun 2024 – Aug 2024",
      description: "Supported business expansion through lead research and client acquisition strategies. Conducted competitor analysis and built data reports to aid decision-making.",
    },
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Work Experience
          </h2>
          <p className="text-muted-foreground text-lg">
            Professional journey and accomplishments
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {experiences.map((exp, index) => (
            <Card 
              key={index} 
              className="p-8 hover:shadow-xl transition-smooth animate-fade-in-up relative overflow-hidden group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 top-1/2 w-4 h-4 bg-gradient-to-br from-primary to-secondary rounded-full -translate-x-1/2 -translate-y-1/2 group-hover:scale-150 transition-smooth"></div>
              
              <div className="flex items-start gap-4 ml-4">
                <div className="w-14 h-14 rounded-full gradient-hero flex items-center justify-center flex-shrink-0">
                  <Briefcase className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-1">{exp.role}</h3>
                  <p className="text-lg font-medium bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
                    {exp.company}
                  </p>
                  <p className="text-sm text-muted-foreground mb-3">{exp.period}</p>
                  <p className="text-foreground leading-relaxed">{exp.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
