import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import heroBackground from '@/assets/hero-background.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-hero z-10" />
        <img
          src={heroBackground}
          alt="Business Analytics"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-20 py-32">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          <div className="inline-flex items-center space-x-2 bg-accent/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-accent/30">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-primary-foreground">
              Potenciado con Inteligencia Artificial
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            Transformamos procesos complejos en{' '}
            <span className="text-accent">soluciones estratégicas</span>
          </h1>

          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Centro de soluciones empresariales que combina experiencia en lo
            contable, tributario, legal y financiero con el poder de la
            inteligencia artificial.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-glow text-base font-semibold px-8"
            >
              <Link to="/contacto">
                Agenda tu Consulta Gratuita
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-primary-foreground/10 backdrop-blur-sm border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20 text-base font-semibold px-8"
            >
              <Link to="/servicios">Nuestros Servicios</Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">
                +500
              </div>
              <div className="text-sm text-primary-foreground/80">
                Clientes Satisfechos
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">
                +10
              </div>
              <div className="text-sm text-primary-foreground/80">
                Años de Experiencia
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">
                100%
              </div>
              <div className="text-sm text-primary-foreground/80">
                Cumplimiento Legal
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
