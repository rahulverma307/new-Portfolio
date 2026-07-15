"use client";

import {
  Code2,
  Palette,
  Database,
  Globe,
  GitBranch,
  Monitor,
} from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    icon: Code2,
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
    ],
  },
  {
    title: "Backend",
    icon: Database,
    skills: [
      "Node.js",
      "Express.js",
      "Prisma",
      "MongoDB",
      "PostgreSQL",
      "Neon",
    ],
  },
  {
    title: "Tools",
    icon: GitBranch,
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Postman",
      "Vercel",
      "Figma",
    ],
  },
 
  {
    title: "Deployment",
    icon: Globe,
    skills: [
      "Vercel",
      "Netlify",
      "Railway",
      "Render",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="mx-auto mt-28 max-w-5xl px-5"
    >
      {/* Heading */}

      <div className="mb-10">
        <p className="text-xs font-medium uppercase tracking-[0.3em] text-zinc-500">
          Skills
        </p>

        <h2 className="mt-2 text-3xl font-bold text-white md:text-4xl">
          Tech Stack
        </h2>

        <p className="mt-3 max-w-2xl text-base leading-7 text-zinc-400">
          Technologies and tools I use to build modern,
          fast and scalable web applications.
        </p>
      </div>

      {/* Cards */}

      <div className="grid gap-6 md:grid-cols-2">
        {skillCategories.map((category) => {
          const Icon = category.icon;

          return (
            <div
              key={category.title}
              className="rounded-3xl border border-zinc-800 bg-[#0B0B0B]/80 p-6 backdrop-blur-xl transition duration-300 hover:border-zinc-700"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-xl border border-zinc-700 p-2">
                  <Icon size={20} className="text-white" />
                </div>

                <h3 className="text-xl font-semibold text-white">
                  {category.title}
                </h3>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-zinc-700 bg-zinc-900 px-4 py-2 text-sm text-zinc-300 transition hover:border-white hover:text-white"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}