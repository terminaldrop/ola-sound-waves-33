import { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface MediaItem {
  type: 'image' | 'video';
  url: string;
  aspectRatio?: number;
}

interface MasonryGalleryProps {
  images: string[];
  videos?: string[];
  projectTitle: string;
  onRequestSimilar: () => void;
}

// Função para detectar proporção da imagem
const getImageAspectRatio = (url: string): Promise<number> => {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => {
      resolve(img.width / img.height);
    };
    img.onerror = () => {
      resolve(1); // Fallback para quadrado
    };
    img.src = url;
  });
};

// Função para classificar proporção
const classifyAspectRatio = (ratio: number): 'horizontal' | 'vertical' | 'square' => {
  if (ratio > 1.3) return 'horizontal';
  if (ratio < 0.8) return 'vertical';
  return 'square';
};

// Função para ordenar mídia por proporção
const sortMediaByProportion = async (media: MediaItem[]): Promise<MediaItem[]> => {
  // Calcular proporções apenas para imagens
  const mediaWithRatios = await Promise.all(
    media.map(async (item) => {
      if (item.type === 'image') {
        const ratio = await getImageAspectRatio(item.url);
        return { ...item, aspectRatio: ratio };
      }
      return { ...item, aspectRatio: 1.78 }; // Videos assumem 16:9
    })
  );

  // Ordenar: horizontais > verticais > quadradas
  return mediaWithRatios.sort((a, b) => {
    const aType = classifyAspectRatio(a.aspectRatio || 1);
    const bType = classifyAspectRatio(b.aspectRatio || 1);
    
    const order = { horizontal: 0, vertical: 1, square: 2 };
    return order[aType] - order[bType];
  });
};

const MasonryGallery = ({ images, videos = [], projectTitle, onRequestSimilar }: MasonryGalleryProps) => {
  const [sortedMedia, setSortedMedia] = useState<MediaItem[]>([]);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initializeMedia = async () => {
      const allMedia: MediaItem[] = [
        ...images.map(url => ({ type: 'image' as const, url })),
        ...(videos?.map(url => ({ type: 'video' as const, url })) || [])
      ];

      const sorted = await sortMediaByProportion(allMedia);
      setSortedMedia(sorted);
      setLoading(false);
    };

    initializeMedia();
  }, [images, videos]);

  const openLightbox = (index: number) => {
    setSelectedIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedIndex(null);
    document.body.style.overflow = 'unset';
  };

  const navigateNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % sortedMedia.length);
    }
  };

  const navigatePrev = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + sortedMedia.length) % sortedMedia.length);
    }
  };

  // Renderizar item da galeria
  const renderGalleryItem = (item: MediaItem, index: number) => {
    const aspectRatio = item.aspectRatio || 1;
    const proportionType = classifyAspectRatio(aspectRatio);
    
    // Classes para diferentes proporções
    let itemClasses = "relative group cursor-pointer overflow-hidden bg-muted/10 hover:bg-muted/20 transition-all duration-300 break-inside-avoid mb-0";
    
    // Para imagens horizontais: expandir largura quando possível
    if (proportionType === 'horizontal') {
      itemClasses += " col-span-full lg:col-span-2 xl:col-span-3";
    }

    return (
      <div
        key={index}
        className={itemClasses}
        onClick={() => openLightbox(index)}
        style={{
          aspectRatio: aspectRatio.toString()
        }}
      >
        {item.type === 'video' ? (
          <video
            src={item.url}
            className="w-full h-full object-cover"
            muted
            preload="metadata"
          />
        ) : (
          <img
            src={item.url}
            alt={`${projectTitle} - ${index + 1}`}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
        )}
        
        {/* Overlay sutil no hover */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
        
        {/* Indicador de zoom */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="bg-white/90 text-black p-3 rounded-full backdrop-blur-sm">
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
            </svg>
          </div>
        </div>
      </div>
    );
  };

  if (loading) {
    return (
      <div className="w-full h-96 flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <>
      {/* Galeria Masonry */}
      <div className="w-full">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-0 space-y-0">
          {sortedMedia.map((item, index) => renderGalleryItem(item, index))}
        </div>
        
        {/* Botão CTA único no rodapé */}
        <div className="mt-12 text-center">
          <Button
            onClick={onRequestSimilar}
            size="lg"
            className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 hover:from-orange-600 hover:via-red-600 hover:to-pink-600 text-white border-0 shadow-lg px-8 py-4 text-base font-medium"
          >
            Solicitar Projeto Similar
          </Button>
        </div>
      </div>

      {/* Modal Lightbox */}
      {selectedIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm">
          {/* Header do modal */}
          <div className="absolute top-0 left-0 right-0 z-10 p-4 bg-gradient-to-b from-black/80 to-transparent">
            <div className="flex justify-between items-center">
              <div className="text-white">
                <span className="text-sm opacity-80">
                  {selectedIndex + 1} de {sortedMedia.length}
                </span>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={closeLightbox}
                className="text-white hover:bg-white/20"
              >
                <X className="h-6 w-6" />
              </Button>
            </div>
          </div>

          {/* Conteúdo central */}
          <div className="absolute inset-0 flex items-center justify-center p-4">
            <div className="relative max-w-full max-h-full">
              {sortedMedia[selectedIndex].type === 'video' ? (
                <video
                  src={sortedMedia[selectedIndex].url}
                  className="max-w-full max-h-full object-contain"
                  controls
                  autoPlay
                />
              ) : (
                <img
                  src={sortedMedia[selectedIndex].url}
                  alt={`${projectTitle} - ${selectedIndex + 1}`}
                  className="max-w-full max-h-full object-contain"
                />
              )}
            </div>
          </div>

          {/* Navegação */}
          <div className="absolute inset-y-0 left-0 flex items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={navigatePrev}
              className="ml-4 text-white hover:bg-white/20 bg-black/50 backdrop-blur-sm"
              disabled={sortedMedia.length <= 1}
            >
              <ChevronLeft className="h-8 w-8" />
            </Button>
          </div>

          <div className="absolute inset-y-0 right-0 flex items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={navigateNext}
              className="mr-4 text-white hover:bg-white/20 bg-black/50 backdrop-blur-sm"
              disabled={sortedMedia.length <= 1}
            >
              <ChevronRight className="h-8 w-8" />
            </Button>
          </div>

          {/* Controles de teclado */}
          <div
            className="absolute inset-0"
            onKeyDown={(e) => {
              if (e.key === 'ArrowRight') navigateNext();
              if (e.key === 'ArrowLeft') navigatePrev();
              if (e.key === 'Escape') closeLightbox();
            }}
            tabIndex={0}
          />
        </div>
      )}
    </>
  );
};

export default MasonryGallery;