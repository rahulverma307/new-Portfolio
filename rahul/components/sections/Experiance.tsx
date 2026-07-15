export default function Experience() {
  return (
    <section
      id="experience"
      className="mx-auto max-w-7xl px-6 py-24"
    >
      <div className="mb-12">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary">
          Experience
        </p>
      </div>

      <div className="rounded-2xl border p-8">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
          <div>
            <h3 className="text-2xl font-semibold">
              Freelance Frontend Developer
            </h3>

            <p className="mt-2 text-muted-foreground">
              Self-Employed
            </p>
          </div>

          <span className="rounded-full border px-4 py-2 text-sm">
            2026 - Present
          </span>
        </div>

        <p className="mt-6 leading-8 text-muted-foreground">
          Developed responsive and modern web applications for clients using
          Next.js, React, TypeScript, Tailwind CSS, and JavaScript. Focused on
          creating clean user interfaces, optimizing performance, and delivering
          user-friendly experiences.
        </p>

      </div>
    </section>
  );
}