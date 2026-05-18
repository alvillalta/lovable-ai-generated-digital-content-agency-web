import { Link } from "react-router-dom";
import { Instagram, Linkedin, Mail } from "lucide-react";

const socialLinks = [
  { icon: Instagram, href: "https://www.instagram.com/huescatalento/", label: "Instagram", target: "_blank" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn", target: "_blank" },
  { icon: Mail, href: "mailto:joseantonio@134comunicacion.com", label: "Correo" },
];

const Footer = () => {
  return (
    <footer className="bg-secondary/50 border-t border-border">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">

          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="text-xl font-bold text-foreground">
              134 Comunicación
            </Link>
            <p className="text-muted-foreground text-sm max-w-xs">
              Una agencia de soluciones de marketing y comunicación para marcas que quieren crecer.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider">
              Enlaces Rápidos
            </h4>
            <nav className="flex flex-col gap-2">
              <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Inicio
              </Link>
              <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Nosotros
              </Link>
              <Link to="/portfolio" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Portfolio
              </Link>
              <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Contacto
              </Link>
            </nav>
          </div>

          {/* Legal Texts */}
          <div className="space-y-4 text-sm">
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider">
              Textos legales
            </h4>
            <nav className="flex flex-col gap-2">
              <Link to="/politica-privacidad" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Política de privacidad
              </Link>
              <Link to="/aviso-legal" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Aviso legal
              </Link>
              <Link to="/politica-cookies" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Política de cookies
              </Link>
            </nav>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider">
              Síguenos
            </h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.target ? social.target : null}
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover-lift"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} | 134 Comunicación | Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
