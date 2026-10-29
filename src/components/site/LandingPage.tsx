import Image from 'next/image';
import {
  ArrowRight,
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Plus,
} from 'lucide-react';
import { contactInfo } from '@/config/contact';
import {
  content,
  whatsappHref,
  type CaseStudy,
  type Locale,
  type SiteContent,
} from '@/content/site';
import { ContactForm } from './ContactForm';
import { MobileMenu } from './MobileMenu';
import { ThemeToggle } from './ThemeToggle';

const iconProps = { className: 'h-5 w-5', strokeWidth: 1.75, 'aria-hidden': true } as const;

function sectionIds(c: SiteContent) {
  const [services, cases, process, about, contact] = c.nav.map((item) => item.href.slice(1));
  return { services, cases, process, about, contact };
}

function SiteHeader({ c, whatsapp }: { c: SiteContent; whatsapp: string }) {
  const homeHref = c.locale === 'pt' ? '/' : '/en';

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg/90 backdrop-blur supports-[backdrop-filter]:bg-bg/80">
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded-control focus:bg-surface focus:px-4 focus:py-2 focus:text-small focus:font-medium focus:text-ink"
      >
        {c.skipToContent}
      </a>
      <div className="container-content relative flex h-16 items-center justify-between gap-4">
        <a
          href={homeHref}
          className="whitespace-nowrap text-body font-semibold tracking-tight text-ink"
        >
          Gabriel Leite Araújo
        </a>

        <nav aria-label={c.locale === 'pt' ? 'Seções' : 'Sections'} className="hidden lg:block">
          <ul className="flex items-center gap-6">
            {c.nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="whitespace-nowrap text-small font-medium text-ink-muted transition-colors duration-150 hover:text-ink"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-1">
          <a
            href={c.switchLanguage.href}
            hrefLang={c.locale === 'pt' ? 'en' : 'pt-BR'}
            aria-label={c.switchLanguage.ariaLabel}
            className="inline-flex h-10 items-center rounded-control px-2.5 text-small font-medium text-ink-muted transition-colors duration-150 hover:bg-surface-muted hover:text-ink"
          >
            {c.switchLanguage.label}
          </a>
          <ThemeToggle label={c.themeToggle} />
          <a
            href={whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary ml-2 hidden h-10 px-4 md:inline-flex"
          >
            <MessageCircle {...iconProps} />
            WhatsApp
          </a>
          <MobileMenu
            links={c.nav}
            openLabel={c.openMenu}
            closeLabel={c.closeMenu}
            cta={{ href: whatsapp, label: c.hero.primaryCta }}
          />
        </div>
      </div>
    </header>
  );
}

function Hero({
  c,
  primaryHref,
  casesHref,
}: {
  c: SiteContent;
  primaryHref: string;
  casesHref: string;
}) {
  const external = primaryHref.startsWith('http');

  return (
    <section className="container-content grid items-center gap-10 py-12 md:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] md:gap-16 md:py-24">
      <div className="animate-enter">
        <p className="eyebrow">{c.hero.eyebrow}</p>
        <h1 className="mt-4 text-display-sm text-ink lg:text-display">{c.hero.title}</h1>
        <p className="mt-6 max-w-prose text-lead text-ink-muted">{c.hero.lead}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={primaryHref}
            className="btn-primary"
            {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
          >
            {external ? <MessageCircle {...iconProps} /> : <Mail {...iconProps} />}
            {c.hero.primaryCta}
          </a>
          <a href={casesHref} className="btn-secondary">
            {c.hero.secondaryCta}
            <ArrowRight {...iconProps} />
          </a>
        </div>
      </div>

      <figure className="mx-auto w-full max-w-[18rem] md:max-w-sm">
        <Image
          src="/profile.jpg"
          alt={c.hero.photoAlt}
          width={720}
          height={900}
          priority
          sizes="(min-width: 768px) 384px, 288px"
          className="aspect-[4/5] w-full rounded-card border border-line object-cover object-[50%_60%]"
        />
        <figcaption className="mt-3 text-small text-ink-muted">{c.hero.caption}</figcaption>
      </figure>
    </section>
  );
}

function SectionHeading({
  eyebrow,
  title,
  intro,
  id,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  id: string;
}) {
  return (
    <div className="max-w-prose">
      <p className="eyebrow">{eyebrow}</p>
      <h2 id={`${id}-title`} className="heading-2 mt-3">
        {title}
      </h2>
      {intro ? <p className="mt-4 text-lead text-ink-muted">{intro}</p> : null}
    </div>
  );
}

function Services({ c, id, casesId }: { c: SiteContent; id: string; casesId: string }) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="section border-t border-line">
      <div className="container-content grid gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)] md:gap-16">
        <SectionHeading
          eyebrow={c.services.eyebrow}
          title={c.services.title}
          intro={c.services.intro}
          id={id}
        />
        <div>
          <ol className="divide-y divide-line border-y border-line">
            {c.services.items.map((item, index) => (
              <li key={item.title} className="grid gap-2 py-6 sm:grid-cols-[3rem_minmax(0,1fr)]">
                <span className="font-mono text-small text-ink-muted" aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="text-h3 text-ink">{item.title}</h3>
                  <p className="mt-2 text-body text-ink-muted">{item.text}</p>
                  {item.price ? (
                    <p className="mt-3 text-small">
                      <span className="font-medium text-ink">{item.price}</span>
                      {item.timeline ? (
                        <span className="text-ink-muted"> · {item.timeline}</span>
                      ) : null}
                    </p>
                  ) : null}
                  {item.example ? (
                    <p className="mt-2 text-small text-ink-muted">
                      {c.services.exampleLabel}:{' '}
                      <a href={`#${casesId}`} className="link">
                        {item.example}
                      </a>
                    </p>
                  ) : null}
                </div>
              </li>
            ))}
          </ol>
          {c.services.extras.length > 0 || c.services.priceNote ? (
            <div className="mt-6">
              {c.services.extras.length > 0 ? (
                <ul className="space-y-1 text-small font-medium text-ink">
                  {c.services.extras.map((extra) => (
                    <li key={extra}>{extra}</li>
                  ))}
                </ul>
              ) : null}
              {c.services.priceNote ? (
                <p className="mt-3 text-small text-ink-muted">{c.services.priceNote}</p>
              ) : null}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}

function CaseFacts({ item, labels }: { item: CaseStudy; labels: SiteContent['cases']['labels'] }) {
  const rows = [
    { label: labels.problem, text: item.problem },
    { label: labels.solution, text: item.solution },
    { label: labels.result, text: item.result },
  ];

  return (
    <dl className="space-y-4">
      {rows.map((row) => (
        <div key={row.label}>
          <dt className="text-small font-medium text-ink">{row.label}</dt>
          <dd className="mt-1 text-body text-ink-muted">{row.text}</dd>
        </div>
      ))}
    </dl>
  );
}

function CaseMeta({ item }: { item: CaseStudy }) {
  return (
    <>
      <ul className="flex flex-wrap gap-2" aria-label="Stack">
        {item.stack.map((tech) => (
          <li key={tech} className="chip">
            {tech}
          </li>
        ))}
      </ul>
      {item.links.length > 0 ? (
        <ul className="flex flex-wrap gap-x-6 gap-y-2">
          {item.links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="link inline-flex items-center gap-1"
              >
                {link.label}
                <ArrowUpRight className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>
      ) : null}
    </>
  );
}

function Cases({ c, id }: { c: SiteContent; id: string }) {
  const [featured, ...rest] = c.cases.items;

  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className="section border-t border-line bg-surface-muted"
    >
      <div className="container-content">
        <SectionHeading
          eyebrow={c.cases.eyebrow}
          title={c.cases.title}
          intro={c.cases.intro}
          id={id}
        />

        <article className="card mt-10 grid gap-8 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] md:p-8">
          <div className="space-y-4">
            <p className="text-small font-medium text-primary">{featured.tag}</p>
            <h3 className="text-h2-sm text-ink">{featured.name}</h3>
            {featured.note ? (
              <p className="inline-flex rounded-full bg-primary-soft px-3 py-1 text-small font-medium text-primary">
                {featured.note}
              </p>
            ) : null}
            <div className="space-y-4 pt-2">
              <CaseMeta item={featured} />
            </div>
          </div>
          <div className="space-y-6">
            {featured.image ? (
              <Image
                src={featured.image.src}
                alt={featured.image.alt}
                width={featured.image.width}
                height={featured.image.height}
                sizes="(min-width: 1120px) 700px, (min-width: 768px) 62vw, 100vw"
                className="aspect-[16/10] w-full rounded-control border border-line object-cover object-top"
              />
            ) : null}
            <CaseFacts item={featured} labels={c.cases.labels} />
          </div>
        </article>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {rest.map((item) => (
            <article key={item.id} className="card flex flex-col gap-6">
              {item.image ? (
                <Image
                  src={item.image.src}
                  alt={item.image.alt}
                  width={item.image.width}
                  height={item.image.height}
                  sizes="(min-width: 1120px) 520px, (min-width: 768px) 45vw, 100vw"
                  className="aspect-[16/10] w-full rounded-control border border-line object-cover object-top"
                />
              ) : null}
              <div>
                <p className="text-small font-medium text-primary">{item.tag}</p>
                <h3 className="mt-1 text-h3 text-ink">{item.name}</h3>
              </div>
              <CaseFacts item={item} labels={c.cases.labels} />
              <div className="mt-auto space-y-4">
                <CaseMeta item={item} />
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12">
          <h3 className="text-h3 text-ink">{c.cases.othersTitle}</h3>
          <ul className="mt-4 divide-y divide-line border-y border-line">
            {c.cases.others.map((other) => (
              <li
                key={other.name}
                className="flex flex-col gap-1 py-4 sm:flex-row sm:items-baseline sm:gap-6"
              >
                <a
                  href={other.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link inline-flex shrink-0 items-center gap-1 sm:w-40"
                >
                  {other.name}
                  <ArrowUpRight className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
                </a>
                <span className="text-body text-ink-muted">{other.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Process({ c, id }: { c: SiteContent; id: string }) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="section border-t border-line">
      <div className="container-content">
        <SectionHeading eyebrow={c.process.eyebrow} title={c.process.title} id={id} />
        <ol className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {c.process.steps.map((step, index) => (
            <li key={step.title} className="border-t-2 border-primary pt-5">
              <span className="font-mono text-small text-primary" aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-2 text-h3 text-ink">{step.title}</h3>
              <p className="mt-2 text-body text-ink-muted">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function About({ c, id }: { c: SiteContent; id: string }) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className="section border-t border-line bg-surface-muted"
    >
      <div className="container-content grid gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)] md:gap-16">
        <SectionHeading eyebrow={c.about.eyebrow} title={c.about.title} id={id} />
        <div>
          <div className="max-w-prose space-y-4 text-body text-ink-muted">
            {c.about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <h3 className="mt-8 text-small font-medium text-ink">{c.about.stackLabel}</h3>
          <ul className="mt-3 flex flex-wrap gap-2">
            {c.about.stack.map((tech) => (
              <li key={tech} className="chip">
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Faq({ c }: { c: SiteContent }) {
  const { id } = c.faq;

  return (
    <section id={id} aria-labelledby={`${id}-title`} className="section border-t border-line">
      <div className="container-content grid gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)] md:gap-16">
        <SectionHeading eyebrow={c.faq.eyebrow} title={c.faq.title} id={id} />
        <div className="divide-y divide-line border-y border-line">
          {c.faq.items.map((item) => (
            <details key={item.question} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-body font-medium text-ink [&::-webkit-details-marker]:hidden">
                {item.question}
                <Plus
                  className="h-5 w-5 shrink-0 text-ink-muted transition-transform duration-150 group-open:rotate-45"
                  strokeWidth={1.75}
                  aria-hidden="true"
                />
              </summary>
              <p className="mt-3 max-w-prose text-body text-ink-muted">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact({ c, id, whatsapp }: { c: SiteContent; id: string; whatsapp: string }) {
  const channels = [
    { icon: Mail, label: contactInfo.email, href: `mailto:${contactInfo.email}`, external: false },
    { icon: Linkedin, label: 'LinkedIn', href: contactInfo.linkedin, external: true },
    { icon: Github, label: 'GitHub', href: contactInfo.github, external: true },
  ];

  return (
    <section id={id} aria-labelledby={`${id}-title`} className="section border-t border-line">
      <div className="container-content">
        <div className="mx-auto max-w-prose text-center">
          <p className="eyebrow">{c.contact.eyebrow}</p>
          <h2 id={`${id}-title`} className="heading-2 mt-3">
            {c.contact.title}
          </h2>
          <p className="mt-4 text-lead text-ink-muted">{c.contact.lead}</p>
        </div>

        <div className="mt-12 grid gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] md:gap-16">
          <div className="space-y-6">
            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full sm:w-auto"
            >
              <MessageCircle {...iconProps} />
              {c.contact.whatsappCta}
            </a>
            <ul className="space-y-3">
              {channels.map((channel) => (
                <li key={channel.href}>
                  <a
                    href={channel.href}
                    {...(channel.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className="inline-flex items-center gap-3 text-body text-ink transition-colors duration-150 hover:text-primary"
                  >
                    <channel.icon
                      className="h-5 w-5 text-ink-muted"
                      strokeWidth={1.75}
                      aria-hidden="true"
                    />
                    {channel.label}
                  </a>
                </li>
              ))}
              <li className="inline-flex items-center gap-3 text-body text-ink-muted">
                <MapPin className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
                {c.contact.location}
              </li>
            </ul>
          </div>
          <ContactForm labels={c.contact.form} />
        </div>
      </div>
    </section>
  );
}

function SiteFooter({ c }: { c: SiteContent }) {
  return (
    <footer className="border-t border-line py-8">
      <div className="container-content flex flex-col gap-4 text-small text-ink-muted sm:flex-row sm:items-center sm:justify-between">
        <p>{c.footer.rights}</p>
        <ul className="flex gap-6">
          <li>
            <a href={c.switchLanguage.href} className="hover:text-ink">
              {c.switchLanguage.ariaLabel}
            </a>
          </li>
          <li>
            <a
              href={contactInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-ink"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href={contactInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-ink"
            >
              GitHub
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export function LandingPage({ locale }: { locale: Locale }) {
  const c = content[locale];
  const ids = sectionIds(c);
  const whatsapp = whatsappHref(locale);
  const heroPrimary = locale === 'pt' ? whatsapp : `mailto:${contactInfo.email}`;

  return (
    <div lang={c.htmlLang}>
      <SiteHeader c={c} whatsapp={whatsapp} />
      <main id="conteudo" tabIndex={-1} className="focus:outline-none">
        <Hero c={c} primaryHref={heroPrimary} casesHref={`#${ids.cases}`} />
        <Services c={c} id={ids.services} casesId={ids.cases} />
        <Cases c={c} id={ids.cases} />
        <Process c={c} id={ids.process} />
        <About c={c} id={ids.about} />
        <Faq c={c} />
        <Contact c={c} id={ids.contact} whatsapp={whatsapp} />
      </main>
      <SiteFooter c={c} />
    </div>
  );
}
