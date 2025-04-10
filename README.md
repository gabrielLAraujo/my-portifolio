This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

# Meu Portfólio

## Configuração de Imagens

Para que o portfólio funcione corretamente, você precisa adicionar as seguintes imagens:

1. Foto de perfil:
   - Adicione sua foto com o nome `profile.jpg` na pasta `public`
   - Tamanho recomendado: 800x800 pixels

2. Imagens dos projetos:
   - Crie uma pasta `projects` dentro da pasta `public` (se ainda não existir)
   - Adicione a imagem do projeto Dev Logger com o nome `dev-logger.jpg`
   - Tamanho recomendado para imagens de projetos: 1200x630 pixels

## Estrutura de arquivos esperada:

```
public/
  ├── profile.jpg
  └── projects/
      └── dev-logger.jpg
```

## Tecnologias Utilizadas

- Next.js
- TypeScript
- Tailwind CSS
- Framer Motion
- Next Themes
- Lucide React
