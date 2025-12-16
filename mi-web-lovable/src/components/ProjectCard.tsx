interface ProjectCardProps {
  title: string;
  category: string;
  image: string;
  index: number;
}

const ProjectCard = ({ title, category, image, index }: ProjectCardProps) => {
  return (
    <div 
      className="group cursor-pointer animate-fade-up"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="relative overflow-hidden rounded-xl bg-muted aspect-[4/3]">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover image-hover"
        />
        <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-300" />
      </div>
      <div className="mt-4 space-y-1">
        <p className="text-xs font-medium text-primary uppercase tracking-wider">
          {category}
        </p>
        <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
          {title}
        </h3>
      </div>
    </div>
  );
};

export default ProjectCard;
