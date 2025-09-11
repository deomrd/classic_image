import { Users, Award, Video, Target } from 'lucide-react';
import { Card } from './ui/card';

const AboutSection = () => {
  const leftFeatures = [
    {
      icon: Video,
      title: "Production",
      description: "Réalisation de films et documentaires de haute qualité avec une équipe expérimentée et du matériel professionnel.",
    },
    {
      icon: Users,
      title: "Équipe experte",
      description: "Une équipe de professionnels passionnés, dédiée à l'excellence dans chaque projet audiovisuel.",
    },
    {
      icon: Award,
      title: "Qualité premium",
      description: "Standards internationaux de production pour des résultats qui dépassent vos attentes.",
    },
  ];

  const rightFeatures = [
    {
      icon: Target,
      title: "Mission claire",
      description: "Promouvoir les cinéastes burundais et de l'Afrique de l'Est, et renforcer les capacités dans le domaine du cinéma.",
    },
    {
      icon: Users,
      title: "Réseau collaboratif",
      description: "Travailler en synergie avec des talents locaux et internationaux.",
    },
    {
      icon: Video,
      title: "Soutien sur mesure",
      description: "Un accompagnement constant à chaque étape de votre projet.",
    },
  ];

  return (
    <section id="apropos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* En-tête */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Pourquoi nous choisir ?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Classic Imagez Production est votre partenaire privilégié pour la production de films et documentaires, la promotion des cinéastes burundais et de l'Afrique de l'Est, et le renforcement des capacités dans le domaine du cinéma.
          </p>
        </div>

        {/* Grille centrale */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
          {/* Colonne gauche */}
          <div className="space-y-10">
            {leftFeatures.map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <item.icon className="w-8 h-8 text-gold shrink-0" />
                <div>
                  <h4 className="text-lg font-semibold text-foreground">{item.title}</h4>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Image centrale */}
          <div className="flex justify-center">
            <img
              src="/cam_jean.jpg"
              alt="Portrait"
              className="rounded-xl shadow-lg w-72 h-auto object-cover"
            />
          </div>

          {/* Colonne droite */}
          <div className="space-y-10">
            {rightFeatures.map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <item.icon className="w-8 h-8 text-gold shrink-0" />
                <div>
                  <h4 className="text-lg font-semibold text-foreground">{item.title}</h4>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
