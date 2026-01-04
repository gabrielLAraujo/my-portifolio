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

## 🎨 Personalizar

### Seus Dados

- **Projetos**: `src/data/projects/projects.data.ts`
- **Skills**: `src/data/skills/skills.data.ts`
- **Traduções**: `src/i18n/translations.ts`
- **Contato**: `src/config/contact.ts`

### Cores e Estilos

- **Cores**: `src/styles/tokens/colors.ts`
- **Tailwind Config**: `tailwind.config.js`

### Email (Formulário de Contato)

Crie `.env.local`:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=seu-email@gmail.com
SMTP_PASS=sua-senha-app
```

## 💡 Recursos

- 🌓 Dark/Light mode (Alt + T)
- 🌍 PT-BR / EN (Alt + L)
- ⌨️ Atalhos de teclado
- 📱 100% Responsivo
- 🎨 Animações suaves
- 📧 Formulário com validação
- ♿ Acessível

## 🛠️ Stack

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- Framer Motion

## 📁 Estrutura

```
src/
├── app/              # Páginas e API
├── components/       # Componentes React
│   ├── sections/     # Seções da home
│   ├── ui/           # Componentes base
│   └── layout/       # Layout components
├── data/             # Seus dados (projetos, skills)
├── i18n/             # Traduções
├── hooks/            # Custom hooks
├── contexts/         # Contexts (tema, idioma)
└── styles/           # Estilos e tokens
```

## 📞 Contato

- [Portfolio](https://app.frauchesgabriel.work)
- [LinkedIn](https://linkedin.com/in/gabrielaraujo)
- [GitHub](https://github.com/gabrielLAraujo)

---

Feito com ❤️ usando Next.js
