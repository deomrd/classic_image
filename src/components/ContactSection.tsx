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
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

              </div>
            </div>

            {/* Map Placeholder */}
            <Card className="bg-background border-0 overflow-hidden">
             <CardContent className="p-0">
              <div className="aspect-video bg-gradient-to-br from-gold/20 to-gold-dark/20 flex items-center justify-center">
                <iframe
                  title="Carte de localisation - Quartier Asiatique, Bujumbura"
                  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3982.857857862796!2d-29.357384925027706!3d3.38487999658975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!1s0x0%3A0x7a934fb4a16968fa!5e0!3m2!1sfr!2srw!4v1752474338754!5m2!1sfr!2srw"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-b"
                />
              </div>
            </CardContent>


            </Card>
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