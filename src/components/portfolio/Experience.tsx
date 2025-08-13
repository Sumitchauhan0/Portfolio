import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase } from "lucide-react";

const Experience = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
            Experience
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Building digital experiences through hands-on development
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="group hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-card to-accent/20 border-2 hover:border-primary/30">
            <CardHeader>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Briefcase className="text-primary" size={24} />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-xl mb-2">Front-End Developer Intern</CardTitle>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                    <span className="text-primary font-semibold">Billlap</span>
                    <Badge variant="secondary" className="w-fit">
                      Internship
                    </Badge>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-muted-foreground">
                <p>
                  • Redesigned key UI components for a web application to improve user experience
                </p>
                <p>
                  • Implemented intuitive and visually appealing features, leading to increased user engagement
                </p>
                <p>
                  • Collaborated with design and back-end teams to ensure smooth functionality and performance across all devices
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;