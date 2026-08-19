import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import brandMark from '../../assets/brand-mark.svg';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
];

export function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="portfolio-navbar fixed-top">
      <nav className="navbar navbar-expand-md portfolio-navbar-bar">
        <div className="container-fluid px-4 px-lg-5">
          <a className="navbar-brand d-flex align-items-center gap-2 portfolio-brand" href="#top" onClick={closeMenu}>
            <img className="portfolio-brand-image" src={brandMark} alt="" />
            <span>Blenis.</span>
          </a>

          <button
            className="navbar-toggler portfolio-toggler"
            type="button"
            aria-controls="portfolioNavigation"
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

          <div
            className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`}
            id="portfolioNavigation"
          >
            <div className="navbar-nav ms-auto align-items-md-center gap-md-2">
              {links.map((link) => (
                <a
                  className="nav-link portfolio-nav-link"
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                >
                  {link.label}
                </a>
              ))}
              <a
                className="btn portfolio-primary rounded-pill px-4"
                href="mailto:hello@example.com"
                onClick={closeMenu}
              >
                Get in touch
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
