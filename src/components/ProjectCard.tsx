import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Eye, ExternalLink, Play } from "lucide-react";
import { Project } from "@/data/portfolio";

interface ProjectCardProps {
  project: Project;
  onView: (project: Project) => void;
}

const ProjectCard = ({ project, onView }: ProjectCardProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="masonry-item">
      <Card 
        className="project-card group cursor-pointer bg-card/80 backdrop-blur-sm border-2 border-primary/30 hover:border-primary/60 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-primary/20 h-full flex flex-col"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => onView(project)}
      >
        <CardContent className="p-0 h-full flex flex-col">
          {/* Image container */}
          <div className="relative overflow-hidden">
            <div className={`aspect-[4/3] bg-muted transition-all duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}>
              <img
                src={project.thumbnail}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                onLoad={() => setImageLoaded(true)}
                loading="lazy"
              />
            </div>
            
            {/* Loading skeleton */}
            {!imageLoaded && (
              <div className="absolute inset-0 bg-muted animate-pulse" />
            )}

            {/* Overlay */}
            <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />
            
            {/* Video indicator */}
            {project.type === 'video' && (
              <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm rounded-full p-2">
                <Play className="h-4 w-4 text-white" />
              </div>
            )}

            {/* Hover content */}
            <div className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <Button
                size="sm"
                className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 hover:from-orange-600 hover:via-red-600 hover:to-pink-600 text-white backdrop-blur-sm rounded-full shadow-lg shadow-pink-500/25 transition-all duration-300"
                onClick={(e) => {
                  e.stopPropagation();
                  onView(project);
                }}
              >
                <Eye className="h-4 w-4 mr-2" />
                Ver Projeto
              </Button>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Badge variant="secondary" className="text-xs font-medium bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 text-white border-0 shadow-sm">
                  {project.category}
                </Badge>
                <span className="text-xs text-muted-foreground">
                  {new Date(project.date).toLocaleDateString('pt-BR', { 
                    month: 'short', 
                    year: 'numeric' 
                  })}
                </span>
              </div>
              
              <h3 className="font-semibold text-lg leading-tight group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              
              <p className="text-sm text-muted-foreground line-clamp-2">
                {project.description}
              </p>
            </div>

            {/* Project stats */}
            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <span>
                {project.images.length} {project.images.length === 1 ? 'imagem' : 'imagens'}
                {project.videos && project.videos.length > 0 && ` • ${project.videos.length} ${project.videos.length === 1 ? 'vídeo' : 'vídeos'}`}
              </span>
              <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProjectCard;