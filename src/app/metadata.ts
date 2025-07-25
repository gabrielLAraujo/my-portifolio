import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Gabriel Leite Araujo - Full Stack Software Engineer",
    template: "%s | Gabriel Araujo"
  },
  description: "Full Stack Software Engineer especializado em React, Next.js, Node.js e TypeScript. Criando soluções web modernas e eficientes com foco em experiência do usuário.",
  keywords: [
    "Gabriel Leite Araújo",
    "Full Stack Software Engineer",
    "Desenvolvedor Full Stack",
    "Desenvolvedor Web",
    "Desenvolvedor Frontend",
    "Desenvolvedor Backend",
    "Desenvolvedor Full Stack",
    "Desenvolvedor Web",
    "Desenvolvedor Frontend",
    "Desenvolvedor Backend",
    "Software Engineer",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "JavaScript",
    "Frontend",
    "Backend",
    "Desenvolvedor Web",
    "Portfolio",
    "Programador"
  ],
  authors: [{ name: "Gabriel Leite Araújo" }],
  creator: "Gabriel Leite Araújo",
  publisher: "Gabriel Leite Araújo",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://app.frauchesgabriel.work",
    title: "Gabriel Leite Araújo - Full Stack Software Engineer",
    description: "Full Stack Software Engineer especializado em React, Next.js, Node.js e TypeScript. Criando soluções web modernas e eficientes.",
    siteName: "Gabriel Araujo Portfolio",
    images: [
      {
        url: "/profile.jpg",
        width: 800,
        height: 800,
        alt: "Gabriel Leite Araújo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gabriel Leite Araújo - Full Stack Software Engineer",
    description: "Full Stack Software Engineer especializado em React, Next.js, Node.js e TypeScript.",
    images: ["/profile.jpg"],
  },
  alternates: {
    canonical: "https://app.frauchesgabriel.work",
  },
  category: "technology",
}; 