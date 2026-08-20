# Upload para o repositório Nexus-store-df/Inicial

O erro 404 ocorreu porque o repositório recebeu apenas parte da estrutura. Este pacote já está com a estrutura extraída na raiz.

1. Envie o conteúdo deste pacote para a raiz da branch `main`. A pasta `.github/` precisa ser preservada.
2. Confirme que a raiz contém `package.json`, `vite.config.ts`, `client/`, `github-pages-assets/` e `.github/workflows/deploy-pages.yml`.
3. Em **Settings → Pages**, escolha **GitHub Actions** como fonte de publicação.
4. Na aba **Actions**, aguarde a execução de `Deploy NEXUS STORE to GitHub Pages`.
5. Acesse `https://nexus-store-df.github.io/Inicial/`.

O workflow compila o projeto com a base `/Inicial/` e publica a pasta `dist/public`. Não envie a pasta `dist/`; ela é gerada automaticamente.
