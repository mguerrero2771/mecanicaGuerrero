import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

// Import service images
import pinturaCompleta from '@/assets/services/car2.jpeg';
import enderezada from '@/assets/services/car4.jpeg';
import retoque from '@/assets/services/car3.jpeg';
import pulido from '@/assets/services/pulida1.jpeg';
import abolladuras from '@/assets/services/antesydespues.jpeg';
import pinturaRines from '@/assets/services/rines.jpeg';

const Services = () => {
  const services = [
    {
      image: enderezada,
      title: "Pintura Completa",
      description: "Servicio completo de pintura automotriz con acabados profesionales y preparación total de la superficie"
    },
    {
      image: pinturaCompleta,
      title: "Enderezada de Carrocería",
      description: "Reparación especializada de abolladuras y enderezado profesional para restaurar la forma original"
    },
    {
      image: pulido,
      title: "Retoque de Pintura",
      description: "Reparación de rayones y daños menores con igualación perfecta del color original"
    },
    {
      image: retoque,
      title: "Pulido y Encerado",
      description: "Pulido profesional para restaurar el brillo y protección con encerado de alta calidad"
    },
    {
      image: abolladuras,
      title: "Reparación de Abolladuras",
      description: "Técnicas especializadas para eliminar abolladuras sin dañar la pintura original"
    },
    {
      image: pinturaRines,
      title: "Pintura de Rines",
      description: "Restauración y pintura de rines con acabados duraderos y colores personalizados"
    }
  ];

  return (
    <section id="servicios" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nuestros <span className="text-neon-blue">Servicios</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Especialistas en pintura automotriz y enderezada de carrocería con 
            técnicas profesionales y materiales de primera calidad
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => {
            return (
              <Card 
                key={index} 
                className="bg-card border-border hover:border-neon-blue/50 transition-all duration-300 group hover:shadow-[0_0_30px_rgba(0,207,255,0.2)] overflow-hidden"
              >
                <div className="relative">
                  {/* Service Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-xl font-semibold text-white mb-1">
                        {service.title}
                      </h3>
                    </div>
                  </div>
                  
                  {/* Service Content */}
                  <div className="p-6">
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center space-y-6">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              ¿Necesitas restaurar la belleza de tu vehículo?
            </h3>
            <p className="text-muted-foreground mb-6">
              Contáctanos para obtener una cotización gratuita y personalizada 
              para los trabajos de pintura y enderezada de tu vehículo
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="neon" 
              size="lg"
              onClick={() => window.open('https://wa.me/593998152358', '_blank')}
            >
              Solicitar Cotización
              <ArrowRight className="h-5 w-5" />
            </Button>
            <Button 
              variant="neon-outline" 
              size="lg"
              onClick={() => {
                const element = document.getElementById('contacto');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Ver Más Detalles
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;