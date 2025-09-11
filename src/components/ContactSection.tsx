import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();



  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));

    toast({
      title: "Message envoyé !",
      description: "Nous vous recontacterons dans les plus brefs délais.",
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });

    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Contact
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Prêt à donner vie à votre projet ? Contactez-nous dès aujourd'hui 
            pour discuter de vos besoins en production audiovisuelle.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
<div className="space-y-8">
  <div>
    <h3 className="text-2xl font-bold text-foreground mb-6">
      Informations de contact
    </h3>
    <div className="space-y-6">
      {/* Téléphone */}
      <div className="flex items-start space-x-4">
        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gold/20 text-gold">
          <Phone className="w-6 h-6" />
        </div>
        <div>
          <p className="font-semibold text-foreground">Téléphone</p>
          <p className="text-muted-foreground">+257 62 663 533</p>
          <p className="text-muted-foreground">+221 771 481 855</p>
        </div>
      </div>

      {/* Email */}
      <div className="flex items-start space-x-4">
        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gold/20 text-gold">
          <Mail className="w-6 h-6" />
        </div>
        <div>
          <p className="font-semibold text-foreground">Email</p>
          <p className="text-muted-foreground">classicimagez01@gmail.com</p>
        </div>
      </div>

      {/* Adresse */}
      <div className="flex items-start space-x-4">
        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gold/20 text-gold">
          <MapPin className="w-6 h-6" />
        </div>
          <div>
            <p className="font-semibold text-foreground">Adresse</p>
            <p className="text-muted-foreground">Quartier Asiatique</p>
            <p className="text-muted-foreground">Bujumbura, Burundi</p>
          </div>
        </div>

        {/* Heures d'ouverture */}
        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gold/20 text-gold">
            <Clock className="w-6 h-6" />
          </div>
          <div>
            <p className="font-semibold text-foreground">Heures d'ouverture</p>
            <p className="text-muted-foreground">Lun - Ven: 8h00 - 18h00</p>
            <p className="text-muted-foreground">Sam: 9h00 - 13h00</p>
            <p className="text-muted-foreground">Dim: Fermé</p>
          </div>
        </div>
      </div>
    </div>
  </div>


          {/* Contact Form */}
          <div>
            <Card className="bg-background border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground">
                  Envoyez-nous un message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Input
                        name="name"
                        placeholder="Votre nom *"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="border-gold/30 focus:border-gold"
                      />
                    </div>
                    <div>
                      <Input
                        name="email"
                        type="email"
                        placeholder="Votre email *"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="border-gold/30 focus:border-gold"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Input
                        name="phone"
                        placeholder="Votre téléphone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="border-gold/30 focus:border-gold"
                      />
                    </div>
                    <div>
                      <Input
                        name="subject"
                        placeholder="Sujet *"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="border-gold/30 focus:border-gold"
                      />
                    </div>
                  </div>

                  <div>
                    <Textarea
                      name="message"
                      placeholder="Votre message *"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="border-gold/30 focus:border-gold resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    size="lg"
                    className="w-full bg-gold hover:bg-gold-dark text-foreground font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-foreground mr-2"></div>
                        Envoi en cours...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        Envoyer le message
                      </>
                    )}
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    * Champs obligatoires
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;