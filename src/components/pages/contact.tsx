import { Download } from "lucide-react";
import { contactLinks } from "../../constants/portfolio.constants";

export const Contact = () => (
  <section
    className="portfolio-section container py-5"
    id="contact"
    aria-labelledby="contact-heading"
  >
    <div className="row justify-content-between align-items-end g-4">
      <div className="col-lg-7">
        <p className="portfolio-kicker mb-2">04</p>
        <h2 id="contact-heading" className="display-3 fw-semibold">
          Let&apos;s connect.
        </h2>
        <p className="portfolio-copy lead mb-0">
          I&apos;m always open to conversations about new opportunities,
          interesting projects, and ways to build useful things together.
        </p>
      </div>

      <div className="col-lg-auto">
        <a
          className="btn portfolio-primary rounded-pill px-4"
          href="/Blenisjm_Resume.pdf"
          download
        >
          <Download size={18} className="me-2" aria-hidden="true" />
          Download resume
        </a>
      </div>
    </div>

    <div className="d-flex flex-wrap gap-3 mt-5">
      {contactLinks.map(({ label, href, icon: Icon }) => (
        <a
          className="btn portfolio-link d-inline-flex align-items-center gap-2"
          href={href}
          key={label}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noreferrer" : undefined}
        >
          <Icon size={18} aria-hidden="true" />
          {label}
        </a>
      ))}
    </div>
  </section>
);
