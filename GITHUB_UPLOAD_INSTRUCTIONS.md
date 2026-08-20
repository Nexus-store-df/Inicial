# Upload para o repositório Nexus-store-df/Home

O erro 404 ocorreu porque o repositório recebeu apenas um ZIP fechado. Este pacote já está com a estrutura extraída na raiz.

1. Remova do repositório o arquivo `nexus-store-lp.zip` e os arquivos antigos que não fazem parte desta versão.
2. Envie o conteúdo deste pacote para a raiz da branch `main`. A pasta `.github/` precisa ser preservada.
3. Confirme que a raiz contém `package.json`, `vite.config.ts`, `client/`, `github-pages-assets/` e `.github/workflows/deploy-pages.yml`.
4. Em **Settings → Pages**, escolha **GitHub Actions** como fonte de publicação.
5. Na aba **Actions**, aguarde a execução de `Deploy NEXUS STORE to GitHub Pages`.
6. Acesse `https://nexus-store-df.github.io/Home/`.

O workflow compila o projeto com a base `/Home/` e publica a pasta `dist/public`. Não envie a pasta `dist/`; ela é gerada automaticamente.
