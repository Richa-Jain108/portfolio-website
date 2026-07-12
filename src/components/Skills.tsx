import { BarChart3, Braces, Cloud, LineChart, ScatterChart } from "lucide-react";

const SKILL_GROUPS = [
  {
    title: "Programming",
    skills: ["SQL", "Python"],
    icon: Braces,
    accent: "from-cyan-400/18 to-white/0",
  },
  {
    title: "Libraries",
    skills: ["Pandas", "NumPy", "Matplotlib", "Seaborn"],
    icon: ScatterChart,
    accent: "from-fuchsia-400/16 to-white/0",
  },
  {
    title: "Data Analysis",
    skills: [
      "Excel",
      "Data Cleaning",
      "Exploratory Data Analysis (EDA)",
      "Statistics",
      "Hypothesis Testing",
      "A/B Testing",
    ],
    icon: BarChart3,
    accent: "from-emerald-400/16 to-white/0",
  },
  {
    title: "Data Visualization",
    skills: ["Tableau", "Data Storytelling", "Reporting"],
    icon: LineChart,
    accent: "from-amber-300/16 to-white/0",
  },
  {
    title: "Tools & Platforms",
    skills: ["Google BigQuery", "Jupyter Notebook", "Google Colab", "Git", "GitHub"],
    icon: Cloud,
    accent: "from-sky-400/18 to-white/0",
  },
];

export default function Skills() {
  return (
    <section className="bg-[#121212] px-5 py-24 md:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col justify-between gap-6 border-b border-white/10 pb-8 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.32em] text-white/45">
              Technical toolkit
            </p>
            <h2 className="text-4xl font-semibold leading-none text-white md:text-6xl">
              Skills
            </h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-white/58">
            A focused stack for analysis, visualization, reporting, and data-led
            decision making.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {SKILL_GROUPS.map((group) => {
            const Icon = group.icon;

            return (
              <article
                key={group.title}
                className="group relative min-h-64 overflow-hidden rounded-lg border border-white/10 bg-white/[0.035] p-6 backdrop-blur-xl transition duration-500 hover:-translate-y-1 hover:border-white/24 hover:bg-white/[0.07]"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${group.accent} opacity-80 transition duration-500 group-hover:opacity-100`}
                />
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/35 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative z-10">
                  <div className="mb-7 flex items-center justify-between">
                    <h3 className="text-xl font-semibold text-white">{group.title}</h3>
                    <div className="grid h-9 w-9 place-items-center rounded-md border border-white/12 bg-black/20 text-white/70">
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-white/10 bg-white/[0.055] px-3 py-2 text-xs font-medium text-white/72 backdrop-blur-md transition duration-300 hover:-translate-y-0.5 hover:border-white/24 hover:bg-white/[0.11] hover:text-white"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
