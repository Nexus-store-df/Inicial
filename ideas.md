# NEXUS STORE Landing Page - Design Philosophy

## Design Approach Chosen: **Cyberpunk Profissional**

### Design Movement
Cyberpunk moderno com raízes em design corporativo premium. Inspiração em interfaces de tecnologia de ponta, mantendo profissionalismo e confiança.

### Core Principles
1. **Contraste Eletrizante**: Preto profundo + azul elétrico criam tensão visual que comunica energia e inovação
2. **Hierarquia Clara**: Tipografia ousada e espaçamento generoso guiam o usuário naturalmente
3. **Presença Física Real**: Imagens e vídeos de pessoas, produtos e loja reforçam confiança e humanidade
4. **Movimento Propositado**: Animações suaves e transições que refletem dinamismo sem parecer frívolo

### Color Philosophy
- **Preto (#0A0E27)**: Base sólida, profissional, transmite segurança e tecnologia
- **Azul Elétrico (#0080FF)**: Cor de marca, representa inovação, energia e confiança
- **Branco/Off-white (#F5F5F5)**: Clareza e legibilidade, contraste contra escuridão
- **Cinza Neutro (#6B7280)**: Texto secundário, mantém hierarquia sem ruído
- **Gradientes Azuis Sutis**: Adiciona profundidade sem parecer artificial

### Layout Paradigm
- **Hero Assimétrico**: Imagem/vídeo real da loja à direita, copy à esquerda com CTA destacado
- **Seções em Blocos**: Cada seção tem propósito claro, sem poluição visual
- **Fluxo Vertical Intuitivo**: Mobile-first, com transições suaves entre seções
- **Destaque para Prova Social**: Seção dedicada com cards elegantes e espaço para conteúdo real

### Signature Elements
1. **Linha Azul Elétrica**: Divisor horizontal sutil que separa seções, marca presença da marca
2. **Cards com Borda Azul**: Elementos destacados (aparelhos, depoimentos) têm borda fina azul
3. **Ícones Tecnológicos**: Ícones minimalistas em azul para serviços (assistência, entrega, garantia)

### Interaction Philosophy
- **Botões Responsivos**: CTA principal em azul elétrico, secundários em outline
- **Hover States Suaves**: Transições de 200ms, elevação sutil com sombra
- **Links com Underline Animado**: Underline azul que aparece ao hover
- **Modais Elegantes**: Vídeos e depoimentos abrem em modais com backdrop blur

### Animation
- **Entrada de Seções**: Fade-in + slide-up suave (300ms) ao scroll
- **Hover de Cards**: Scale 1.02 + sombra aumentada (200ms ease-out)
- **CTA Buttons**: Scale 0.97 ao click, feedback tátil (160ms)
- **Carrossel de Depoimentos**: Transição suave entre cards (400ms)
- **Vídeos**: Play icon com hover effect, modal abre com scale-in

### Typography System
- **Display/Headlines**: Fonte bold (700), tamanho 2.5rem-3.5rem, cor preta ou azul
- **Subheadlines**: Fonte semibold (600), tamanho 1.5rem-2rem, cor preta
- **Body Text**: Fonte regular (400), tamanho 1rem-1.125rem, cor cinza escuro
- **CTAs**: Fonte semibold (600), tamanho 1rem, cor branca em fundo azul
- **Font Stack**: Preferência por fontes modernas (Poppins, Outfit, ou similar)

### Brand Essence
**Positioning**: A loja de tecnologia que você pode confiar, com pessoas reais, produtos de qualidade e atendimento especializado — não um e-commerce impessoal.

**Personality**: Profissional, Acessível, Inovador

### Brand Voice
- **Headlines**: Diretas, confiantes, focadas em benefício do cliente
- **CTAs**: Ação clara e convite genuíno ("Falar com a Nexus", não "Compre Agora")
- **Microcopy**: Tom jovem mas profissional, sem clichês de vendedor
- **Exemplos**:
  - ✅ "Tecnologia que conecta você ao que realmente importa"
  - ✅ "Gostei dessa loja. Parece confiável. Vou chamar eles."
  - ❌ "Somos os melhores"
  - ❌ "Preço imbatível"

### Logo & Branding
- **Logo**: Usar logo atual da Nexus (escudo com "NEXUS" em azul e dourado)
- **Favicon**: Versão simplificada do logo em 32x32px
- **Wordmark**: Não usar apenas texto, sempre acompanhar com símbolo visual

### Signature Brand Color
**Azul Elétrico (#0080FF)** - Cor unmistakably Nexus, usada em CTAs, bordas, destaques e divisores

---

## Estrutura de Seções

1. **Header/Nav**: Logo + Links + CTA WhatsApp fixo em mobile
2. **Hero**: Headline impactante + Subheadline + 2 CTAs + Imagem/Vídeo real
3. **Sobre a Nexus**: Headline + Texto curto + Imagens da equipe/loja
4. **Prova Social Real**: Headline + Carrossel de depoimentos/prints reais
5. **A Nexus Por Dentro**: Headline + Galeria de fotos/vídeos da loja
6. **Aparelhos em Destaque**: Headline + 3 Cards de produtos + CTAs
7. **Assistência Técnica**: Headline + Descrição + Cards de serviços
8. **Vídeos**: Headline + Grid de vídeos com play icons
9. **Instagram**: Headline + Feed/Cards com link para seguir
10. **CTA Final**: Headline + Texto + 2 CTAs
11. **Footer**: Logo + Contatos + Links + Redes Sociais

---

## Estrutura de Arquivos de Mídia

```
/home/ubuntu/webdev-static-assets/
  /nexus-store/
    /logo/
      logo.png
      favicon.png
    /hero/
      hero-image.jpg
      hero-video.mp4
    /empresa/
      team-photo-1.jpg
      team-photo-2.jpg
      store-interior.jpg
    /prova-social/
      cliente-01/
        image.jpg ou video.mp4
      cliente-02/
      cliente-03/
    /loja/
      fachada.jpg
      interior-1.jpg
      interior-2.jpg
      bancada.jpg
      equipe.jpg
    /aparelhos/
      aparelho-01/
        image.jpg
      aparelho-02/
      aparelho-03/
    /videos/
      hero-video.mp4
      cliente-video.mp4
      loja-video.mp4
      assistencia-video.mp4
    /instagram/
      post-1.jpg
      post-2.jpg
      post-3.jpg
```

---

## Style Decisions

- **Responsividade**: Mobile-first, com breakpoints em 640px, 1024px, 1280px
- **Performance**: Lazy-load de imagens, vídeos com thumbnail preview
- **Acessibilidade**: WCAG 2.1 AA, contrast ratios adequados, alt text em todas as imagens
- **Velocidade**: Compressão de imagens, CSS otimizado, sem bibliotecas desnecessárias
