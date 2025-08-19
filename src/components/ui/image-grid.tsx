import { useState } from "react";
import { Card } from "@/components/ui/card";

interface ImageGridProps {
  images: string[];
  limit?: number;
  showAll?: boolean;
}

const ImageGrid = ({ images, limit = 6, showAll = false }: ImageGridProps) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const displayImages = showAll ? images : images.slice(0, limit);

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {displayImages.map((image, index) => (
          <Card 
            key={index}
            className="group cursor-pointer overflow-hidden border-border bg-card hover:border-primary/50 transition-all duration-300 hover-scale"
            onClick={() => setSelectedImage(image)}
          >
            <div className="aspect-square relative overflow-hidden">
              <img
                src={image}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
            </div>
          </Card>
        ))}
      </div>

      {/* Modal for full-size image */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="max-w-4xl max-h-full relative">
            <img
              src={selectedImage}
              alt="Full size"
              className="max-w-full max-h-full object-contain"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white bg-black/50 rounded-full w-8 h-8 flex items-center justify-center hover:bg-black/70 transition-colors"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ImageGrid;