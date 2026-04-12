import { projects, categoryColors } from "@/data/projects";
import { notFound } from "next/navigation";

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const project = projects.find((p) => p.id === id);

  if (!project) return notFound();

  return (
    <main className="min-h-screen bg-[#F5F1E9] text-[#3E2F25] px-6 py-20">

      <div className="max-w-4xl mx-auto">

        {/* Title */}
        <h1 className="text-4xl font-bold mb-4">
          {project.title}
        </h1>

        {/* Category Badge */}
        <span
          className="inline-block text-sm px-3 py-1 rounded-full mb-6"
          style={{
            backgroundColor: `${categoryColors[project.category]}20`,
            color: categoryColors[project.category],
            border: `1px solid ${categoryColors[project.category]}40`,
          }}
        >
          {project.category}
        </span>

        {/* Description */}
        <p className="text-[#7A6A5F] mb-10 leading-relaxed">
          {project.longDescription}
        </p>

        {/* Tech Stack */}
        <h2 className="text-2xl font-semibold mb-3">Tech Stack</h2>
        <div className="flex flex-wrap gap-2 mb-8">
          {project.tech.map((tech, i) => (
            <span
              key={i}
              className="px-3 py-1 rounded-full text-sm bg-[#FAF7F2] border border-[#E5D9CC]"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Tags */}
        <h2 className="text-2xl font-semibold mb-3">Concepts</h2>
        <div className="flex flex-wrap gap-2 mb-10">
          {project.tags.map((tag, i) => (
            <span
              key={i}
              className="text-sm text-[#7A6A5F]"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-4">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              className="px-6 py-3 bg-[#3E2F25] text-white rounded-xl hover:bg-[#2f241d] transition"
            >
              View Code
            </a>
          )}

          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              className="px-6 py-3 border border-[#E5D9CC] rounded-xl hover:bg-[#FAF7F2] transition"
            >
              Live Demo
            </a>
          )}
        </div>

      </div>

    </main>
  );
}