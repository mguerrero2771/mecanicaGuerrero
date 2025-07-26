import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Wrench } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-dark-bg border-b border-neon-blue/30 backdrop-blur-sm">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="p-2 bg-neon-blue/10 rounded-lg">
              <Wrench className="h-6 w-6 text-neon-blue" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-foreground">Mecánicas</h1>
              <p className="text-xs text-neon-blue font-semibold">AUTOMOTRIZ GUERRERO</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('inicio')}
              className="text-foreground hover:text-neon-blue transition-colors duration-300"
            >
              Inicio
            </button>
            <button 
              onClick={() => scrollToSection('nosotros')}
              className="text-foreground hover:text-neon-blue transition-colors duration-300"
            >
              Nosotros
            </button>
            <button 
              onClick={() => scrollToSection('servicios')}
              className="text-foreground hover:text-neon-blue transition-colors duration-300"
            >
              Servicios
            </button>
            <button 
              onClick={() => scrollToSection('contacto')}
              className="text-foreground hover:text-neon-blue transition-colors duration-300"
            >
              Contacto
            </button>
            <Button 
              variant="neon" 
              size="sm"
              onClick={() => window.open('https://wa.me/0998152358', '_blank')}
            >
              WhatsApp
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground hover:text-neon-blue transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-dark-bg border-b border-neon-blue/30 backdrop-blur-sm">
            <nav className="px-4 py-4 space-y-3">
              <button 
                onClick={() => scrollToSection('inicio')}
                className="block w-full text-left text-foreground hover:text-neon-blue transition-colors duration-300 py-2"
              >
                Inicio
              </button>
              <button 
                onClick={() => scrollToSection('nosotros')}
                className="block w-full text-left text-foreground hover:text-neon-blue transition-colors duration-300 py-2"
              >
                Nosotros
              </button>
              <button 
                onClick={() => scrollToSection('servicios')}
                className="block w-full text-left text-foreground hover:text-neon-blue transition-colors duration-300 py-2"
              >
                Servicios
              </button>
              <button 
                onClick={() => scrollToSection('contacto')}
                className="block w-full text-left text-foreground hover:text-neon-blue transition-colors duration-300 py-2"
              >
                Contacto
              </button>
              <Button 
                variant="neon" 
                size="sm" 
                className="w-full mt-3"
                onClick={() => {
                  window.open('https://wa.me/0998152358', '_blank');
                  setIsMenuOpen(false);
                }}
              >
                WhatsApp
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;