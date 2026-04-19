"use client";

import { useState } from "react";
import Link from "next/link";
import { Category, projects } from "@/data/projects";
import { categoryColors } from "@/data/projects";

const categories = ["All", "AI", "ML", "Cybersecurity", "IoT"];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category.includes(activeCategory as Category));

  return (
    <main className="min-h-screen bg-[#F5F1E9] text-[#3E2F25] px-6 py-20">

      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <h1 className="text-4xl font-bold mb-10">
          All Projects
        </h1>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-10">

          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full border transition duration-300 text-sm
              ${
                activeCategory === cat
                  ? "bg-[#3E2F25] text-white border-[#3E2F25]"
                  : "border-[#E5D9CC] hover:bg-[#FAF7F2]"
              }`}
            >
              {cat}
            </button>
          ))}

        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {filteredProjects.map((project) => (
            <Link key={project.id} href={`/projects/${project.id}`}>

              <div
                className="bg-[#FAF7F2] border border-[#E5D9CC] rounded-2xl p-6  hover:-translate-y-1 transition duration-300 cursor-pointer"
                style={{
                  boxShadow: `0 10px 30px ${
                    categoryColors[project.category[0]]
                  }66`,
                }}
              >

                <h3 className="text-lg font-semibold mb-2">
                  {project.title}
                </h3>

                <p className="text-[#7A6A5F] mb-4 text-sm">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 text-xs text-[#A47551]">
                  {project.tech.map((tech, i) => (
                    <span key={i}>{tech}</span>
                  ))}
                </div>

              </div>

            </Link>
          ))}

        </div>

      </div>
    </main>
  );
}