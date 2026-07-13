"use client";

import { motion } from "framer-motion";

const EDUCATION = [
  {
    year: "2024 – Present",
    degree: "SPECIALIZATION IN DATA SCIENCE & MACHINE LEARNING",
    institution: "Scaler Academy",
    description:
      "Comprehensive training in SQL, Python, Statistics, Probability, Data Analysis, Data Visualization, Tableau, Machine Learning, Deep Learning, Feature Engineering, Model Deployment, Business Case Studies and AI applications.",
  },
  {
    year: "2007 – 2011",
    degree: "BACHELOR OF ENGINEERING",
    field: "Electronics & Telecommunication Engineering",
    institution: "Progressive Education Society's Modern College of Engineering, Pune",
    university: "Savitribai Phule Pune University",
    description:
      "Graduated with First Class (Engineering Aggregate: 65.12%). Ranked 1st in Wipro's .NET Technical Training Program (78.8%) among students from Computer Science and related branches despite being from Electronics & Telecommunication Engineering.",
  },
  {
    year: "2005 – 2007",
    degree: "HIGHER SECONDARY CERTIFICATE (HSC)",
    field: "Science",
    description:
      "Completed Higher Secondary education with 92.50%. Secured the top rank in Malegaon and achieved the highest marks in English across Nashik District in the Maharashtra HSC Board Examination.",
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="scroll-mt-24 bg-[#121212] px-5 py-24 md:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 border-b border-white/10 pb-8">
          <p className="mb-3 text-xs uppercase tracking-[0.32em] text-white/45">
            Academic background
          </p>
          <h2 className="text-4xl font-semibold leading-none text-white md:text-6xl">
            Education
          </h2>
        </div>

        <div className="space-y-16">
          {EDUCATION.map((edu, index) => (
            <motion.div
              key={index}
              className="grid grid-cols-1 gap-6 md:grid-cols-[180px_1fr] md:gap-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="md:sticky md:top-32 md:self-start">
                <p className="text-base font-medium text-[#8D8D8D] md:text-lg">
                  {edu.year}
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-2xl font-semibold uppercase tracking-wide text-white md:text-3xl">
                  {edu.degree}
                </h3>

                {edu.field && (
                  <p className="text-lg font-medium text-white/80 md:text-xl">
                    {edu.field}
                  </p>
                )}

                <p
                  className="text-base md:text-lg"
                  style={{ color: "#CFA37A" }}
                >
                  {edu.institution}
                </p>

                {edu.university && (
                  <p className="text-sm text-[#8D8D8D]">{edu.university}</p>
                )}

                <p className="mt-4 max-w-3xl text-sm leading-7 text-[#8D8D8D] md:text-base">
                  {edu.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}