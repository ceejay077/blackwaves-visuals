import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import LoadingScreen from "@/components/LoadingScreen";
import ImageGrid from "@/components/ui/image-grid";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Play, Award, Users, Zap } from "lucide-react";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // Sample gallery images for now - these will be replaced with dynamic loading
  const sampleImages = [
    "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=500&h=500&fit=crop",
    "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=500&h=500&fit=crop",
    "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=500&h=500&fit=crop",
    "https://images.unsplash.com/photo-1501612780327-45045538702b?w=500&h=500&fit=crop",
    "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=500&h=500&fit=crop",
    "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=500&h=500&fit=crop",
  ];

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 wave-animation opacity-10" />
        <div className="absolute inset-0 bg-gradient-secondary opacity-50" />
        
        <div className="container mx-auto px-4 z-10 text-center">
          <div className="max-w-4xl mx-auto">
            {/* Logo */}
            <div className="mb-8 animate-fadeInUp">
              <img 
                src="/lovable-uploads/15872f09-dab7-4814-9c47-569753182357.png" 
                alt="Black Waves Entertainment" 
                className="h-24 w-24 mx-auto object-contain glow-primary float-animation"
              />
            </div>

            {/* Heading */}
            <h1 className="font-heading font-bold text-5xl md:text-7xl mb-6 bg-gradient-primary bg-clip-text text-transparent animate-fadeInUp animate-delay-200">
              Black Waves Entertainment
            </h1>

            {/* Tagline */}
            <p className="font-heading text-xl md:text-2xl text-foreground mb-8 animate-fadeInUp animate-delay-400">
              Sri Lanka's Leading Visual Experience Provider
            </p>

            {/* Description */}
            <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto animate-fadeInUp animate-delay-600">
              Since 2017, we've been creating stunning visual experiences with LED wall screens and projector mapping for concerts and corporate events across Sri Lanka.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeInUp animate-delay-600">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 glow-primary">
                <Link to="/gallery">
                  <Play className="mr-2 h-5 w-5" />
                  View Our Work
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <Link to="/contact">
                  Get Quote
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center bg-background border-border hover:border-primary/50 transition-colors animate-fadeInUp">
              <CardContent className="p-8">
                <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-heading font-bold text-3xl text-foreground mb-2">7+</h3>
                <p className="text-muted-foreground">Years of Excellence</p>
              </CardContent>
            </Card>
            <Card className="text-center bg-background border-border hover:border-primary/50 transition-colors animate-fadeInUp animate-delay-200">
              <CardContent className="p-8">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-heading font-bold text-3xl text-foreground mb-2">500+</h3>
                <p className="text-muted-foreground">Events Delivered</p>
              </CardContent>
            </Card>
            <Card className="text-center bg-background border-border hover:border-primary/50 transition-colors animate-fadeInUp animate-delay-400">
              <CardContent className="p-8">
                <Zap className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-heading font-bold text-3xl text-foreground mb-2">100%</h3>
                <p className="text-muted-foreground">Client Satisfaction</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Gallery */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-foreground mb-6 animate-fadeInUp">
              Featured Work
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fadeInUp animate-delay-200">
              Discover our latest projects and see how we bring events to life with cutting-edge visual technology.
            </p>
          </div>

          <div className="animate-fadeInUp animate-delay-400">
            <ImageGrid images={sampleImages} limit={6} />
          </div>

          <div className="text-center mt-12 animate-fadeInUp animate-delay-600">
            <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              <Link to="/gallery">
                Show More Projects
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
