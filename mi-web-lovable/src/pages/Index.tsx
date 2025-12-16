import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Users, Palette } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";

const features = [
  {
    icon: Sparkles,
    title: "Estrategia Creativa",
    description: "Creamos narrativas atractivas que conectan con tu audiencia.",
  },
  {
    icon: Palette,
    title: "Diseño Visual",
    description: "Diseños hermosos y funcionales que dan vida a tu marca.",
  },
  {
    icon: Users,
    title: "Creación de Contenido",
    description: "Contenido atractivo que conecta y convierte.",
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
              Agencia de Contenido Digital
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground leading-tight mb-6 animate-fade-up delay-100">
              Creamos experiencias digitales que{" "}
              <span className="text-primary">inspiran</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 animate-fade-up delay-200">
              Un pequeño estudio con grandes ideas. Ayudamos a las marcas a contar sus historias a través de diseño pensado, contenido atractivo y creatividad estratégica.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up delay-300">
              <Button asChild size="lg" className="hover-lift">
                <Link to="/portfolio">
                  Ver Nuestro Trabajo
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
              Lo Que Hacemos
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Combinamos creatividad y estrategia para ayudar a tu marca a destacar.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
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
              Colaboremos y creemos algo increíble juntos.
            </p>
            <Button asChild size="lg" className="hover-lift">
              <Link to="/contact">
                Iniciar una Conversación
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
