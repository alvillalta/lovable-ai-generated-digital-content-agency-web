import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Rocket, Megaphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";

const features = [
  {
    icon: Rocket,
    title: "Impulso estratégico",
    description: "Buscamos narrativas atractivas que conectan con tu audiencia y las tendencias de la actualidad.",
  },
  {
    icon: Sparkles,
    title: "Creación de contenidos",
    description: "Construimos los formatos más efectivos a la hora de transmitir tu mensaje, desde reels hasta grandes impresiones.",
  },
  {
    icon: Megaphone,
    title: "Campañas publicitarias",
    description: "Optimizamos la inversión publicitaria en redes sociales y medios tradicionales para convertir nuevos clientes.",
  },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-accent/30 to-background">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4 animate-fade-up">
              Agencia de Contenidos Digitales
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground leading-tight mb-6 animate-fade-up">
              Inspirando la Comunicación {" "}
              <span className="text-primary">Global y Local</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 animate-fade-up">
              Conectamos a empresas e instituciones con sus audiencias a través del impulso estratégico, creación de contenidos y campañas publicitarias.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up">
              <Button asChild size="lg" className="hover-lift">
                <Link to="/portfolio">
                  Mira nuestros trabajos
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="hover-lift">
                <Link to="/contact">Contáctanos</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              #ParaTi
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Definimos una hoja de ruta a medida para ayudarte a destacar.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300 animate-fade-up"
              >
                <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-secondary/50">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              ¿Listo para comenzar tu proyecto?
            </h2>
            <p className="text-muted-foreground mb-8">
              Somos todo oídos.
            </p>
            <Button asChild size="lg" className="hover-lift">
              <Link to="/contact">
                Habla con nosotros
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
