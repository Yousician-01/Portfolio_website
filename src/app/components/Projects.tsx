import { projects } from "@/data/projects";
import { categoryColors } from "@/data/projects";
import Link from "next/link";

export default function Projects() {
  const featuredProjects = projects.filter(p => p.featured);

  return (
    <section id="projects" className="w-full py-20 px-6 bg-[#F5F1E9]">

      <div className="max-w-6xl mx-auto">

        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {featuredProjects.map((project) => (
            <Link key={project.id} href={`/projects/${project.id}`}>

              <div
                className="bg-[#FAF7F2] border border-[#E5D9CC] rounded-2xl p-6 
                hover:-translate-y-1 transition duration-300 cursor-pointer"
                style={{
                  borderTop: `3px solid ${categoryColors[project.category]}`,
                  background: `linear-gradient(to bottom, ${categoryColors[project.category]}10, #FAF7F2)`,
                  boxShadow: `0 10px 25px ${categoryColors[project.category]}66`,
                }}
              >
                
                <span
  className="text-xs px-3 py-1 rounded-full mb-3 inline-block"
  style={{
    backgroundColor: `${categoryColors[project.category]}20`,
    color: categoryColors[project.category],
  }}
>
  {project.category}
</span>

                <h3 className="text-xl font-semibold mb-2">
                  {project.title}
                </h3>

                <p className="text-[#7A6A5F] mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 text-sm text-[#A47551]">
                  {project.tech.map((tech, i) => (
                    <span key={i}>{tech}</span>
                  ))}
                </div>

              </div>

            </Link>
          ))}

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