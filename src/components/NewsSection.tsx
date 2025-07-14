import { Card, CardContent, CardHeader } from './ui/card';
import { Button } from './ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';
import { Calendar, ArrowRight, Users, Megaphone } from 'lucide-react';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // ou import { useRouter } from 'next/router' si Next.js

const NewsSection = () => {
  const [api, setApi] = React.useState<any>();
  const navigate = useNavigate(); // pour React Router

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
      id: 'q1uokycOwU4',
      type: "live",
      icon: Users,
      title: "Live : Formation gratuite en réalisation",
      excerpt: "Rejoignez-nous pour une session de formation gratuite sur les techniques de base de la réalisation cinématographique.",
      date: "20 Décembre 2024",
      image: "/cam_jean.png",
      category: "Lives"
    },
  ];

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
                      </div>
                    </CardHeader>

                    <CardContent className="p-6">
                      <div className="flex items-center text-sm text-muted-foreground mb-3">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span className="mr-4">{item.date}</span>
                      </div>

                      <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-gold transition-colors duration-300 line-clamp-2">
                        {item.title}
                      </h3>

                      <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                        {item.excerpt}
                      </p>

                      <Button
                        variant="link"
                        size="sm"
                        className="text-gold hover:underline p-0"
                        onClick={() => navigate(`/actualites/${item.id}`)}
                      >
                        Lire la suite ici <ArrowRight className="inline-block w-4 h-4 ml-1" />
                      </Button>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious className="absolute -left-4 top-1/2 -translate-y-1/2 bg-gold/90 hover:bg-gold border-0 text-foreground h-12 w-12" />
            <CarouselNext className="absolute -right-4 top-1/2 -translate-y-1/2 bg-gold/90 hover:bg-gold border-0 text-foreground h-12 w-12" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
