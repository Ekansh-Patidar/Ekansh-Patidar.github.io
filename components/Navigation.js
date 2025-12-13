function Navigation() {
  try {
    const [isOpen, setIsOpen] = React.useState(false);

    const scrollToSection = (sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setIsOpen(false);
      }
    };

    const navItems = [
      { label: 'Home', id: 'home' },
      { label: 'About', id: 'about' },
      { label: 'Education', id: 'education' },
      { label: 'Experience', id: 'experience' },
      { label: 'Projects', id: 'projects' },
      { label: 'Skills', id: 'skills' },
      { label: 'Contact', id: 'contact' }
    ];

    return (
      <nav className="fixed top-0 left-0 right-0 bg-[var(--bg-color)] backdrop-blur-md border-b border-[var(--border-color)] z-50" data-name="navigation" data-file="components/Navigation.js">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-xl font-bold text-[var(--primary-color)] cursor-pointer" onClick={() => scrollToSection('home')}>
              Ekansh Patidar
            </div>

            <div className="hidden md:flex items-center space-x-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="relative text-[var(--text-secondary)] hover:text-[var(--text-primary)] px-2 py-2 transition-all duration-300 group"
                >
                  {item.label}
                  {/* Gradient underline on hover */}
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#14B8A6] to-[#2563EB] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full"></span>
                </button>
              ))}
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-[var(--text-primary)]"
            >
              <div className={`icon-${isOpen ? 'x' : 'menu'} text-2xl`}></div>
            </button>
          </div>

          {isOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-colors py-2"
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>
    );
  } catch (error) {
    console.error('Navigation component error:', error);
    return null;
  }
}