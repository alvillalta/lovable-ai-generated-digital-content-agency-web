import Layout from "@/components/Layout";
import ProjectCard from "@/components/ProjectCard";

const projects = [
  {
    title: "Revista mensual - Vivir",
    category: "Diseño editorial",
    image: "././images/Revista Vivir.webp",
    href: "https://heyzine.com/flip-book/7695ad0002.html"
  },
  {
    title: "Dirección audiovisual - Gobierno de Aragón",
    category: "Documental",
    image: "././images/Crónicas de un pueblo Gobierno de Aragón.webp", 
    href: "https://www.youtube.com/watch?v=LZKkKzXd-5U"
  },
  {
    title: "Producción - Premios Félix de Azara",
    category: "Eventos",
    image: "././images/XXV Gala de los Premios Félix de Azara.webp",
    href: "https://www.youtube.com/watch?v=1PhwjbMRRbU"
  },
  {
    title: "Emisión TV - Balnearios de Aragón",
    category: "Spot",
    image: "././images/Spot Balnearios de Aragón.webp",
    href: "https://www.youtube.com/watch?v=R2W9awZfI5s"
  },
  {
    title: "Estrategia de contenido - Zoológico Iris",
    category: "Redes sociales",
    image: "././images/Reel Zoológico Iris.webp",
    href: "https://www.instagram.com/huescatalento/reel/C1sJCy4Ix7Z/"
  },
  {
    title: "Edición de vídeo - Comarca de Monegros",
    category: "Vídeo",
    image: "././images/La línea de la vida Comarca de Monegros.webp",
    href: "https://www.youtube.com/watch?v=SNoUt4bUFWY"
  }
];

const Portfolio = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-gradient-to-b from-accent/30 to-background">
        <div className="container-custom">
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4 animate-fade-up">
              Nuestros Trabajos
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 animate-fade-up">
              Portfolio
            </h1>
            <p className="text-lg text-muted-foreground animate-fade-up">
              Una selección de proyectos de los que estamos orgullosos. Cada uno cuenta una historia única.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                category={project.category}
                image={project.image}
                index={index}
                href={project.href}
              />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Portfolio;
