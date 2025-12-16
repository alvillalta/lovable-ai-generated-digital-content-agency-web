import { Heart, Target, Zap } from "lucide-react";
import Layout from "@/components/Layout";

const values = [
  {
    icon: Heart,
    title: "Pasión",
    description: "Amamos lo que hacemos, y se nota en cada proyecto que entregamos.",
  },
  {
    icon: Target,
    title: "Propósito",
    description: "Cada decisión de diseño es intencional y está alineada con tus objetivos.",
  },
  {
    icon: Zap,
    title: "Innovación",
    description: "Nos mantenemos a la vanguardia para mantener tu marca fresca y relevante.",
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-gradient-to-b from-accent/30 to-background">
        <div className="container-custom">
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4 animate-fade-up">
              Nosotros
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 animate-fade-up delay-100">
              Pequeño estudio, gran impacto
            </h1>
            <p className="text-lg text-muted-foreground animate-fade-up delay-200">
              Somos un equipo unido de creativos, estrategas y narradores apasionados por ayudar a las marcas a conectar con sus audiencias de manera significativa.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-foreground">Nuestra Historia</h2>
              <p className="text-muted-foreground">
                Fundados con una simple creencia: que el gran diseño debe ser accesible para todos. Comenzamos como un pequeño equipo trabajando desde un diminuto estudio, impulsados por café y creatividad.
              </p>
              <p className="text-muted-foreground">
                Hoy hemos crecido, pero mantenemos ese mismo enfoque íntimo y colaborativo. Cada cliente se siente como un socio, y cada proyecto recibe toda nuestra atención y cuidado.
              </p>
              <p className="text-muted-foreground">
                Creemos en la calidad sobre la cantidad, las relaciones sobre las transacciones, y crear trabajo del que estamos genuinamente orgullosos.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-accent overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-6xl">✨</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-secondary/50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Nuestros Valores</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Estos principios guían todo lo que hacemos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="text-center p-8 rounded-xl bg-card border border-border animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
