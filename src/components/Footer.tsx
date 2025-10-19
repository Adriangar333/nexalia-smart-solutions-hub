import { Link } from 'react-router-dom';
import { Linkedin, Mail, Phone } from 'lucide-react';
import logo from '@/assets/nexalia_logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <img src={logo} alt="Nexalia" className="h-10 mb-4 brightness-0 invert" />
            <p className="text-sm text-primary-foreground/80">
              Centro de soluciones empresariales que combina experiencia profesional
              con inteligencia artificial.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-sm text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  to="/servicios"
                  className="text-sm text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  Servicios
                </Link>
              </li>
              <li>
                <Link
                  to="/nosotros"
                  className="text-sm text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  Nosotros
                </Link>
              </li>
              <li>
                <Link
                  to="/contacto"
                  className="text-sm text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Servicios</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>Contables & Tributarios</li>
              <li>Constitución Empresarial</li>
              <li>Legal & Cumplimiento</li>
              <li>Business Intelligence</li>
              <li>Entidades Públicas</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 text-sm text-primary-foreground/80">
                <Mail className="w-4 h-4" />
                <span>contacto@nexalia.com.co</span>
              </li>
              <li className="flex items-center space-x-2 text-sm text-primary-foreground/80">
                <Phone className="w-4 h-4" />
                <span>+57 (4) 123 4567</span>
              </li>
              <li className="flex items-center space-x-2 text-sm text-primary-foreground/80">
                <Linkedin className="w-4 h-4" />
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-primary-foreground/70">
              © {currentYear} Nexalia Business Center. Todos los derechos
              reservados.
            </p>
            <div className="flex space-x-6 text-sm text-primary-foreground/70">
              <a href="#" className="hover:text-accent transition-colors">
                Política de Privacidad
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                Términos de Servicio
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
