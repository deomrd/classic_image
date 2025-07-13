import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Users, Award, Video, Target } from 'lucide-react';

const AboutSection = () => {
  const features = [
    {
      icon: Video,
      title: "Production",
      description: "Réalisation de films et séries de haute qualité avec une équipe expérimentée et du matériel professionnel.",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&h=400&fit=crop"
    },
    {
      icon: Users,
      title: "Équipe experte",
      description: "Une équipe de professionnels passionnés, dédiée à l'excellence dans chaque projet audiovisuel.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop"
    },
    {
      icon: Award,
      title: "Qualité premium",
      description: "Standards internationaux de production pour des résultats qui dépassent vos attentes.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop"
    },
    {
      icon: Target,
      title: "Mission claire",
      description: "Promouvoir les cinéastes burundais et renforcer les capacités dans le domaine du cinéma.",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&h=400&fit=crop"
    }
  ];

  return (
    <section id="apropos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Pourquoi nous choisir ?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Classic Imagez Production est votre partenaire privilégié pour la production de films et séries, 
            la promotion des cinéastes burundais, et le renforcement des capacités dans le domaine du cinéma.
          </p>
        </div>

        {/* Grid Layout like in reference image */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* First row - 3 cards */}
          {features.slice(0, 3).map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-4 border-0 bg-card overflow-hidden"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="w-12 h-12 mb-3 bg-gradient-to-r from-gold to-gold-dark rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="h-6 w-6 text-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {feature.title}
                  </h3>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-muted-foreground text-sm">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
          
          {/* Second row - 1 large card spanning 2 columns */}
          <div className="md:col-span-2 lg:col-span-2">
            <Card className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-4 border-0 bg-card overflow-hidden h-full">
              <div className="grid md:grid-cols-2 h-full">
                <div className="relative aspect-[4/3] md:aspect-auto overflow-hidden">
                  <img
                    src={features[3].image}
                    alt={features[3].title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>
                </div>
                <CardContent className="p-8 flex flex-col justify-center">
                  {(() => {
                    const IconComponent = features[3].icon;
                    return (
                      <div className="w-16 h-16 mb-6 bg-gradient-to-r from-gold to-gold-dark rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="h-8 w-8 text-foreground" />
                      </div>
                    );
                  })()}
                  <h3 className="text-2xl font-semibold text-foreground mb-4">
                    {features[3].title}
                  </h3>
                  <p className="text-muted-foreground">
                    {features[3].description}
                  </p>
                </CardContent>
              </div>
            </Card>
          </div>

          {/* Third element - Additional visual card */}
          <Card className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-4 border-0 bg-card overflow-hidden">
            <div className="relative aspect-[4/3] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop"
                alt="Formation et développement"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-lg font-semibold text-white mb-2">
                  Formation continue
                </h3>
                <p className="text-white/80 text-sm">
                  Développement des compétences
                </p>
              </div>
            </div>
          </Card>
        </div>

          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-gold to-gold-dark p-8 rounded-2xl text-center">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Notre Vision
              </h3>
              <p className="text-lg text-foreground/90 max-w-2xl mx-auto mb-6">
                Développer l'industrie cinématographique burundaise en offrant des services de production 
                d'excellence et en formant la nouvelle génération de cinéastes talentueux.
              </p>
              <Button 
                size="lg"
                className="bg-foreground hover:bg-foreground/90 text-gold font-semibold px-8 py-4 transition-all duration-300 hover:shadow-lg hover:scale-105"
                onClick={() => window.location.href = '/a-propos'}
              >
                En savoir plus
              </Button>
            </div>
          </div>
      </div>
    </section>
  );
};

export default AboutSection;