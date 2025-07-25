"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaPaperPlane,
  FaPhone,
  FaWhatsapp,
  FaSpinner,
} from "react-icons/fa";
import { useLanguage } from "@/contexts/LanguageContext";
import { useToast } from "@/hooks/useToast";
import { useErrorHandler } from "@/hooks/useErrorHandler";

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

export function ContactSection({
  githubUrl,
  linkedinUrl,
  email,
  phone,
}: ContactSectionProps) {
  const { t, language } = useLanguage();
  const { showSuccess } = useToast();
  const { handleAsyncError } = useErrorHandler();

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});

  const validateForm = (): FormErrors => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name =
        language === "pt" ? "Nome é obrigatório" : "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email =
        language === "pt" ? "Email é obrigatório" : "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = language === "pt" ? "Email inválido" : "Invalid email";
    }

    if (!formData.message.trim()) {
      newErrors.message =
        language === "pt" ? "Mensagem é obrigatória" : "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message =
        language === "pt"
          ? "Mensagem deve ter pelo menos 10 caracteres"
          : "Message must be at least 10 characters";
    }

    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validação
    const formErrors = validateForm();
    setErrors(formErrors);

    if (Object.keys(formErrors).length > 0) {
      return;
    }

    setIsSubmitting(true);

    const result = await handleAsyncError(
      async () => {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });

        if (!response.ok) {
          const errorData = await response.json().catch(() => ({}));
          throw new Error(errorData.message || `HTTP ${response.status}`);
        }

        return response.json();
      },
      {
        context: "form-submit",
        retryAction: async () => handleSubmit(e),
      }
    );

    setIsSubmitting(false);

    if (result) {
      showSuccess(
        language === "pt" ? "Mensagem enviada!" : "Message sent!",
        language === "pt"
          ? "Obrigado pelo contato! Responderei em breve."
          : "Thanks for reaching out! I'll get back to you soon.",
        { duration: 6000 }
      );

      // Limpar formulário
      setFormData({ name: "", email: "", message: "" });
      setErrors({});
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Limpar erro do campo quando o usuário começar a digitar
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  // Formatar o número de telefone para o WhatsApp (remover espaços e caracteres especiais)
  const whatsappNumber = phone.replace(/\D/g, "");
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  return (
    <section
      id="contact"
      className="py-20 bg-white dark:bg-blue-950 text-blue-900 dark:text-blue-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-4">
            {t("contact")}
          </h2>
          <p className="text-lg text-blue-700 dark:text-blue-200">
            {t("interested")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-6">
              {language === "pt" ? "Meus contatos" : "My contacts"}
            </h3>

            <motion.a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 rounded-lg bg-blue-50 dark:bg-blue-900 hover:bg-blue-100 dark:hover:bg-blue-800 transition-colors focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <FaLinkedin className="text-2xl text-blue-600 dark:text-blue-400" />
              <span className="text-blue-700 dark:text-blue-300">LinkedIn</span>
            </motion.a>

            <motion.a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 rounded-lg bg-blue-50 dark:bg-blue-900 hover:bg-blue-100 dark:hover:bg-blue-800 transition-colors focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <FaGithub className="text-2xl text-blue-700 dark:text-blue-300" />
              <span className="text-blue-700 dark:text-blue-300">GitHub</span>
            </motion.a>

            <motion.a
              href={`mailto:${email}`}
              className="flex items-center gap-3 p-4 rounded-lg bg-blue-50 dark:bg-blue-900 hover:bg-blue-100 dark:hover:bg-blue-800 transition-colors focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <FaEnvelope className="text-2xl text-red-500 dark:text-red-400" />
              <span className="text-blue-700 dark:text-blue-300">{email}</span>
            </motion.a>

            <motion.a
              href={`tel:${phone.replace(/\D/g, "")}`}
              className="flex items-center gap-3 p-4 rounded-lg bg-blue-50 dark:bg-blue-900 hover:bg-blue-100 dark:hover:bg-blue-800 transition-colors focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <FaPhone className="text-2xl text-green-500 dark:text-green-400" />
              <span className="text-blue-700 dark:text-blue-300">{phone}</span>
            </motion.a>

            <motion.a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 rounded-lg bg-blue-50 dark:bg-blue-900 hover:bg-blue-100 dark:hover:bg-blue-800 transition-colors focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <FaWhatsapp className="text-2xl text-green-600 dark:text-green-500" />
              <span className="text-blue-700 dark:text-blue-300">
                {language === "pt"
                  ? "Iniciar conversa no WhatsApp"
                  : "Start a WhatsApp chat"}
              </span>
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-blue-50 dark:bg-blue-900 p-6 rounded-xl shadow-sm"
          >
            <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-6">
              {language === "pt" ? "Envie uma mensagem" : "Send a message"}
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              <div>
                <label htmlFor="name" className="form-label">
                  {t("name")} *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "name-error" : undefined}
                  className={`form-input ${
                    errors.name
                      ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                      : ""
                  }`}
                />
                {errors.name && (
                  <p
                    id="name-error"
                    className="mt-1 text-sm text-red-600 dark:text-red-400"
                    role="alert"
                  >
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="form-label">
                  {t("email")} *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  className={`form-input ${
                    errors.email
                      ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                      : ""
                  }`}
                />
                {errors.email && (
                  <p
                    id="email-error"
                    className="mt-1 text-sm text-red-600 dark:text-red-400"
                    role="alert"
                  >
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="form-label">
                  {t("message")} *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  aria-invalid={!!errors.message}
                  aria-describedby={
                    errors.message ? "message-error" : undefined
                  }
                  className={`form-input resize-none ${
                    errors.message
                      ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                      : ""
                  }`}
                  placeholder={
                    language === "pt" ? "Sua mensagem..." : "Your message..."
                  }
                />
                {errors.message && (
                  <p
                    id="message-error"
                    className="mt-1 text-sm text-red-600 dark:text-red-400"
                    role="alert"
                  >
                    {errors.message}
                  </p>
                )}
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full disabled:opacity-60 disabled:cursor-not-allowed"
                whileHover={!isSubmitting ? { scale: 1.02 } : undefined}
                whileTap={!isSubmitting ? { scale: 0.98 } : undefined}
                aria-describedby={isSubmitting ? "submit-status" : undefined}
              >
                {isSubmitting ? (
                  <>
                    <FaSpinner className="animate-spin" aria-hidden="true" />
                    <span id="submit-status" aria-live="polite">
                      {language === "pt" ? "Enviando..." : "Sending..."}
                    </span>
                  </>
                ) : (
                  <>
                    <FaPaperPlane aria-hidden="true" />
                    {t("send")}
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
