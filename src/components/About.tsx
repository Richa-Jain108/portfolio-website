export default function About() {
  return (
    <section
      id="about"
      className="scroll-mt-24 bg-[#121212] px-5 py-24 md:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 border-b border-white/10 pb-8">
          <p className="mb-3 text-xs uppercase tracking-[0.32em] text-white/45">
            Introduction
          </p>
          <h2 className="text-4xl font-semibold leading-none text-white md:text-6xl">
            About me
          </h2>
        </div>

        <article className="relative overflow-hidden rounded-lg border border-white/10 bg-white/[0.035] p-6 backdrop-blur-xl md:p-10 lg:max-w-4xl">
          <div className="absolute inset-0 bg-gradient-to-br from-violet-400/12 via-transparent to-white/0" />
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/35 to-transparent" />

          <p className="relative z-10 text-base leading-7 text-white/72 md:text-lg md:leading-8">
            Data Analyst with enterprise engineering experience and hands-on
            expertise in SQL, Python, Tableau, and statistical analysis. I
            transform real-world datasets into actionable business insights
            through analytics, visualization, and data-driven problem solving
            across e-commerce, retail, logistics, and streaming.
          </p>
        </article>
      </div>
    </section>
  );
}
