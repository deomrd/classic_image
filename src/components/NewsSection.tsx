import { Card, CardContent, CardHeader } from './ui/card';
import { Button } from './ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';
import { Calendar, User, ArrowRight, Mic, Users, Megaphone } from 'lucide-react';
import React, { useEffect } from 'react';

const NewsSection = () => {
  const [api, setApi] = React.useState<any>();

  useEffect(() => {
    if (!api) return;

    // Auto-scroll every 4 seconds
    const interval = setInterval(() => {
      api.scrollNext();
    }, 4000);

    return () => clearInterval(interval);
  }, [api]);

  const newsItems = [
    {
      id: 1,
      type: "interview",
      icon: Mic,
      title: "Interview exclusive avec le réalisateur de IWANJE",
      excerpt: "Découvrez les coulisses de notre dernière production et les défis créatifs rencontrés lors du tournage.",
      date: "15 Décembre 2024",
      author: "Équipe Classic Imagez",
      image: "https://images.unsplash.com/photo-1478720568477-b2709d7d1d6d?w=600&h=400&fit=crop",
      category: "Interviews"
    },
    {
      id: 2,
      type: "live",
      icon: Users,
      title: "Live : Formation gratuite en réalisation",
      excerpt: "Rejoignez-nous pour une session de formation gratuite sur les techniques de base de la réalisation cinématographique.",
      date: "20 Décembre 2024",
      author: "Formation Team",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop",
      category: "Lives"
    },
    {
      id: 3,
      type: "call",
      icon: Megaphone,
      title: "Appel à projets : Nouveaux talents 2025",
      excerpt: "Nous recherchons de nouveaux talents burundais pour intégrer nos prochaines productions. Candidatures ouvertes.",
      date: "10 Janvier 2025",
      author: "Direction Artistique",
      image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=600&h=400&fit=crop",
      category: "Appels à projets"
    },
    {
      id: 4,
      type: "interview",
      icon: Mic,
      title: "Table ronde : L'avenir du cinéma burundais",
      excerpt: "Rencontre avec les acteurs clés de l'industrie cinématographique pour discuter des perspectives d'avenir.",
      date: "25 Novembre 2024",
      author: "Panel d'experts",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop",
      category: "Interviews"
    },
    {
      id: 5,
      type: "live",
      icon: Users,
      title: "Workshop : Montage vidéo professionnel",
      excerpt: "Masterclass en direct sur les techniques avancées de montage avec nos experts post-production.",
      date: "5 Janvier 2025",
      author: "Post-Prod Team",
      image: "https://images.unsplash.com/photo-1551818255-e6e10975cd17?w=600&h=400&fit=crop",
      category: "Lives"
    },
    {
      id: 6,
      type: "call",
      icon: Megaphone,
      title: "Recherche : Comédiens pour série TV",
      excerpt: "Casting ouvert pour notre nouvelle série télévisée. Plusieurs rôles disponibles pour tous âges.",
      date: "15 Janvier 2025",
      author: "Casting Director",
      image: "https://images.unsplash.com/photo-1489599510543-4b3474f8c8dc?w=600&h=400&fit=crop",
      category: "Appels à projets"
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'interview':
        return 'bg-blue-500';
      case 'live':
        return 'bg-red-500';
      case 'call':
        return 'bg-green-500';
      default:
        return 'bg-gold';
    }
  };

  return (
    <section id="actualites" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Actualités
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Restez informés de nos dernières activités : interviews, formations en direct, 
            et appels à projets pour développer l'industrie cinématographique burundaise.
          </p>
        </div>

        <div className="relative">
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {newsItems.map((item) => (
                <CarouselItem key={item.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="group overflow-hidden bg-card border-0 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 h-full">
                    <CardHeader className="p-0">
                      <div className="relative aspect-video overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                        
                        {/* Type Badge */}
                        <div className="absolute top-4 left-4">
                          <div className={`${getTypeColor(item.type)} text-white text-xs font-bold px-3 py-1 rounded-full flex items-center`}>
                            <item.icon className="h-3 w-3 mr-1" />
                            {item.category}
                          </div>
                        </div>

                        {/* Live indicator for live events */}
                        {item.type === 'live' && (
                          <div className="absolute top-4 right-4">
                            <div className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full animate-pulse">
                              LIVE
                            </div>
                          </div>
                        )}
                      </div>
                    </CardHeader>

                    <CardContent className="p-6">
                      <div className="flex items-center text-sm text-muted-foreground mb-3">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span className="mr-4">{item.date}</span>
                        <User className="h-4 w-4 mr-1" />
                        <span>{item.author}</span>
                      </div>

                      <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-gold transition-colors duration-300 line-clamp-2">
                        {item.title}
                      </h3>

                      <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                        {item.excerpt}
                      </p>

                      <div className="flex items-center justify-between">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-gold hover:text-foreground hover:bg-gold transition-all duration-300 p-0"
                        >
                          Lire la suite
                          <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                        </Button>
                        
                        {item.type === 'live' && (
                          <Button
                            size="sm"
                            className="bg-red-500 hover:bg-red-600 text-white"
                          >
                            Rejoindre
                          </Button>
                        )}
                        
                        {item.type === 'call' && (
                          <Button
                            size="sm"
                            className="bg-green-500 hover:bg-green-600 text-white"
                          >
                            Postuler
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            <CarouselPrevious className="absolute -left-4 top-1/2 -translate-y-1/2 bg-gold/90 hover:bg-gold border-0 text-foreground h-12 w-12" />
            <CarouselNext className="absolute -right-4 top-1/2 -translate-y-1/2 bg-gold/90 hover:bg-gold border-0 text-foreground h-12 w-12" />
          </Carousel>
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            className="bg-gold hover:bg-gold-dark text-foreground font-semibold px-8 py-4 transition-all duration-300 hover:shadow-lg hover:scale-105"
          >
            Voir toutes les actualités
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;