import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Phone,
  MapPin,
  Clock,
  MessageCircle,
  Mail,
  Send
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const whatsappMessage = `Hola, soy ${formData.name}. ${formData.message}. Mi email es: ${formData.email}`;
    const whatsappUrl = `https://wa.me/593998152358?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contacto" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Contáctanos <span className="text-neon-blue">Hoy</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Agenda tu servicio de pintura automotriz con nosotros o consulta cualquier inquietud. Estamos para ayudarte.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Información de Contacto
              </h3>

              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-neon-blue/10 rounded-lg">
                    <Phone className="h-6 w-6 text-neon-blue" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Teléfono</h4>
                    <a
                      href="tel:+593998152358"
                      className="text-muted-foreground hover:text-neon-blue transition-colors"
                    >
                      0998152358
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-neon-blue/10 rounded-lg">
                    <MapPin className="h-6 w-6 text-neon-blue" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Dirección</h4>
                    <p className="text-muted-foreground mb-2">Ambato, Tungurahua</p>
                    <a
                      href="https://maps.app.goo.gl/1LBUuQyEAJbNqvwT8"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neon-blue hover:text-hover-blue transition-colors text-sm"
                    >
                      Ver en Google Maps →
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-neon-blue/10 rounded-lg">
                    <Clock className="h-6 w-6 text-neon-blue" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Horarios</h4>
                    <div className="text-muted-foreground space-y-1">
                      <p>Lunes a Viernes: 9:00 a.m. - 6:00 p.m.</p>
                      <p>Sábados: 9:00 a.m. - 4:00 p.m.</p>
                      <p>Domingos: Cerrado</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <Card className="bg-green-500/10 border-green-500/30 p-6">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-green-500/20 rounded-lg">
                  <MessageCircle className="h-8 w-8 text-green-500" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-foreground mb-1">
                    Chatea con nosotros
                  </h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Atención rápida vía WhatsApp
                  </p>
                  <Button
                    variant="whatsapp"
                    onClick={() => window.open('https://wa.me/593998152358', '_blank')}
                  >
                    Abrir WhatsApp
                  </Button>
                </div>
              </div>
            </Card>

            {/* Map */}
            <div className="bg-card rounded-lg overflow-hidden border border-border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8862147723607!2d-78.64085299999999!3d-1.2385173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d3812e91271dfd%3A0x809ba276fbe33dd8!2sMecanica%20Automotriz%20Guerrero!5e0!3m2!1ses-419!2sec!4v1753513977038!5m2!1ses-419!2sec"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación exacta - Mecánica Automotriz Guerrero"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="bg-card border-neon-blue/30 p-8">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  Envíanos un Mensaje
                </h3>
                <p className="text-muted-foreground">
                  Cuéntanos qué tipo de pintura automotriz necesitas o tu consulta específica.
                </p>
              </div>

              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Nombre completo
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="bg-input border-border focus:border-neon-blue"
                    placeholder="Tu nombre completo"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Correo electrónico
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="bg-input border-border focus:border-neon-blue"
                    placeholder="tu@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Mensaje
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    className="bg-input border-border focus:border-neon-blue min-h-[120px]"
                    placeholder="Describe el servicio de pintura que deseas o los daños a reparar..."
                  />
                </div>

                <Button onClick={handleSubmit} variant="neon" className="w-full">
                  <Send className="h-4 w-4" />
                  Enviar Mensaje
                </Button>
              </div>

              <div className="mt-6 pt-6 border-t border-border">
                <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
                  <Mail className="h-4 w-4" />
                  <span>También puedes escribirnos a: sebastian27guerrero@gmail.com</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;