# GitHub Pages — NEXUS STORE

O repositório de destino é `https://github.com/Nexus-store-df/Inicial`.

O workflow em `.github/workflows/deploy-pages.yml` instala as dependências, compila o projeto com `GITHUB_PAGES=true` e publica `dist/public` usando GitHub Actions.

## Ativação no GitHub

1. Abra **Settings → Pages** no repositório.
2. Em **Build and deployment**, escolha **GitHub Actions**.
3. Faça o primeiro push para a branch `main` ou execute o workflow manualmente na aba **Actions**.
4. O endereço esperado será `https://nexus-store-df.github.io/Inicial/`.

O Vite usa a base `/Inicial/` no build de produção. Os assets reais versionados em `github-pages-assets/` são copiados para a raiz do build, e o `imageConfig` alterna automaticamente entre os caminhos do Manus no preview e os arquivos locais no GitHub Pages.
