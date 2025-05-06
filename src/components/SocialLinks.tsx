import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { contactInfo } from "@/config/contact";

export function SocialLinks() {
  return (
    <div className="flex gap-6 justify-center py-6">
      <a href={contactInfo.github} target="_blank" rel="noopener" className="text-purple-400 hover:text-purple-200 text-2xl"><FaGithub /></a>
      <a href={contactInfo.linkedin} target="_blank" rel="noopener" className="text-purple-400 hover:text-purple-200 text-2xl"><FaLinkedin /></a>
      <a href={`mailto:${contactInfo.email}`} className="text-purple-400 hover:text-purple-200 text-2xl"><FaEnvelope /></a>
    </div>
  );
} 