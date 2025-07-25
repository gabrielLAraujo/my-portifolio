# 🚀 Portfólio Gabriel Leite Araújo

Portfólio pessoal desenvolvido com Next.js, TypeScript e Tailwind CSS, apresentando projetos e habilidades como desenvolvedor Full Stack.

## ✨ Características

- 🎨 **Design Moderno**: Interface limpa e responsiva
- 🌙 **Tema Escuro/Claro**: Alternância entre temas
- 🌍 **Multilíngue**: Suporte a Português e Inglês
- 📱 **Responsivo**: Otimizado para todos os dispositivos
- ⚡ **Performance**: Otimizado para velocidade e SEO
- 🔍 **SEO Avançado**: Meta tags, Open Graph, dados estruturados
- 📧 **Formulário de Contato**: Envio de emails funcionais
- 🎭 **Animações**: Transições suaves com Framer Motion

## 🛠️ Tecnologias Utilizadas

### Frontend
- **Next.js 15** - Framework React
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Estilização
- **Framer Motion** - Animações
- **React Icons** - Ícones

### Funcionalidades
- **Next Themes** - Alternância de temas
- **Nodemailer** - Envio de emails
- **React Hook Form** - Gerenciamento de formulários

### SEO e Performance
- **Metadados otimizados** - Open Graph, Twitter Cards
- **Dados estruturados** - Schema.org JSON-LD
- **Sitemap dinâmico** - Geração automática
- **Robots.txt** - Controle de indexação

## 🚀 Como Executar

### Pré-requisitos
- Node.js 18+ 
- npm, yarn ou pnpm

### Instalação

```bash
# Clone o repositório
git clone https://github.com/gabrielLAraujo/my-portifolio.git

# Entre no diretório
cd my-portifolio

# Instale as dependências
npm install
# ou
yarn install
# ou
pnpm install
```

### Desenvolvimento

```bash
# Execute o servidor de desenvolvimento
npm run dev
# ou
yarn dev
# ou
pnpm dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

### Build e Deploy

```bash
# Gere o build de produção
npm run build

# Execute o build de produção
npm run start
```

## 📁 Estrutura do Projeto

```
src/
├── app/                    # App Router (Next.js 13+)
│   ├── api/               # API Routes
│   ├── globals.css        # Estilos globais
│   ├── layout.tsx         # Layout principal
│   ├── metadata.ts        # Metadados SEO
│   ├── page.tsx          # Página inicial
│   ├── robots.ts         # Robots.txt dinâmico
│   └── sitemap.ts        # Sitemap dinâmico
├── components/            # Componentes React
│   ├── AboutSection.tsx   # Seção sobre
│   ├── ContactSection.tsx # Seção de contato
│   ├── HeroSection.tsx    # Seção principal
│   ├── ProjectsSection.tsx # Seção de projetos
│   ├── SkillsSection.tsx  # Seção de habilidades
│   └── ...               # Outros componentes
├── config/               # Configurações
├── contexts/             # Contexts React
├── data/                 # Dados estáticos
└── i18n/                # Internacionalização
```

## ⚙️ Configuração

### Variáveis de Ambiente

Crie um arquivo `.env.local` na raiz do projeto:

```env
# Email (Nodemailer)
SMTP_HOST=seu-smtp-host
SMTP_PORT=587
SMTP_USER=seu-email@exemplo.com
SMTP_PASS=sua-senha
```

### Imagens

Adicione suas imagens na pasta `public/`:

```
public/
├── profile.jpg           # Sua foto de perfil (recomendado: 800x800px)
└── projects/            # Imagens dos projetos (opcional)
    ├── projeto1.jpg
    └── projeto2.jpg
```

## 🎨 Personalização

### Informações Pessoais

Edite os arquivos de configuração:

- `src/config/contact.ts` - Informações de contato
- `src/i18n/translations.ts` - Textos em PT/EN
- `src/components/ProjectsSection.tsx` - Seus projetos

### Cores e Temas

Modifique o arquivo `tailwind.config.js` para personalizar as cores.

### Metadados SEO

Atualize `src/app/metadata.ts` com suas informações:

```typescript
export const metadata: Metadata = {
  title: "Seu Nome - Desenvolvedor Full Stack",
  description: "Sua descrição profissional...",
  // ...outras configurações
};
```

## 📈 Funcionalidades SEO

- ✅ Meta tags otimizadas
- ✅ Open Graph para redes sociais
- ✅ Twitter Cards
- ✅ Dados estruturados (Schema.org)
- ✅ Sitemap XML automático
- ✅ Robots.txt configurado
- ✅ Canonical URLs
- ✅ Performance otimizada

## 🤝 Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para:

1. Fazer um fork do projeto
2. Criar uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abrir um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para detalhes.

## 📞 Contato

Gabriel Leite Araújo - [LinkedIn](https://linkedin.com/in/gabrielaraujo) - [GitHub](https://github.com/gabrielLAraujo)

---

⭐ Se este projeto te ajudou, considere dar uma estrela!
