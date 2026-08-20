# NEXUS STORE - Guia de Substituição de Imagens

## 📋 Visão Geral

Este documento explica como substituir as imagens da landing page por imagens reais da NEXUS STORE.

## 🎯 Estrutura de Imagens

Todas as imagens são configuradas em um único arquivo centralizado:

```
client/src/config/images.ts
```

Este arquivo contém todas as URLs de imagens da página. Para alterar uma imagem, basta editar a URL correspondente neste arquivo.

## 📁 Categorias de Imagens

### 1. **Logo** (`imageConfig.logo`)
- Arquivo integrado: `nexus-assets/logo/nexus-logo.png`
- **Header**: Logo para o menu superior
- **Footer**: Logo para o rodapé
- **Favicon**: Ícone da aba do navegador

**Arquivo**: `client/src/config/images.ts` → `logo`

### 2. **Hero Section** (`imageConfig.hero`)
- Arquivo integrado: `nexus-assets/hero/loja-hero.png`
- Imagem principal da página inicial, mostrando a loja real

**Arquivo**: `client/src/config/images.ts` → `hero.image`

### 3. **Seção Sobre** (`imageConfig.about`)
- Arquivo integrado: `nexus-assets/equipe/equipe.jpg`
- Foto real da equipe NEXUS convertida de HEIC para JPG compatível com navegador

**Arquivo**: `client/src/config/images.ts` → `about.image`

### 4. **Produtos em Destaque** (`imageConfig.products`)
- Arquivos integrados: `nexus-assets/produtos/iphone-15-pro.png`, `ipad-11-combo.jpeg` e `iphone-15-pro-max.png`
- As imagens de produtos foram mantidas como materiais de produto, conforme autorizado

**Arquivo**: `client/src/config/images.ts` → `products`

### 5. **Prova Social** (`imageConfig.socialProof`)
- Arquivos integrados: `nexus-assets/clientes/cliente-1.png`, `cliente-2.jpg` e `cliente-3.jpg`
- As fotos são exibidas sem depoimentos, nomes ou produtos inventados

**Arquivo**: `client/src/config/images.ts` → `socialProof.items`

### 6. **Instagram** (`imageConfig.instagram`)
- Capas reais integradas: `postinstagram1.png`, `postinstagram2.png` e `postinstagram3.png`
- Cada capa abre o Reel correspondente no Instagram em uma nova aba

**Arquivo**: `client/src/config/images.ts` → `instagram.items`

## 🔄 Como Substituir Imagens

### Passo 1: Preparar as imagens
1. Tire fotos profissionais da loja, equipe e produtos
2. Otimize as imagens (reduza tamanho, comprima)
3. Hospede as imagens em um servidor (ou use `/manus-storage/`)

### Passo 2: Atualizar as URLs
1. Abra `client/src/config/images.ts`
2. Substitua as strings vazias (`''`) pelas URLs reais
3. Certifique-se de que as URLs estão corretas

### Passo 3: Testar
1. Acesse a página no navegador
2. Verifique se todas as imagens carregam corretamente
3. Teste em dispositivos móveis também

### Exemplo de Substituição

**Antes:**
```typescript
hero: {
  image: '', // URL da imagem principal do hero (lado direito)
  alt: 'NEXUS STORE - Loja de Tecnologia',
},
```

**Depois:**
```typescript
hero: {
  image: 'https://seu-dominio.com/imagens/hero-loja.jpg',
  alt: 'NEXUS STORE - Loja de Tecnologia',
},
```

## 🖼️ Componentes que Usam Imagens

### Header (Logo)
- Arquivo: `client/src/components/Header.tsx`
- Usa: `imageConfig.logo.header`

### Footer (Logo)
- Arquivo: `client/src/components/Footer.tsx`
- Usa: `imageConfig.logo.footer`

### Home Page (seções ativas)
- Arquivo: `client/src/pages/Home.tsx`
- Usa: logo, hero, equipe, produtos, prova social e Instagram.
- As seções de galeria e vídeos foram removidas até que existam arquivos reais.

## 📝 Notas Importantes

1. **Sem imagens fake**: Todas as imagens institucionais integradas são arquivos enviados pela NEXUS STORE
2. **Produtos**: As imagens de aparelhos foram mantidas como imagens de produto, conforme autorizado
3. **URLs completas**: Use URLs completas (https://...)
4. **Teste antes de deploy**: Verifique se todas as URLs funcionam
5. **Backup**: Mantenha um backup das imagens originais

## 🚀 Próximos Passos

1. Prepare todas as imagens reais
2. Hospede as imagens em um servidor
3. Atualize `client/src/config/images.ts` com as URLs
4. Teste a página localmente
5. Faça commit no GitHub
6. Deploy na Vexl

## 📞 Suporte

Se tiver dúvidas sobre como substituir as imagens, consulte:
- `client/src/config/images.ts` - Comentários detalhados
- `client/src/pages/Home.tsx` - Como as imagens são usadas
- `client/src/components/Header.tsx` - Logo no header
- `client/src/components/Footer.tsx` - Logo no footer

---

**Última atualização**: 2026-08-19 — assets reais e Reels integrados
