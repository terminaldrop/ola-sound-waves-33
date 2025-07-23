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
    const whatsappUrl = `https://wa.me/5551999999999?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl w-full h-[90vh] p-0 overflow-hidden">
        <div className="flex flex-col h-full">
          {/* Header */}
          <DialogHeader className="p-6 border-b">
            <div className="flex items-center justify-between">
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <DialogTitle className="text-2xl font-bold">{project.title}</DialogTitle>
                  <Badge variant="secondary">{project.category}</Badge>
                </div>
                <p className="text-muted-foreground">{project.description}</p>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={onClose}
                className="h-8 w-8"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </DialogHeader>

          {/* Content */}
          <div className="flex-1 flex overflow-hidden">
            {/* Media viewer */}
            <div className="flex-1 relative bg-black/5 flex items-center justify-center">
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
                      className="absolute inset-0 m-auto w-16 h-16 rounded-full bg-white/90 text-black hover:bg-white"
                      onClick={() => setIsVideoPlaying(true)}
                    >
                      <Play className="h-6 w-6 ml-1" />
                    </Button>
                  )}
                </div>
              )}

              {/* Navigation buttons */}
              {allMedia.length > 1 && (
                <>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white hover:bg-black/70"
                    onClick={goToPrevious}
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white hover:bg-black/70"
                    onClick={goToNext}
                  >
                    <ChevronRight className="h-6 w-6" />
                  </Button>
                </>
              )}

              {/* Counter */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                {currentIndex + 1} / {allMedia.length}
              </div>
            </div>

            {/* Sidebar */}
            <div className="w-80 border-l bg-card/50 p-6 space-y-6 overflow-y-auto">
              {/* Project info */}
              <div className="space-y-4">
                <h4 className="font-semibold">Detalhes do Projeto</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Data:</span>
                    <span>{new Date(project.date).toLocaleDateString('pt-BR', { 
                      month: 'long', 
                      year: 'numeric' 
                    })}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Categoria:</span>
                    <span>{project.category}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Imagens:</span>
                    <span>{project.images.length}</span>
                  </div>
                  {project.videos && project.videos.length > 0 && (
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Vídeos:</span>
                      <span>{project.videos.length}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Action buttons */}
              <div className="space-y-3">
                {/* Botões especiais para Automação com IA */}
                {project.category === 'Automação com IA' && (
                  <>
                    <Button
                      className="w-full bg-green-600 hover:bg-green-700"
                      onClick={() => window.open('https://wa.me/5551999999999?text=Olá! Gostaria de testar a IA para Vendas', '_blank')}
                    >
                      🤖 Testar IA para Vendas
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full"
                      onClick={() => window.open('https://wa.me/5551999999999?text=Olá! Gostaria de testar a IA para Atendimento', '_blank')}
                    >
                      📅 Testar IA para Atendimento
                    </Button>
                  </>
                )}
                
                {/* Link externo para websites */}
                {project.link && (
                  <Button
                    className="w-full bg-blue-600 hover:bg-blue-700"
                    onClick={() => window.open(project.link, '_blank')}
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Ver Site Online
                  </Button>
                )}
                
                <Button
                  className="w-full"
                  onClick={handleWhatsAppContact}
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Solicitar Projeto Similar
                </Button>
                
              </div>

              {/* Thumbnails */}
              {allMedia.length > 1 && (
                <div className="space-y-3">
                  <h4 className="font-semibold text-sm">Galeria</h4>
                  <div className="grid grid-cols-3 gap-2">
                    {allMedia.map((media, index) => (
                      <button
                        key={index}
                        className={`relative aspect-square rounded overflow-hidden border-2 transition-all ${
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
                            <Play className="h-4 w-4 text-muted-foreground" />
                          </div>
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectModal;