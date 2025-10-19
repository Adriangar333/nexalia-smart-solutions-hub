import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Heart, Cpu, Shield, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Nosotros = () => {
  const values = [
    {
      icon: Heart,
      title: 'Cercanía',
      description:
        'Detrás de cada dato y cada proyecto hay personas, sueños y propósitos. Nos tomamos el tiempo para conocer las necesidades únicas de cada cliente y construir relaciones duraderas basadas en la confianza y el respeto mutuo.',
    },
    {
      icon: Cpu,
      title: 'Tecnología + IA',
      description:
        'Optimizamos tiempos y potenciamos la toma de decisiones inteligentes mediante el uso de herramientas de última generación. La inteligencia artificial no reemplaza la experiencia humana, la amplifica para obtener mejores resultados.',
    },
    {
      icon: Shield,
      title: 'Solidez',
      description:
        'Garantizamos resultados respaldados por conocimiento, experiencia y análisis de datos riguroso. Nuestro equipo de profesionales certificados asegura el cumplimiento normativo y la calidad en cada proyecto que emprendemos.',
    },
    {
      icon: TrendingUp,
      title: 'Confianza',
      description:
        'Somos el aliado estratégico que proyecta tu presente hacia un futuro sostenible. Trabajamos con transparencia, ética profesional y compromiso para que puedas enfocarte en hacer crecer tu negocio con tranquilidad.',
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Somos <span className="text-accent">Nexalia</span>
            </h1>
            <p className="text-lg md:text-xl opacity-90">
              Un centro de soluciones empresariales que transforma la gestión de
              recursos mediante la combinación de experiencia profesional e
              inteligencia artificial.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div className="bg-card p-8 rounded-lg border border-border shadow-subtle">
                <h2 className="text-3xl font-bold mb-4 text-gradient">
                  ¿Qué nos mueve?
                </h2>
                <p className="text-lg text-muted-foreground">
                  Impulsar el <strong>crecimiento</strong> a través de la{' '}
                  <strong>innovación</strong>, haciendo que procesos complejos se
                  conviertan en soluciones simples, confiables y estratégicas.
                </p>
              </div>

              <div className="bg-card p-8 rounded-lg border border-border shadow-subtle">
                <h2 className="text-3xl font-bold mb-4 text-gradient-accent">
                  Nuestra Esencia
                </h2>
                <p className="text-lg text-muted-foreground">
                  En Nexalia creemos que los números hablan y la tecnología
                  potencia, pero son las <strong>decisiones inteligentes</strong>{' '}
                  las que realmente transforman.
                </p>
              </div>
            </div>

            <div className="bg-neutral p-8 rounded-lg">
              <h2 className="text-3xl font-bold mb-6 text-center">
                ¿Quiénes Somos?
              </h2>
              <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto">
                Somos un equipo multidisciplinario de contadores, abogados,
                economistas y especialistas en tecnología, unidos por el propósito
                común de ofrecer soluciones empresariales que marquen la
                diferencia. Más que servicios, ofrecemos{' '}
                <strong>estrategias potenciadas por la IA</strong> para que cada
                organización avance con visión y seguridad.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-neutral">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              ¿Cómo lo <span className="text-gradient">hacemos</span>?
            </h2>
            <p className="text-lg text-muted-foreground">
              Nuestros valores son la base de cada decisión que tomamos y cada
              proyecto que emprendemos.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-card p-8 rounded-lg border border-border shadow-subtle hover-lift"
              >
                <div className="flex items-start space-x-4 mb-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold">{value.title}</h3>
                </div>
                <p className="text-muted-foreground ml-16">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-primary p-8 md:p-12 rounded-lg text-center text-primary-foreground max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Construyamos el Futuro Juntos
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Descubre cómo Nexalia puede ser tu aliado estratégico en el
              crecimiento empresarial
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-glow"
              >
                <Link to="/contacto">Agendar Consulta</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-primary-foreground/10 backdrop-blur-sm border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20"
              >
                <Link to="/servicios">Ver Servicios</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Nosotros;
