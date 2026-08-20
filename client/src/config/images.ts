/**
 * NEXUS STORE - Image Configuration
 * 
 * Este arquivo centraliza todas as URLs de imagens da landing page.
 * Substitua as URLs abaixo pelas imagens reais da NEXUS STORE.
 * 
 * Estrutura esperada:
 * - Logo: PNG com fundo transparente, mínimo 200x200px
 * - Hero: Imagem da loja/produtos, mínimo 1200x600px
 * - Equipe: Foto real da equipe, compatível com navegador
 * - Produtos: Imagens de iPhone/iPad/MacBook, mínimo 600x600px
 */

const githubAsset = (filename: string, manusPath: string) =>
  import.meta.env.VITE_GITHUB_PAGES === 'true'
    ? `${import.meta.env.BASE_URL}${filename}`
    : manusPath;

export const imageConfig = {
  // Logo da marca
  logo: {
    // Logo oficial enviada pela NEXUS STORE.
    header: githubAsset('nexus-logo.png', '/manus-storage/nexus-logo_c42eb8c9.png'),
    footer: githubAsset('nexus-logo.png', '/manus-storage/nexus-logo_c42eb8c9.png'),
    favicon: githubAsset('nexus-logo.png', '/manus-storage/nexus-logo_c42eb8c9.png'),
  },

  // Seção Hero
  hero: {
    image: githubAsset('loja-hero.png', '/manus-storage/loja-hero_d9d9d46e.png'),
    alt: 'NEXUS STORE - Loja de Tecnologia',
  },

  // Seção Sobre
  about: {
    image: githubAsset('equipe.jpg', '/manus-storage/equipe_528cdea6.jpg'),
    alt: 'Equipe NEXUS STORE',
  },

  // Seção Produtos em Destaque
  // Nota: As imagens de iPhone, iPad e MacBook podem ser genéricas
  products: [
    {
      name: 'iPhone 15 Pro',
      storage: 'Disponibilidade sob consulta',
      condition: 'Consulte',
      price: 'Fale com a equipe',
      image: githubAsset('iphone-15-pro.png', '/manus-storage/iphone-15-pro_1eb774b8.png'),
      alt: 'iPhone 15 Pro',
    },
    {
      name: 'iPad 11',
      storage: 'Disponibilidade sob consulta',
      condition: 'Consulte',
      price: 'Fale com a equipe',
      image: githubAsset('ipad-11-combo.jpeg', '/manus-storage/ipad-11-combo_f7228a30.jpeg'),
      alt: 'iPad 11 com combo',
    },
    {
      name: 'iPhone 15 Pro Max',
      storage: 'Disponibilidade sob consulta',
      condition: 'Consulte',
      price: 'Fale com a equipe',
      image: githubAsset('iphone-15-pro-max.png', '/manus-storage/iphone-15-pro-max_a7b69ddc.png'),
      alt: 'iPhone 15 Pro Max',
    },
  ],

  // Seção Prova Social
  socialProof: {
    items: [
      {
        id: 'cliente-01',
        image: githubAsset('cliente-1.png', '/manus-storage/cliente-1_8a96de3c.png'),
        testimonial: '', // Depoimento do cliente
        name: '', // Nome do cliente
        product: '', // Produto adquirido
      },
      {
        id: 'cliente-02',
        image: githubAsset('cliente-2.jpg', '/manus-storage/cliente-2_d3fe125f.jpg'),
        testimonial: '',
        name: '',
        product: '',
      },
      {
        id: 'cliente-03',
        image: githubAsset('cliente-3.jpg', '/manus-storage/cliente-3_42070eb8.jpg'),
        testimonial: '',
        name: '',
        product: '',
      },
    ],
  },

  // Posts reais do Instagram
  instagram: {
    items: [
      {
        image: githubAsset('postinstagram1.png', '/manus-storage/postinstagram1_9cc9a040.png'),
        url: 'https://www.instagram.com/reel/DcG4ImHxFWP/?igsi=Z2R2Mm1ncjd1MHZ2',
        alt: 'Reel real da NEXUS STORE no Instagram',
      },
      {
        image: githubAsset('postinstagram2.png', '/manus-storage/postinstagram2_2e08c66d.png'),
        url: 'https://www.instagram.com/reel/Db5i23sxT5M/?igsi=MWU4cm43N2lpZGtmNg==',
        alt: 'Reel real da NEXUS STORE no Instagram',
      },
      {
        image: githubAsset('postinstagram3.png', '/manus-storage/postinstagram3_3c43c192.png'),
        url: 'https://www.instagram.com/reel/DbvY1CkxGws/?igsi=MTVtczQxaDBycGhsMA==',
        alt: 'Reel real da NEXUS STORE no Instagram',
      },
    ],
  },

  // Mapa — substitua `image` pelo link oficial quando o Google Meu Negócio estiver cadastrado.
  map: {
    image: githubAsset('mapa.png', '/manus-storage/mapa_65a89b1f.png'),
    officialLink: '',
    latitude: -15.7942, // Coordenadas de Brasília (Feira dos Importados)
    longitude: -47.8822,
    address: 'Feira dos Importados, Bloco A14, Brasília - DF',
  },
};

/**
 * Instruções de uso:
 * 
 * 1. Substitua as strings vazias ('') pelas URLs reais
 * 2. Use URLs completas (https://...)
 * 3. Para imagens hospedadas localmente, use /manus-storage/seu-arquivo.jpg
 * 4. Certifique-se de que as imagens têm tamanho mínimo recomendado
 * 5. Teste as URLs antes de fazer deploy
 * 
 * Exemplo:
 * logo: {
 *   header: 'https://seu-dominio.com/logo-header.png',
 *   footer: 'https://seu-dominio.com/logo-footer.png',
 * }
 */
