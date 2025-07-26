import { Card } from '@/components/ui/card';
import { CheckCircle, Gauge, UserCheck, Zap } from 'lucide-react';
import auto from '@/assets/services/carç.jpeg';

const WhyChooseUs = () => {
  const advantages = [
    {
      icon: Zap,
      title: "Tecnología de Última Generación",
      description: "Cabinas presurizadas y sistemas de pulverización avanzada para acabados de alta calidad"
    },
    {
      icon: UserCheck,
      title: "Atención Personalizada",
      description: "Evaluamos cada vehículo de forma individual para garantizar un acabado perfecto según tus expectativas"
    },
    {
      icon: CheckCircle,
      title: "Especialistas en Pintura y Enderezada",
      description: "Técnicos altamente calificados en procesos de reparación estética y estructural automotriz"
    },
    {
      icon: Gauge,
      title: "Procesos Rápidos y Eficientes",
      description: "Optimizamos cada etapa del servicio para que tu vehículo esté listo en el menor tiempo posible"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Precisión en <span className="text-neon-blue">Pintura</span> y Enderezada
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                En Mecánicas Automotriz Guerrero nos especializamos en restaurar la estética original de tu vehículo
                utilizando herramientas de alta precisión y materiales de primera calidad.
              </p>
            </div>

            {/* Advantages List */}
            <div className="space-y-6">
              {advantages.map((advantage, index) => {
                const IconComponent = advantage.icon;
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="p-2 bg-neon-blue/10 rounded-lg shrink-0 mt-1">
                      <IconComponent className="h-6 w-6 text-neon-blue" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">
                        {advantage.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {advantage.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Visual Card with Image */}
          <div className="relative">
            <Card className="bg-gradient-to-br from-card to-secondary/10 border-neon-blue/30 p-4 overflow-hidden">
              <img
                src={auto}
                alt="Pintura automotriz"
                className="rounded-lg object-cover w-full h-auto"
              />
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
