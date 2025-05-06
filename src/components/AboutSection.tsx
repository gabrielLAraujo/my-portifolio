"use client";

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-white dark:bg-blue-950 text-blue-900 dark:text-blue-100">
      <div className="max-w-3xl mx-auto px-4 text-center space-y-6">
        <h2 className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-4">Sobre mim</h2>
        <p className="text-lg">
          Olá! Sou Gabriel, desenvolvedor focado em soluções web modernas. Minha stack principal é <b>TypeScript</b>, <b>Fastify</b>, <b>Prisma</b> e <b>Next.js</b>. Busco criar produtos robustos, performáticos e com ótima experiência de usuário. Meu objetivo é atuar em projetos inovadores, colaborando com times de alta performance.
        </p>
      </div>
    </section>
  );
} 