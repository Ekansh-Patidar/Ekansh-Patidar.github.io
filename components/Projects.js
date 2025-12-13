function Projects() {
  try {
    // Technical Projects
    const technicalProjects = [
      {
        title: 'Peer2Loan',
        description: 'Peer-to-Peer Lending Platform',
        techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Razorpay'],
        points: [
          'Full-stack MERN application for managing lending circles',
          'Integrated payment workflows with Razorpay, scoring system, and penalties',
          'Built comprehensive dashboards with real-time notifications'
        ],
        github: 'https://github.com/Ekansh-Patidar/Peer2Loan',
        icon: 'wallet'
      },
      {
        title: 'VidyaVichar',
        description: 'Classroom Interaction Platform',
        techStack: ['React (TS)', 'Tailwind', 'Node.js', 'Express.js', 'MongoDB', 'Passport.js'],
        points: [
          'Full-stack platform for student-teacher question management',
          'Implemented role-based access control and file upload functionality',
          'Real-time updates for seamless classroom collaboration'
        ],
        github: 'https://github.com/Ekansh-Patidar/VidyaVichar',
        icon: 'graduation-cap'
      }
    ];

    // Case Studies & Research Projects
    const caseStudies = [
      {
        title: 'Walking in Indian Cities',
        tagline: 'Understanding how people navigate everyday walking challenges in Indian cities.',
        type: 'UX Research',
        image: 'assets/pedestrian-research.png',
        researchStack: ['Field Observation', 'Photo Documentation', 'Google Forms Survey', 'Likert-Scale Evaluation', 'Crossing-Time Measurement', 'Mixed-Method Analysis', 'Secondary Research'],
        description: 'This study examines how pedestrians experience everyday walking and road-crossing challenges in Indian cities. Through mixed-method research, we uncovered how broken footpaths, unsafe crossings, and vehicle-centric design affect safety, emotions, and behavior. The project highlights key problem areas and offers user-centered recommendations for more walkable, inclusive urban spaces.',
        icon: 'map-pin',
        // ADD YOUR DRIVE LINK HERE
        projectUrl: 'https://drive.google.com/file/d/1RorkDRDt1HYrFSKzdg5QF0SYnI4VneWL/view?usp=sharing'
      },
      {
        title: 'EventAssist',
        tagline: 'Understanding visitor onboarding at IIIT Hyderabad',
        type: 'Design Thinking',
        image: 'assets/eventassist.png',
        researchStack: ['User Interviews', 'Journey Mapping', 'Empathy Mapping', 'Affinity Mapping', 'Down-Selection', 'Low-Fidelity Prototyping'],
        description: 'This project explores how visitors experience the IIIT Hyderabad campus. Through interviews, journey mapping, and synthesis, we first mapped the broad challenges faced by all visitors and then narrowed the focus to event attendees and parents. The research highlights issues across navigation, clarity, registration, and communication, leading to a concept aimed at making campus visits smoother and more supportive.',
        icon: 'users',
        // ADD YOUR DRIVE LINK HERE
        projectUrl: 'https://drive.google.com/file/d/1K_Ps34CHdKOi4nA-kLCFeV1q-zDyL__q/view?usp=sharing'
      },
      {
        title: 'Canva – Product Strategy Case Study',
        tagline: 'Analyzing how Canva scales from beginner-friendly design to a professional creative ecosystem.',
        type: 'Product Strategy',
        image: 'assets/canva-strategy.png',
        researchStack: ['Product Teardown', 'Market Sizing (TAM/SAM/SOM)', 'User Segmentation', 'Value Proposition Analysis', 'GTM Strategy', 'Risk Assessment'],
        description: 'This case study examines Canva shift from a beginner-friendly design tool to a scalable professional ecosystem. Through product analysis, market research, competitive positioning, and GTM strategy evaluation, the study identifies how Canva can grow into underserved advanced user segments while maintaining its simplicity for beginners. The work includes risks, opportunities, and a phased roadmap for sustainable expansion.',
        icon: 'trending-up',
        // ADD YOUR DRIVE LINK HERE
        projectUrl: 'https://drive.google.com/file/d/1LiTkkbu0Ml8GOfIrbXuNKrZHO6pLSKfs/view?usp=sharing'
      },
      {
        title: 'Canva Product-Market Fit Case Study',
        tagline: 'Understanding Canva path to product-market fit',
        type: 'PMF Analysis',
        image: 'assets/canva-pmf.png',
        researchStack: ['Product-Market Fit Pyramid', 'Value Proposition Mapping', 'Growth Metrics Study', 'Market Segmentation', 'Freemium Model Review'],
        description: 'This case study examines how Canva achieved strong product-market fit by closing the gap between complex professional tools and overly basic alternatives. Through the PMF Pyramid, user needs, value proposition, and feature strategy were analyzed to understand how Canva democratized design for millions. The study also explores Canva growth engine, timing advantages, and evolution from serving non-designers to enterprise teams.',
        icon: 'target',
        // ADD YOUR DRIVE LINK HERE
        projectUrl: 'https://drive.google.com/file/d/1CFeIgyGC47o433lOiikJc3yHTpF4ISku/view?usp=sharing'
      }
    ];

    return (
      <section id="projects" className="section-padding bg-[var(--bg-secondary)]/50" data-name="projects" data-file="components/Projects.js">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12"><span className="gradient-text">Projects</span></h2>

          {/* Case Studies & Research Projects Sub-section - FIRST */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-8 flex items-center gap-3">
              <div className="icon-lightbulb text-[var(--primary-color)]"></div>
              Case Studies & Research Projects
            </h3>
            <div className="grid md:grid-cols-2 gap-6 items-stretch">
              {caseStudies.map((study, index) => (
                <div key={index} className="glass-card rounded-xl overflow-hidden hover:glow-effect transition-all duration-300 flex flex-col">
                  {/* Image - Vertical layout, on top */}
                  {study.image && (
                    <div className="w-full bg-[var(--bg-secondary)]">
                      <img
                        src={study.image}
                        alt={study.title}
                        className="w-full h-auto object-contain"
                      />
                    </div>
                  )}

                  {/* Content */}
                  <div className="p-4 flex flex-col flex-1">
                    {/* Header with Type Badge */}
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-lg bg-[var(--secondary-color)] flex items-center justify-center flex-shrink-0">
                          <div className={`icon-${study.icon} text-lg text-[var(--primary-color)]`}></div>
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-[var(--text-primary)]">{study.title}</h4>
                          <p className="text-[var(--text-secondary)] text-sm italic">{study.tagline}</p>
                        </div>
                      </div>
                      <span className="px-2.5 py-1 text-xs font-semibold rounded-full bg-[#2563eb]/20 text-[#3b82f6] border border-[#2563eb]/30 flex-shrink-0 whitespace-nowrap">
                        {study.type}
                      </span>
                    </div>

                    {/* Description - Fixed height for alignment */}
                    <div className="min-h-[100px] mb-4">
                      <p className="text-[var(--text-secondary)] leading-relaxed">
                        {study.description}
                      </p>
                    </div>

                    {/* Research Stack Tags - Fixed height for alignment */}
                    <div className="min-h-[80px] mb-4">
                      <div className="flex flex-wrap gap-2">
                        {study.researchStack.map((item, i) => (
                          <span
                            key={i}
                            className="px-2.5 py-1 text-xs font-medium rounded-full bg-[var(--secondary-color)] text-[var(--primary-color)] border border-[var(--border-color)]"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* View Project Link */}
                    <div className="mt-auto pt-2 border-t border-[var(--border-color)]">
                      <a
                        href={study.projectUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-[var(--primary-color)] hover:text-[#3b82f6] transition-colors group"
                      >
                        <span className="font-medium">View Project</span>
                        <div className="icon-arrow-right text-sm group-hover:translate-x-1 transition-transform"></div>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Projects Sub-section - SECOND */}
          <div>
            <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-8 flex items-center gap-3">
              <div className="icon-code text-[var(--primary-color)]"></div>
              Technical Projects
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {technicalProjects.map((project, index) => (
                <div key={index} className="glass-card rounded-xl p-6 hover:glow-effect transition-all duration-300 flex flex-col">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-[var(--secondary-color)] flex items-center justify-center flex-shrink-0">
                      <div className={`icon-${project.icon} text-xl text-[var(--primary-color)]`}></div>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-[var(--text-primary)]">{project.title}</h4>
                      <p className="gradient-text font-medium">{project.description}</p>
                    </div>
                  </div>

                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-sm font-medium rounded-full bg-[var(--secondary-color)] text-[var(--primary-color)] border border-[var(--border-color)]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Bullet Points */}
                  <ul className="space-y-2 mb-4 flex-1">
                    {project.points.map((point, i) => (
                      <li key={i} className="text-[var(--text-secondary)] flex items-start gap-2">
                        <div className="icon-check text-sm text-[var(--primary-color)] mt-1 flex-shrink-0"></div>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  {/* GitHub Link */}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[var(--primary-color)] hover:text-[#3b82f6] transition-colors font-medium"
                  >
                    <div className="icon-github text-lg"></div>
                    View on GitHub
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Projects component error:', error);
    return null;
  }
}