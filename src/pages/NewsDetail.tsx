import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, User, ArrowLeft, Mic, Users, Megaphone } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { stringify } from 'querystring';

const NewsDetail = () => {
  const { id } = useParams();

  const newsItems = [
    {
      id: 'q1uokycOwU4',
      type: "live",
      icon: Users,
      title: "Live : Formation gratuite en réalisation",
      excerpt: "Rejoignez-nous pour une session en direct dédiée à l'apprentissage des bases de la réalisation de films.",
      content: `
        <h3>Une initiation complète à la réalisation</h3>
        <p>
        Vous rêvez de réaliser vos propres films mais vous ne savez pas par où commencer ? Cette session de formation gratuite est spécialement conçue pour les débutants qui souhaitent comprendre les bases du métier de réalisateur.
        </p>

        <h3>Ce que vous apprendrez</h3>
        <p>Durant cette session, nos formateurs expérimentés vous guideront à travers les étapes essentielles de la réalisation :</p>
        <ul>
          <li>Comprendre le rôle du réalisateur sur un plateau</li>
          <li>Travailler avec un scénario et définir une vision artistique</li>
          <li>Diriger les acteurs pour obtenir une performance authentique</li>
          <li>Maîtriser les bases de la composition d'image et du découpage technique</li>
          <li>Collaborer avec l'équipe technique</li>
        </ul>

        <h3>Un live interactif</h3>
        <p>
        Ce n’est pas un simple cours théorique. Vous pourrez poser vos questions en direct, assister à des démonstrations concrètes, et participer à des exercices pratiques.
        </p>

        <h3>Pourquoi cette formation ?</h3>
        <p>
        Chez Classic Imagez, nous croyons en l’émergence d’un cinéma burundais fort et accessible. Cette initiative vise à former les jeunes talents et à leur offrir des outils concrets pour se lancer dans la réalisation.
        </p>
      `,
      date: "20 Décembre 2024",
      image: "/cam_jean.png",
      category: "Lives",
       videoUrl: "https://www.youtube.com/embed/q1uokycOwU4", // Remplace VIDEO_ID par l’ID réel
    }
  ];

  const article = newsItems.find(item => item.id === (id || '')) || newsItems[0];
  const IconComponent = article.icon;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation currentSection="" onSectionChange={() => {}} />

      <main className="pt-20">
        <section className="relative overflow-hidden">
          <div className="relative w-full h-[60vh]">
            <img
              src={article.image}
              alt={article.title}
              className="absolute inset-0 w-full h-full object-cover rounded-b-3xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
            <div className="relative z-10 container mx-auto px-4 py-20 text-center">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight max-w-3xl mx-auto mb-4">
                {article.title}
              </h1>

              <div className="flex justify-center space-x-6 text-sm text-muted-foreground">
                <span className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  {article.date}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Contenu de l'article */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="bg-card/40 backdrop-blur-md border border-border rounded-xl">
                <CardContent className="p-6 md:p-12">
                  <p className="text-lg text-muted-foreground font-medium mb-6">
                    {article.excerpt}
                  </p>

                  {/* Vidéo YouTube si disponible */}
                  {article.videoUrl && (
                  <div className="mt-12 aspect-video rounded-xl overflow-hidden shadow-lg">
                    <iframe
                      className="w-full h-full"
                      src={`${article.videoUrl}?rel=0&modestbranding=1&showinfo=0`}
                      title={article.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                )}


                  <div
                    className="space-y-6 prose prose-lg prose-headings:text-gold prose-p:text-muted-foreground max-w-none"
                    dangerouslySetInnerHTML={{
                      __html: article.content.replace(
                        /<h3>/g,
                        '<h3 class="text-2xl font-bold mt-8 mb-4">'
                      ).replace(
                        /<p>/g,
                        '<p class="mb-4 leading-relaxed">'
                      )
                    }}
                  />
                </CardContent>
              </Card>

              <div className="text-center mt-12">
                <Link to="/#actualites">
                  <Button size="lg" className="bg-gold hover:bg-gold-dark text-foreground">
                    Voir plus d’actualités
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
