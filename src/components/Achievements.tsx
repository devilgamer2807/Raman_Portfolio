import { Card } from "@/components/ui/card";
import { Trophy, Users, Code, Rocket, Heart } from "lucide-react";

const Achievements = () => {
  const achievements = [
    {
      icon: Users,
      title: "Social Media Growth",
      description: "Created and managed a tech and marketing Instagram page with 1000+ followers",
    },
    {
      icon: Code,
      title: "Coding Excellence",
      description: "Active on LeetCode & HackerRank (100+ and 50+ problems solved respectively)",
    },
    {
      icon: Rocket,
      title: "Tech Startup",
      description: "Working on a tech startup focused on developing innovative digital solutions",
    },
    {
      icon: Trophy,
      title: "Freelance Writing",
      description: "Freelance writer for blogs on marketing and tech innovation",
    },
    {
      icon: Heart,
      title: "Community Service",
      description: "Volunteered for local community initiatives and event organization",
    },
  ];

  return (
    <section id="achievements" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Achievements & Extracurricular
          </h2>
          <p className="text-muted-foreground text-lg">
            Beyond academics and work
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <Card 
              key={index} 
              className="p-6 hover:shadow-xl transition-smooth animate-fade-in-up group hover:scale-105"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-full gradient-hero flex items-center justify-center mb-4 group-hover:scale-110 transition-smooth">
                <achievement.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{achievement.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{achievement.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
