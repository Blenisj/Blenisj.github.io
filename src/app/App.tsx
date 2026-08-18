export default function App() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-8 text-slate-100">
      <nav className="mx-auto flex max-w-6xl items-center justify-between">
        <span className="text-lg font-semibold tracking-tight">Blenis.</span>
        <a
          className="rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-300 transition hover:border-cyan-400 hover:text-cyan-300"
          href="mailto:hello@example.com"
        >
          Get in touch
        </a>
      </nav>

      <section className="mx-auto flex min-h-[80vh] max-w-6xl items-center py-20">
        <div className="max-w-3xl">
          <p className="mb-5 text-sm font-medium uppercase tracking-[0.3em] text-cyan-300">
            Developer portfolio
          </p>
          <h1 className="text-5xl font-bold leading-tight tracking-tight sm:text-7xl">
            Building thoughtful digital experiences.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
            Welcome to my portfolio. This page is the starting point for sharing
            my work, experience, and the ideas behind what I build.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              className="rounded-full bg-cyan-300 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-200"
              href="#projects"
            >
              View projects
            </a>
            <a
              className="rounded-full border border-slate-700 px-6 py-3 font-semibold text-slate-200 transition hover:border-slate-500"
              href="#about"
            >
              About me
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 border-t border-slate-800 py-12 sm:grid-cols-3">
        <div id="about">
          <p className="text-sm text-slate-500">01</p>
          <h2 className="mt-2 text-xl font-semibold">About</h2>
          <p className="mt-2 text-slate-400">A place for a short introduction.</p>
        </div>
        <div>
          <p className="text-sm text-slate-500">02</p>
          <h2 className="mt-2 text-xl font-semibold">Experience</h2>
          <p className="mt-2 text-slate-400">A snapshot of your professional journey.</p>
        </div>
        <div id="projects">
          <p className="text-sm text-slate-500">03</p>
          <h2 className="mt-2 text-xl font-semibold">Projects</h2>
          <p className="mt-2 text-slate-400">Selected work and experiments.</p>
        </div>
      </section>
    </main>
  );
}
