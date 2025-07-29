
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { X, ChevronLeft, ChevronRight, Play, Pause, MessageCircle, ExternalLink, Eye } from "lucide-react";
import { Project } from "@/data/portfolio";

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  if (!project) return null;

  const allMedia = [
    ...project.images.map(url => ({ type: 'image', url })),
    ...(project.videos?.map(url => ({ type: 'video', url })) || [])
  ];

  const currentMedia = allMedia[currentIndex];

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % allMedia.length);
    setIsVideoPlaying(false);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + allMedia.length) % allMedia.length);
    setIsVideoPlaying(false);
  };

  const handleWhatsAppContact = () => {
    const message = `Olá! Gostei do projeto "${project.title}" e gostaria de solicitar um orçamento similar.`;
    const whatsappUrl = `https://api.whatsapp.com/send?phone=555130823083&text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-7xl w-full h-[95vh] sm:h-[90vh] p-0 overflow-hidden m-2 sm:m-4">
        <div className="flex flex-col h-full">
          {/* Header - Mobile Optimized */}
          <DialogHeader className="p-3 sm:p-6 border-b shrink-0">
            <div className="flex items-start justify-between gap-3">
              <div className="space-y-1 sm:space-y-2 min-w-0 flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
                  <DialogTitle className="text-lg sm:text-2xl font-bold leading-tight">{project.title}</DialogTitle>
                  <Badge variant="secondary" className="self-start sm:self-auto text-xs">{project.category}</Badge>
                </div>
                <p className="text-sm sm:text-base text-muted-foreground line-clamp-2 sm:line-clamp-none">{project.description}</p>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={onClose}
                className="h-8 w-8 shrink-0"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </DialogHeader>

          {/* Content - Responsive Layout */}
          <div className="flex-1 flex flex-col lg:flex-row overflow-hidden">
            {/* Media Grid - Behance Style */}
            <div className="flex-1 bg-card/30 backdrop-blur-sm p-4 overflow-y-auto">
              {allMedia.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[200px]">
                  {allMedia.map((media, index) => {
                    // Create varied layouts like Behance
                    const isLarge = index % 5 === 0; // Every 5th item is large
                    const isWide = index % 7 === 0; // Every 7th item is wide
                    const isTall = index % 6 === 0; // Every 6th item is tall
                    
                    let gridClass = "";
                    if (isLarge && allMedia.length > 1) {
                      gridClass = "md:col-span-2 md:row-span-2";
                    } else if (isWide && allMedia.length > 2) {
                      gridClass = "md:col-span-2";
                    } else if (isTall && allMedia.length > 3) {
                      gridClass = "md:row-span-2";
                    }

                    return (
                      <div
                        key={index}
                        className={`relative group cursor-pointer overflow-hidden rounded-lg bg-black/10 hover:bg-black/20 transition-all duration-300 border border-border/50 hover:border-primary/30 ${gridClass}`}
                      >
                        {media.type === 'video' ? (
                          <div className="relative w-full h-full">
                            <video
                              src={media.url}
                              className="w-full h-full object-cover"
                              muted
                              onMouseEnter={(e) => e.currentTarget.play()}
                              onMouseLeave={(e) => e.currentTarget.pause()}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 group-hover:from-black/40 transition-all duration-300" />
                            <div className="absolute top-3 right-3 bg-black/70 text-white p-1.5 rounded-full backdrop-blur-sm">
                              <Play className="h-4 w-4" />
                            </div>
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              <div className="bg-white/90 text-black p-4 rounded-full">
                                <Play className="h-8 w-8" />
                              </div>
                            </div>
                          </div>
                        ) : (
                          <div className="relative w-full h-full">
                            <img
                              src={media.url}
                              alt={`${project.title} - imagem ${index + 1}`}
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent group-hover:from-black/20 transition-all duration-300" />
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              <div className="bg-white/90 text-black p-3 rounded-full backdrop-blur-sm">
                                <Eye className="h-6 w-6" />
                              </div>
                            </div>
                          </div>
                        )}
                        
                        {/* Media info overlay */}
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                          <div className="text-white">
                            <p className="text-sm font-medium mb-1">
                              {media.type === 'video' ? 'Vídeo' : 'Imagem'} {index + 1}
                            </p>
                            <p className="text-xs text-white/70">
                              {media.type === 'video' ? 'Clique para reproduzir' : 'Clique para visualizar'}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="h-full flex items-center justify-center">
                  <p className="text-muted-foreground">Nenhuma mídia disponível</p>
                </div>
              )}
            </div>

            {/* Sidebar - Becomes bottom section on mobile */}
            <div className="w-full lg:w-80 border-t lg:border-t-0 lg:border-l bg-card/50 p-3 sm:p-6 space-y-4 sm:space-y-6 overflow-y-auto">
              {/* Media summary */}
              <div className="space-y-3">
                <h4 className="font-semibold text-sm">Galeria ({allMedia.length} itens)</h4>
                <p className="text-xs text-muted-foreground">
                  Grid inspirado no Behance com layouts variados
                </p>
              </div>

              {/* Project info - Compact on mobile */}
              <div className="space-y-3 sm:space-y-4">
                <h4 className="font-semibold text-sm sm:text-base">Detalhes do Projeto</h4>
                <div className="grid grid-cols-2 lg:grid-cols-1 gap-2 text-xs sm:text-sm">
                  <div className="flex justify-between lg:justify-between">
                    <span className="text-muted-foreground">Data:</span>
                    <span className="text-right lg:text-left">{new Date(project.date).toLocaleDateString('pt-BR', { 
                      month: 'short', 
                      year: 'numeric' 
                    })}</span>
                  </div>
                  <div className="flex justify-between lg:justify-between">
                    <span className="text-muted-foreground">Categoria:</span>
                    <span className="text-right lg:text-left truncate">{project.category}</span>
                  </div>
                  <div className="flex justify-between lg:justify-between">
                    <span className="text-muted-foreground">Imagens:</span>
                    <span className="text-right lg:text-left">{project.images.length}</span>
                  </div>
                  {project.videos && project.videos.length > 0 && (
                    <div className="flex justify-between lg:justify-between">
                      <span className="text-muted-foreground">Vídeos:</span>
                      <span className="text-right lg:text-left">{project.videos.length}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Action buttons - Touch friendly */}
              <div className="space-y-2 sm:space-y-3">
                {/* Botões especiais para Automação com IA */}
                {project.category === 'Automação com IA' && (
                  <>
                    <Button
                      className="w-full bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 hover:from-orange-600 hover:via-red-600 hover:to-pink-600 text-white border-0 shadow-lg text-sm sm:text-base py-2 sm:py-3 touch-manipulation"
                      onClick={() => window.open('https://api.whatsapp.com/send?phone=555130823083&text=Olá! Gostaria de testar a IA para Vendas', '_blank')}
                    >
                      🤖 Testar IA para Vendas
                    </Button>
                    <Button
                      className="w-full bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 hover:from-orange-600 hover:via-red-600 hover:to-pink-600 text-white border-0 shadow-lg text-sm sm:text-base py-2 sm:py-3 touch-manipulation"
                      onClick={() => window.open('https://api.whatsapp.com/send?phone=555130823083&text=Olá! Gostaria de testar a IA para Atendimento', '_blank')}
                    >
                      📅 Testar IA para Atendimento
                    </Button>
                  </>
                )}
                
                {/* Link externo para websites */}
                {project.link && (
                  <Button
                    className="w-full bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 hover:from-orange-600 hover:via-red-600 hover:to-pink-600 text-white border-0 shadow-lg text-sm sm:text-base py-2 sm:py-3 touch-manipulation"
                    onClick={() => window.open(project.link, '_blank')}
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Ver Site Online
                  </Button>
                )}
                
                <Button
                  className="w-full bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 hover:from-orange-600 hover:via-red-600 hover:to-pink-600 text-white border-0 shadow-lg text-sm sm:text-base py-2 sm:py-3 touch-manipulation"
                  onClick={handleWhatsAppContact}
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Solicitar Projeto Similar
                </Button>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectModal;
