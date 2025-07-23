
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
  // Designer Gráfico
  {
    id: 'design-grafico-diversos',
    title: 'Design Gráfico - Materiais Impressos',
    category: 'Designer Gráfico',
    description: 'Peças gráficas variadas incluindo cartazes, flyers, banners e materiais impressos para diversos clientes.',
    thumbnail: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=500&h=300&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=600&fit=crop',
    ],
    type: 'image',
    date: '2024-01'
  },

  // Branding e Identidade Visual
  {
    id: 'branding-restaurante',
    title: 'Branding Completo - Restaurante',
    category: 'Branding e Identidade Visual',
    description: 'Desenvolvimento completo de identidade visual, incluindo logo, paleta de cores, tipografia e manual da marca.',
    thumbnail: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=500&h=300&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=800&h=600&fit=crop',
    ],
    type: 'image',
    date: '2023-11'
  },

  // Criação de Conteúdo para Redes Sociais
  {
    id: 'posts-feed-pizzaria',
    title: 'Posts Feed - Pizzaria & Lanches',
    category: 'Criação de Conteúdo para Redes Sociais',
    description: 'Posts promocionais para feed do Instagram, incluindo promoções especiais, combos e produtos destaque.',
    thumbnail: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=500&h=300&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&h=800&fit=crop',
    ],
    type: 'image',
    date: '2023-12'
  },
  
  {
    id: 'stories-reels',
    title: 'Stories & Reels Promocionais',
    category: 'Criação de Conteúdo para Redes Sociais',
    description: 'Conteúdo vertical para stories e reels, com promoções dinâmicas e call-to-action para delivery.',
    thumbnail: 'https://images.unsplash.com/photo-1611177529882-39b6926feee6?w=300&h=500&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1611177529882-39b6926feee6?w=600&h=1067&fit=crop',
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=1067&fit=crop',
    ],
    type: 'image',
    date: '2023-12'
  },

  // Criativos para Tráfego Pago
  {
    id: 'criativos-trafego',
    title: 'Criativos para Tráfego Pago',
    category: 'Criativos para Gestão de Tráfego Pago',
    description: 'Peças gráficas otimizadas para campanhas pagas no Facebook e Instagram, com foco em conversão.',
    thumbnail: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=800&h=600&fit=crop',
    ],
    type: 'image',
    date: '2024-01'
  },

  // Vídeos Curtos e Motion Design
  {
    id: 'videos-promocionais',
    title: 'Vídeos Promocionais - Motion Design',
    category: 'Vídeos Curtos e Motion Design',
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

  // Automação com IA
  {
    id: 'automacao-ia-vendas',
    title: 'Automação com IA para Vendas',
    category: 'Automação com IA para Atendimento e Vendas',
    description: 'Soluções de automação inteligente para atendimento, vendas e agendamentos via WhatsApp.',
    thumbnail: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&h=300&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop',
    ],
    type: 'image',
    date: '2024-02'
  },

  // Web sites e Landing Pages
  {
    id: 'website-anderson-moveis',
    title: 'Website Anderson Móveis',
    category: 'Web sites e Landing Pages',
    description: 'Website institucional responsivo para loja de móveis planejados.',
    thumbnail: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=500&h=300&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop',
    ],
    type: 'image',
    date: '2023-10',
    link: 'https://www.andersonmoveis.com.br'
  },

  {
    id: 'website-manipularis',
    title: 'Website Manipularis',
    category: 'Web sites e Landing Pages', 
    description: 'Website institucional responsivo para farmácia de manipulação.',
    thumbnail: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=500&h=300&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop',
    ],
    type: 'image',
    date: '2023-09',
    link: 'https://www.manipularis.com.br'
  },

  {
    id: 'website-grupodrop',
    title: 'Website Grupo Drop',
    category: 'Web sites e Landing Pages',
    description: 'Plataforma web completa para grupo empresarial.',
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    ],
    type: 'image',
    date: '2023-08',
    link: 'https://www.grupodrop.com.br'
  }
];

export const categories = [
  'Todos',
  'Designer Gráfico',
  'Branding e Identidade Visual',
  'Criação de Conteúdo para Redes Sociais',
  'Criativos para Gestão de Tráfego Pago',
  'Vídeos Curtos e Motion Design',
  'Automação com IA para Atendimento e Vendas',
  'Web sites e Landing Pages'
];
