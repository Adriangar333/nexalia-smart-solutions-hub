import { Heart, Cpu, Shield, TrendingUp } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: 'Cercanía',
      description:
        'Detrás de cada dato y proyecto hay personas, sueños y propósitos que valoramos.',
    },
    {
      icon: Cpu,
      title: 'Tecnología + IA',
      description:
        'Optimizamos tiempos y potenciamos la toma de decisiones inteligentes.',
    },
    {
      icon: Shield,
      title: 'Solidez',
      description:
        'Garantizamos resultados respaldados por conocimiento, experiencia y análisis.',
    },
    {
      icon: TrendingUp,
      title: 'Confianza',
      description:
        'Somos el aliado estratégico que proyecta tu presente hacia un futuro sostenible.',
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              ¿Quiénes <span className="text-gradient">Somos</span>?
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Somos un <strong>centro de soluciones empresariales</strong> que
              combina experiencia en lo contable, tributario, legal y financiero
              con el poder de la inteligencia artificial para transformar la
              manera en que personas, empresas y entidades públicas gestionan
              sus recursos.
            </p>
            <div className="bg-gradient-primary p-6 rounded-lg text-primary-foreground mb-8">
              <h3 className="text-2xl font-bold mb-3">¿Qué nos mueve?</h3>
              <p className="text-base">
                Impulsar el crecimiento a través de la innovación, haciendo que
                procesos complejos se conviertan en soluciones simples,
                confiables y estratégicas.
              </p>
            </div>
            <div className="bg-neutral p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Nuestra Esencia</h3>
              <p className="text-muted-foreground">
                En Nexalia creemos que los números hablan y la tecnología
                potencia, pero son las <strong>decisiones inteligentes</strong>{' '}
                las que realmente transforman. Por eso, más que servicios,
                ofrecemos estrategias potenciadas por la IA para que cada
                organización avance con visión y seguridad.
              </p>
            </div>
          </div>

          {/* Values */}
          <div>
            <h3 className="text-3xl font-bold mb-8 text-center">
              ¿Cómo lo <span className="text-gradient-accent">hacemos</span>?
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="bg-card p-6 rounded-lg border border-border shadow-subtle hover-lift"
                >
                  <value.icon className="w-10 h-10 text-accent mb-4" />
                  <h4 className="text-lg font-semibold mb-2">{value.title}</h4>
                  <p className="text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
