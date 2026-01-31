import { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Play, ExternalLink } from 'lucide-react';

const ShowreelSection = () => {
  const [selectedVideo, setSelectedVideo] = useState(0);

  const videos = [
    {
      id: "zUbQOsn4L3A",
      title: "Jongoma",
      description: ``,
      thumbnail: "/jongoma.jpeg",
      duration: "21:51"
    },
    {
      id: "yRw43C7T2qE",
      title: "The Munkaze Coffee",
      description: `One coffee. Two continents. A revolution in every cup.`,
      thumbnail: "/emission.png",
      duration: "21:29"
    },
    {
      id: "4W57xlYf57c",
      title: "CinéArt avec Raïssa Feza",
      description: "Raïssa Feza, actrice, scénariste et mère, partage son parcours",
      thumbnail: "/emission1.png",
      duration: "3:14"
    }
  ];

  const openYoutube = (videoId: string) => {
    window.open(`https://www.youtube.com/watch?v=${videoId}`, '_blank');
  };

  return (
    <section id="showreel" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Showreel
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Découvrez nos réalisations à travers une sélection de nos meilleurs travaux
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Main Video Player */}
          <div className="order-2 lg:order-1">
            <Card className="overflow-hidden bg-black border-0 shadow-2xl">
              <CardContent className="p-0">
                <div className="relative aspect-video">
                  <img
                    src={videos[selectedVideo].thumbnail}
                    alt={videos[selectedVideo].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Button
                      onClick={() => openYoutube(videos[selectedVideo].id)}
                      size="lg"
                      className="bg-gold hover:bg-gold-dark text-foreground w-20 h-20 rounded-full p-0 hover:scale-110 transition-all duration-300 shadow-2xl"
                    >
                      <Play className="h-8 w-8 ml-1" />
                    </Button>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white text-xl font-bold mb-2">
                      {videos[selectedVideo].title}
                    </h3>
                    <p className="text-white/80 text-sm">
                      {videos[selectedVideo].description}
                    </p>
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-gold text-sm font-medium">
                        {videos[selectedVideo].duration}
                      </span>
                      <Button
                        onClick={() => openYoutube(videos[selectedVideo].id)}
                        variant="ghost"
                        size="sm"
                        className="text-white hover:text-gold"
                      >
                        <ExternalLink className="h-4 w-4 mr-1" />
                        YouTube
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Video List */}
          <div className="order-1 lg:order-2 space-y-4">
            {videos.map((video, index) => (
              <Card
                key={index}
                className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
                  selectedVideo === index
                    ? 'ring-2 ring-gold bg-gold/5'
                    : 'hover:bg-muted/50'
                }`}
                onClick={() => setSelectedVideo(index)}
              >
                <CardContent className="p-4">
                  <div className="flex items-center space-x-4">
                    <div className="relative flex-shrink-0">
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        className="w-24 h-16 object-cover rounded"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Play className="h-6 w-6 text-white drop-shadow-lg" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground mb-1">
                        {video.title}
                      </h4>
                      <p className="text-sm text-muted-foreground mb-1">
                        {video.description}
                      </p>
                      <span className="text-xs text-gold font-medium">
                        {video.duration}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowreelSection;