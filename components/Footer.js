function Footer() {
  try {
    return (
      <footer className="bg-[var(--bg-secondary)] py-8 border-t border-[var(--border-color)]" data-name="footer" data-file="components/Footer.js">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-[var(--text-secondary)]">
            © 2025 <span className="gradient-text">Ekansh Patidar</span>. Built with passion for product and code.
          </p>
        </div>
      </footer>
    );
  } catch (error) {
    console.error('Footer component error:', error);
    return null;
  }
}