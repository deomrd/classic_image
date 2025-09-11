import { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';

const PortfolioSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'Tout' },
    { id: 'films', label: 'Films' },
    { id: 'documentaire', label: 'Documentaires' },
    { id: 'formation', label: 'Formations' },
    { id: 'behend', label: 'Behend the scene' }
  ];

  const projects = [
    { id: 1, category: "films", thumbnail: "/film/1.jpg" },
    { id: 2, category: "films", thumbnail: "/film/2.jpg" },
    { id: 3, category: "films", thumbnail: "/film/3.jpg" },
    { id: 4, category: "formation", thumbnail: "/formation/1.jpg" },
    { id: 5, category: "formation", thumbnail: "/formation/2.jpg" },
    { id: 6, category: "formation", thumbnail: "/formation/3.jpg" },
    { id: 7, category: "behend", thumbnail: "/behend/1.jpg" },
    { id: 8, category: "behend", thumbnail: "/behend/2.jpg" },
    { id: 9, category: "behend", thumbnail: "/behend/3.jpg" },
    { id: 10, category: "behend", thumbnail: "/behend/4.jpg" },
    { id: 11, category: "behend", thumbnail: "/behend/5.jpg" },
    { id: 12, category: "behend", thumbnail: "/behend/6.jpg" },
  ];

  // Filtrage : si "all", on ne garde que la première image de chaque catégorie
  const filteredProjects = selectedCategory === 'all'
    ? categories
        .filter(c => c.id !== 'all') // on ignore le bouton 'all' pour le filtrage
        .map(c => projects.find(p => p.category === c.id)) // on prend la première image de chaque catégorie
        .filter(Boolean) // on enlève les éventuels undefined
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="portfolio" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            réalisations
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
              key={project!.id}
              className="group overflow-hidden bg-background border-0 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 h-[400px]"
            >
              <CardContent className="p-0 h-full flex flex-col">
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={project!.thumbnail}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
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
