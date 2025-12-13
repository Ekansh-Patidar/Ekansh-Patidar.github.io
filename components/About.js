function About() {
    try {
        return (
            <section id="about" className="section-padding bg-[var(--bg-secondary)]/50" data-name="about" data-file="components/About.js">
                <div className="max-w-6xl mx-auto">
                    {/* Two-column responsive layout */}
                    <div className="flex flex-col lg:flex-row lg:items-center gap-12">

                        {/* Left column: Text content */}
                        <div className="lg:flex-1">
                            <h2 className="text-4xl font-bold mb-8"><span className="gradient-text">About Me</span></h2>
                            <div className="space-y-6">
                                <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
                                    I'm an M.Tech student in Product Design & Management at IIIT Hyderabad, where I'm learning how products are built from understanding users to making technical decisions. I come from an engineering background and enjoy building practical tools, improving workflows, and understanding how people use technology.
                                </p>
                                <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
                                    I like working on problems step by step—breaking them down, talking to users, and finding simple ways to make things easier or more efficient. I've also had the chance to work with cross-functional teams, which helped me understand how design, engineering, and product perspectives come together.
                                </p>
                                <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
                                    I'm exploring opportunities where I can apply both product thinking and engineering to build products that actually help people.
                                </p>
                            </div>
                        </div>

                        {/* Right column: Ambient wave illustration */}
                        <div className="hidden lg:flex lg:flex-1 items-center justify-center">
                            <div className="relative w-full max-w-md">
                                <img
                                    src="assets/about-wave.png"
                                    alt="Abstract product flow illustration"
                                    className="w-full h-auto object-contain opacity-80"
                                    style={{
                                        animation: 'floatSubtle 6s ease-in-out infinite'
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Subtle float animation */}
                <style>{`
          @keyframes floatSubtle {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }
        `}</style>
            </section>
        );
    } catch (error) {
        console.error('About component error:', error);
        return null;
    }
}
