
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { X, ChevronLeft, ChevronRight, Play, Pause, MessageCircle, ExternalLink } from "lucide-react";
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
            {/* Media viewer - Full width on mobile */}
            <div className="flex-1 relative bg-black/5 flex items-center justify-center min-h-[300px] lg:min-h-0">
              {currentMedia?.type === 'image' ? (
                <img
                  src={currentMedia.url}
                  alt={`${project.title} - ${currentIndex + 1}`}
                  className="max-w-full max-h-full object-contain"
                />
              ) : (
                <div className="relative">
                  <video
                    src={currentMedia?.url}
                    className="max-w-full max-h-full object-contain"
                    controls={isVideoPlaying}
                    autoPlay={isVideoPlaying}
                    onPlay={() => setIsVideoPlaying(true)}
                    onPause={() => setIsVideoPlaying(false)}
                  />
                  {!isVideoPlaying && (
                    <Button
                      size="lg"
                      className="absolute inset-0 m-auto w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-white/90 text-black hover:bg-white"
                      onClick={() => setIsVideoPlaying(true)}
                    >
                      <Play className="h-4 w-4 sm:h-6 sm:w-6 ml-1" />
                    </Button>
                  )}
                </div>
              )}

              {/* Navigation buttons - Touch friendly */}
              {allMedia.length > 1 && (
                <>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white hover:bg-black/70 h-10 w-10 sm:h-12 sm:w-12"
                    onClick={goToPrevious}
                  >
                    <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white hover:bg-black/70 h-10 w-10 sm:h-12 sm:w-12"
                    onClick={goToNext}
                  >
                    <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
                  </Button>
                </>
              )}

              {/* Counter */}
              <div className="absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm">
                {currentIndex + 1} / {allMedia.length}
              </div>
            </div>

            {/* Sidebar - Becomes bottom section on mobile */}
            <div className="w-full lg:w-80 border-t lg:border-t-0 lg:border-l bg-card/50 p-3 sm:p-6 space-y-4 sm:space-y-6 overflow-y-auto">
              {/* Thumbnails - Show first on mobile for easy access */}
              {allMedia.length > 1 && (
                <div className="space-y-3 lg:order-last">
                  <h4 className="font-semibold text-sm">Galeria ({allMedia.length})</h4>
                  <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-3 gap-2">
                    {allMedia.map((media, index) => (
                      <button
                        key={index}
                        className={`relative aspect-square rounded overflow-hidden border-2 transition-all touch-manipulation ${
                          index === currentIndex ? 'border-primary' : 'border-transparent'
                        }`}
                        onClick={() => {
                          setCurrentIndex(index);
                          setIsVideoPlaying(false);
                        }}
                      >
                        {media.type === 'image' ? (
                          <img
                            src={media.url}
                            alt={`Thumbnail ${index + 1}`}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="w-full h-full bg-black/10 flex items-center justify-center">
                            <Play className="h-3 w-3 sm:h-4 sm:w-4 text-muted-foreground" />
                          </div>
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              )}

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
