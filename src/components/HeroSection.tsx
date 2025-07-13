import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Play, ChevronLeft, ChevronRight } from 'lucide-react';
import heroBg from '../assets/hero-bg.jpg';

const HeroSection = () => {
  const [currentVideo, setCurrentVideo] = useState(0);

  const videoSlides = [
    {
      title: "Réalisation de films",
      subtitle: "pour entreprises",
      description: "Production audiovisuelle professionnelle au service de votre créativité"
    },
    {
      title: "Production créative",
      subtitle: "et innovation",
      description: "Des histoires qui marquent, des images qui parlent"
    },
    {
      title: "Formation cinéma",
      subtitle: "et développement",
      description: "Renforcement des capacités dans le domaine du cinéma"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideo((prev) => (prev + 1) % videoSlides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentVideo((prev) => (prev + 1) % videoSlides.length);
  };

  const prevSlide = () => {
    setCurrentVideo((prev) => (prev - 1 + videoSlides.length) % videoSlides.length);
  };

  return (
    <section
      id="accueil"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroBg})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        {/* Animated Text Content */}
        <div className="mb-8 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 leading-tight">
            {videoSlides[currentVideo].title}
          </h1>
          <h2 className="text-3xl md:text-5xl font-light text-gold mb-6">
            {videoSlides[currentVideo].subtitle}
          </h2>
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
            {videoSlides[currentVideo].description}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button
            size="lg"
            className="bg-gold hover:bg-gold-dark text-foreground font-semibold px-8 py-4 text-lg transition-all duration-300 hover:shadow-2xl hover:scale-105"
          >
            Découvrir
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-2 border-white text-white hover:bg-white hover:text-foreground font-semibold px-8 py-4 text-lg transition-all duration-300 hover:shadow-2xl hover:scale-105"
          >
            <Play className="mr-2 h-5 w-5" />
            Showreel
          </Button>
        </div>

        {/* Carousel Navigation */}
        <div className="flex items-center justify-center space-x-4">
          <button
            onClick={prevSlide}
            className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-all duration-200"
          >
            <ChevronLeft className="h-6 w-6 text-white" />
          </button>
          
          <div className="flex space-x-2">
            {videoSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentVideo(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentVideo
                    ? 'bg-gold scale-125'
                    : 'bg-white/50 hover:bg-white/80'
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-all duration-200"
          >
            <ChevronRight className="h-6 w-6 text-white" />
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;