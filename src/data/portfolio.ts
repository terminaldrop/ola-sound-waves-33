
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
  // Criação de identidade Visual
  {
    id: 'identidade-visual-restaurante',
    title: 'Identidade Visual Completa - Restaurante',
    category: 'Criação de identidade Visual',
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
    category: 'Criação de identidade Visual',
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
  
  {
    id: 'social-media-stories',
    title: 'Stories & Reels Promocionais',
    category: 'Social Media',
    description: 'Conteúdo vertical para stories e reels, com promoções dinâmicas e call-to-action para delivery.',
    thumbnail: 'https://images.unsplash.com/photo-1611177529882-39b6926feee6?w=300&h=500&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1611177529882-39b6926feee6?w=600&h=1067&fit=crop',
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=1067&fit=crop',
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

  {
    id: 'embalagem-cosmeticos',
    title: 'Embalagens Premium - Cosméticos',
    category: 'Designer de Embalagem',
    description: 'Design sofisticado de embalagens para linha premium de cosméticos, com acabamento especial.',
    thumbnail: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=500&h=300&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&h=600&fit=crop',
    ],
    type: 'image',
    date: '2023-10'
  },

  // Vídeos Promocionais | Motion Design
  {
    id: 'videos-promocionais',
    title: 'Vídeos Promocionais - Motion Design',
    category: 'Vídeos Promocionais | Motion Design',
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

  {
    id: 'motion-design-corporativo',
    title: 'Animações Corporativas',
    category: 'Vídeos Promocionais | Motion Design',
    description: 'Criação de animações institucionais e apresentações corporativas com motion graphics avançados.',
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    ],
    videos: [
      'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    ],
    type: 'video',
    date: '2024-02'
  },

  // Web Sites | Landing Page
  {
    id: 'website-anderson-moveis',
    title: 'Website Anderson Móveis',
    category: 'Web Sites | Landing Page',
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
    category: 'Web Sites | Landing Page', 
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
  'Criação de identidade Visual',
  'Social Media',
  'Designer de Embalagem',
  'Vídeos Promocionais | Motion Design',
  'Web Sites | Landing Page',
  'Criação com IA'
];
