export default function About() {
  return (
    <section
      id="about"
      className="mx-auto max-w-7xl px-6 py-24"
    >
      <div className="mb-12">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary">
          About Me
        </p>

        <h2 className="mt-2 text-3xl font-bold">
          Passionate Full Stack Developer
        </h2>
      </div>

      <div className="grid gap-10 lg:grid-cols-2">
        {/* Left */}
        <div className="space-y-6">
          <p className="text-lg leading-8 text-muted-foreground">
            Hi, I'm <span className="font-semibold text-foreground">Rahul Verma</span>,
            a Frontend Developer who enjoys building modern, responsive, and
            user-friendly web applications. I love transforming ideas into
            beautiful digital experiences using clean and maintainable code.
          </p>

          <p className="text-lg leading-8 text-muted-foreground">
            My primary tech stack includes <strong>JavaScript</strong>,
            <strong> ReactJS</strong>, <strong>TypeScript</strong>,
            <strong> Tailwind CSS</strong>, and <strong>NodeJS</strong>.
            I'm also exploring AI integration to create smarter web
            applications.
          </p>

          <p className="text-lg leading-8 text-muted-foreground">
            I'm always learning new technologies, improving my problem-solving
            skills, and building projects that help me grow as a developer.
          </p>
        </div>
      </div>
    </section>
  );
}