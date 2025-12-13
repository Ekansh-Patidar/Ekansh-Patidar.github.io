function Education() {
    try {
        const educationData = [
            {
                degree: 'M.Tech, Product Design and Management',
                institution: 'International Institute of Information Technology, Hyderabad (IIIT-H)',
                duration: 'July 2024 – Present',
                details: null,
                icon: 'graduation-cap',
                current: true
            },
            {
                degree: 'B.Tech, Computer Science',
                institution: 'UIT RGPV, Bhopal',
                duration: '2020 – 2024',
                details: 'CGPA: 8.36/10',
                icon: 'book-open',
                current: false
            },
            {
                degree: 'Higher Secondary, PCM',
                institution: 'Jagriti High School',
                duration: 'April 2017 – March 2019',
                details: 'Board: 86% | JEE Percentile: 94.10',
                icon: 'school',
                current: false
            }
        ];

        return (
            <section id="education" className="section-padding" data-name="education" data-file="components/Education.js">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold mb-12"><span className="gradient-text">Education</span></h2>
                    <div className="space-y-6">
                        {educationData.map((edu, index) => (
                            <div key={index} className="glass-card rounded-xl p-6 hover:glow-effect transition-all duration-300">
                                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                                    {/* Left: Icon + Content */}
                                    <div className="flex items-start gap-4 flex-1">
                                        <div className="w-12 h-12 rounded-lg bg-[var(--secondary-color)] flex items-center justify-center flex-shrink-0">
                                            <div className={`icon-${edu.icon} text-xl text-[var(--primary-color)]`}></div>
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex items-center gap-2 mb-1">
                                                <h3 className="text-xl font-bold text-[var(--text-primary)]">{edu.degree}</h3>
                                                {edu.current && (
                                                    <span className="px-2 py-0.5 text-xs font-medium rounded-full bg-[var(--primary-color)]/20 text-[var(--primary-color)] border border-[var(--primary-color)]/30">
                                                        Current
                                                    </span>
                                                )}
                                            </div>
                                            <p className="text-[var(--text-secondary)] mb-1">{edu.institution}</p>
                                            {edu.details && (
                                                <p className="text-sm text-[var(--primary-color)] font-medium">{edu.details}</p>
                                            )}
                                        </div>
                                    </div>

                                    {/* Right: Duration */}
                                    <div className="md:text-right flex-shrink-0">
                                        <span className="inline-flex items-center gap-2 text-[var(--text-secondary)] text-sm">
                                            <div className="icon-calendar text-sm"></div>
                                            {edu.duration}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Education component error:', error);
        return null;
    }
}
