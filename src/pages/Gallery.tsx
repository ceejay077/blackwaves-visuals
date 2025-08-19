import { useState, useEffect } from "react";
import Layout from "@/components/layout/Layout";
import ImageGrid from "@/components/ui/image-grid";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Grid, List } from "lucide-react";

const Gallery = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  
  // Sample images - in a real app, these would be loaded dynamically from the /gallery folder
  const galleryImages = [
    {
      url: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600&h=600&fit=crop",
      category: "concerts",
      title: "Music Festival Main Stage"
    },
    {
      url: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&h=600&fit=crop",
      category: "concerts",
      title: "Live Performance Visual"
    },
    {
      url: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=600&h=600&fit=crop",
      category: "corporate",
      title: "Corporate Event Setup"
    },
    {
      url: "https://images.unsplash.com/photo-1501612780327-45045538702b?w=600&h=600&fit=crop",
      category: "concerts",
      title: "Underground Music Event"
    },
    {
      url: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=600&fit=crop",
      category: "projection",
      title: "Projection Mapping Display"
    },
    {
      url: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=600&h=600&fit=crop",
      category: "corporate",
      title: "Conference LED Wall"
    },
    {
      url: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=600&h=600&fit=crop",
      category: "concerts",
      title: "Concert Stage Lighting"
    },
    {
      url: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=600&fit=crop",
      category: "projection",
      title: "Interactive Projection"
    },
    {
      url: "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?w=600&h=600&fit=crop",
      category: "corporate",
      title: "Product Launch Event"
    },
  ];

  const categories = [
    { value: 'all', label: 'All Projects' },
    { value: 'concerts', label: 'Concerts' },
    { value: 'corporate', label: 'Corporate' },
    { value: 'projection', label: 'Projection Mapping' },
  ];

  const filteredImages = selectedCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-heading font-bold text-5xl md:text-6xl text-foreground mb-6 animate-fadeInUp">
              Our Gallery
            </h1>
            <p className="text-xl text-muted-foreground animate-fadeInUp animate-delay-200">
              Explore our portfolio of stunning visual experiences
            </p>
          </div>
        </div>
      </section>

      {/* Controls */}
      <section className="py-8 bg-card border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category.value}
                  variant={selectedCategory === category.value ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category.value)}
                  className={selectedCategory === category.value 
                    ? "bg-primary text-primary-foreground" 
                    : "border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  }
                >
                  {category.label}
                </Button>
              ))}
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center gap-2">
              <Button
                variant={viewMode === 'grid' ? "default" : "outline"}
                size="icon"
                onClick={() => setViewMode('grid')}
                className={viewMode === 'grid' 
                  ? "bg-primary text-primary-foreground" 
                  : "border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                }
              >
                <Grid className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === 'list' ? "default" : "outline"}
                size="icon"
                onClick={() => setViewMode('list')}
                className={viewMode === 'list' 
                  ? "bg-primary text-primary-foreground" 
                  : "border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                }
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-8 animate-fadeInUp">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-heading font-semibold text-2xl text-foreground">
                {categories.find(cat => cat.value === selectedCategory)?.label}
              </h2>
              <Badge variant="secondary" className="text-sm">
                {filteredImages.length} {filteredImages.length === 1 ? 'project' : 'projects'}
              </Badge>
            </div>
          </div>

          {viewMode === 'grid' ? (
            <div className="animate-fadeInUp animate-delay-200">
              <ImageGrid images={filteredImages.map(img => img.url)} showAll={true} />
            </div>
          ) : (
            <div className="space-y-6 animate-fadeInUp animate-delay-200">
              {filteredImages.map((image, index) => (
                <div 
                  key={index}
                  className="flex flex-col md:flex-row gap-6 p-6 bg-card rounded-lg border border-border hover:border-primary/50 transition-colors"
                >
                  <div className="md:w-1/3">
                    <img
                      src={image.url}
                      alt={image.title}
                      className="w-full h-48 md:h-32 object-cover rounded-lg"
                    />
                  </div>
                  <div className="md:w-2/3 flex flex-col justify-center">
                    <h3 className="font-heading font-semibold text-xl text-foreground mb-2">
                      {image.title}
                    </h3>
                    <Badge variant="secondary" className="w-fit mb-2">
                      {categories.find(cat => cat.value === image.category)?.label}
                    </Badge>
                    <p className="text-muted-foreground">
                      Professional visual production showcasing our expertise in {image.category} events.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {filteredImages.length === 0 && (
            <div className="text-center py-20">
              <p className="text-xl text-muted-foreground">
                No projects found in this category.
              </p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Gallery;