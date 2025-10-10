import { Card, CardContent, CardHeader } from './ui/card';
import { Button } from './ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const NewsSection = () => {
  const [api, setApi] = React.useState<any>();
  const navigate = useNavigate();

  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 4000);

    return () => clearInterval(interval);
  }, [api]);

  const newsItems = [
    { title: "Jean Merci Namegabe", excerpt: "Directeur Général", image: "/team/ceo.jpg" },
    { title: "Raissa Feza", excerpt: "Administrative & Promotion", image: "/team/prom.jpg" },
    { title: "Rukeza - Laly", excerpt: " ", image: "/team/rukeza.jpg" },
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
            opts={{ align: "start", loop: true }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {newsItems.map((item, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="group overflow-hidden bg-card border-0 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 h-full">
                    <CardHeader className="p-0">
                      <div className="relative w-full h-[300px] md:h-[350px] lg:h-[400px] overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                      </div>
                    </CardHeader>

                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-gold transition-colors duration-300 line-clamp-2">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                        {item.excerpt}
                      </p>
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
