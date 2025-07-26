import { Card } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';
import entrega from '@/assets/services/entrega.jpeg';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Carlos Mendoza",
      review: "Excelente trabajo de pintura completa. Mi auto quedó como recién salido de la agencia. Los acabados son perfectos y duraderos.",
      rating: 5,
      service: "Pintura Completa"
    },
    {
      name: "María García",
      review: "La enderezada de mi carrocería fue impecable. Eliminaron todas las abolladuras sin afectar la pintura original. Muy profesionales.",
      rating: 5,
      service: "Enderezada de Carrocería"
    },
    {
      name: "Luis Rodriguez",
      review: "El retoque de pintura fue perfecto, igualaron exactamente el color original. No se nota dónde estaba el rayón. Trabajo de calidad.",
      rating: 5,
      service: "Retoque de Pintura"
    }
  ];

  return (
    <section className="py-20 bg-secondary/10">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Lo que dicen nuestros <span className="text-neon-blue">clientes</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            La calidad de nuestros trabajos de pintura y enderezada habla por sí sola. 
            Conoce las experiencias de quienes han restaurado la belleza de sus vehículos con nosotros.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="bg-card border-border hover:border-neon-blue/50 transition-all duration-300 p-6 relative overflow-hidden group hover:shadow-[0_0_30px_rgba(0,207,255,0.1)]"
            >
              {/* Quote icon */}
              <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote className="h-8 w-8 text-neon-blue" />
              </div>

              <div className="space-y-4">
                {/* Rating */}
                <div className="flex items-center space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-neon-blue text-neon-blue" />
                  ))}
                </div>

                {/* Review */}
                <p className="text-muted-foreground leading-relaxed">
                  "{testimonial.review}"
                </p>

                {/* Service */}
                <div className="inline-block">
                  <span className="text-xs bg-neon-blue/10 text-neon-blue px-3 py-1 rounded-full">
                    {testimonial.service}
                  </span>
                </div>

                {/* Customer info */}
                <div className="pt-4 border-t border-border">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-neon-blue/20 to-neon-blue/5 rounded-full flex items-center justify-center">
                      <span className="text-neon-blue font-semibold text-sm">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">
                        {testimonial.name}
                      </h4>
                      <p className="text-xs text-muted-foreground">
                        Cliente verificado
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA with Image */}
        <div className="mt-16">
          <div className="bg-card/50 rounded-2xl p-8 border border-neon-blue/20">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Left side - Image */}
              <div className="order-2 lg:order-1">
                <div className="relative">
                  <img 
                    src={entrega} 
                    alt="Cliente satisfecho recibiendo su vehículo restaurado"
                    className="w-full h-64 lg:h-80 object-cover rounded-xl border border-neon-blue/30"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-xl"></div>
                </div>
              </div>
              
              {/* Right side - CTA Content */}
              <div className="order-1 lg:order-2 text-center lg:text-left">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  ¿Quieres ser nuestro próximo 
                  <span className="text-neon-blue"> cliente satisfecho</span>?
                </h3>
                <p className="text-muted-foreground mb-6 text-lg">
                  Únete a cientos de clientes que han restaurado la belleza de sus vehículos 
                  con nuestros servicios profesionales de pintura y enderezada.
                </p>
                <div className="space-y-4">
                  <button 
                    className="bg-neon-blue hover:bg-hover-blue text-dark-bg font-semibold px-8 py-3 rounded-lg transition-colors text-lg"
                    onClick={() => window.open('https://wa.me/+593998152358', '_blank')}
                  >
                    Solicita tu cotización gratuita →
                  </button>
                  <p className="text-sm text-muted-foreground">
                    Respuesta inmediata • Sin compromiso • Evaluación profesional
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;