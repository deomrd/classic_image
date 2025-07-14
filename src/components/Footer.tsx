import { Heart, Mail, Phone, MapPin, Youtube, Facebook, Instagram } from 'lucide-react';
import { Button } from './ui/button';

const Footer = () => {
  const socialLinks = [
    { icon: Youtube, href: "https://www.youtube.com/@Classicimagezprod", label: "YouTube" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" }
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

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background w-full">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Company Info */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-r from-gold to-gold-dark rounded-full flex items-center justify-center">
                  <span className="text-foreground font-bold text-lg">C</span>
                </div>
                <div>
                  <h3 className="font-bold text-2xl">Classic Imagez</h3>
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
                    size="icon"
                    className="w-10 h-10 rounded-full bg-background/10 hover:bg-gold hover:text-foreground transition"
                    onClick={() => window.open(social.href, '_blank')}
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5" />
                  </Button>
                ))}
              </div>
            </div>

            {/* Company Info */}
            <div className="space-y-6">
              
              <p className="text-background/80 text-sm leading-relaxed">
                Classic Imagez donne vie à vos projets avec une production audiovisuelle de qualité.
                Experts en films et séries, nous valorisons les talents burundais et soutenons le développement des compétences locales.
                Plus qu’un producteur, nous sommes un partenaire passionné, dédié à raconter des histoires qui inspirent et marquent.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h4 className="font-semibold text-xl">Liens rapides</h4>
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
              <h4 className="font-semibold text-xl">Nos services</h4>
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


          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-background/20 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-background/60">
            <div>
              © {currentYear} Classic Imagez. Tous droits réservés.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
