
// Portfolio data com material real da agência
export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  thumbnail: string;
  images: string[];
  videos?: string[];
  type: 'image' | 'video' | 'mixed';
  date: string;
  link?: string;
}

export const portfolioProjects: Project[] = [
  // Identidade Visual
  {
    id: 'identidade-visual-restaurante',
    title: 'Identidade Visual Completa - Restaurante',
    category: 'Identidade Visual',
    description: 'Desenvolvimento completo de identidade visual, incluindo logo, paleta de cores, tipografia e manual da marca para restaurante.',
    thumbnail: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=500&h=300&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=800&h=600&fit=crop',
    ],
    type: 'image',
    date: '2023-11'
  },

  {
    id: 'identidade-visual-tech',
    title: 'Branding Tech Startup',
    category: 'Identidade Visual',
    description: 'Criação de identidade visual moderna para startup de tecnologia, incluindo logo, cartão de visita e papelaria.',
    thumbnail: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=500&h=300&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&h=600&fit=crop',
    ],
    type: 'image',
    date: '2024-01'
  },

  // Social Media
  {
    id: 'social-media-pizzaria',
    title: 'Posts Feed - Pizzaria & Lanches',
    category: 'Social Media',
    description: 'Posts promocionais para feed do Instagram, incluindo promoções especiais, combos e produtos destaque.',
    thumbnail: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=500&h=300&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800&h=800&fit=crop',
    ],
    type: 'image',
    date: '2023-12'
  },

  // Designer de Embalagem
  {
    id: 'embalagem-produto-alimenticio',
    title: 'Design de Embalagem - Produtos Alimentícios',
    category: 'Designer de Embalagem',
    description: 'Criação de embalagens atrativas para linha de produtos alimentícios, com foco em shelf appeal.',
    thumbnail: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=800&h=600&fit=crop',
    ],
    type: 'image',
    date: '2024-01'
  },

  // Videos Promo
  {
    id: 'videos-promocionais',
    title: 'Videos Promo - Motion Design',
    category: 'Videos Promo',
    description: 'Vídeos animados para redes sociais, promovendo combos especiais, promoções e novos produtos.',
    thumbnail: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=500&h=300&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800&h=600&fit=crop',
    ],
    videos: [
      'https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      'https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    ],
    type: 'video',
    date: '2023-11'
  },

  // Web Sites
  {
    id: 'website-anderson-moveis',
    title: 'Website Anderson Móveis',
    category: 'Web Sites',
    description: 'Website institucional responsivo para loja de móveis planejados com sistema de orçamento online.',
    thumbnail: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=500&h=300&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop',
    ],
    type: 'image',
    date: '2023-10',
    link: 'https://www.andersonmoveis.com.br'
  },

  {
    id: 'landing-page-manipularis',
    title: 'Landing Page Manipularis',
    category: 'Web Sites', 
    description: 'Landing page otimizada para conversão da farmácia de manipulação com formulário de contato.',
    thumbnail: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=500&h=300&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop',
    ],
    type: 'image',
    date: '2023-09',
    link: 'https://www.manipularis.com.br'
  },

  // Criação com IA
  {
    id: 'criacao-ia-chatbot',
    title: 'Chatbot Inteligente para Vendas',
    category: 'Criação com IA',
    description: 'Desenvolvimento de chatbot com IA para atendimento automatizado e qualificação de leads via WhatsApp.',
    thumbnail: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&h=300&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop',
    ],
    type: 'image',
    date: '2024-02'
  },

  {
    id: 'criacao-ia-gerador-conteudo',
    title: 'Sistema de Geração de Conteúdo',
    category: 'Criação com IA',
    description: 'Ferramenta de IA para geração automática de posts para redes sociais com personalização de marca.',
    thumbnail: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=500&h=300&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    ],
    type: 'image',
    date: '2024-03'
  }
];

export const categories = [
  'Todos',
  'Identidade Visual',
  'Social Media',
  'Designer de Embalagem',
  'Videos Promo',
  'Web Sites',
  'Criação com IA'
];
