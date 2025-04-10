"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { ProfileData } from "./ProfileData";

interface AboutSectionProps {
  githubUrl: string;
  linkedinUrl: string;
}

export function AboutSection({ githubUrl, linkedinUrl }: AboutSectionProps) {
  const { language } = useLanguage();

  return (
    <motion.section 
      id="sobre" 
      className="pt-28 pb-24"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div 
            className="relative aspect-square max-w-md w-full mx-auto md:mx-0 rounded-2xl overflow-hidden shadow-xl"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src="/profile.jpg"
              alt={language === "pt" ? "Foto de Gabriel Leite Araújo" : "Picture of Gabriel Leite Araújo"}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              quality={100}
              loading="eager"
            />
          </motion.div>
          <ProfileData githubUrl={githubUrl} linkedinUrl={linkedinUrl} />
        </div>
      </div>
    </motion.section>
  );
} 