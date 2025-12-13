function Contact() {
  try {
    return (
      <section id="contact" className="section-padding" data-name="contact" data-file="components/Contact.js">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-8"><span className="gradient-text">Get In Touch</span></h2>
          <p className="text-[var(--text-secondary)] text-lg mb-8 max-w-2xl">
            I'm always open to discussing new opportunities, collaborations, or just having a chat about product and technology. Feel free to reach out!
          </p>
          <div className="space-y-4">
            <p className="text-lg text-[var(--text-primary)]">
              <span className="text-[var(--text-secondary)]">Email:</span>{' '}
              <a href="mailto:ekanshpatidar007@gmail.com" className="text-[var(--primary-color)] hover:text-[#3b82f6] transition-colors">
                ekanshpatidar007@gmail.com
              </a>
            </p>
            <p className="text-lg text-[var(--text-primary)]">
              <span className="text-[var(--text-secondary)]">Phone:</span>{' '}
              <span>+91-7748892188</span>
            </p>
            <p className="text-lg text-[var(--text-primary)]">
              <span className="text-[var(--text-secondary)]">LinkedIn:</span>{' '}
              <a href="https://www.linkedin.com/in/ekansh-patidar" target="_blank" rel="noopener noreferrer" className="text-[var(--primary-color)] hover:text-[#3b82f6] transition-colors">
                linkedin.com/in/ekansh-patidar
              </a>
            </p>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Contact component error:', error);
    return null;
  }
}