import { ArrowUpRight, Database, LineChart, Map, PanelTop } from "lucide-react";

const PROJECTS = [
  {
    title: "E-Commerce Customer Analytics",
    eyebrow: "SQL / BigQuery",
    description:
      "Mapped 100K+ Brazilian e-commerce orders across customer behavior, regional demand, delivery timelines, and freight efficiency.",
    metric: "137% YoY revenue growth identified",
    link: "https://github.com/Richa-Jain108/target-brazil-ecommerce-analytics",
    icon: Database,
    accent: "from-cyan-400/22 to-white/0",
  },
  {
    title: "Netflix Content Strategy",
    eyebrow: "Python / EDA",
    description:
      "Analyzed 8.8K+ titles to surface genre, region, duration, and release patterns for a sharper content acquisition strategy.",
    metric: "8.8K titles modeled",
    link: "https://github.com/Richa-Jain108/netflix-content-strategy-analysis",
    icon: PanelTop,
    accent: "from-rose-400/20 to-white/0",
  },
  {
    title: "Retail Purchase Analytics",
    eyebrow: "Statistics / CLT",
    description:
      "Studied 550K+ Black Friday transactions to compare customer segments, quantify purchase behavior, and estimate confidence ranges.",
    metric: "550K transactions analyzed",
    link: "https://github.com/Richa-Jain108/walmart-customer-spending-analysis-clt",
    icon: LineChart,
    accent: "from-emerald-400/20 to-white/0",
  },
  {
    title: "Logistics Route Optimization",
    eyebrow: "Feature Engineering",
    description:
      "Engineered trip-level delivery features from shipment data to expose ETA gaps, route friction, and operational improvement areas.",
    metric: "144.9K shipment rows processed",
    link: "https://github.com/Richa-Jain108/delhivery-logistics-feature-engineering-analysis",
    icon: Map,
    accent: "from-violet-400/18 to-white/0",
  },
];

export default function Projects() {
  return (
    <section className="relative overflow-hidden bg-[#121212] px-5 py-24 md:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col justify-between gap-6 border-b border-white/10 pb-8 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.32em] text-white/45">
              Selected case studies
            </p>
            <h2 className="max-w-3xl text-4xl font-semibold leading-none md:text-6xl">
              Work that turns messy data into clear decisions.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-white/58">
            Analytics projects shaped as product stories: context, method,
            insight, and business impact.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {PROJECTS.map((project) => {
            const Icon = project.icon;

            return (
              <a
                key={project.title}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative min-h-[22rem] overflow-hidden rounded-lg border border-white/10 bg-white/[0.035] p-6 backdrop-blur-xl transition duration-500 hover:-translate-y-1 hover:border-white/28 hover:bg-white/[0.07] md:p-8"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-80 transition duration-500 group-hover:opacity-100`}
                />
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative z-10 flex h-full flex-col justify-between gap-14">
                  <div>
                    <div className="mb-8 flex items-center justify-between">
                      <div className="grid h-10 w-10 place-items-center rounded-md border border-white/12 bg-black/20 text-white/75">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <ArrowUpRight
                        className="h-5 w-5 text-white/35 transition duration-500 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-white"
                        aria-hidden="true"
                      />
                    </div>

                    <p className="mb-3 text-xs uppercase tracking-[0.24em] text-white/45">
                      {project.eyebrow}
                    </p>
                    <h3 className="max-w-xl text-2xl font-semibold leading-tight text-white md:text-3xl">
                      {project.title}
                    </h3>
                    <p className="mt-5 max-w-xl text-sm leading-6 text-white/62">
                      {project.description}
                    </p>
                  </div>

                  <div className="border-t border-white/10 pt-5 text-sm text-white/78">
                    {project.metric}
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
