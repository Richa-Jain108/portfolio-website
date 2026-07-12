const EXPERIENCE_POINTS = [
  "Enterprise application development",
  "Requirement analysis",
  "Production support",
  "SQL",
  "Client collaboration",
];

export default function Experience() {
  return (
    <section className="bg-[#121212] px-5 py-24 md:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 border-b border-white/10 pb-8">
          <p className="mb-3 text-xs uppercase tracking-[0.32em] text-white/45">
            Professional background
          </p>
          <h2 className="text-4xl font-semibold leading-none text-white md:text-6xl">
            Experience
          </h2>
        </div>

        <article className="relative overflow-hidden rounded-lg border border-white/10 bg-white/[0.035] p-6 backdrop-blur-xl md:p-10 lg:p-12">
          <div className="absolute inset-0 bg-gradient-to-br from-sky-400/14 via-transparent to-emerald-400/10" />
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/35 to-transparent" />

          <div className="relative z-10 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="mb-4 text-sm uppercase tracking-[0.24em] text-white/45">
                Wipro Technologies
              </p>
              <h3 className="text-3xl font-semibold leading-tight text-white md:text-5xl">
                Project Engineer
              </h3>
              <p className="mt-5 text-lg text-white/62">2011-2014</p>
            </div>

            <ul className="grid gap-3 sm:grid-cols-2">
              {EXPERIENCE_POINTS.map((point) => (
                <li
                  key={point}
                  className="rounded-md border border-white/10 bg-black/20 px-4 py-4 text-base text-white/76"
                >
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </article>
      </div>
    </section>
  );
}
