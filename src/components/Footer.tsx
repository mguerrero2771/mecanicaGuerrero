import { Wrench, Facebook, Instagram, MessageCircle, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-dark-bg border-t border-neon-blue/20">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="p-2 bg-neon-blue/10 rounded-lg">
                <Wrench className="h-6 w-6 text-neon-blue" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground">Pintura</h3>
                <p className="text-xs text-neon-blue font-semibold">AUTOMOTRIZ GUERRERO</p>
              </div>
            </div>
            <p className="text-muted-foreground text-sm">
              Especialistas en pintura automotriz y enderezada de carrocería. Trabajos de calidad profesional para devolverle la belleza original a tu vehículo.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Enlaces Rápidos</h4>
            <div className="space-y-2">
              <button 
                onClick={() => scrollToSection('inicio')}
                className="block text-muted-foreground hover:text-neon-blue transition-colors text-sm"
              >
                Inicio
              </button>
              <button 
                onClick={() => scrollToSection('nosotros')}
                className="block text-muted-foreground hover:text-neon-blue transition-colors text-sm"
              >
                Nosotros
              </button>
              <button 
                onClick={() => scrollToSection('servicios')}
                className="block text-muted-foreground hover:text-neon-blue transition-colors text-sm"
              >
                Servicios
              </button>
              <button 
                onClick={() => scrollToSection('contacto')}
                className="block text-muted-foreground hover:text-neon-blue transition-colors text-sm"
              >
                Contacto
              </button>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Servicios</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>Pintura Completa</p>
              <p>Enderezada de Carrocería</p>
              <p>Retoque de Pintura</p>
              <p>Pulido y Encerado</p>
              <p>Reparación de Abolladuras</p>
              <p>Pintura de Rines</p>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contacto</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-neon-blue" />
                <a 
                  href="tel:+593998152358" 
                  className="text-muted-foreground hover:text-neon-blue transition-colors"
                >
                  +593 99 815 2358
                </a>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-neon-blue mt-0.5" />
                <span className="text-muted-foreground">
                  Av. Las Aceitunas 180108<br />
                  Ambato, Tungurahua
                </span>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-6">
              <h5 className="font-semibold text-foreground mb-3 text-sm">Síguenos</h5>
              <div className="flex space-x-3">
                <a 
                  href="#" 
                  className="p-2 bg-secondary/20 hover:bg-neon-blue/20 rounded-lg transition-colors group"
                  aria-label="Facebook"
                >
                  <Facebook className="h-4 w-4 text-muted-foreground group-hover:text-neon-blue" />
                </a>
                <a 
                  href="#" 
                  className="p-2 bg-secondary/20 hover:bg-neon-blue/20 rounded-lg transition-colors group"
                  aria-label="Instagram"
                >
                  <Instagram className="h-4 w-4 text-muted-foreground group-hover:text-neon-blue" />
                </a>
                <a 
                  href="https://wa.me/593998152358" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-green-500/20 hover:bg-green-500/30 rounded-lg transition-colors group"
                  aria-label="WhatsApp"
                >
                  <MessageCircle className="h-4 w-4 text-green-500" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neon-blue/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © 2025 Mecánica Automotriz Guerrero. Todos los derechos reservados.
            </p>
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <span>Horarios: Lun-Sáb 9:00-18:00</span>
              <span>•</span>
              <span>Cotizaciones gratuitas</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;