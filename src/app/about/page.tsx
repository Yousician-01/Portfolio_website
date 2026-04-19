"use client";

import {
  FaPython,
  FaCuttlefish,
  FaDocker,
} from "react-icons/fa";

import {
  SiTypescript,
  SiPytorch,
  SiNextdotjs,
  SiFastapi,
  SiDjango,
  SiOpencv,
  SiArduino,
  SiGithubactions,
  SiHuggingface,
} from "react-icons/si";

import { MdMemory } from "react-icons/md";
import Reveal from "../components/Reveal";

/* 🔥 Skill Card Component */
function SkillCard({
  name,
  icon,
}: {
  name: string;
  icon: React.ReactNode;
}) {
  return (
    <div
      className="flex flex-col items-center justify-center gap-2 w-24 h-24 min-w-[6rem] min-h-[6rem] rounded-2xl bg-[#FAF7F2]/70 backdrop-blur-md border border-[#E5D9CC] shadow-[0_8px_20px_rgba(62,47,37,0.08)] hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(62,47,37,0.12)] transition duration-300">
      <div className="text-xl text-[#3E2F25]">{icon}</div>
      <span className="text-xs text-center text-[#7A6A5F] leading-tight line-clamp-2">
        {name}
      </span>
    </div>
  );
}

/* 🔥 Main Page */
export default function AboutPage() {
  return (
    <main id="about" className="min-h-screen bg-[#F5F1E9] text-[#3E2F25] px-6 py-20">

      <div className="max-w-4xl mx-auto">

        {/* Heading */}
        <Reveal>
        <h1 className="text-4xl font-bold mb-8">
          About Me
        </h1>
        </Reveal>
        
        {/* Intro */}
        <Reveal>
        <p className="text-lg text-[#7A6A5F] text-justify mb-6 leading-relaxed">
          I’m a builder focused on developing intelligent systems at the intersection of AI, security, and embedded systems.
          My work combines machine learning with real-world applications - from anomaly detection systems to robotics and smart surveillance.
        </p>
        </Reveal>

        {/* What you do */}
        <Reveal>
        <p className="text-lg text-[#7A6A5F] text-justify mb-6 leading-relaxed">
          I enjoy solving complex problems by designing end-to-end systems - from data processing and model development 
          to backend integration and deployment. My approach is deeply technical, with an emphasis on performance, reliability, and scalability.
        </p>
</Reveal>

        {/* Focus */}
        <Reveal>
        <p className="text-lg text-[#7A6A5F] text-justify mb-10 leading-relaxed">
          Currently, I’m focused on advancing in AI/ML and building systems that can operate in real-world environments,
          particularly in cybersecurity, anomaly detection, and intelligent automation.
        </p>
</Reveal>
        {/* Skills */}
        <h2 className="text-2xl font-semibold mb-6">
          Skills & Tools
        </h2>

        <div className="space-y-10 mb-12">

          {/* Programming */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Programming</h3>
            <div className="flex flex-wrap gap-4">
              {[
                { name: "Python", icon: <FaPython /> },
                { name: "C++", icon: <FaCuttlefish /> },
                { name: "TypeScript", icon: <SiTypescript /> },
              ].map((skill, i) => (
                <SkillCard key={i} {...skill} />
              ))}
            </div>
          </div>

          {/* AI / ML */}
          <div>
            <h3 className="text-lg font-semibold mb-4">AI / ML</h3>
            <div className="flex flex-wrap gap-4">
              {[
                { name: "Machine Learning", icon: <MdMemory /> },
                { name: "PyTorch", icon: <SiPytorch /> },
                { name: "OpenCV", icon: <SiOpencv /> },
                { name: "Transformers", icon: <MdMemory />},
                { name: "Hugging Face", icon: <SiHuggingface />},
                { name: "Data Analysis", icon: <MdMemory /> },
                
              ].map((skill, i) => (
                <SkillCard key={i} {...skill} />
              ))}
            </div>
          </div>

          {/* Backend / Web */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Backend & Web</h3>
            <div className="flex flex-wrap gap-4">
              {[
                { name: "FastAPI", icon: <SiFastapi /> },
                { name: "Flask", icon: <SiFastapi /> },
                { name: "Django", icon: <SiDjango /> },
                { name: "Next.js", icon: <SiNextdotjs /> },
              ].map((skill, i) => (
                <SkillCard key={i} {...skill} />
              ))}
            </div>
          </div>

          {/* Embedded */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Embedded</h3>
            <div className="flex flex-wrap gap-4">
              {[
                { name: "ESP32", icon: <MdMemory /> },
                { name: "Arduino", icon: <SiArduino /> },
              ].map((skill, i) => (
                <SkillCard key={i} {...skill} />
              ))}
            </div>
          </div>

          {/* DevOps */}
          <div>
            <h3 className="text-lg font-semibold mb-4">DevOps</h3>
            <div className="flex flex-wrap gap-4">
              {[
                { name: "Docker", icon: <FaDocker /> },
                { name: "GitHub Actions", icon: <SiGithubactions /> },
                { name: "Cloud (AWS EC2, Azure)", icon: <MdMemory /> },
              ].map((skill, i) => (
                <SkillCard key={i} {...skill} />
              ))}
            </div>
          </div>

          {/* Core */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Core</h3>
            <div className="flex flex-wrap gap-4">
              {[
                { name: "System Design", icon: <MdMemory /> },
              ].map((skill, i) => (
                <SkillCard key={i} {...skill} />
              ))}
            </div>
          </div>

        </div>

        {/* CTA */}
        <div className="mt-10">
          <a
            href="#contact"
            className="px-6 py-3 bg-[#3E2F25] text-white rounded-xl hover:bg-[#2f241d] transition"
          >
            Get in Touch
          </a>
        </div>

      </div>

    </main>
  );
}