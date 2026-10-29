# Portfolio - Gabriel Leite Araújo

Portfolio pessoal desenvolvido com Next.js 15, React 19 e TypeScript.

## 🚀 Começar

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000)

## ⚙️ Comandos

```bash
npm run dev      # Desenvolvimento
npm run build    # Build de produção
npm start        # Servidor de produção
npm run lint     # Checar código
```

## Personalizar

- **Textos (PT e EN)**: `src/content/site.ts`
- **Contato**: `src/config/contact.ts`
- **Visual**: `DESIGN.md`, `tailwind.config.js` e `src/app/globals.css`
- **Prints dos cases**: `public/cases/` (WebP 1280x800)

### Email (Formulário de Contato)

O formulário envia por SMTP, por padrão o da Hostinger (`smtp.hostinger.com`, porta 465). Crie `.env.local` na raiz do projeto:

```env
EMAIL_USER=caixa@seu-dominio.com
EMAIL_PASS=senha-da-caixa
# Opcional, para outro provedor:
# EMAIL_HOST=smtp.exemplo.com
# EMAIL_PORT=587
```

A mensagem chega na própria caixa `EMAIL_USER`, com o e-mail do visitante no Reply-To.

## Recursos

- Páginas estáticas em português (`/`) e inglês (`/en`), renderizadas no servidor
- Tema claro e escuro
- Formulário de contato por SMTP

## Stack

- Next.js 15 (App Router, `output: 'standalone'` para o Coolify)
- React 19 e TypeScript
- Tailwind CSS
- Fonte Geist (pacote `geist`, sem depender do Google Fonts no build)

## Estrutura

```
src/
├── app/              # Páginas (/ e /en), API de contato, sitemap e robots
├── components/site/  # Página e componentes interativos (tema, menu, formulário)
├── content/          # Textos em português e inglês
├── config/           # Contato e e-mail
└── lib/              # Validação, erros e dados estruturados (SEO)
```

## Contato

- [frauchesgabriel.work](https://frauchesgabriel.work)
- [LinkedIn](https://www.linkedin.com/in/gabrielleitearaujo/)
- [GitHub](https://github.com/gabrielLAraujo)
