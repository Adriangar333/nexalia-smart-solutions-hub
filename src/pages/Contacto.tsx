import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Contact from '@/components/Contact';

const Contacto = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Hablemos de tu <span className="text-accent">Proyecto</span>
            </h1>
            <p className="text-lg md:text-xl opacity-90">
              Estamos listos para escucharte y ayudarte a alcanzar tus objetivos
              empresariales.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Component */}
      <Contact />

      <Footer />
    </div>
  );
};

export default Contacto;
