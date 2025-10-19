import { Calculator, Building2, Scale, TrendingUp, Database, Users } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      icon: Calculator,
      title: 'Contables & Tributarios',
      description: 'Declaración de renta, IVA, retención en la fuente, y teneduría de libros contables.',
      color: 'text-primary',
    },
    {
      icon: Building2,
      title: 'Constitución Empresarial',
      description: 'Creación, transformación y disolución de empresas. Compraventa de establecimientos.',
      color: 'text-secondary',
    },
    {
      icon: Scale,
      title: 'Legal & Cumplimiento',
      description: 'Asesoría en derecho laboral y comercial. Contratos, liquidaciones y protección de marca.',
      color: 'text-accent',
    },
    {
      icon: TrendingUp,
      title: 'Consultoría Financiera',
      description: 'Evaluación de proyectos, consultoría personalizada y acompañamiento en créditos.',
      color: 'text-primary',
    },
    {
      icon: Users,
      title: 'Entidades Públicas',
      description: 'Presupuestos anuales, MFMP, SUIFP, SPI, y proyectos bajo metodología MGA.',
      color: 'text-secondary',
    },
    {
      icon: Database,
      title: 'Business Intelligence',
      description: 'Power BI, R/Python, analítica predictiva y automatización de reportes.',
      color: 'text-accent',
    },
  ];

  return (
    <section className="py-20 bg-neutral">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Soluciones <span className="text-gradient">Integrales</span> para tu
            Negocio
          </h2>
          <p className="text-lg text-muted-foreground">
            Combinamos experiencia profesional con tecnología de vanguardia para
            ofrecer servicios que impulsan el crecimiento de tu organización.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => (
            <Card
              key={index}
              className="hover-lift bg-card border-border/50 shadow-subtle"
            >
              <CardHeader>
                <service.icon className={`w-12 h-12 mb-4 ${service.color}`} />
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg" className="bg-gradient-primary hover:opacity-90">
            <Link to="/servicios">
              Ver Todos los Servicios
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
