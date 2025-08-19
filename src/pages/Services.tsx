import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Monitor, Projector, Music, Building2, Settings, Users } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Monitor,
      title: "LED Wall Screens",
      description: "High-resolution LED displays perfect for concerts, festivals, and large-scale events. Our state-of-the-art LED walls deliver crystal clear visuals that captivate your audience.",
      features: ["4K Resolution", "Weather Resistant", "Modular Design", "Real-time Control"],
      category: "Hardware"
    },
    {
      icon: Projector,
      title: "Projector Mapping",
      description: "Transform any surface into a dynamic canvas with our advanced projection mapping technology. Create immersive environments that tell your story.",
      features: ["3D Mapping", "Interactive Displays", "Custom Content", "Edge Blending"],
      category: "Technology"
    },
    {
      icon: Music,
      title: "Concert Production",
      description: "Complete visual production services for concerts and live performances. From intimate venues to massive festivals, we've got you covered.",
      features: ["Stage Design", "Live Mixing", "Recording Services", "Technical Support"],
      category: "Production"
    },
    {
      icon: Building2,
      title: "Corporate Events",
      description: "Elevate your corporate presentations, product launches, and conferences with professional-grade visual solutions.",
      features: ["Presentation Support", "Brand Integration", "Multi-screen Setup", "Live Streaming"],
      category: "Corporate"
    },
    {
      icon: Settings,
      title: "Technical Support",
      description: "Expert technical support and equipment rental services. Our team ensures seamless operation throughout your event.",
      features: ["On-site Support", "Equipment Rental", "Installation Services", "Maintenance"],
      category: "Support"
    },
    {
      icon: Users,
      title: "Event Management",
      description: "Full-service event management for the underground music scene. We help emerging artists and event producers create unforgettable experiences.",
      features: ["Event Planning", "Artist Support", "Venue Coordination", "Production Management"],
      category: "Management"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-heading font-bold text-5xl md:text-6xl text-foreground mb-6 animate-fadeInUp">
              Our Services
            </h1>
            <p className="text-xl text-muted-foreground animate-fadeInUp animate-delay-200">
              Comprehensive visual solutions for every event
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card 
                  key={index}
                  className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover-scale animate-fadeInUp"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <IconComponent className="h-10 w-10 text-primary" />
                      <Badge variant="secondary">{service.category}</Badge>
                    </div>
                    <CardTitle className="font-heading text-xl text-foreground">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-6">
                      {service.description}
                    </p>
                    <div className="space-y-2">
                      <h4 className="font-heading font-semibold text-foreground mb-3">Features:</h4>
                      <ul className="space-y-1">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="text-sm text-muted-foreground flex items-center">
                            <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-heading font-bold text-4xl text-foreground mb-6 animate-fadeInUp">
              Ready to Create Something Amazing?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 animate-fadeInUp animate-delay-200">
              Let's discuss your project and bring your vision to life with our cutting-edge visual solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeInUp animate-delay-400">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 glow-primary">
                <Link to="/contact">
                  Get a Quote
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <Link to="/gallery">
                  View Our Work
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;