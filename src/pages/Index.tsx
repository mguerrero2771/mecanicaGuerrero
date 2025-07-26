import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import WhyChooseUs from '@/components/WhyChooseUs';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import SoundToggle from '@/components/SoundToggle';
import { useScrollSound } from '@/hooks/useScrollSound';
import audioFile from '@/assets/audio/audio.mp3';

const Index = () => {
  // Hook para el sonido de motor al hacer scroll
  const { isEnabled, toggleSound } = useScrollSound({
    audioUrl: audioFile,
    throttleMs: 200, // Esperar 200ms entre sonidos
    volume: 0.4, // Volumen al 40%
    minScrollDelta: 80 // Mínimo scroll para activar sonido
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyChooseUs />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
      <SoundToggle isEnabled={isEnabled} onToggle={toggleSound} />
    </div>
  );
};

export default Index;
