import { Card, CardContent } from './ui/card';
import { Users, Award, Video, Target } from 'lucide-react';

const AboutSection = () => {
  const features = [
    {
      icon: Video,
      title: "Production",
      description: "Réalisation de films et séries de haute qualité avec une équipe expérimentée et du matériel professionnel."
    },
    {
      icon: Users,
      title: "Équipe experte",
      description: "Une équipe de professionnels passionnés, dédiée à l'excellence dans chaque projet audiovisuel."
    },
    {
      icon: Award,
      title: "Qualité premium",
      description: "Standards internationaux de production pour des résultats qui dépassent vos attentes."
    },
    {
      icon: Target,
      title: "Mission claire",
      description: "Promouvoir les cinéastes burundais et renforcer les capacités dans le domaine du cinéma."
    }
  ];

  return (
    <section id="apropos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Pourquoi faire appel à nous ?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Classic Imagez Production est votre partenaire privilégié pour la production de films et séries, 
            la promotion des cinéastes burundais, et le renforcement des capacités dans le domaine du cinéma.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-0 bg-card"
            >
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-gold to-gold-dark rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-8 w-8 text-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-gold to-gold-dark p-8 rounded-2xl text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Notre Vision
            </h3>
            <p className="text-lg text-foreground/90 max-w-2xl mx-auto">
              Développer l'industrie cinématographique burundaise en offrant des services de production 
              d'excellence et en formant la nouvelle génération de cinéastes talentueux.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;