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
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="https://drive.google.com/file/d/1hp9b0qD8Ml4AiEXFSwjwQXNX3-Mv1EnG/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 gradient-btn text-white rounded-lg font-medium"
                >
                  <div className="icon-file-text text-xl"></div>
                  View Resume
                </a>

                {/* Email Icon */}
                <a
                  href="mailto:ekanshpatidar007@gmail.com"
                  className="w-12 h-12 rounded-lg gradient-border bg-[var(--bg-color)] flex items-center justify-center hover:bg-[var(--secondary-color)] transition-all"
                  title="Email me"
                >
                  <div className="icon-mail text-xl text-[var(--primary-color)]"></div>
                </a>

                {/* LinkedIn Icon */}
                <a
                  href="https://www.linkedin.com/in/ekansh-patidar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-lg gradient-border bg-[var(--bg-color)] flex items-center justify-center hover:bg-[var(--secondary-color)] transition-all"
                  title="Connect on LinkedIn"
                >
                  <div className="icon-linkedin text-xl text-[var(--primary-color)]"></div>
                </a>
              </div>
            </div>

            {/* Profile Image */}
            <div className="flex-shrink-0 flex justify-center w-full md:w-auto">
              <div className="relative">
                <div className="w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden gradient-border glow-effect">
                  <img
                    src="assets/profile.jpg"
                    alt="Ekansh Patidar"
                    className="w-full h-full object-cover object-[center_75%]"
                  />
                </div>
                {/* Decorative pulsing ring */}
                <div className="absolute inset-0 rounded-full border-2 border-[var(--primary-color)]/30 scale-105 sm:scale-110 animate-pulse"></div>
                {/* Outer decorative ring */}
                <div className="hidden sm:block absolute inset-0 rounded-full border border-[var(--primary-color)]/10 scale-125"></div>
                {/* Floating dots decoration */}
                <div className="absolute top-0 right-0 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-[#14B8A6] animate-bounce" style={{ animationDuration: '2s' }}></div>
                <div className="absolute bottom-0 left-0 w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-[#2563EB] animate-bounce" style={{ animationDuration: '2.5s', animationDelay: '0.5s' }}></div>
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