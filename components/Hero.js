function Hero() {
  try {
    return (
      <section id="home" className="section-padding pt-32 min-h-screen flex items-center" data-name="hero" data-file="components/Hero.js">
        <div className="max-w-6xl mx-auto w-full">
          <div className="flex flex-col-reverse md:flex-row items-center gap-12">
            {/* Text Content */}
            <div className="flex-1">
              {/* Greeting */}
              <p className="text-lg text-[var(--primary-color)] font-medium mb-2 tracking-wide">
                Hello, I'm
              </p>

              {/* Name */}
              <h1 className="text-5xl md:text-6xl font-bold text-[var(--text-primary)] mb-4">
                <span className="gradient-text">Ekansh Patidar</span>
              </h1>

              {/* Tagline */}
              <p className="text-xl md:text-2xl text-[var(--text-secondary)] mb-6 font-medium italic">
                "Thinking in products, building with engineering"
              </p>

              {/* Introduction */}
              <p className="text-lg text-[var(--text-secondary)] mb-8 leading-relaxed max-w-xl">
                I'm a Product and Engineering student currently pursuing my M.Tech in Product Design & Management at IIIT Hyderabad. I enjoy building practical digital products and improving how people interact with technology. My background spans full-stack development, system design, and solving real problems through simple, effective solutions.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://drive.google.com/file/d/1hp9b0qD8Ml4AiEXFSwjwQXNX3-Mv1EnG/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 gradient-btn text-white rounded-lg font-medium"
                >
                  <div className="icon-file-text text-xl"></div>
                  View Resume
                </a>
                {/* <a
                  href="https://github.com/Ekansh-Patidar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg gradient-border text-[var(--text-primary)] hover:bg-[var(--secondary-color)] transition-all font-medium"
                >
                  <div className="icon-github text-xl"></div>
                  View GitHub
                </a> */}
              </div>
            </div>

            {/* Profile Image */}
            <div className="flex-shrink-0">
              <div className="relative">
                <div className="w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden gradient-border glow-effect">
                  <img
                    src="assets/profile.jpg"
                    alt="Ekansh Patidar"
                    className="w-full h-full object-cover object-[center_75%]"
                  />
                </div>
                {/* Decorative pulsing ring */}
                <div className="absolute inset-0 rounded-full border-2 border-[var(--primary-color)]/30 scale-110 animate-pulse"></div>
                {/* Outer decorative ring */}
                <div className="absolute inset-0 rounded-full border border-[var(--primary-color)]/10 scale-125"></div>
                {/* Floating dots decoration */}
                <div className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-[#14B8A6] animate-bounce" style={{ animationDuration: '2s' }}></div>
                <div className="absolute -bottom-2 -left-2 w-3 h-3 rounded-full bg-[#2563EB] animate-bounce" style={{ animationDuration: '2.5s', animationDelay: '0.5s' }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Hero component error:', error);
    return null;
  }
}