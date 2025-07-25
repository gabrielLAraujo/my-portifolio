"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  FaGraduationCap,
  FaBriefcase,
  FaMapMarkerAlt,
  FaCode,
} from "react-icons/fa";
import { useEffect, useState } from "react";

function AnimatedCounter({
  end,
  duration = 2000,
}: {
  end: number;
  duration?: number;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);

      setCount(Math.floor(progress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [end, duration]);

  return <span>{count}</span>;
}

export function AboutSection() {
  const { t, language } = useLanguage();

  const stats = [
    {
      icon: FaBriefcase,
      value: "7+",
      numericValue: 7,
      label: language === "pt" ? "Anos de Experiência" : "Years of Experience",
    },
    {
      icon: FaCode,
      value: "20+",
      numericValue: 20,
      label: language === "pt" ? "Projetos Concluídos" : "Completed Projects",
    },
    {
      icon: FaGraduationCap,
      value: "CS",
      numericValue: null,
      label: language === "pt" ? "Ciência da Computação" : "Computer Science",
    },
    {
      icon: FaMapMarkerAlt,
      value: "BR",
      numericValue: null,
      label: language === "pt" ? "Brasil" : "Brazil",
    },
  ];

  return (
    <section
      id="about"
      className="py-24 bg-white dark:bg-blue-950 text-blue-900 dark:text-blue-100"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-4">
            {t("about")}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              {t("aboutTitle")}
            </h3>

            <div className="space-y-4 text-lg">
              <p className="text-blue-700 dark:text-blue-200">
                {t("aboutDescription1")}
              </p>

              <p className="text-blue-700 dark:text-blue-200">
                {t("aboutDescription2")}
              </p>

              <p className="text-blue-700 dark:text-blue-200">
                {t("aboutDescription3")}
              </p>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900 p-6 rounded-xl">
              <h4 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-4">
                {language === "pt" ? "Foco Principal" : "Main Focus"}
              </h4>
              <ul className="space-y-2 text-blue-700 dark:text-blue-200">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  {language === "pt"
                    ? "Desenvolvimento de aplicações web escaláveis"
                    : "Development of scalable web applications"}
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  {language === "pt"
                    ? "Experiência do usuário excepcional"
                    : "Exceptional user experience"}
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  {language === "pt"
                    ? "Código limpo e manutenível"
                    : "Clean and maintainable code"}
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  {language === "pt"
                    ? "Aprendizado contínuo de novas tecnologias"
                    : "Continuous learning of new technologies"}
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-blue-50 dark:bg-blue-900 p-6 rounded-xl text-center hover:bg-blue-100 dark:hover:bg-blue-800 transition-colors group"
              >
                <stat.icon className="text-3xl text-blue-600 dark:text-blue-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1">
                  {stat.numericValue !== null ? (
                    <>
                      <AnimatedCounter end={stat.numericValue} />
                      {stat.value.includes("+") && "+"}
                    </>
                  ) : (
                    stat.value
                  )}
                </div>
                <div className="text-sm text-blue-700 dark:text-blue-200">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
