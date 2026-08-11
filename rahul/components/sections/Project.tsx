"use client";

import Image from "next/image";
import { ArrowUpRight} from "lucide-react";
import domgptImage from "@/public/image/domgpt.png";


const projects = [
  {
    title: "Domgpt",
    image: domgptImage,
    description:
      "A ChatGPT-inspired AI chatbot featuring intelligent conversations, content generation, secure authentication, and chat history management.",
    tech: ["Next.js", "TypeScript", "Tailwind", "Prisma","Openai","Clerk Authentication"],
    github: "https://github.com/rahulverma307/domgpt",
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