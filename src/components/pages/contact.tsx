import { Download } from "lucide-react";
import { contactLinks } from "../../constants/portfolio.constants";
import { withBase } from "../../utils/paths";

export const Contact = () => (
  <div className="d-flex flex-wrap justify-content-center gap-3">
    <a
      className="btn portfolio-primary rounded-pill px-4"
      href={withBase("Blenisjm_Resume.pdf")}
      download
    >
      <Download size={18} className="me-2" aria-hidden="true" />
      Download resume
    </a>
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
);
