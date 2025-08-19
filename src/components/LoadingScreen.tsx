import { useEffect, useState } from "react";

const LoadingScreen = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
      <div className="text-center">
        {/* Animated Logo */}
        <div className="mb-8 animate-fadeInUp">
          <img 
            src="/lovable-uploads/15872f09-dab7-4814-9c47-569753182357.png" 
            alt="Black Waves Entertainment" 
            className="h-20 w-20 mx-auto object-contain float-animation"
          />
        </div>
        
        {/* Brand Name */}
        <h1 className="font-heading font-bold text-2xl mb-8 bg-gradient-primary bg-clip-text text-transparent animate-fadeInUp animate-delay-200">
          Black Waves Entertainment
        </h1>
        
        {/* Loading Animation */}
        <div className="flex justify-center items-center space-x-1 animate-fadeInUp animate-delay-400">
          <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>
        
        {/* Tagline */}
        <p className="text-muted-foreground mt-4 animate-fadeInUp animate-delay-600">
          Loading your visual experience...
        </p>
      </div>
    </div>
  );
};

export default LoadingScreen;