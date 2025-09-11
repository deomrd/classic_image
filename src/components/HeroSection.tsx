import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Slides avec images et textes
  const slides = [
    {
      image: "/slider/1.jpg",
      title: "Réalisation de films",
      subtitle: "pour entreprises",
      description:
        "Production audiovisuelle professionnelle au service de votre créativité",
    },
    {
      image: "/slider/2.jpg",
      title: "Production créative",
      subtitle: "et innovation",
      description: "Des histoires qui marquent, des images qui parlent",
    },
    {
      image: "/slider/3.jpg",
      title: "Formation Audiovisuelle",
      subtitle: "Expertise et savoir-faire",
      description:
        "Renforcement des capacités dans le domaine du cinéma",
    },
    {
      image: "/slider/4.jpg",
      title: "Studio professionnel",
      subtitle: "Matériels de haute qualité",
      description:
        "Tournage et post-production avec équipements de pointe",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section
      id="accueil"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background dynamique */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-700"
        style={{
          backgroundImage: `url(${slides[currentSlide].image})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <div className="mb-8 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 leading-tight">
            {slides[currentSlide].title}
          </h1>
          <h2 className="text-3xl md:text-5xl font-light text-gold mb-6">
            {slides[currentSlide].subtitle}
          </h2>
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
            {slides[currentSlide].description}
          </p>
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
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "bg-gold scale-125"
                    : "bg-white/50 hover:bg-white/80"
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
