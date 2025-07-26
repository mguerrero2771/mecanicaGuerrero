import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Paintbrush, X, CheckCircle } from 'lucide-react';
import heroImage from '@/assets/hero-car.jpg';

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const scrollToServices = () => {
    const element = document.getElementById('servicios');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const productos = [
    {
      nombre: "Barniz PPG",
      descripcion: "El mejor barniz del mercado para acabados duraderos y brillantes",
      imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXj5U-VMITNt_w2Cozv9aRgVVUZ7eKkpbpIw&s"
    },
    {
      nombre: "Fondo de Primera",
      descripcion: "Base de alta calidad para preparación perfecta de superficies",
      imagen: "https://martel.com.ar/storage/2021/01/PRIMA.jpg"
    },
    {
      nombre: "Masilla de Primera Marca Titanium",
      descripcion: "Reparación profesional de imperfecciones y nivelación",
      imagen: "https://pintuneira.com/wp-content/uploads/2024/10/Barniz-Mate-Titanium.png"
    },
    {
      nombre: "Pintura Automotriz Premium",
      descripcion: "Tu elijes el color original con resistencia UV y durabilidad superior",
      imagen: "https://exclusivostaller.ar/wp-content/uploads/2024/09/Pintura-y-repintado-de-autos-scaled.webp"
    },
    {
      nombre: "Catalizadores Profesionales Poliuretano",
      descripcion: "Componentes químicos para curado óptimo y resistencia",
      imagen: "https://www.pintulac.com.ec/media/catalog/product/cache/01d5a80ef248257bf9991bbfc9cf4de4/w/1/w1724-cu.jpg"
    },
    {
      nombre: "Lijas de Grano Fino Marcas 3M",
      descripcion: "Herramientas especializadas para acabados perfectos",
      imagen: "https://multimedia.3m.com/mws/media/1064872J/3m-wetordry-purple-abrasive-sheet-02020.jpg?width=506"
    }
  ];

  return (
    <section id="inicio" className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Vehículo con acabado de pintura profesional" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-bg via-dark-bg/80 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-neon-blue/10 border border-neon-blue/30 rounded-full px-4 py-2">
              <Paintbrush className="h-4 w-4 text-neon-blue" />
              <span 
                className="text-neon-blue text-sm font-semibold cursor-pointer hover:text-neon-blue/80 transition-colors"
                onClick={() => setIsModalOpen(true)}
              >
                Acabados Profesionales
              </span>
            </div>

            {/* Title */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                ¡Restaura la 
                <span className="text-neon-blue"> Belleza</span> de tu Vehículo!
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                Especialistas en pintura automotriz y enderezada de carrocería con acabados de calidad profesional
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="neon" 
                size="lg" 
                className="text-base px-8"
                onClick={() => window.open('https://wa.me/593998152358', '_blank')}
              >
                Solicitar Cotización
                <ArrowRight className="h-5 w-5" />
              </Button>
              <Button 
                variant="neon-outline" 
                size="lg" 
                className="text-base px-8"
                onClick={scrollToServices}
              >
                Ver Servicios
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-neon-blue/20">
              <div>
                <h3 className="text-2xl font-bold text-neon-blue">100%</h3>
                <p className="text-muted-foreground text-sm">Satisfacción Garantizada</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-neon-blue">100+</h3>
                <p className="text-muted-foreground text-sm">Vehículos Pintados</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-neon-blue">24h</h3>
                <p className="text-muted-foreground text-sm">Cotización Rápida</p>
              </div>
            </div>
          </div>

          {/* Right Column - Login/CTA Card */}
          <div className="lg:flex justify-end hidden">
            <div className="bg-card/80 backdrop-blur-sm border border-neon-blue/30 rounded-2xl p-8 max-w-md">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Cotización Gratuita
              </h3>
              <p className="text-muted-foreground mb-6">
                Obtén una evaluación completa de los trabajos de pintura y enderezada que necesita tu vehículo sin costo alguno.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-neon-blue rounded-full"></div>
                  <span className="text-foreground">Evaluación de daños</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-neon-blue rounded-full"></div>
                  <span className="text-foreground">Igualación de color</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-neon-blue rounded-full"></div>
                  <span className="text-foreground">Presupuesto detallado</span>
                </div>
              </div>

              <Button 
                variant="neon" 
                className="w-full mt-6"
                onClick={() => window.open('https://wa.me/0998152358', '_blank')}
              >
                Solicitar Cotización
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal de Productos */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Overlay */}
          <div 
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setIsModalOpen(false)}
          ></div>
          
          {/* Modal Content */}
          <div className="relative bg-card border border-neon-blue/30 rounded-2xl p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  Productos Profesionales
                </h3>
                <p className="text-muted-foreground">
                  Utilizamos solo materiales de primera calidad
                </p>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-2 hover:bg-neon-blue/10 rounded-lg transition-colors"
              >
                <X className="h-6 w-6 text-muted-foreground hover:text-neon-blue" />
              </button>
            </div>

            {/* Products Grid */}
            <div className="grid gap-4">
              {productos.map((producto, index) => (
                <div 
                  key={index}
                  className="flex items-start space-x-4 p-4 bg-secondary/20 rounded-lg border border-neon-blue/10 hover:border-neon-blue/30 transition-colors"
                >
                  {/* Product Image */}
                  <div className="flex-shrink-0">
                    <img 
                      src={producto.imagen} 
                      alt={producto.nombre}
                      className="w-16 h-16 rounded-lg object-cover border border-neon-blue/20"
                      onError={(e) => {
                        e.currentTarget.src = "https://via.placeholder.com/64x64/1a1a1a/00cfff?text=" + producto.nombre.charAt(0);
                      }}
                    />
                  </div>
                  
                  {/* Product Info */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground mb-1 flex items-center">
                          <CheckCircle className="h-4 w-4 text-neon-blue mr-2" />
                          {producto.nombre}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {producto.descripcion}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="mt-8 pt-6 border-t border-neon-blue/20">
              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-4">
                  ¿Quieres conocer más sobre nuestros productos y servicios?
                </p>
                <Button 
                  variant="neon" 
                  onClick={() => {
                    window.open('https://wa.me/0998152358', '_blank');
                    setIsModalOpen(false);
                  }}
                >
                  Contactar por WhatsApp
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;