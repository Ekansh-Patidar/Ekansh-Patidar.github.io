function Achievements() {
  try {
    const achievements = [
      {
        title: 'NASSCOM Hackathon',
        description: 'Built real-time booking app with React + Firebase',
        icon: 'trophy'
      },
      {
        title: 'DSA Excellence',
        description: '500+ problems solved across platforms',
        links: [
          { label: 'LeetCode', url: 'https://leetcode.com/u/ekanshpatidar007/' },
          { label: 'GeeksforGeeks', url: '#' }
        ],
        icon: 'code'
      },
      {
        title: 'GATE Success',
        description: 'CSE AIR 3012 | DA AIR 4521',
        icon: 'award'
      }
    ];

    return (
      <section id="achievements" className="section-padding bg-[var(--bg-secondary)]/50" data-name="achievements" data-file="components/Achievements.js">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12"><span className="gradient-text">Achievements</span></h2>
          <div className="grid md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="glass-card rounded-xl p-6 text-center hover:glow-effect transition-all duration-300">
                <div className="w-16 h-16 rounded-full bg-[var(--secondary-color)] flex items-center justify-center mx-auto mb-4">
                  <div className={`icon-${achievement.icon} text-2xl text-[var(--primary-color)]`}></div>
                </div>
                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">{achievement.title}</h3>
                <p className="text-[var(--text-secondary)] mb-3">{achievement.description}</p>
                {achievement.links && (
                  <div className="flex justify-center gap-3">
                    {achievement.links.map((link, i) => (
                      <a
                        key={i}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[var(--primary-color)] hover:text-[#3b82f6] transition-colors text-sm"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Achievements component error:', error);
    return null;
  }
}