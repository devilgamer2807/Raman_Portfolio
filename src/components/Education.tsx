import { Card } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

const Education = () => {
  const education = [
    {
      institution: "Amity University, Gurugram, Haryana",
      degree: "BCA – Computer Science",
      period: "2023 – 2026",
      grade: "CGPA: 8.5",
    },
    {
      institution: "Pragati Public School, New Delhi",
      degree: "Class XII",
      period: "2022",
      grade: "81.2%",
    },
    {
      institution: "Pragati Public School, New Delhi",
      degree: "Class X",
      period: "2020",
      grade: "85%",
    },
  ];

  return (
    <section id="education" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Education
          </h2>
          <p className="text-muted-foreground text-lg">
            My academic journey and qualifications
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {education.map((edu, index) => (
            <Card 
              key={index} 
              className="p-6 hover:shadow-xl transition-smooth animate-fade-in-up hover:scale-[1.02]"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full gradient-hero flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-1">{edu.institution}</h3>
                  <p className="text-lg text-primary font-medium mb-1">{edu.degree}</p>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <span>{edu.period}</span>
                    <span className="font-semibold text-secondary">{edu.grade}</span>
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

export default Education;
