import { Heart, Target, Handshake } from "lucide-react";
import Layout from "@/components/Layout";

const values = [
  {
    icon: Heart,
    title: "Pasión",
    description: "Nos encanta nuestro trabajo, y se nota en nuestra forma de hacer las cosas.",
  },
  {
    icon: Target,
    title: "Propósito",
    description: "Cada decisión ejecutada es intencional y está alineada con tus objetivos.",
  },
  {
    icon: Handshake,
    title: "Compromiso",
    description: "Nos debemos a la gente «de pueblo» que levanta la persiana cada día.",
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
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 animate-fade-up">
              +25 años a nuestras espaldas
            </h1>
            <p className="text-lg text-muted-foreground animate-fade-up">
              Somos un equipo multidisciplinar con una sólida experiencia en el mercado local de la provincia de Huesca. Conocemos el territorio y la mejor manera de llegar a las personas que lo habitan.
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
                134 Comunicación nació en 1997 con una idea clara: ir más allá de la publicidad convencional. Su fundador, José Antonio Almunia, se dio cuenta de que muchos anunciantes necesitaban algo más que aparecer en la prensa local para llegar a su público. Y así arrancó este proyecto, con el objetivo de dar respuesta a las demandas de comunicación del tejido empresarial de la zona.
              </p>
              <p className="text-muted-foreground">
                A lo largo del tiempo, la empresa ha ido creciendo hasta consolidarse como una agencia multidisciplinar especializada en el ámbito rural de la provincia de Huesca. Un hecho que, al echar la vista atrás, ha dado lugar a numerosas campañas e iniciativas de fuerte componente social, respaldadas por aquellas entidades que querían darse a conocer.
              </p>
              <p className="text-muted-foreground">
                Hoy, esa misma filosofía nos impulsa a seguir evolucionando. Apostamos por la transición digital y nuevas herramientas de inteligencia artificial para continuar vertebrando la influencia de nuestro entorno. 
              </p>
            </div>

              <div className="relative aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-accent overflow-hidden">

                  <img src="././images/José Antonio Almunia Portolés - Fundador.webp" alt="José Antonio Almunia Portolés - Fundador de 134 Comunicación" className="object-cover w-full h-full" />

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
