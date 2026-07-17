"use client";

import Image from "next/image";
import { ArrowUpRight} from "lucide-react";

const projects = [
  {
    title: "AI Interview Platform",
    image: "/projects/interview.png",
    description:
      "An AI-powered interview preparation platform with authentication, personalized questions, AI feedback, and dashboard.",
    tech: ["Next.js", "TypeScript", "Tailwind", "Prisma"],
    github: "#",
    live: "#",
  },
  {
    title: "Inventory Management",
    image: "/projects/inventory.png",
    description:
      "A modern inventory management dashboard with analytics, authentication and product management.",
    tech: ["Next.js", "Prisma", "Neon", "Tailwind"],
    github: "#",
    live: "#",
  },
  {
    title: "dom0",
    image: "/projects/portfolio.png",
    description:
      "A clean developer portfolio inspired by Vercel and Linear using Next.js and Tailwind CSS.",
    tech: ["Next.js", "Tailwind", "TypeScript"],
    github: "#",
    live: "#",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="mx-auto mt-28 max-w-5xl px-5"
    >
      {/* Heading */}

      <div className="mb-10">
        <p className="text-xs font-medium uppercase tracking-[0.3em] text-zinc-500">
          Portfolio
        </p>

        <h2 className="mt-2 text-3xl font-bold text-white md:text-4xl">
          Featured Projects
        </h2>

        <p className="mt-3 max-w-2xl text-base leading-7 text-zinc-400">
          A collection of projects showcasing my experience in building
          scalable, responsive and user-friendly web applications.
        </p>
      </div>

      {/* Project Cards */}

      <div className="space-y-8">
        {projects.map((project) => (
          <div
            key={project.title}
            className="overflow-hidden rounded-3xl border border-zinc-800 bg-[#0B0B0B]/80 backdrop-blur-xl transition duration-300 hover:border-zinc-600"
          >
            {/* Image */}

            <div className="relative h-64 w-full">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Content */}

            <div className="p-6">
              <h3 className="text-2xl font-semibold text-white">
                {project.title}
              </h3>

              <p className="mt-3 leading-7 text-zinc-400">
                {project.description}
              </p>

              {/* Tech */}

              <div className="mt-6 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-zinc-700 bg-zinc-900 px-3 py-1 text-sm text-zinc-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Buttons */}

              <div className="mt-8 flex gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-full border border-zinc-700 px-5 py-2.5 text-sm text-white transition hover:border-white"
                >
                  {/* <Github size={18} /> */}
                  GitHub
                </a>

                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black transition hover:bg-zinc-200"
                >
                  Live Demo
                  <ArrowUpRight size={18} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}