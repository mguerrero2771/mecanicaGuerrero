import { Card } from '@/components/ui/card';
import { Shield, Users, Award, Clock } from 'lucide-react';

const About = () => {
  return (
    <section id="nosotros" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                ¿Quiénes <span className="text-neon-blue">Somos?</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Mecánicas Automotriz Guerrero es un taller especializado en pintura automotriz, comprometido con la excelencia estética y técnica de cada vehículo.
              </p>
              <p className="text-muted-foreground">
                Nuestro enfoque está en ofrecer acabados impecables, utilizando técnicas de pintura profesional, pulido avanzado y aplicación de capas protectoras para devolverle a tu auto su apariencia original o personalizada.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-neon-blue/10 rounded-lg shrink-0">
                  <Shield className="h-6 w-6 text-neon-blue" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Garantía Total</h3>
                  <p className="text-sm text-muted-foreground">
                    Todos nuestros trabajos de pintura cuentan con respaldo y garantía
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-2 bg-neon-blue/10 rounded-lg shrink-0">
                  <Users className="h-6 w-6 text-neon-blue" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Técnicos Especializados</h3>
                  <p className="text-sm text-muted-foreground">
                    Personal capacitado en procesos de pintura y corrección de superficies
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-2 bg-neon-blue/10 rounded-lg shrink-0">
                  <Award className="h-6 w-6 text-neon-blue" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Acabados Profesionales</h3>
                  <p className="text-sm text-muted-foreground">
                    Aplicamos materiales de alta calidad para acabados duraderos y estéticos
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-2 bg-neon-blue/10 rounded-lg shrink-0">
                  <Clock className="h-6 w-6 text-neon-blue" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Entrega Puntual</h3>
                  <p className="text-sm text-muted-foreground">
                    Cumplimos con los tiempos establecidos sin comprometer la calidad
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Highlighted Card */}
          <div className="relative">
            <Card className="bg-gradient-to-br from-card to-card/50 border-neon-blue/30 p-8 relative overflow-hidden">
              {/* Neon glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/5 to-transparent rounded-lg"></div>

              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Nuestra Misión
                </h3>
                <p className="text-muted-foreground mb-6">
                  Transformar cada vehículo mediante procesos de pintura precisos, detallados y personalizados que superen las expectativas del cliente.
                </p>

                <div className="space-y-4">
                  <div className="bg-background/50 rounded-lg p-4 border border-neon-blue/20">
                    <h4 className="font-semibold text-foreground mb-2">Visión Futurista</h4>
                    <p className="text-sm text-muted-foreground">
                      Ser el taller de pintura automotriz más innovador y confiable en el país
                    </p>
                  </div>

                  <div className="bg-background/50 rounded-lg p-4 border border-neon-blue/20">
                    <h4 className="font-semibold text-foreground mb-2">Valores</h4>
                    <p className="text-sm text-muted-foreground">
                      Detallismo, profesionalismo y atención personalizada en cada proyecto
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-4 right-4 w-20 h-20 bg-neon-blue/10 rounded-full blur-xl"></div>
              <div className="absolute bottom-4 left-4 w-16 h-16 bg-neon-blue/5 rounded-full blur-lg"></div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
