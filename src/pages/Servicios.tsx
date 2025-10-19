import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import {
  Calculator,
  Building2,
  Scale,
  TrendingUp,
  Users,
  Database,
  FileText,
  Briefcase,
} from 'lucide-react';
import servicesBackground from '@/assets/services-background.jpg';

const Servicios = () => {
  const serviceCategories = [
    {
      icon: Calculator,
      title: 'Servicios Contables & Tributarios',
      items: [
        'Declaración de renta para persona natural',
        'Declaraciones de impuestos: IVA, Retención en la Fuente, Impuesto al Consumo',
        'Declaración de Industria y Comercio',
        'Puesta al día de impuestos y presentación de declaraciones extemporáneas',
        'Teneduría de libros contables y registros financieros',
      ],
    },
    {
      icon: Building2,
      title: 'Constitución y Gestión Empresarial',
      items: [
        'Creación de empresas: S.A., S.A.S., LTDA., Comandita y Empresa Unipersonal',
        'Transformación y disolución de sociedades',
        'Compraventa de establecimientos de comercio',
        'Elaboración de manual interno de trabajo',
      ],
    },
    {
      icon: Scale,
      title: 'Registro y Cumplimiento Legal',
      items: [
        'Trámites de RUT: inscripción por primera vez y actualizaciones',
        'Implementación y soporte de facturación electrónica',
        'Asesoría en derecho laboral: contratos, liquidaciones, reglamentos internos',
        'Asesoría en derecho comercial: contratos, protección de marca y gestión mercantil',
      ],
    },
    {
      icon: TrendingUp,
      title: 'Consultoría Financiera y Proyectos',
      items: [
        'Evaluación de proyectos certificados por economista',
        'Consultoría financiera personalizada',
        'Acompañamiento en solicitudes de crédito',
        'Presentación y gestión de convocatorias a proyectos',
      ],
    },
    {
      icon: Users,
      title: 'Servicios Especializados para Entidades Públicas',
      items: [
        'Elaboración de presupuestos anuales',
        'Marco Fiscal de Mediano Plazo (MFMP)',
        'Registro y control de movimientos presupuestales',
        'Proyectos bajo metodología MGA',
        'SUIFP (Sistema Unificado de Inversiones y Finanzas Públicas)',
        'SPI (Sistema de Proyectos de Inversión)',
      ],
    },
    {
      icon: FileText,
      title: 'Manejo de SECOP y Contratación Estatal',
      items: [
        'Inscripción y configuración de perfil en SECOP I y II',
        'Asesoría en procesos de licitación y contratación directa',
        'Elaboración de documentos requeridos',
        'Actualización de página y seguimiento a convocatorias',
      ],
    },
    {
      icon: Database,
      title: 'Análisis de Datos y Business Intelligence',
      items: [
        'Tableros de control en Power BI',
        'Modelamiento y análisis de datos con R y Python',
        'Limpieza, transformación y visualización de información',
        'Automatización de reportes y analítica predictiva',
        'Diseño de indicadores de gestión (KPI)',
      ],
    },
    {
      icon: Briefcase,
      title: 'Asesoría en Gobierno Corporativo',
      items: [
        'Implementación de buenas prácticas',
        'Acompañamiento en estructuras organizacionales',
        'Políticas de transparencia, ética y cumplimiento',
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-hero z-10" />
          <img
            src={servicesBackground}
            alt="Services"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Nuestros <span className="text-accent">Servicios</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90">
              Soluciones integrales que combinan experiencia profesional con
              tecnología de vanguardia para impulsar tu negocio.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 max-w-6xl mx-auto">
            {serviceCategories.map((category, index) => (
              <div
                key={index}
                className="bg-card p-8 rounded-lg border border-border shadow-subtle hover-lift"
              >
                <div className="flex items-start space-x-4 mb-6">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <category.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold">
                    {category.title}
                  </h2>
                </div>
                <ul className="space-y-3 ml-16">
                  {category.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="flex items-start space-x-3 text-muted-foreground"
                    >
                      <span className="text-accent mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 bg-gradient-primary p-8 md:p-12 rounded-lg text-center text-primary-foreground max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              ¿Listo para Transformar tu Negocio?
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Agenda una consulta gratuita y descubre cómo podemos ayudarte
            </p>
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-glow"
            >
              <Link to="/contacto">Contactar Ahora</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Servicios;
