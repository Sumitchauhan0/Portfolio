import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, School } from "lucide-react";

const Education = () => {
  const educationData = [
    {
      institution: "Raj Kumar Goel Institute of Technology, Ghaziabad",
      degree: "Bachelor of Technology in Computer Science (AIML)",
      period: "2021–2025",
      score: "CGPA: 7.4 (through 8th semester)",
      type: "University",
      icon: GraduationCap
    },
    {
      institution: "MGDSD Public School",
      degree: "Senior Secondary",
      period: "2021",
      score: "Percentage: 77.6",
      type: "CBSE",
      icon: School
    },
    {
      institution: "MGDSD Public School",
      degree: "Higher Secondary",
      period: "2019",
      score: "Percentage: 80.6",
      type: "CBSE",
      icon: School
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
            Education
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Academic journey in computer science and artificial intelligence
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-6">
          {educationData.map((edu, index) => {
            const IconComponent = edu.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-card to-accent/20 border-2 hover:border-primary/30"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <IconComponent className="text-primary" size={24} />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg mb-2">{edu.institution}</CardTitle>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                        <span className="text-primary font-semibold">{edu.degree}</span>
                        <Badge variant="secondary" className="w-fit">
                          {edu.type}
                        </Badge>
                      </div>
                      <div className="flex flex-col sm:flex-row gap-4 text-sm text-muted-foreground">
                        <span>{edu.period}</span>
                        <span className="font-semibold text-foreground">{edu.score}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Education;