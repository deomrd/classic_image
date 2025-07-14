import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Film, Megaphone, GraduationCap, ArrowRight } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Film,
      title: "Production",
      subtitle: "Films & Séries",
      description: "De la pré-production à la post-production, nous accompagnons vos projets audiovisuels avec expertise et créativité.",
      features: [
        "Réalisation de films",
        "Production de séries",
        "Documentaires",
        "Clips musicaux",
        "Films corporate"
      ]
    },
    {
      icon: Megaphone,
      title: "Promotion",
      subtitle: "Marketing & Distribution",
      description: "Stratégies de promotion adaptées pour maximiser la visibilité et l'impact de vos œuvres cinématographiques.",
      features: [
        "Stratégies marketing",
        "Distribution numérique",
        "Relations publiques",
        "Festivals de cinéma",
        "Campagnes promotionnelles"
      ]
    },
    {
      icon: GraduationCap,
      title: "Formation",
      subtitle: "Renforcement des capacités",
      description: "Programmes de formation complets pour développer les compétences techniques et artistiques des futurs cinéastes.",
      features: [
        "Ateliers pratiques",
        "Masterclasses",
        "Formation technique",
        "Développement créatif",
        "Mentorat personnalisé"
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Nos Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Un accompagnement complet pour tous vos projets audiovisuels, 
            de la conception à la diffusion.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-4 bg-background border-0 overflow-hidden"
            >
              <CardHeader className="text-center pb-4">
                <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-r from-gold to-gold-dark rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="h-10 w-10 text-foreground" />
                </div>
                <CardTitle className="text-2xl font-bold text-foreground">
                  {service.title}
                </CardTitle>
                <p className="text-gold font-medium">
                  {service.subtitle}
                </p>
              </CardHeader>
              
              <CardContent className="pt-0">
                <p className="text-muted-foreground mb-6 text-center">
                  {service.description}
                </p>
                
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm">
                      <ArrowRight className="h-4 w-4 text-gold mr-3 flex-shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;