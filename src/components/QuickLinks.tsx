"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function QuickLinks() {
  const [heroDone, setHeroDone] = useState(false);

  useEffect(() => {
    // Delay rendering until the hero animation has likely finished
    const t = setTimeout(() => setHeroDone(true), 1200);
    return () => clearTimeout(t);
  }, []);

  if (!heroDone) return null;

  return (
    <motion.section
      id="quick-links"
      className="mx-auto w-full max-w-7xl border-t border-white/10 border-b border-white/10 py-10"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="px-5 md:px-10 lg:px-16">
        <nav className="flex justify-center">
          <ul className="flex items-center gap-10">
            <li>
              <a
                href="https://github.com/Richa-Jain108"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-block text-sm uppercase tracking-widest text-white/55 transition-colors duration-300"
              >
                <span>GitHub</span>
                <span className="block h-[1px] w-0 bg-white transition-all duration-300 group-hover:w-full mt-2" />
              </a>
            </li>

            <li>
              <a
                href="https://linkedin.com/in/richasudhirkumarjain"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-block text-sm uppercase tracking-widest text-white/55 transition-colors duration-300"
              >
                <span>LinkedIn</span>
                <span className="block h-[1px] w-0 bg-white transition-all duration-300 group-hover:w-full mt-2" />
              </a>
            </li>

            <li>
              <a
                href="/resume/Richa_Jain_Data_Analyst_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-block text-sm uppercase tracking-widest text-white/55 transition-colors duration-300"
              >
                <span>Resume ↗</span>
                <span className="block h-[1px] w-0 bg-white transition-all duration-300 group-hover:w-full mt-2" />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </motion.section>
  );
}
