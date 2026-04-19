"use client";

import { projects, categoryColors, Category } from "@/data/projects";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Projects() {
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <section id="projects" className="w-full py-20 px-6 bg-[#F5F1E9]">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {featuredProjects.map((project) => {
            const primaryCategory: Category = project.category;

            return (
              <Link key={project.id} href={`/projects/${project.id}`}>

                <motion.div
                  whileHover={{ y: -6}}
                  initial={{ opacity: 0, y: 30}}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="bg-[#FAF7F2] border border-[#E5D9CC] rounded-2xl p-6 cursor-pointer"
                  style={{
                    borderTop: `3px solid ${categoryColors[primaryCategory]}`,
                    background: `linear-gradient(to bottom, ${categoryColors[primaryCategory]}10, #FAF7F2)`,
                    boxShadow: `0 10px 25px ${categoryColors[primaryCategory]}66`,
                  }}
                >

                  {/* 🔥 MULTIPLE CATEGORY BADGES */}
                  <div className="flex flex-wrap gap-2 mb-3">
                    
                      <span
                        className="text-xs px-3 py-1 rounded-full"
                        style={{
                          backgroundColor: `${categoryColors[project.category]}20`,
                          color: categoryColors[project.category],
                          border: `1px solid ${categoryColors[project.category]}40`,
                        }}
                      >
                        {project.category}
                      </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[#7A6A5F] mb-4">
                    {project.description}
                  </p>

                  {/* Tech */}
                  <div className="flex flex-wrap gap-2 text-sm text-[#A47551]">
                    {project.tech.map((tech, i) => (
                      <span key={i}>{tech}</span>
                    ))}
                  </div>

                </motion.div>

              </Link>
            );
          })}

        </div>

        {/* View All Button */}
        <div className="mt-12 text-center">
          <Link
            href="/projects"
            className="px-6 py-3 border border-[#E5D9CC] rounded-xl hover:bg-[#FAF7F2] transition"
          >
            View All Projects
          </Link>
        </div>

      </div>
    </section>
  );
}