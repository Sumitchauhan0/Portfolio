import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Award, BookOpen } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Technologies & Frameworks",
      icon: Code,
      skills: ["React.js", "Node.js", "Django", "Tailwind CSS"],
      gradient: "from-blue-500 to-purple-500"
    },
    {
      title: "Programming Languages",
      icon: Code,
      skills: ["HTML", "CSS", "JavaScript", "Python"],
      gradient: "from-green-500 to-blue-500"
    },
    {
      title: "Developer Tools",
      icon: Database,
      skills: ["VS Code", "GitHub", "MongoDB"],
      gradient: "from-orange-500 to-red-500"
    },
    {
      title: "Data Visualization",
      icon: BookOpen,
      skills: ["Matplotlib", "Seaborn"],
      gradient: "from-purple-500 to-pink-500"
    }
  ];

  const coursework = [
    "Data Structures", "Algorithms", "OOP", "DBMS"
  ];

  const achievements = [
    "Solved 300+ Data Structures and Algorithms problems across platforms like LeetCode and GeeksforGeeks"
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
            Skills & Achievements
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Technical expertise and continuous learning journey
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <Card 
                  key={index} 
                  className="group hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-card to-accent/20 border-2 hover:border-primary/30"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 bg-gradient-to-r ${category.gradient} rounded-lg flex items-center justify-center`}>
                        <IconComponent className="text-white" size={20} />
                      </div>
                      <CardTitle className="text-lg">{category.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, idx) => (
                        <Badge 
                          key={idx} 
                          variant="secondary" 
                          className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Coursework */}
          <Card className="bg-gradient-to-br from-card to-accent/20 border-2">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-lg flex items-center justify-center">
                  <BookOpen className="text-white" size={20} />
                </div>
                <CardTitle className="text-lg">Relevant Coursework</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {coursework.map((course, idx) => (
                  <Badge 
                    key={idx} 
                    variant="outline" 
                    className="border-primary/30 text-primary hover:bg-primary/10 transition-colors"
                  >
                    {course}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Achievements */}
          <Card className="bg-gradient-to-br from-card to-accent/20 border-2">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center">
                  <Award className="text-white" size={20} />
                </div>
                <CardTitle className="text-lg">Achievements</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {achievements.map((achievement, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground leading-relaxed">{achievement}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;