export const Home = () => {
  return (
    <section className="container min-vh-100 d-flex align-items-center py-5" aria-labelledby="home-heading">
      <div className="row align-items-center g-5 w-100">
        <div className="col-lg-5 home-load-image">
          <div className="overflow-hidden border rounded-3 bg-dark">
            <img
              className="w-100 h-100 object-fit-cover"
              src="/pf_image.JPG"
              alt="Portrait of Jake Blenis"
            />
          </div>
        </div>

        <div className="col-lg-7 home-load-copy">
          <p className="portfolio-kicker mb-3">Cincinnati, Ohio</p>
          <h1 id="home-heading" className="display-1 fw-bold lh-1 mb-0">Jacob Blenis</h1>
          <h2 className="fs-2 fw-normal lh-1 mt-3 mb-0">Software Developer</h2>
          <p className="lead mt-4 mb-0">
            Recent graduate from the University of Cincinnati with a passion for software development. I've built and maintained multiple production-level web applications.
          </p>
          <div className="d-flex flex-wrap gap-3 mt-4">
            <a className="btn portfolio-primary rounded-pill px-4" href="#skills">
              View my skills
            </a>
            <a
              className="btn btn-outline-light rounded-pill px-4"
              href="https://www.linkedin.com/in/jacob-blenis-006251237/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};