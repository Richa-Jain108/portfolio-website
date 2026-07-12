"use client";

import {
  ArrowUpRight,
  Download,
  Mail,
} from "lucide-react";
import { motion } from "framer-motion";

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.447-2.136 2.943v5.663h-3.554v-11.452h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zm-15.11-13.019c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019h-3.564v-11.452h3.564v11.452zm15.106-20.452h-20.451c-.979 0-1.774.774-1.774 1.729v20.542c0 .955.795 1.729 1.774 1.729h20.451c.979 0 1.775-.774 1.775-1.729v-20.542c0-.955-.796-1.729-1.775-1.729z" />
    </svg>
  );
}

const CONTACT_ITEMS = [
  {
    title: "Email",
    value: "richasj108@gmail.com",
    href: "mailto:richasj108@gmail.com",
    icon: Mail,
  },
  {
    title: "LinkedIn",
    value: "linkedin.com/in/richa-jain108",
    href: "https://www.linkedin.com/in/richa-jain108/",
    icon: LinkedInIcon,
  },
  {
    title: "GitHub",
    value: "github.com/Richa-Jain108",
    href: "https://github.com/Richa-Jain108",
    icon: GitHubIcon,
  },
];

const RESUME_PATH = "/resume/Richa_Jain_Data_Analyst_Resume.pdf";

export default function Contact() {
  return (
    <section className="relative overflow-hidden bg-[#121212] px-5 py-24 md:px-10 lg:px-16">
      <motion.div
        className="mx-auto max-w-7xl"
        initial={{ opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="mb-12 max-w-4xl border-b border-white/10 pb-8">
          <p className="mb-3 text-xs uppercase tracking-[0.32em] text-white/45">
            Contact
          </p>
          <h2 className="text-4xl font-semibold leading-none text-white md:text-6xl">
            Let&apos;s Build Something Together
          </h2>
          <p className="mt-6 max-w-3xl text-base leading-7 text-white/58 md:text-lg md:leading-8">
            I&apos;m always open to discussing new opportunities,
            collaborations, or simply connecting with fellow data professionals.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {CONTACT_ITEMS.map((item, index) => {
            const Icon = item.icon;
            const content = (
              <>
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.055] via-transparent to-white/0 opacity-80 transition duration-500 group-hover:opacity-100" />
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/35 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative z-10 flex items-center gap-5">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-md border border-white/12 bg-black/20 text-white/75 transition duration-500 group-hover:border-white/24 group-hover:text-white">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="text-sm uppercase tracking-[0.22em] text-white/42">
                      {item.title}
                    </p>
                    <p className="mt-2 truncate text-base font-medium text-white/78 md:text-lg">
                      {item.value}
                    </p>
                  </div>

                  {item.href && (
                    <ArrowUpRight
                      className="h-5 w-5 shrink-0 text-white/35 transition duration-500 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-white"
                      aria-hidden="true"
                    />
                  )}
                </div>
              </>
            );

            const className =
              "group relative overflow-hidden rounded-lg border border-white/10 bg-white/[0.035] p-5 backdrop-blur-xl transition duration-500 hover:-translate-y-1 hover:border-white/24 hover:bg-white/[0.07] md:p-6";

            return (
              <motion.a
                key={item.title}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className={className}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.55, delay: index * 0.06 }}
              >
                {content}
              </motion.a>
            );
          })}

          <motion.a
            href={RESUME_PATH}
            download
            className="group relative overflow-hidden rounded-lg border border-white/12 bg-white/[0.055] p-5 backdrop-blur-xl transition duration-500 hover:-translate-y-1 hover:border-white/28 hover:bg-white/[0.085] md:col-span-2 md:p-6"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, delay: CONTACT_ITEMS.length * 0.06 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-sky-400/12 via-transparent to-white/0 opacity-90 transition duration-500 group-hover:opacity-100" />
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            <div className="relative z-10 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-5">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-md border border-white/12 bg-black/20 text-white/75 transition duration-500 group-hover:border-white/24 group-hover:text-white">
                  <Download className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.22em] text-white/42">
                    Resume
                  </p>
                  <p className="mt-2 text-base font-medium text-white/78 md:text-lg">
                    Download Resume
                  </p>
                </div>
              </div>

              <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/12 bg-white/[0.06] px-4 py-2 text-sm font-medium text-white/78 transition duration-500 group-hover:border-white/28 group-hover:bg-white/[0.12] group-hover:text-white">
                Download Resume
                <Download className="h-4 w-4" aria-hidden="true" />
              </span>
            </div>
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}
