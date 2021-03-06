import React from "react";

const Home = (props) => {
  return (
    <>
          <header className="masthead" id="page-top" >
            <div className="container px-4 px-lg-5 h-100" >
              <div className="row gx-4 gx-lg-5 h-100 align-items-center justify-content-center text-center">
                    <div className="col-lg-8 align-self-end">
                </div>
                <div className="col-lg-8 align-self-baseline">
                  <p className="text-white-75 mb-5">
                    Start Bootstrap can help you build better websites using the
                    Bootstrap framework! Just download a theme and start
                    customizing, no strings attached!
                  </p>
                  <a className="btn btn-primary btn-xl" href="#about">
                    Find Out More
                  </a>
                </div>
              </div>
            </div>
          </header>
          
          <section className="page-section bg-primary" id="about">
            <div className="container px-4 px-lg-5">
              <div className="row gx-4 gx-lg-5 justify-content-center">
                <div className="col-lg-8 text-center">
                  <h2 className="text-white mt-0">We've got what you need!</h2>
                  <hr className="divider divider-light" />
                  <p className="text-white-75 mb-4">
                    Start Bootstrap has everything you need to get your new
                    website up and running in no time! Choose one of our open
                    source, free to download, and easy to use themes! No strings
                    attached!
                  </p>
                  <a className="btn btn-light btn-xl" href="#services">
                    Get Started!
                  </a>
                </div>
              </div>
            </div>
          </section>
          <section className="page-section" id="services">
            <div className="container px-4 px-lg-5">
              <h2 className="text-center mt-0">At Your Service</h2>
              <hr className="divider" />
              <div className="row gx-4 gx-lg-5">
                <div className="col-lg-3 col-md-6 text-center">
                  <div className="mt-5">
                    <div className="mb-2">
                      <i className="bi-gem fs-1 text-primary"></i>
                    </div>
                    <h3 className="h4 mb-2">Sturdy Themes</h3>
                    <p className="text-muted mb-0">
                      Our themes are updated regularly to keep them bug free!
                    </p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 text-center">
                  <div className="mt-5">
                    <div className="mb-2">
                      <i className="bi-laptop fs-1 text-primary"></i>
                    </div>
                    <h3 className="h4 mb-2">Up to Date</h3>
                    <p className="text-muted mb-0">
                      All dependencies are kept current to keep things fresh.
                    </p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 text-center">
                  <div className="mt-5">
                    <div className="mb-2">
                      <i className="bi-globe fs-1 text-primary"></i>
                    </div>
                    <h3 className="h4 mb-2">Ready to Publish</h3>
                    <p className="text-muted mb-0">
                      You can use this design as is, or you can make changes!
                    </p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 text-center">
                  <div className="mt-5">
                    <div className="mb-2">
                      <i className="bi-heart fs-1 text-primary"></i>
                    </div>
                    <h3 className="h4 mb-2">Made with Love</h3>
                    <p className="text-muted mb-0">
                      Is it really open source if it's not made with love?
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          <div id="portfolio">
            <div className="container-fluid p-0">
              <div className="row g-0">
                <div className="col-lg-4 col-sm-6">
                  <a
                    className="portfolio-box"
                    href="assets/img/portfolio/fullsize/1.jpg"
                    title="Project Name"
                  >
                    <img
                      className="img-fluid"
                      src="assets/img/portfolio/thumbnails/1.jpg"
                      alt="..."
                    />
                    <div className="portfolio-box-caption">
                      <div className="project-category text-white-50">Category</div>
                      <div className="project-name">Project Name</div>
                    </div>
                  </a>
                </div>
                <div className="col-lg-4 col-sm-6">
                  <a
                    className="portfolio-box"
                    href="assets/img/portfolio/fullsize/2.jpg"
                    title="Project Name"
                  >
                    <img
                      className="img-fluid"
                      src="assets/img/portfolio/thumbnails/2.jpg"
                      alt="..."
                    />
                    <div className="portfolio-box-caption">
                      <div className="project-category text-white-50">Category</div>
                      <div className="project-name">Project Name</div>
                    </div>
                  </a>
                </div>
                <div className="col-lg-4 col-sm-6">
                  <a
                    className="portfolio-box"
                    href="assets/img/portfolio/fullsize/3.jpg"
                    title="Project Name"
                  >
                    <img
                      className="img-fluid"
                      src="assets/img/portfolio/thumbnails/3.jpg"
                      alt="..."
                    />
                    <div className="portfolio-box-caption">
                      <div className="project-category text-white-50">Category</div>
                      <div className="project-name">Project Name</div>
                    </div>
                  </a>
                </div>
                <div className="col-lg-4 col-sm-6">
                  <a
                    className="portfolio-box"
                    href="assets/img/portfolio/fullsize/4.jpg"
                    title="Project Name"
                  >
                    <img
                      className="img-fluid"
                      src="assets/img/portfolio/thumbnails/4.jpg"
                      alt="..."
                    />
                    <div className="portfolio-box-caption">
                      <div className="project-category text-white-50">Category</div>
                      <div className="project-name">Project Name</div>
                    </div>
                  </a>
                </div>
                <div className="col-lg-4 col-sm-6">
                  <a
                    className="portfolio-box"
                    href="assets/img/portfolio/fullsize/5.jpg"
                    title="Project Name"
                  >
                    <img
                      className="img-fluid"
                      src="assets/img/portfolio/thumbnails/5.jpg"
                      alt="..."
                    />
                    <div className="portfolio-box-caption">
                      <div className="project-category text-white-50">Category</div>
                      <div className="project-name">Project Name</div>
                    </div>
                  </a>
                </div>
                <div className="col-lg-4 col-sm-6">
                  <a
                    className="portfolio-box"
                    href="assets/img/portfolio/fullsize/6.jpg"
                    title="Project Name"
                  >
                    <img
                      className="img-fluid"
                      src="assets/img/portfolio/thumbnails/6.jpg"
                      alt="..."
                    />
                    <div className="portfolio-box-caption p-3">
                      <div className="project-category text-white-50">Category</div>
                      <div className="project-name">Project Name</div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          

          <section className="page-section" id="contact">
            <div className="container px-4 px-lg-5">
              <div className="row gx-4 gx-lg-5 justify-content-center">
                <div className="col-lg-8 col-xl-6 text-center">
                  <h2 className="mt-0">Let's Get In Touch!</h2>
                  <hr className="divider" />
                  <p className="text-muted mb-5">
                    Ready to start your next project with us? Send us a messages
                    and we will get back to you as soon as possible!
                  </p>
                </div>
              </div>
              <div className="row gx-4 gx-lg-5 justify-content-center mb-5">
                <div className="col-lg-6">
                  <form id="contactForm" data-sb-form-api-token="API_TOKEN">
                    <div className="form-floating mb-3">
                      <input
                        className="form-control"
                        id="name"
                        type="text"
                        placeholder="Enter your name..."
                        data-sb-validations="required"
                      />
                      <label htmlFor="name">Full name</label>
                      <div
                        className="invalid-feedback"
                        data-sb-feedback="name:required"
                      >
                        A name is required.
                      </div>
                    </div>
                    <div className="form-floating mb-3">
                      <input
                        className="form-control"
                        id="email"
                        type="email"
                        placeholder="name@example.com"
                        data-sb-validations="required,email"
                      />
                      <label htmlFor="email">Email address</label>
                      <div
                        className="invalid-feedback"
                        data-sb-feedback="email:required"
                      >
                        An email is required.
                      </div>
                      <div
                        className="invalid-feedback"
                        data-sb-feedback="email:email"
                      >
                        Email is not valid.
                      </div>
                    </div>
                    <div className="form-floating mb-3">
                      <input
                        className="form-control"
                        id="phone"
                        type="tel"
                        placeholder="(123) 456-7890"
                        data-sb-validations="required"
                      />
                      <label htmlFor="phone">Phone number</label>
                      <div
                        className="invalid-feedback"
                        data-sb-feedback="phone:required"
                      >
                        A phone number is required.
                      </div>
                    </div>
                    <div className="form-floating mb-3">
                      <textarea
                        className="form-control"
                        id="message"
                        type="text"
                        placeholder="Enter your message here..."
                        data-sb-validations="required"
                      ></textarea>
                      <label htmlFor="message">Message</label>
                      <div
                        className="invalid-feedback"
                        data-sb-feedback="message:required"
                      >
                        A message is required.
                      </div>
                    </div>

                    <div className="d-none" id="submitSuccessMessage">
                      <div className="text-center mb-3">
                        <div className="fw-bolder">Form submission successful!</div>
                        To activate this form, sign up at
                        <br />
                        <a href="https://startbootstrap.com/solution/contact-forms">
                          https://startbootstrap.com/solution/contact-forms
                        </a>
                      </div>
                    </div>

                    <div className="d-none" id="submitErrorMessage">
                      <div className="text-center text-danger mb-3">
                        Error sending message!
                      </div>
                    </div>
                    <div className="d-grid">
                      <button
                        className="btn btn-primary btn-xl disabled"
                        id="submitButton"
                        type="submit"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div className="row gx-4 gx-lg-5 justify-content-center">
                <div className="col-lg-4 text-center mb-5 mb-lg-0">
                  <i className="bi-phone fs-2 mb-3 text-muted"></i>
                  <div>+1 (555) 123-4567</div>
                </div>
              </div>
            </div>
          </section>
          
    </>
  );
};
export default Home;
