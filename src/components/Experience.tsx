export default function Experience() {
  return (
    <section className="bg-[#121212] px-6 pb-24 pt-12 md:px-24">
      <div className="mx-auto max-w-7xl grid gap-16 lg:grid-cols-2">
        {/* Experience Column */}
        <div>
          <h3 className="mb-12 text-3xl font-bold md:text-4xl tracking-tight border-b border-white/10 pb-4">Experience</h3>
          
          <div className="relative border-l border-white/20 pl-6 pb-8">
            <div className="absolute -left-1.5 top-1.5 h-3 w-3 rounded-full bg-white/80" />
            <div className="text-sm font-medium text-white/50 mb-1">Oct 2011 – Jan 2014</div>
            <h4 className="text-xl font-bold mb-1">Project Engineer</h4>
            <h5 className="text-lg text-white/80 mb-4">Wipro Technologies</h5>
            <ul className="list-disc list-outside ml-4 space-y-2 text-sm text-white/70">
              <li>Delivered business enhancements and maintained TrackIT, a business-critical enterprise application used by Shell.</li>
              <li>Engineered an SQL-based automation solution replacing manual workflows, reducing processing effort by ~90%.</li>
              <li>Developed complex SQL queries and database solutions to support operational reporting for global business teams.</li>
              <li>Built a 100+ page application knowledge base documenting workflows and troubleshooting procedures.</li>
            </ul>
          </div>
        </div>

        {/* Skills & Education Column */}
        <div>
          <h3 className="mb-12 text-3xl font-bold md:text-4xl tracking-tight border-b border-white/10 pb-4">Skills & Education</h3>
          
          <div className="mb-12">
            <h4 className="text-lg font-bold mb-4">Core Competencies</h4>
            <div className="flex flex-wrap gap-2">
              {['Python', 'MySQL', 'BigQuery', 'Tableau', 'Excel', 'Pandas', 'NumPy', 'Seaborn', 'Matplotlib', 'SQL', 'GitHub', 'Statistical Analysis', 'EDA'].map((skill) => (
                <span key={skill} className="glass px-4 py-2 rounded-full text-sm font-medium">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Education</h4>
            <div className="glass p-6 rounded-2xl mb-4">
              <h5 className="font-bold">Specialisation in Data Science and Machine Learning</h5>
              <div className="text-white/50 text-sm">Scaler Academy • 2026</div>
            </div>
            <div className="glass p-6 rounded-2xl">
              <h5 className="font-bold">BE / B.Tech / BS</h5>
              <div className="text-white/50 text-sm">PES Modern College of Engineering, Pune • 2011</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
