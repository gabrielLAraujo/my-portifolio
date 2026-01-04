'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Linkedin,
  Github,
  Mail,
  Send,
  Phone,
  MessageCircle,
  Loader2,
  CheckCircle,
  MapPin,
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useToast } from '@/hooks/useToast';
import { useErrorHandler } from '@/hooks/useErrorHandler';
import { StaticMeshGradient } from '@/components/effects/MeshGradient';

interface ContactSectionProps {
  githubUrl: string;
  linkedinUrl: string;
  email: string;
  phone: string;
}

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

function FloatingInput({
  id,
  label,
  type = 'text',
  value,
  onChange,
  error,
  required = false,
}: {
  id: string;
  label: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  required?: boolean;
}) {
  const [isFocused, setIsFocused] = useState(false);
  const hasValue = value.length > 0;

  return (
    <div className="relative">
      <input
        type={type}
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        required={required}
        className={`
          peer w-full px-4 py-4 pt-6 rounded-xl
          bg-bg-tertiary/30 backdrop-blur-sm
          border-2 transition-all duration-300
          text-text-primary placeholder-transparent
          focus:outline-none
          ${
            error
              ? 'border-red-500/50 focus:border-red-500'
              : 'border-dark-border/50 focus:border-accent-green/50 hover:border-dark-border'
          }
        `}
        placeholder={label}
      />
      <label
        htmlFor={id}
        className={`
          absolute left-4 transition-all duration-300 pointer-events-none
          ${
            isFocused || hasValue ? 'top-2 text-xs font-mono' : 'top-1/2 -translate-y-1/2 text-base'
          }
          ${error ? 'text-red-500' : isFocused ? 'text-accent-green' : 'text-text-muted'}
        `}
      >
        {label} {required && '*'}
      </label>
      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            className="mt-1 text-sm text-red-500 font-mono"
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}

function FloatingTextarea({
  id,
  label,
  value,
  onChange,
  error,
  required = false,
  rows = 4,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  error?: string;
  required?: boolean;
  rows?: number;
}) {
  const [isFocused, setIsFocused] = useState(false);
  const hasValue = value.length > 0;

  return (
    <div className="relative">
      <textarea
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        required={required}
        rows={rows}
        className={`
          peer w-full px-4 py-4 pt-6 rounded-xl resize-none
          bg-bg-tertiary/30 backdrop-blur-sm
          border-2 transition-all duration-300
          text-text-primary placeholder-transparent
          focus:outline-none
          ${
            error
              ? 'border-red-500/50 focus:border-red-500'
              : 'border-dark-border/50 focus:border-accent-green/50 hover:border-dark-border'
          }
        `}
        placeholder={label}
      />
      <label
        htmlFor={id}
        className={`
          absolute left-4 transition-all duration-300 pointer-events-none
          ${isFocused || hasValue ? 'top-2 text-xs font-mono' : 'top-6 text-base'}
          ${error ? 'text-red-500' : isFocused ? 'text-accent-green' : 'text-text-muted'}
        `}
      >
        {label} {required && '*'}
      </label>
      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            className="mt-1 text-sm text-red-500 font-mono"
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}

export function ContactSection({ githubUrl, linkedinUrl, email, phone }: ContactSectionProps) {
  const { t, language } = useLanguage();
  const { showSuccess } = useToast();
  const { handleAsyncError } = useErrorHandler();
  const formRef = useRef<HTMLFormElement>(null);

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});

  const validateForm = (): FormErrors => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = language === 'pt' ? 'Nome é obrigatório' : 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = language === 'pt' ? 'Email é obrigatório' : 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = language === 'pt' ? 'Email inválido' : 'Invalid email';
    }

    if (!formData.message.trim()) {
      newErrors.message = language === 'pt' ? 'Mensagem é obrigatória' : 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message =
        language === 'pt'
          ? 'Mensagem deve ter pelo menos 10 caracteres'
          : 'Message must be at least 10 characters';
    }

    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formErrors = validateForm();
    setErrors(formErrors);

    if (Object.keys(formErrors).length > 0) {
      return;
    }

    setIsSubmitting(true);

    const result = await handleAsyncError(
      async () => {
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });

        if (!response.ok) {
          const errorData = await response.json().catch(() => ({}));
          throw new Error(errorData.message || `HTTP ${response.status}`);
        }

        return response.json();
      },
      {
        context: 'form-submit',
        retryAction: async () => handleSubmit(e),
      }
    );

    setIsSubmitting(false);

    if (result) {
      setIsSuccess(true);
      showSuccess(
        language === 'pt' ? 'Mensagem enviada!' : 'Message sent!',
        language === 'pt'
          ? 'Obrigado pelo contato! Responderei em breve.'
          : "Thanks for reaching out! I'll get back to you soon.",
        { duration: 6000 }
      );

      setTimeout(() => {
        setFormData({ name: '', email: '', message: '' });
        setErrors({});
        setIsSuccess(false);
      }, 3000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const whatsappNumber = phone.replace(/\D/g, '');
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  const socialLinks = [
    {
      icon: Linkedin,
      href: linkedinUrl,
      label: 'LinkedIn',
      color: 'hover:text-[#0077b5] hover:border-[#0077b5]/50',
    },
    {
      icon: Github,
      href: githubUrl,
      label: 'GitHub',
      color: 'hover:text-text-primary hover:border-text-primary/50',
    },
    {
      icon: Mail,
      href: `mailto:${email}`,
      label: 'Email',
      color: 'hover:text-red-400 hover:border-red-400/50',
    },
    {
      icon: Phone,
      href: `tel:${phone.replace(/\D/g, '')}`,
      label: phone,
      color: 'hover:text-accent-green hover:border-accent-green/50',
    },
    {
      icon: MessageCircle,
      href: whatsappUrl,
      label: 'WhatsApp',
      color: 'hover:text-[#25D366] hover:border-[#25D366]/50',
    },
  ];

  return (
    <section id="contact" className="relative py-24 md:py-32 bg-bg-secondary overflow-hidden">
      {/* Background */}
      <StaticMeshGradient className="opacity-30" />
      <div className="absolute inset-0 dot-background opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 rounded-full bg-accent-green/10 text-accent-green text-sm font-mono mb-6"
          >
            {language === 'pt' ? '// Contato' : '// Contact'}
          </motion.span>

          <h2 className="section-heading gradient-text-static mb-4">{t('contact')}</h2>

          <p className="section-subheading">{t('interested')}</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-display font-bold text-text-primary mb-6">
                {language === 'pt' ? 'Vamos conversar!' : "Let's talk!"}
              </h3>
              <p className="text-text-secondary leading-relaxed">
                {language === 'pt'
                  ? 'Estou sempre aberto a novas oportunidades e projetos interessantes. Se você tem uma ideia ou projeto em mente, entre em contato!'
                  : "I'm always open to new opportunities and interesting projects. If you have an idea or project in mind, get in touch!"}
              </p>
            </div>

            {/* Location */}
            <div className="flex items-center gap-3 text-text-secondary">
              <div className="p-2 rounded-lg bg-accent-purple/10">
                <MapPin className="w-5 h-5 text-accent-purple" />
              </div>
              <span>São Paulo, Brasil</span>
            </div>

            {/* Social Links */}
            <div className="space-y-3">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`
                    flex items-center gap-4 p-4 rounded-xl
                    bg-bg-tertiary/30 backdrop-blur-sm
                    border border-dark-border/50
                    text-text-secondary
                    transition-all duration-300
                    ${link.color}
                  `}
                  whileHover={{ x: 5 }}
                >
                  <link.icon className="w-5 h-5" />
                  <span className="font-medium">{link.label}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="p-8 rounded-2xl bg-bg-tertiary/20 backdrop-blur-sm border border-dark-border/50">
              <h3 className="text-xl font-display font-semibold text-text-primary mb-6">
                {language === 'pt' ? 'Envie uma mensagem' : 'Send a message'}
              </h3>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-5" noValidate>
                <FloatingInput
                  id="name"
                  label={t('name')}
                  value={formData.name}
                  onChange={handleChange}
                  error={errors.name}
                  required
                />

                <FloatingInput
                  id="email"
                  label={t('email')}
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  error={errors.email}
                  required
                />

                <FloatingTextarea
                  id="message"
                  label={t('message')}
                  value={formData.message}
                  onChange={handleChange}
                  error={errors.message}
                  required
                  rows={5}
                />

                <motion.button
                  type="submit"
                  disabled={isSubmitting || isSuccess}
                  className={`
                    w-full py-4 rounded-xl font-medium
                    flex items-center justify-center gap-2
                    transition-all duration-300
                    ${isSuccess ? 'bg-accent-green text-bg-primary' : 'btn-primary'}
                    disabled:opacity-60 disabled:cursor-not-allowed
                  `}
                  whileHover={!isSubmitting && !isSuccess ? { scale: 1.02 } : undefined}
                  whileTap={!isSubmitting && !isSuccess ? { scale: 0.98 } : undefined}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>{language === 'pt' ? 'Enviando...' : 'Sending...'}</span>
                    </>
                  ) : isSuccess ? (
                    <>
                      <CheckCircle className="w-5 h-5" />
                      <span>{language === 'pt' ? 'Enviado!' : 'Sent!'}</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>{t('send')}</span>
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
