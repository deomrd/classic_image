import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, Film, Users, Award, Target, Heart, Lightbulb } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const About = () => {
  const values = [
    {
      icon: Film,
      title: "Excellence Créative",
      description: "Nous produisons des œuvres cinématographiques de qualité internationale qui reflètent l'authenticité burundaise."
    },
    {
      icon: Users,
      title: "Formation Continue",
      description: "Nous investissons dans la formation des talents locaux pour développer une industrie cinématographique durable."
    },
    {
      icon: Award,
      title: "Reconnaissance",
      description: "Nos productions obtiennent des reconnaissances nationales et internationales, valorisant le cinéma burundais."
    },
    {
      icon: Target,
      title: "Vision Stratégique",
      description: "Nous développons une stratégie à long terme pour positionner le Burundi sur la scène cinématographique mondiale."
    },
    {
      icon: Heart,
      title: "Passion Authentique",
      description: "Notre amour pour le cinéma transparaît dans chaque projet, créant des histoires qui touchent les cœurs."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Nous adoptons les dernières technologies et techniques pour offrir des productions modernes et captivantes."
    }
  ];

  const team = [
    {
      name: "Jean-Baptiste NIYOMWUNGERE",
      role: "Directeur Artistique",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      bio: "Visionnaire du cinéma burundais, Jean-Baptiste dirige notre équipe créative avec plus de 15 ans d'expérience."
    },
    {
      name: "Marie UWIMANA",
      role: "Productrice Exécutive",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b3fd?w=400&h=400&fit=crop&crop=face",
      bio: "Experte en production, Marie supervise la réalisation de nos projets les plus ambitieux."
    },
    {
      name: "David MUGISHA",
      role: "Directeur Technique",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      bio: "Spécialiste des nouvelles technologies, David assure l'excellence technique de nos productions."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation currentSection="" onSectionChange={() => {}} />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-32 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1489599510543-4b3474f8c8dc?w=1920&h=1080&fit=crop"
              alt="À propos de Classic Imagez"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/60 to-background/20"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl">
              <Link to="/">
                <Button variant="ghost" className="mb-6 text-gold hover:text-foreground hover:bg-gold/20">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Retour à l'accueil
                </Button>
              </Link>
              
              <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-8 animate-fade-in">
                À Propos de
                <span className="block text-gold">Classic Imagez</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl">
                Pionniers du cinéma burundais, nous créons des œuvres qui transcendent les frontières 
                et révèlent la beauté de notre culture au monde entier.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 bg-card/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-16 items-center">
                <div>
                  <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
                    Notre <span className="text-gold">Mission</span>
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    Classic Imagez Production s'engage à révolutionner l'industrie cinématographique burundaise 
                    en produisant des contenus de qualité internationale qui célèbrent notre riche patrimoine culturel.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                    Nous croyons que chaque histoire mérite d'être racontée avec excellence, authenticité et passion. 
                    Notre mission dépasse la simple production : nous formons, nous inspirons et nous créons un écosystème 
                    cinématographique durable pour les générations futures.
                  </p>
                  <Button size="lg" className="bg-gold hover:bg-gold-dark text-foreground">
                    Découvrir nos réalisations
                  </Button>
                </div>
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1485846234645-a62644f84728?w=600&h=400&fit=crop"
                    alt="Notre mission"
                    className="rounded-lg shadow-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gold/20 to-transparent rounded-lg"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Nos <span className="text-gold">Valeurs</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Les principes qui guident chacune de nos actions et définissent notre approche unique du cinéma.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="group bg-card/50 backdrop-blur-sm border-gold/20 hover:border-gold/40 transition-all duration-500 hover:-translate-y-2">
                  <CardContent className="p-8">
                    <div className="bg-gold/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <value.icon className="h-8 w-8 text-gold" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-4">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-card/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Notre <span className="text-gold">Équipe</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Des professionnels passionnés unis par une vision commune : faire rayonner le cinéma burundais.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {team.map((member, index) => (
                <Card key={index} className="group bg-card/50 backdrop-blur-sm border-gold/20 hover:border-gold/40 transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                  <div className="relative aspect-square overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent"></div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-2">{member.name}</h3>
                    <p className="text-gold font-medium mb-3">{member.role}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">{member.bio}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-gold/10 via-gold/5 to-transparent rounded-2xl p-12 md:p-16 text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Rejoignez Notre <span className="text-gold">Vision</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Ensemble, construisons l'avenir du cinéma burundais et portons nos histoires vers de nouveaux horizons.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/#contact">
                  <Button size="lg" className="bg-gold hover:bg-gold-dark text-foreground">
                    Nous contacter
                  </Button>
                </Link>
                <Link to="/#portfolio">
                  <Button size="lg" variant="outline" className="border-gold text-gold hover:bg-gold hover:text-foreground">
                    Voir nos projets
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;