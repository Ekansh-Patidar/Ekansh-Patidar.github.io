function Skills() {
  try {
    const skillCategories = [
      {
        title: 'Languages',
        icon: 'terminal',
        skills: ['C/C++', 'JavaScript', 'Python', 'SQL', 'HTML/CSS']
      },
      {
        title: 'Frameworks & Tools',
        icon: 'layers',
        skills: ['React', 'Node.js', 'Express', 'MongoDB', 'REST APIs', 'Postman', 'Git']
      },
      {
        title: 'Product & Design Skills',
        icon: 'palette',
        skills: ['User Research', 'Journey Mapping', 'Empathy Interviews', 'Market Analysis', 'Collaboration', 'Storytelling']
      }
    ];

    return (
      <section id="skills" className="section-padding" data-name="skills" data-file="components/Skills.js">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12"><span className="gradient-text">Skills</span></h2>
          <div className="grid md:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <div key={index} className="glass-card rounded-xl p-6 hover:glow-effect transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[var(--secondary-color)] flex items-center justify-center">
                    <div className={`icon-${category.icon} text-lg text-[var(--primary-color)]`}></div>
                  </div>
                  <h3 className="text-lg font-bold text-[var(--text-primary)]">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <span key={i} className="px-3 py-1 bg-[var(--secondary-color)] text-[var(--text-primary)] rounded-full text-sm border border-[var(--border-color)] hover:border-[var(--primary-color)] transition-colors">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Skills component error:', error);
    return null;
  }
}