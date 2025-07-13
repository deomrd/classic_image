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
      category: "films",
      year: "2024",
      description: "Un film poignant sur les traditions burundaises",
      thumbnail: "https://images.unsplash.com/photo-1489599510543-4b3474f8c8dc?w=600&h=400&fit=crop",
      duration: "95 min",
      views: "12.5K",
      likes: "890"
    },
    {
      id: 2,
      title: "AUX BOUTS DU DÉSESPOIR",
      category: "films",
      year: "2023",
      description: "Drame social contemporain",
      thumbnail: "https://images.unsplash.com/photo-1518883385237-b31c68b4a82b?w=600&h=400&fit=crop",
      duration: "107 min",
      views: "8.3K",
      likes: "652"
    },
    {
      id: 3,
      title: "BURUNDI STORIES",
      category: "series",
      year: "2024",
      description: "Série documentaire sur la culture burundaise",
      thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop",
      duration: "6 épisodes",
      views: "15.2K",
      likes: "1.1K"
    },
    {
      id: 4,
      title: "TRADITIONS VIVANTES",
      category: "documentaires",
      year: "2023",
      description: "Documentaire sur les arts traditionnels",
      thumbnail: "https://images.unsplash.com/photo-1516914943479-89db7d9ae7f2?w=600&h=400&fit=crop",
      duration: "52 min",
      views: "6.7K",
      likes: "421"
    },
    {
      id: 5,
      title: "ENTREPRISE MODERNE",
      category: "corporate",
      year: "2024",
      description: "Film corporate pour développement économique",
      thumbnail: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&h=400&fit=crop",
      duration: "8 min",
      views: "3.2K",
      likes: "189"
    },
    {
      id: 6,
      title: "JEUNESSE BURUNDAISE",
      category: "documentaires",
      year: "2024",
      description: "Portrait de la nouvelle génération",
      thumbnail: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=600&h=400&fit=crop",
      duration: "73 min",
      views: "9.1K",
      likes: "734"
    }
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card
              key={project.id}
              className="group overflow-hidden bg-background border-0 hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
            >
              <CardContent className="p-0">
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
                      {project.views}
                    </div>
                    <div className="bg-black/60 backdrop-blur-sm rounded-full px-3 py-1 flex items-center text-white text-sm">
                      <Heart className="h-3 w-3 mr-1" />
                      {project.likes}
                    </div>
                  </div>

                  {/* Year Badge */}
                  <div className="absolute top-4 left-4">
                    <div className="bg-gold text-foreground text-xs font-bold px-3 py-1 rounded-full">
                      {project.year}
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-gold transition-colors duration-300">
                      {project.title}
                    </h3>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-1" />
                      {project.duration}
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground text-sm mb-4">
                    {project.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gold font-medium uppercase tracking-wide">
                      {categories.find(c => c.id === project.category)?.label}
                    </span>
                    <Button 
                      size="sm" 
                      variant="ghost"
                      className="text-gold hover:text-foreground hover:bg-gold transition-all duration-300"
                    >
                      Voir plus
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            className="bg-gold hover:bg-gold-dark text-foreground font-semibold px-8 py-4 transition-all duration-300 hover:shadow-lg hover:scale-105"
          >
            Voir tous nos projets
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;