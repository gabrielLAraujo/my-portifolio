"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope, FaPaperPlane, FaPhone, FaWhatsapp } from "react-icons/fa";
import { useLanguage } from "@/contexts/LanguageContext";

interface ContactSectionProps {
  githubUrl: string;
  linkedinUrl: string;
  email: string;
  phone: string;
}

export function ContactSection({ githubUrl, linkedinUrl, email, phone }: ContactSectionProps) {
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    
    try {
      // Aqui você implementaria a lógica de envio do formulário
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulação de envio
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error('Erro ao enviar email:', error);
      setStatus("error");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Formatar o número de telefone para o WhatsApp (remover espaços e caracteres especiais)
  const whatsappNumber = phone.replace(/\D/g, '');
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            {t("contact")}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
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
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
              {language === "pt" ? "Meus contatos" : "My contacts"}
            </h3>
            
            <motion.a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <FaLinkedin className="text-2xl text-blue-600 dark:text-blue-400" />
              <span className="text-gray-700 dark:text-gray-300">LinkedIn</span>
            </motion.a>

            <motion.a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <FaGithub className="text-2xl text-gray-700 dark:text-gray-300" />
              <span className="text-gray-700 dark:text-gray-300">GitHub</span>
            </motion.a>

            <motion.a
              href={`mailto:${email}`}
              className="flex items-center gap-3 p-4 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <FaEnvelope className="text-2xl text-red-500 dark:text-red-400" />
              <span className="text-gray-700 dark:text-gray-300">{email}</span>
            </motion.a>
            
            <motion.a
              href={`tel:${phone.replace(/\D/g, '')}`}
              className="flex items-center gap-3 p-4 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <FaPhone className="text-2xl text-green-500 dark:text-green-400" />
              <span className="text-gray-700 dark:text-gray-300">{phone}</span>
            </motion.a>
            
            <motion.a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <FaWhatsapp className="text-2xl text-green-600 dark:text-green-500" />
              <span className="text-gray-700 dark:text-gray-300">
                {language === "pt" ? "Iniciar conversa no WhatsApp" : "Start a WhatsApp chat"}
              </span>
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-sm"
          >
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
              {language === "pt" ? "Envie uma mensagem" : "Send a message"}
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  {t("name")}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  {t("email")}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  {t("message")}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent"
                ></textarea>
              </div>
              
              <motion.button
                type="submit"
                disabled={status === "sending"}
                className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {status === "sending" ? (
                  <>
                    <FaPaperPlane className="animate-pulse" />
                    {t("sending")}
                  </>
                ) : status === "success" ? (
                  <span className="text-green-300">{t("messageSent")}</span>
                ) : status === "error" ? (
                  <span className="text-red-300">{t("messageError")}</span>
                ) : (
                  <>
                    <FaPaperPlane />
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