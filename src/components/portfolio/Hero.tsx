import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary via-purple-600 to-blue-600 text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            Sumit Chauhan
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Front-End Developer & CS Student passionate about creating amazing user experiences
          </p>
          
          {/* Contact Info */}
          <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm md:text-base">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <MapPin size={16} />
              <span>Ghaziabad, India</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <Phone size={16} />
              <span>+91 7088589151</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <Mail size={16} />
              <span>sumitchauhan7409785@gmail.com</span>
            </div>
          </div>
          
          {/* Social Links */}
                      <div className="flex justify-center gap-4 mb-8">
              <Button
                variant="outline"
                size="lg"
                asChild
                className="bg-white/10 border-white/20 text-white hover:bg-white/20"
              >
                <a
                  href="https://www.linkedin.com/in/sumit-chauhan-24702627a/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="mr-2" size={20} />
                  LinkedIn
                </a>
              </Button>

              <Button
                variant="outline"
                size="lg"
                asChild
                className="bg-white/10 border-white/20 text-white hover:bg-white/20"
              >
                <a
                  href="https://github.com/Sumitchauhan0"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="mr-2" size={20} />
                  GitHub
                </a>
              </Button>
            </div>

          
          <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-3">
            View My Work
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;