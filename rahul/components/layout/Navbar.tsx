

"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto mt-5 max-w-7xl px-5">
        <div className="flex h-16 items-center justify-between rounded-full border border-white/10 bg-black/70 px-6 backdrop-blur-xl">
          {/* Logo */}
          <Link
            href="/"
            className="text-xl font-semibold tracking-tight text-white"
          >
            Rahul<span className="text-zinc-500">.</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-zinc-400 transition-colors duration-200 hover:text-white"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Resume Button */}
          <div className="hidden md:block">
            <a
              href="/resume/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-zinc-700 px-5 py-2 text-sm font-medium text-white transition-all duration-200 hover:border-white hover:bg-white hover:text-black"
            >
              Resume
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white md:hidden"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="mt-3 rounded-3xl border border-white/10 bg-black/95 p-6 backdrop-blur-xl md:hidden">
            <nav className="flex flex-col gap-5">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-zinc-300 transition hover:text-white"
                >
                  {link.name}
                </Link>
              ))}

              <a
                href="/resume/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 rounded-full border border-zinc-700 px-5 py-3 text-center text-white transition hover:border-white hover:bg-white hover:text-black"
              >
                Resume
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}