import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Por favor completa todos los campos requeridos');
      return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error('Por favor ingresa un email válido');
      return;
    }

    // Success message
    toast.success('¡Mensaje enviado! Nos pondremos en contacto pronto.');
    
    // Reset form
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section className="py-20 bg-neutral">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Conversemos sobre tu{' '}
            <span className="text-gradient">Proyecto</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Agenda una consulta gratuita y descubre cómo podemos ayudarte a
            alcanzar tus objetivos empresariales.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-card p-8 rounded-lg shadow-medium">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name">Nombre Completo *</Label>
                <Input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder="Tu nombre"
                  className="mt-2"
                  required
                />
              </div>

              <div>
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="tu@email.com"
                  className="mt-2"
                  required
                />
              </div>

              <div>
                <Label htmlFor="phone">Teléfono</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  placeholder="+57 300 123 4567"
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="message">Mensaje *</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Cuéntanos cómo podemos ayudarte..."
                  className="mt-2 min-h-32"
                  required
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-gradient-primary hover:opacity-90"
              >
                Enviar Mensaje
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-card p-6 rounded-lg shadow-subtle">
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Email</h3>
                  <p className="text-muted-foreground">
                    contacto@nexalia.com.co
                  </p>
                  <p className="text-muted-foreground">info@nexalia.com.co</p>
                </div>
              </div>
            </div>

            <div className="bg-card p-6 rounded-lg shadow-subtle">
              <div className="flex items-start space-x-4">
                <div className="bg-secondary/10 p-3 rounded-lg">
                  <Phone className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Teléfono</h3>
                  <p className="text-muted-foreground">+57 (4) 123 4567</p>
                  <p className="text-muted-foreground">+57 300 123 4567</p>
                </div>
              </div>
            </div>

            <div className="bg-card p-6 rounded-lg shadow-subtle">
              <div className="flex items-start space-x-4">
                <div className="bg-accent/10 p-3 rounded-lg">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Ubicación</h3>
                  <p className="text-muted-foreground">
                    Medellín, Antioquia
                  </p>
                  <p className="text-muted-foreground">Colombia</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-primary p-6 rounded-lg text-primary-foreground">
              <h3 className="font-semibold text-xl mb-2">
                Horario de Atención
              </h3>
              <p className="text-sm opacity-90">Lunes a Viernes: 8:00 AM - 6:00 PM</p>
              <p className="text-sm opacity-90">Sábados: 9:00 AM - 1:00 PM</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
