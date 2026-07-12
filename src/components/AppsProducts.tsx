"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, BrainCircuit, TrendingUp } from "lucide-react";

const APPS = [
  {
    title: "Quiz Master",
    description:
      "An interactive quiz application designed and published on Google Play.",
    link: "https://play.google.com/store/apps/details?id=com.rjenterprises.crorepatiquizmaster",
    icon: BrainCircuit,
    accent: "from-amber-300/20 to-white/0",
  },
  {
    title: "Stock Sage",
    description:
      "A financial calculator application that helps investors calculate stock averaging strategies. Designed, built, and published on Google Play.",
    link: "https://play.google.com/store/apps/details?id=com.rjenterprises.stocksage",
    icon: TrendingUp,
    accent: "from-emerald-400/20 to-white/0",
  },
];

export default function AppsProducts() {
  return (
    <section
      id="apps"
      className="relative scroll-mt-24 overflow-hidden bg-[#121212] px-5 py-24 md:px-10 lg:px-16"
    >
      <motion.div
        className="mx-auto max-w-7xl"
        initial={{ opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="mb-12 flex flex-col justify-between gap-6 border-b border-white/10 pb-8 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.32em] text-white/45">
              Published applications
            </p>
            <h2 className="max-w-3xl text-4xl font-semibold leading-none text-white md:text-6xl">
              Apps &amp; Products
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-white/58">
            Real-world applications designed, built, and published on Google Play.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {APPS.map((app, index) => {
            const Icon = app.icon;

            return (
              <motion.a
                key={app.title}
                href={app.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative min-h-[22rem] overflow-hidden rounded-lg border border-white/10 bg-white/[0.035] p-6 backdrop-blur-xl transition duration-500 hover:-translate-y-1 hover:border-white/28 hover:bg-white/[0.07] md:p-8"
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${app.accent} opacity-80 transition duration-500 group-hover:opacity-100`}
                />
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative z-10 flex h-full flex-col justify-between gap-14">
                  <div>
                    <div className="mb-8 flex items-center justify-between">
                      <div className="grid h-10 w-10 place-items-center rounded-md border border-white/12 bg-black/20 text-white/75 transition duration-500 group-hover:border-white/24 group-hover:text-white">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <ArrowUpRight
                        className="h-5 w-5 text-white/35 transition duration-500 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-white"
                        aria-hidden="true"
                      />
                    </div>

                    <p className="mb-3 text-xs uppercase tracking-[0.24em] text-white/45">
                      Google Play
                    </p>
                    <h3 className="max-w-xl text-2xl font-semibold leading-tight text-white md:text-3xl">
                      {app.title}
                    </h3>
                    <p className="mt-5 max-w-xl text-sm leading-6 text-white/62">
                      {app.description}
                    </p>
                  </div>

                  <div className="border-t border-white/10 pt-5">
                    <span className="inline-flex items-center gap-2 text-sm font-medium text-white/78 transition duration-500 group-hover:text-white">
                      View on Play Store
                      <ArrowUpRight
                        className="h-4 w-4 transition duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        aria-hidden="true"
                      />
                    </span>
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
