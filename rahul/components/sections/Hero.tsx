"use client";

import ThemeToggle from "@/components/ui/toggle-dark";

import Image from "next/image";
import { MapPin, Eye, FileText } from "lucide-react";

const skills = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "UI/UX",
];

export default function Hero() {
  return (
    <section
      id="home"
      className="mx-auto mt-28 max-w-5xl px-5"
    >
      <div className="rounded-3xl border border-zinc-800 bg-[#0B0B0B]/80 p-6 backdrop-blur-xl md:p-8">
        {/* Top */}

        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-start">
          <div className="flex items-center gap-5">
            <Image
              src="/image/profile.png"
              alt="Rahul Verma"
              width={90}
              height={90}
              priority
              className="rounded-full border-2 border-zinc-700 object-cover"
            />

            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h1 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
                  Rahul Verma
                </h1>

                <span className="rounded-full border border-zinc-700 px-3 py-1 text-xs text-zinc-400">
                  he/him
                </span>
              </div>

              <h2 className="mt-2 text-lg font-medium text-zinc-300">
                Frontend Developer
              </h2>

              <div className="mt-3 flex items-center gap-2 text-sm text-zinc-500">
                <MapPin size={16} />
                <span>Delhi NCR, India</span>
              </div>
            </div>
          </div>

          {/* Theme Button */}
          {/* <ThemeToggle /> */}

          
        </div>

        {/* Description */}

        <p className="mt-8 max-w-3xl text-base leading-8 text-zinc-400">
          I'm a Frontend Developer passionate about creating modern,
          responsive and user-friendly web applications. I enjoy building
          scalable interfaces using React, Next.js and TypeScript while
          focusing on clean design, accessibility and performance.
        </p>

        {/* Skills */}

        <div className="mt-8 flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-zinc-700 bg-zinc-900 px-4 py-2 text-sm text-zinc-300"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Bottom */}

        <div className="mt-10 flex flex-col items-start justify-between gap-5 md:flex-row md:items-center">
          <a
            href="/resume/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white px-5 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:bg-white hover:text-black"
          >
            <FileText size={18} />
            Resume
          </a>

          <div className="flex items-center gap-2 text-sm text-zinc-500">
            <Eye size={18} />
            <span>Visitor Count: 32</span>
          </div>
        </div>
      </div>
    </section>
  );
}