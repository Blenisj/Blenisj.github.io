import { useState } from "react";
import { Menu, X } from "lucide-react";
import { navigationLinks } from "../../constants/portfolio.constants";

export const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="position-fixed top-0 start-50 translate-middle-x w-100 px-3 mt-2 z-3">
      <nav
        className="navbar position-relative navbar-expand-lg  border-secondary rounded-pill shadow mx-auto w-100 px-4 py-2 overflow-hidden"
        style={{
          maxWidth: 800,
          backgroundColor:
            "color-mix(in srgb, var(--portfolio-background) 75%, transparent)",
        }}
      >
        <div className="container-fluid d-flex align-items-center justify-content-between gap-4 p-0">
          <a
            className="navbar-brand small fw-bold"
            style={{ color: "var(--portfolio-muted)" }}
            href="#top"
            onClick={closeMenu}
          >
            <span>Blenis</span>
          </a>

          <button
            className="navbar-toggler border-secondary"
            type="button"
            aria-controls="portfolioNavigation"
            aria-expanded={isMenuOpen}
            aria-label={
              isMenuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

          <div
            className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`}
            id="portfolioNavigation"
          >
            <div className="navbar-nav ms-auto align-items-lg-center gap-lg-3 ">
              {navigationLinks.map((link) => (
                <a
                  className="nav-link"
                  style={{ color: "var(--portfolio-muted)" }}
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                >
                  {link.label}
                </a>
              ))}
              <a
                className="btn portfolio-primary rounded-pill px-4"
                href="#contact"
                onClick={closeMenu}
              >
                Get in touch
              </a>
            </div>
          </div>
        </div>
        <div className="navbar-scroll-progress" aria-hidden="true">
          <div className="navbar-scroll-progress-fill" />
        </div>
      </nav>
    </header>
  );
};
