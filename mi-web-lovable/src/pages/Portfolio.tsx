import Layout from "@/components/Layout";
import ProjectCard from "@/components/ProjectCard";

const projects = [
  {
    title: "Identidad de Marca para Bloom",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=450&fit=crop",
  },
  {
    title: "Campaña Social - Fresh Co",
    category: "Redes Sociales",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=450&fit=crop",
  },
  {
    title: "Rediseño Web - Artisan",
    category: "Diseño Web",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=450&fit=crop",
  },
  {
    title: "Fotografía de Producto - Luma",
    category: "Fotografía",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=450&fit=crop",
  },
  {
    title: "Estrategia de Contenido - Verde",
    category: "Estrategia",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=450&fit=crop",
  },
  {
    title: "Producción de Video - Pulse",
    category: "Video",
    image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=600&h=450&fit=crop",
  },
];

const Portfolio = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-gradient-to-b from-accent/30 to-background">
        <div className="container-custom">
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4 animate-fade-up">
              Nuestro Trabajo
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 animate-fade-up delay-100">
              Portafolio
            </h1>
            <p className="text-lg text-muted-foreground animate-fade-up delay-200">
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
              />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Portfolio;
