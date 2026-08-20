import { useState, useEffect } from "react";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-colors duration-200 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border shadow-lg shadow-black/20"
          : "bg-background/70 backdrop-blur-sm border-b border-border/50"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand */}
          <a
            href="#"
            className="flex items-center gap-2 text-text-primary font-bold tracking-tight text-lg hover:text-accent transition-colors focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 rounded"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-accent inline-block animate-pulse"></span>
            <span>Daniel Gelchu</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Main Navigation">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3.5 py-1.5 text-sm text-text-secondary hover:text-text-primary hover:bg-surface-hover rounded-md transition-colors font-medium focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="ml-3 px-4 py-1.5 text-xs font-mono uppercase tracking-wider bg-accent/15 text-accent-hover border border-accent/30 hover:bg-accent hover:text-white rounded-lg transition-colors focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
            >
              Get In Touch
            </a>
          </nav>

          {/* Mobile Hamburger Button */}
          <div className="md:hidden flex items-center">
            <button
              type="button"
              onClick={() => setIsOpen((prev) => !prev)}
              className="p-2 text-text-secondary hover:text-text-primary hover:bg-surface-hover rounded-lg transition-colors focus-visible:outline-2 focus-visible:outline-accent"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
              aria-label={isOpen ? "Close main menu" : "Open main menu"}
            >
              {isOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <nav
          id="mobile-menu"
          className="md:hidden border-b border-border bg-surface px-4 pt-2 pb-6 space-y-1"
          aria-label="Mobile Navigation"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="block px-3 py-2.5 rounded-lg text-base font-medium text-text-secondary hover:text-text-primary hover:bg-surface-hover transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2">
            <a
              href="#contact"
              onClick={closeMenu}
              className="block w-full text-center px-4 py-2.5 text-sm font-medium bg-accent text-white hover:bg-accent-hover rounded-lg transition-colors"
            >
              Get In Touch
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}

export default Navbar;
