import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, TrendingUp } from "lucide-react";

const Skills = () => {
  const technicalSkills = {
    "Languages": ["C++", "Python"],
    "Web Technologies": ["HTML", "CSS"],
    "Databases": ["SQL"],
    "Concepts": ["Data Structures & Algorithms", "OOP", "OS", "Software Engineering", "Software Testing"],
    "Developer Tools": ["Git", "VS Code"],
    "Platforms": ["LeetCode", "HackerRank"],
  };

  const marketingSkills = {
    "Digital Tools": ["Google Ads", "Meta Ads Manager", "SEMrush", "Ahrefs", "HubSpot", "Mailchimp"],
    "SEO & Analytics": ["Keyword Research", "On/Off-Page SEO", "Google Analytics", "Performance Tracking"],
    "Social Media": ["LinkedIn", "Instagram", "YouTube", "Facebook", "X (Twitter)"],
    "Content Tools": ["Canva", "Notion", "Google Trends", "ChatGPT"],
    "Analytical Programming": ["Python", "SQL"],
  };

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-muted-foreground text-lg">
            A unique blend of technical and marketing capabilities
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {/* Technical Skills */}
          <Card className="p-8 hover:shadow-xl transition-smooth animate-fade-in-up border-l-4 border-l-primary">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full gradient-tech flex items-center justify-center">
                <Code2 className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-primary">Technical Skills</h3>
            </div>
            
            <div className="space-y-6">
              {Object.entries(technicalSkills).map(([category, skills]) => (
                <div key={category}>
                  <h4 className="font-semibold mb-3 text-foreground">{category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill) => (
                      <Badge 
                        key={skill} 
                        variant="secondary" 
                        className="bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-smooth"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Marketing Skills */}
          <Card className="p-8 hover:shadow-xl transition-smooth animate-fade-in-up border-l-4 border-l-secondary" style={{ animationDelay: '0.1s' }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full gradient-marketing flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-secondary">Marketing & Analytics</h3>
            </div>
            
            <div className="space-y-6">
              {Object.entries(marketingSkills).map(([category, skills]) => (
                <div key={category}>
                  <h4 className="font-semibold mb-3 text-foreground">{category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill) => (
                      <Badge 
                        key={skill} 
                        variant="secondary" 
                        className="bg-secondary/10 text-secondary hover:bg-secondary hover:text-secondary-foreground transition-smooth"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
