export const Home = () => {
  return (
    <section className="portfolio-hero container d-flex align-items-center py-5" aria-labelledby="home-heading">
      <div className="portfolio-introduction row align-items-center g-5 w-100">
        <div className="col-lg-5 scroll-reveal scroll-reveal-image">
          <div className="portfolio-portrait-wrap">
            <img
              className="portfolio-portrait"
              src="/pf_image.JPG"
              alt="Portrait of Jake Blenis"
            />
          </div>
        </div>

        <div className="col-lg-7 scroll-reveal scroll-reveal-copy">
          <p className="portfolio-kicker mb-3">Hello, I&apos;m Jake</p>
          <h1 id="home-heading" className="portfolio-heading display-3 fw-semibold">
          </h1>
          <p className="portfolio-copy portfolio-intro-copy lead mt-4 mb-0">
            I&apos;
          </p>
          <a className="btn portfolio-primary rounded-pill px-4 mt-4" href="#projects">
            View my work
          </a>
        </div>
      </div>
    </section>
  );
};