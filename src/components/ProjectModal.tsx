
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { X, MessageCircle, ExternalLink } from "lucide-react";
import { Project } from "@/data/portfolio";
import MasonryGallery from "./MasonryGallery";

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
  if (!project) return null;

  const handleWhatsAppContact = () => {
    const message = `Olá! Gostei do projeto "${project.title}" e gostaria de solicitar um orçamento similar.`;
    const whatsappUrl = `https://api.whatsapp.com/send?phone=555130823083&text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-7xl w-full h-[95vh] p-0 overflow-hidden">
        <div className="flex flex-col h-full">
          {/* Header */}
          <DialogHeader className="p-6 border-b shrink-0">
            <div className="flex items-start justify-between gap-3">
              <div className="space-y-2 flex-1">
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
                className="h-8 w-8 shrink-0"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </DialogHeader>

          {/* Nova Galeria Masonry */}
          <div className="flex-1 overflow-y-auto p-6">
            <MasonryGallery
              images={project.images}
              videos={project.videos}
              projectTitle={project.title}
              onRequestSimilar={handleWhatsAppContact}
            />
            
            {/* Botões especiais para algumas categorias */}
            {(project.category === 'Automação com IA' || project.link) && (
              <div className="mt-8 space-y-3 max-w-md mx-auto">
                {project.category === 'Automação com IA' && (
                  <>
                    <Button
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                      onClick={() => window.open('https://api.whatsapp.com/send?phone=555130823083&text=Olá! Gostaria de testar a IA para Vendas', '_blank')}
                    >
                      🤖 Testar IA para Vendas
                    </Button>
                    <Button
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                      onClick={() => window.open('https://api.whatsapp.com/send?phone=555130823083&text=Olá! Gostaria de testar a IA para Atendimento', '_blank')}
                    >
                      📅 Testar IA para Atendimento
                    </Button>
                  </>
                )}
                
                {project.link && (
                  <Button
                    className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white"
                    onClick={() => window.open(project.link, '_blank')}
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Ver Site Online
                  </Button>
                )}
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectModal;
