import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Filter } from "lucide-react";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import { portfolioProjects, categories, Project } from "@/data/portfolio";

const ProjectsGrid = () => {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredProjects = useMemo(() => {
    return portfolioProjects.filter(project => {
      const matchesCategory = selectedCategory === "Todos" || project.category === selectedCategory;
      const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           project.category.toLowerCase().includes(searchTerm.toLowerCase());
      
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchTerm]);

  const handleViewProject = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <section className="py-20 px-4 relative overflow-hidden" id="projetos">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1F0028] via-[#0A0010] to-[#1F0028]" />
      
      {/* Focused light effects around title area */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-[#2E003D]/60 via-[#1F0028]/40 to-transparent rounded-full blur-3xl" />
      <div className="absolute top-20 left-1/4 w-[600px] h-[300px] bg-gradient-to-br from-[#2E003D]/35 via-transparent to-transparent rounded-full blur-3xl" />
      <div className="absolute top-20 right-1/4 w-[600px] h-[300px] bg-gradient-to-bl from-[#2E003D]/35 via-transparent to-transparent rounded-full blur-3xl" />
      
      {/* Side light effects */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-gradient-to-r from-[#1F0028]/50 via-[#2E003D]/25 to-transparent rounded-full blur-3xl" />
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-gradient-to-l from-[#1F0028]/50 via-[#2E003D]/25 to-transparent rounded-full blur-3xl" />
      
      {/* Bottom accent lights */}
      <div className="absolute bottom-0 left-1/3 w-[500px] h-[300px] bg-gradient-to-t from-[#2E003D]/40 via-[#1F0028]/20 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/3 w-[500px] h-[300px] bg-gradient-to-t from-[#2E003D]/40 via-[#1F0028]/20 to-transparent rounded-full blur-3xl" />
      
      {/* Deep shadow areas for contrast */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[900px] h-[200px] bg-gradient-to-r from-transparent via-[#050008]/70 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[200px] bg-gradient-to-tr from-[#050008]/50 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[200px] bg-gradient-to-tl from-[#050008]/50 to-transparent rounded-full blur-3xl" />
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Nossos <span className="gradient-text">Projetos</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Conheça alguns dos projetos que desenvolvemos com inteligência artificial e design inovador.
          </p>
        </div>

        {/* Filters */}
        <div className="mb-12 space-y-6">
          {/* Search */}
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Buscar projetos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-card/50 backdrop-blur-sm border-primary/20 focus:border-primary/50 rounded-full"
            />
          </div>

          {/* Category filters */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className={`transition-all duration-300 rounded-full ${
                  selectedCategory === category 
                    ? "bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 text-white hover:from-orange-600 hover:via-red-600 hover:to-pink-600 shadow-lg shadow-pink-500/25" 
                    : "border-primary/30 text-primary hover:bg-primary/10 hover:border-primary/50"
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Results info */}
        <div className="mb-8 text-center">
          <p className="text-muted-foreground">
            {filteredProjects.length === 0 ? (
              "Nenhum projeto encontrado"
            ) : (
              `${filteredProjects.length} ${filteredProjects.length === 1 ? 'projeto encontrado' : 'projetos encontrados'}`
            )}
          </p>
        </div>

        {/* Projects grid */}
        {filteredProjects.length > 0 ? (
          <div className="masonry-grid">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onView={handleViewProject}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <Filter className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Nenhum projeto encontrado</h3>
            <p className="text-muted-foreground mb-6">
              Tente ajustar os filtros ou buscar por outros termos.
            </p>
            <Button
              variant="outline"
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("Todos");
              }}
            >
              Limpar Filtros
            </Button>
          </div>
        )}

        {/* Project Modal */}
        <ProjectModal
          project={selectedProject}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      </div>
    </section>
  );
};

export default ProjectsGrid;