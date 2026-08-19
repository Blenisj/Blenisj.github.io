import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { navigationLinks } from '../../constants/portfolio.constants';

export const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="position-fixed top-0 start-50 translate-middle-x mt-3 z-3">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark bg-opacity-75 border border-secondary rounded-pill shadow px-3">
        <div className="container-fluid">
          <a className="navbar-brand fw-bold me-lg-5 text-light" href="#top" onClick={closeMenu}>
            <span>Blenis</span>
          </a>

          <button
            className="navbar-toggler border-secondary"
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
            <div className="navbar-nav ms-auto align-items-lg-center gap-lg-3">
              {navigationLinks.map((link) => (
                <a
                  className="nav-link text-light"
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                >
                  {link.label}
                </a>
              ))}
              <a
                className="btn btn-danger rounded-pill px-4"
                href="#contact"
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
