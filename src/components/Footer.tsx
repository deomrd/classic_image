import { Heart, Mail, Phone, MapPin, Youtube, Facebook, Instagram, Twitter } from 'lucide-react';
import { Button } from './ui/button';

const Footer = () => {
  const socialLinks = [
    { icon: Youtube, href: "#", label: "YouTube" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" }
  ];

  const quickLinks = [
    { label: "Accueil", href: "#accueil" },
    { label: "À propos", href: "#apropos" },
    { label: "Services", href: "#services" },
    { label: "Portfolio", href: "#portfolio" }
  ];

  const services = [
    { label: "Production de films", href: "#services" },
    { label: "Réalisation de séries", href: "#services" },
    { label: "Formation cinéma", href: "#services" },
    { label: "Promotion artistique", href: "#services" }
  ];

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-6">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gradient-to-r from-gold to-gold-dark rounded-full flex items-center justify-center">
                  <span className="text-foreground font-bold">C</span>
                </div>
                <div>
                  <h3 className="font-bold text-xl text-background">Classic Imagez</h3>
                  <p className="text-sm text-gold">Production</p>
                </div>
              </div>
              <p className="text-background/80 text-sm leading-relaxed">
                Votre partenaire privilégié pour la production de films et séries, 
                la promotion des cinéastes burundais, et le renforcement des capacités 
                dans le domaine du cinéma.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <Button
                    key={index}
                    variant="ghost"
                    size="sm"
                    className="w-10 h-10 p-0 rounded-full bg-background/10 hover:bg-gold hover:text-foreground transition-all duration-300"
                    onClick={() => window.open(social.href, '_blank')}
                  >
                    <social.icon className="h-4 w-4" />
                  </Button>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h4 className="font-bold text-lg text-background">Liens rapides</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-background/80 hover:text-gold transition-colors duration-200 text-sm"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="space-y-6">
              <h4 className="font-bold text-lg text-background">Nos services</h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(service.href)}
                      className="text-background/80 hover:text-gold transition-colors duration-200 text-sm"
                    >
                      {service.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <h4 className="font-bold text-lg text-background">Contact</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-4 w-4 text-gold mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-background/80">
                      Bujumbura, Burundi<br />
                      Quartier Rohero
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-4 w-4 text-gold flex-shrink-0" />
                  <p className="text-sm text-background/80">
                    +257 XX XX XX XX
                  </p>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-4 w-4 text-gold flex-shrink-0" />
                  <p className="text-sm text-background/80">
                    contact@classicimagez.bi
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-background/20 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-background/60">
              © 2024 Classic Imagez Production. Tous droits réservés.
            </div>
            <div className="flex items-center space-x-1 text-sm text-background/60">
              <span>Créé avec</span>
              <Heart className="h-4 w-4 text-red-500 fill-current" />
              <span>par Classic Imagez Production</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;