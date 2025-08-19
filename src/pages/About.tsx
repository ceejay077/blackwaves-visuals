import Layout from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Target, Heart, Lightbulb } from "lucide-react";

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-heading font-bold text-5xl md:text-6xl text-foreground mb-6 animate-fadeInUp">
              About Black Waves
            </h1>
            <p className="text-xl text-muted-foreground animate-fadeInUp animate-delay-200">
              Creating unforgettable visual experiences since 2017
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fadeInUp">
                <h2 className="font-heading font-bold text-4xl text-foreground mb-6">
                  Our Story
                </h2>
                <div className="space-y-6 text-muted-foreground">
                  <p>
                    Since our journey began in 2017, we have been Sri Lanka's leading provider of LED wall screens and projector mapping for concerts and corporate events. With unmatched expertise and cutting-edge technology, we bring every moment to life in stunning clarity.
                  </p>
                  <p>
                    As an industry-leading event management company, we are now proud to extend our reach to the Sri Lankan underground music scene — a space filled with incredible talent and fast growth. We believe in supporting upcoming event producers, helping them create unforgettable shows and achieve their vision.
                  </p>
                </div>
              </div>
              <div className="animate-fadeInUp animate-delay-200">
                <img
                  src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600&h=400&fit=crop"
                  alt="Event setup"
                  className="rounded-lg shadow-elegant w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-foreground mb-6 animate-fadeInUp">
              Our Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fadeInUp animate-delay-200">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center bg-background border-border hover:border-primary/50 transition-colors animate-fadeInUp">
              <CardContent className="p-8">
                <Calendar className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-heading font-bold text-xl text-foreground mb-4">Experience</h3>
                <p className="text-muted-foreground">
                  7+ years of delivering exceptional visual experiences across Sri Lanka
                </p>
              </CardContent>
            </Card>

            <Card className="text-center bg-background border-border hover:border-primary/50 transition-colors animate-fadeInUp animate-delay-200">
              <CardContent className="p-8">
                <Target className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-heading font-bold text-xl text-foreground mb-4">Precision</h3>
                <p className="text-muted-foreground">
                  Cutting-edge technology and meticulous attention to every detail
                </p>
              </CardContent>
            </Card>

            <Card className="text-center bg-background border-border hover:border-primary/50 transition-colors animate-fadeInUp animate-delay-400">
              <CardContent className="p-8">
                <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-heading font-bold text-xl text-foreground mb-4">Passion</h3>
                <p className="text-muted-foreground">
                  Supporting the underground music scene and emerging talent
                </p>
              </CardContent>
            </Card>

            <Card className="text-center bg-background border-border hover:border-primary/50 transition-colors animate-fadeInUp animate-delay-600">
              <CardContent className="p-8">
                <Lightbulb className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-heading font-bold text-xl text-foreground mb-4">Innovation</h3>
                <p className="text-muted-foreground">
                  Always pushing boundaries with the latest visual technology
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;