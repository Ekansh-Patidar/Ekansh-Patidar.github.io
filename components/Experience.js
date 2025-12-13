// Data source: resume + LinkedIn
// Experience section with vertical timeline design

function Experience() {
  try {
    const experiences = [
      {
        role: 'SDE Intern',
        company: 'Safar Wanderlust',
        companyUrl: 'https://www.linkedin.com/company/safarwanderlust/',
        location: 'Indore',
        duration: 'Jan 2024 – Apr 2024',
        tags: ['React', 'React Query', 'Internal Tools'],
        points: [
          'Built an internal operations platform to manage 200+ leads and ongoing trips',
          'Implemented real-time data sync using React Query for seamless updates',
          'Reduced data mismatches by ~40% through improved state management',
          'Cut manual processing time by ~30% with automated workflows',
          'Designed responsive UI for field employees across devices'
        ]
      },
      {
        role: 'Engineering Intern',
        company: 'Persistent Systems',
        companyUrl: 'https://www.persistent.com/',
        location: 'Remote',
        duration: 'Jun 2023 – Aug 2023',
        tags: ['SQL', 'DBMS', 'Data Structures'],
        points: [
          'Developed DBMS mini-projects with optimized schema design',
          'Wrote efficient SQL queries and practiced normalization techniques',
          'Completed DSA assignments covering arrays, trees, and sorting',
          'Earned internship certification after practical evaluations'
        ]
      }
    ];

    return (
      <section id="experience" className="section-padding" data-name="experience" data-file="components/Experience.js" aria-labelledby="experience-heading">
        <div className="max-w-6xl mx-auto">
          <h2 id="experience-heading" className="text-4xl font-bold mb-12">
            <span className="gradient-text">Experience</span>
          </h2>

          {/* Timeline Container */}
          <div className="relative">
            {/* Vertical Timeline Line */}
            <div className="absolute left-4 md:left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[var(--primary-color)] to-[#2563eb]" aria-hidden="true"></div>

            {/* Experience Items */}
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <article key={index} className="relative pl-12 md:pl-16">
                  {/* Timeline Marker */}
                  <div className="absolute left-2 md:left-4 top-1 w-4 h-4 md:w-5 md:h-5 rounded-full bg-[var(--primary-color)] border-4 border-[var(--bg-color)] shadow-lg" aria-hidden="true"></div>

                  {/* Experience Card */}
                  <div className="glass-card rounded-xl p-6 hover:glow-effect transition-all duration-300 shadow-lg">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                      <div>
                        <h3 className="text-xl font-bold text-[var(--text-primary)]">{exp.role}</h3>
                        <a
                          href={exp.companyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[var(--primary-color)] hover:text-[#3b82f6] transition-colors font-medium"
                        >
                          {exp.company}
                        </a>
                      </div>
                      <div className="flex items-center gap-2 text-[var(--text-secondary)] md:text-right flex-shrink-0">
                        <div className="icon-map-pin text-sm"></div>
                        <span>{exp.location}</span>
                        <span className="mx-1">•</span>
                        <time>{exp.duration}</time>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {exp.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-sm font-medium rounded-full bg-[var(--secondary-color)] text-[var(--primary-color)] border border-[var(--border-color)]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Bullet Points */}
                    <ul className="space-y-2" role="list">
                      {exp.points.map((point, i) => (
                        <li key={i} className="text-[var(--text-secondary)] flex items-start gap-2">
                          <div className="icon-chevron-right text-sm text-[var(--primary-color)] mt-1 flex-shrink-0" aria-hidden="true"></div>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Experience component error:', error);
    return null;
  }
}