import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Cloud, Timer, TrendingUp } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Weather Forecasting App",
      description:
        "Real-time weather updates with 24-hour graphical temperature representation, search history, and GPS-based location tracking.",
      technologies: [
        "React.js",
        "Tanstack Query",
        "Shadcn UI",
        "Tailwind CSS",
        "Recharts",
      ],
      features: [
        "Real-time weather updates (temperature, humidity, wind speed)",
        "24-hour graphical temperature representation",
        "Search history for quick location revisits",
        "GPS-based current location weather tracking",
      ],
      icon: Cloud,
      gradient: "from-blue-500 to-cyan-500",
      liveDemo: "https://klimate-sumit.netlify.app/",
      github: "https://github.com/Sumitchauhan0/Klimate",
    },
    {
      title: "React Quiz App",
      description:
        "Fully responsive quiz application with interactive features and real-time feedback system.",
      technologies: ["React.js", "JavaScript", "CSS"],
      features: [
        "Fully responsive design across all devices",
        "Interactive timer and progress bar",
        "Auto-submission functionality",
        "Instant feedback and comprehensive scorecard",
      ],
      icon: Timer,
      gradient: "from-green-500 to-emerald-500",
      liveDemo: "https://quizforge-1.netlify.app",
      github: "https://github.com/Sumitchauhan0/Portfolio",
    },
    {
      title: "Cryptocurrency Tracker",
      description:
        "Real-time cryptocurrency tracking with personalized watchlist and market trend analysis.",
      technologies: ["React.js", "Material UI", "Chart.js"],
      features: [
        "Real-time prices and trends in various currencies",
        "Search, sort, and filter cryptocurrencies",
        "Personalized watchlist functionality",
        "Top-trending coins display",
      ],
      icon: TrendingUp,
      gradient: "from-purple-500 to-pink-500",
      liveDemo: "https://your-crypto-tracker-link.com",
      github: "https://github.com/Sumitchauhan0/cryptocurrency-tracker",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
            Projects
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Showcasing innovative solutions and technical expertise
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-card to-accent/20 border-2 hover:border-primary/30 hover:-translate-y-2"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className={`w-12 h-12 bg-gradient-to-r ${project.gradient} rounded-lg flex items-center justify-center`}
                    >
                      <IconComponent className="text-white" size={24} />
                    </div>
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2 text-sm">Key Features:</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2 text-sm">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-2 pt-4">
                    <Button size="sm" className="flex-1" asChild>
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="mr-2" size={16} />
                        Live Demo
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github size={16} />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
