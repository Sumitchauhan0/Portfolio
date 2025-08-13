import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Send, Github, Linkedin } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "sumitchauhan7409785@gmail.com",
      href: "mailto:sumitchauhan7409785@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 7088589151",
      href: "tel:+917088589151"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Ghaziabad, India",
      href: "#"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary via-purple-600 to-blue-600 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's Work Together
          </h2>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's connect and create something amazing together.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <Card 
                  key={index} 
                  className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 group cursor-pointer"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white/30 transition-colors">
                      <IconComponent size={24} />
                    </div>
                    <h3 className="font-semibold mb-2">{info.label}</h3>
                    <p className="text-blue-100 text-sm">{info.value}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center space-y-8">
            <div className="flex justify-center gap-4">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-3"
              >
                <Mail className="mr-2" size={20} />
                Send Message
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white/30 text-white hover:bg-white/10 text-lg px-8 py-3"
              >
                <Send className="mr-2" size={20} />
                Download CV
              </Button>
            </div>

            <div className="flex justify-center gap-6">
              <Button 
                variant="ghost" 
                size="lg"
                className="text-white hover:bg-white/10 hover:text-white p-3"
              >
                <Linkedin size={24} />
              </Button>
              <Button 
                variant="ghost" 
                size="lg"
                className="text-white hover:bg-white/10 hover:text-white p-3"
              >
                <Github size={24} />
              </Button>
            </div>

            <div className="pt-8 border-t border-white/20">
              <p className="text-blue-100">
                © 2024 Sumit Chauhan. Built with React & Tailwind CSS.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;