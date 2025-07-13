import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Calendar, User, ArrowLeft, Mic, Users, Megaphone } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const NewsDetail = () => {
  const { id } = useParams();

  const newsItems = [
    {
      id: 1,
      type: "interview",
      icon: Mic,
      title: "Interview exclusive avec le réalisateur de IWANJE",
      excerpt: "Découvrez les coulisses de notre dernière production et les défis créatifs rencontrés lors du tournage.",
      content: `
        <h3>Une production ambitieuse</h3>
        <p>IWANJE représente l'aboutissement de plusieurs années de travail acharné. Ce film, tourné entièrement au Burundi, met en lumière la richesse de notre culture et l'excellence de nos talents locaux.</p>
        
        <h3>Les défis du tournage</h3>
        <p>Le réalisateur nous confie : "Tourner IWANJE a été un défi passionnant. Nous avons dû innover à chaque étape, depuis la préparation jusqu'à la post-production. L'équipe technique burundaise a fait preuve d'un professionnalisme exemplaire."</p>
        
        <h3>Une vision artistique unique</h3>
        <p>Ce long-métrage explore des thèmes universels à travers un prisme authentiquement burundais. Chaque scène a été pensée pour refléter notre identité culturelle tout en touchant un public international.</p>
        
        <h3>L'avenir du cinéma burundais</h3>
        <p>"IWANJE n'est que le début. Nous avons l'ambition de porter le cinéma burundais vers de nouveaux sommets, en formant de nouveaux talents et en produisant des œuvres qui marquent les esprits."</p>
      `,
      date: "15 Décembre 2024",
      author: "Équipe Classic Imagez",
      image: "https://images.unsplash.com/photo-1478720568477-b2709d7d1d6d?w=800&h=600&fit=crop",
      category: "Interviews"
    }
  ];

  const article = newsItems.find(item => item.id === parseInt(id || '1')) || newsItems[0];
  const IconComponent = article.icon;

  return (
    <div className="min-h-screen bg-background">
      <Navigation currentSection="" onSectionChange={() => {}} />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/60 to-background/30"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <Link to="/#actualites">
                <Button variant="ghost" className="mb-6 text-gold hover:text-foreground hover:bg-gold/20">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Retour aux actualités
                </Button>
              </Link>
              
              <div className="inline-flex items-center bg-gold/10 backdrop-blur-sm border border-gold/20 text-gold text-sm font-medium px-4 py-2 rounded-full mb-6">
                <IconComponent className="h-4 w-4 mr-2" />
                {article.category}
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in">
                {article.title}
              </h1>
              
              <div className="flex items-center justify-center text-muted-foreground mb-8 space-x-6">
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 mr-2" />
                  <span>{article.date}</span>
                </div>
                <div className="flex items-center">
                  <User className="h-5 w-5 mr-2" />
                  <span>{article.author}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="bg-card/50 backdrop-blur-sm border-gold/20">
                <CardContent className="p-8 md:p-12">
                  <div className="prose prose-lg max-w-none text-foreground">
                    <p className="text-xl text-muted-foreground mb-8 font-medium leading-relaxed">
                      {article.excerpt}
                    </p>
                    
                    <div 
                      className="space-y-6 text-foreground"
                      dangerouslySetInnerHTML={{ 
                        __html: article.content.replace(
                          /<h3>/g, '<h3 class="text-2xl font-bold text-gold mt-8 mb-4">'
                        ).replace(
                          /<p>/g, '<p class="mb-4 leading-relaxed text-muted-foreground">'
                        )
                      }}
                    />
                  </div>
                </CardContent>
              </Card>
              
              <div className="text-center mt-12">
                <Link to="/#actualites">
                  <Button size="lg" className="bg-gold hover:bg-gold-dark text-foreground">
                    Voir plus d'actualités
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

export default NewsDetail;