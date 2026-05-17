import { Mail, MapPin, Phone } from "lucide-react";
import Layout from "@/components/Layout";

const contactInfo = [
  {
    icon: Mail,
    label: "Correo",
    value: "joseantonio@134comunicacion.com",
    href: "mailto:joseantonio@134comunicacion.com",
  },
  {
    icon: Phone,
    label: "Teléfono",
    value: "+34 609 726 905",
    href: "https://wa.me/34609726905",
    target: "_blank"
  },
  {
    icon: MapPin,
    label: "Ubicación",
    value: "Barbastro (Huesca)",
    href: null
  },
];

const Contact = () => {

  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-gradient-to-b from-accent/30 to-background">
        <div className="container-custom">
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4 animate-fade-up">
              Contáctanos
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 animate-fade-up">
              Trabajemos juntos
            </h1>
            <p className="text-lg text-muted-foreground animate-fade-up">
              ¿Tienes un proyecto en mente? Nos encantaría saber de él.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <div className="animate-fade-up">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Información de contacto
              </h2>
              <div className="space-y-6">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          target={item.target ? item.target : null}
                          className="text-foreground font-medium hover:text-primary transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-foreground font-medium">
                          {item.value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-6 rounded-xl bg-secondary/50 border border-border animate-fade-up">
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Horario de atención
              </h3>
              <p className="text-muted-foreground text-sm">
                Lunes - Viernes: 9:00 - 14:00
                <br />
                Para consultas fuera de horario, escríbenos.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
