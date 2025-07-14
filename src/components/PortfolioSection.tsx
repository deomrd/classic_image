import { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Play, Calendar, Eye, Heart } from 'lucide-react';

const PortfolioSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'Tout' },
    { id: 'films', label: 'Films' },
    { id: 'series', label: 'Séries' },
    { id: 'documentaires', label: 'Documentaires' },
    { id: 'corporate', label: 'Corporate' }
  ];

  const projects = [
    {
      id: 1,
      title: "IWANJE",
      category: "series",
      year: "2024",
      description: `IWANJE est une série poignante qui explore en profondeur les traditions ancestrales du Burundi. À travers des récits riches en émotion, elle met en lumière les valeurs, les rites et les enjeux d’une culture en pleine mutation, tout en rendant hommage à la sagesse des anciens et à la force des liens communautaires.`,
      thumbnail: "/iwanje.png",
      duration: "12 h",
    },
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="portfolio" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Portfolio
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Découvrez nos réalisations qui ont marqué le paysage audiovisuel burundais
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                variant={selectedCategory === category.id ? "default" : "outline"}
                className={`${
                  selectedCategory === category.id
                    ? 'bg-gold hover:bg-gold-dark text-foreground'
                    : 'border-gold text-gold hover:bg-gold hover:text-foreground'
                } font-medium transition-all duration-300`}
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Grid layout: 1 column on small screens, 2 columns (50%) on md+ */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <Card
              key={project.id}
              className="group overflow-hidden bg-background border-0 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 h-[600px]"
            >
              <CardContent className="p-0 h-full flex flex-col">
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button
                      size="lg"
                      className="bg-gold hover:bg-gold-dark text-foreground w-16 h-16 rounded-full p-0 hover:scale-110 transition-all duration-300 shadow-2xl"
                    >
                      <Play className="h-6 w-6 ml-1" />
                    </Button>
                  </div>

                  {/* Stats Overlay */}
                  <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-black/60 backdrop-blur-sm rounded-full px-3 py-1 flex items-center text-white text-sm">
                      <Eye className="h-3 w-3 mr-1" />
                    </div>
                    <div className="bg-black/60 backdrop-blur-sm rounded-full px-3 py-1 flex items-center text-white text-sm">
                      <Heart className="h-3 w-3 mr-1" />
                    </div>
                  </div>

                  {/* Year Badge */}
                  <div className="absolute top-4 left-4">
                    <div className="bg-gold text-foreground text-xs font-bold px-3 py-1 rounded-full">
                      {project.year}
                    </div>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-2xl font-bold text-foreground group-hover:text-gold transition-colors duration-300">
                        {project.title}
                      </h3>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-1" />
                        {project.duration}
                      </div>
                    </div>
                    <p className="text-muted-foreground text-base mb-4">
                      {project.description}
                    </p>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gold font-medium uppercase tracking-wide">
                      {categories.find(c => c.id === project.category)?.label}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
