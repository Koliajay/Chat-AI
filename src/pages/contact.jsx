// import React from 'react'

function Contact() {
  return (
    <>
  <div className="container-fluid">
    <div className="row">
      <div className="col-lg-3 bg-secondary d-none d-lg-block">
        <a
          href="index.html"
          className="navbar-brand w-100 h-100 m-0 p-0 d-flex align-items-center justify-content-center"
        >
          <h1 className="m-0 display-4 text-primary text-uppercase">Justice</h1>
        </a>
      </div>
      <div className="col-lg-9">
        <div className="row bg-white border-bottom d-none d-lg-flex">
          <div className="col-lg-7 text-left">
            <div className="h-100 d-inline-flex align-items-center py-2 px-3">
              <i className="fa fa-envelope text-primary mr-2" />
              <small>info@example.com</small>
            </div>
            <div className="h-100 d-inline-flex align-items-center py-2 px-2">
              <i className="fa fa-phone-alt text-primary mr-2" />
              <small>+012 345 6789</small>
            </div>
          </div>
          <div className="col-lg-5 text-right">
            <div className="d-inline-flex align-items-center p-2">
              <a
                className="btn btn-sm btn-outline-primary btn-sm-square mr-2"
                href=""
              >
                <i className="fab fa-facebook-f" />
              </a>
              <a
                className="btn btn-sm btn-outline-primary btn-sm-square mr-2"
                href=""
              >
                <i className="fab fa-twitter" />
              </a>
              <a
                className="btn btn-sm btn-outline-primary btn-sm-square mr-2"
                href=""
              >
                <i className="fab fa-linkedin-in" />
              </a>
              <a
                className="btn btn-sm btn-outline-primary btn-sm-square mr-2"
                href=""
              >
                <i className="fab fa-instagram" />
              </a>
              <a
                className="btn btn-sm btn-outline-primary btn-sm-square mr-2"
                href=""
              >
                <i className="fab fa-youtube" />
              </a>
            </div>
          </div>
        </div>
        <nav className="navbar navbar-expand-lg bg-white navbar-light p-0">
          <a href="index.html" className="navbar-brand d-block d-lg-none">
            <h1 className="m-0 display-4 text-primary text-uppercase">
              Justice
            </h1>
          </a>
          <button
            type="button"
            className="navbar-toggler"
            data-toggle="collapse"
            data-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="collapse navbar-collapse justify-content-between"
            id="navbarCollapse"
          >
            <div className="navbar-nav mr-auto py-0">
              <a href="index.html" className="nav-item nav-link">
                Home
              </a>
              <a href="about.html" className="nav-item nav-link">
                About
              </a>
              <a href="service.html" className="nav-item nav-link">
                Practice
              </a>
              <a href="team.html" className="nav-item nav-link">
                Attorneys
              </a>
              <div className="nav-item dropdown">
                <a
                  href="#"
                  className="nav-link dropdown-toggle"
                  data-toggle="dropdown"
                >
                  Dropdown
                </a>
                <div className="dropdown-menu rounded-0 m-0">
                  <a href="#" className="dropdown-item">
                    Menu Item 1
                  </a>
                  <a href="#" className="dropdown-item">
                    Menu Item 2
                  </a>
                  <a href="#" className="dropdown-item">
                    Menu Item 3
                  </a>
                </div>
              </div>
              <a href="contact.html" className="nav-item nav-link active">
                Contact
              </a>
            </div>
            <a href="" className="btn btn-primary mr-3 d-none d-lg-block">
              Get A Quote
            </a>
          </div>
        </nav>
      </div>
    </div>
  </div>
  {/* Header End */}
  {/* Page Header Start */}
  <div className="container-fluid bg-page-header" style={{ marginBottom: 90 }}>
    <div className="container">
      <div
        className="d-flex flex-column align-items-center justify-content-center"
        style={{ minHeight: 400 }}
      >
        <h3 className="display-3 text-white text-uppercase">Contact</h3>
        <div className="d-inline-flex text-white">
          <p className="m-0 text-uppercase">
            <a className="text-white" href="">
              Home
            </a>
          </p>
          <i className="fa fa-angle-double-right pt-1 px-3" />
          <p className="m-0 text-uppercase">Contact</p>
        </div>
      </div>
    </div>
  </div>
  {/* Page Header End */}
  {/* Contact Start */}
  <div className="container-fluid py-5">
    <div className="container py-5">
      <div className="text-center pb-2">
        <h6 className="text-uppercase">Contact Us</h6>
        <h1 className="mb-4">Contact For Any Query</h1>
      </div>
      <div className="row">
        <div className="col-lg-6 mb-5 mb-lg-0">
          <div className="contact-form">
            <div id="success" />
            <form name="sentMessage" id="contactForm" noValidate="novalidate">
              <div className="form-row">
                <div className="col-sm-6 control-group">
                  <input
                    type="text"
                    className="form-control p-4"
                    id="name"
                    placeholder="Your Name"
                    required="required"
                    data-validation-required-message="Please enter your name"
                  />
                  <p className="help-block text-danger" />
                </div>
                <div className="col-sm-6 control-group">
                  <input
                    type="email"
                    className="form-control p-4"
                    id="email"
                    placeholder="Your Email"
                    required="required"
                    data-validation-required-message="Please enter your email"
                  />
                  <p className="help-block text-danger" />
                </div>
              </div>
              <div className="control-group">
                <input
                  type="text"
                  className="form-control p-4"
                  id="subject"
                  placeholder="Subject"
                  required="required"
                  data-validation-required-message="Please enter a subject"
                />
                <p className="help-block text-danger" />
              </div>
              <div className="control-group">
                <textarea
                  className="form-control p-4"
                  rows={6}
                  id="message"
                  placeholder="Message"
                  required="required"
                  data-validation-required-message="Please enter your message"
                  defaultValue={""}
                />
                <p className="help-block text-danger" />
              </div>
              <div>
                <button
                  className="btn btn-primary btn-block"
                  type="submit"
                  id="sendMessageButton"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="col-lg-6" style={{ minHeight: 400 }}>
          <div className="position-relative h-100 rounded overflow-hidden">
            <iframe
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd"
              frameBorder={0}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex={0}
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Contact End */}
  {/* Footer Start */}
  <div
    className="container-fluid bg-secondary text-white pt-5 px-sm-3 px-md-5"
    style={{ marginTop: 90 }}
  >
    <div className="row mt-5">
      <div className="col-lg-4">
        <div
          className="d-flex justify-content-lg-center p-4"
          style={{ background: "rgba(256, 256, 256, .05)" }}
        >
          <i className="fa fa-2x fa-map-marker-alt text-primary" />
          <div className="ml-3">
            <h5 className="text-white">Our Office</h5>
            <p className="m-0">123 Street, New York, USA</p>
          </div>
        </div>
      </div>
      <div className="col-lg-4">
        <div
          className="d-flex justify-content-lg-center p-4"
          style={{ background: "rgba(256, 256, 256, .05)" }}
        >
          <i className="fa fa-2x fa-envelope-open text-primary" />
          <div className="ml-3">
            <h5 className="text-white">Email Us</h5>
            <p className="m-0">info@example.com</p>
          </div>
        </div>
      </div>
      <div className="col-lg-4">
        <div
          className="d-flex justify-content-lg-center p-4"
          style={{ background: "rgba(256, 256, 256, .05)" }}
        >
          <i className="fa fa-2x fa-phone-alt text-primary" />
          <div className="ml-3">
            <h5 className="text-white">Call Us</h5>
            <p className="m-0">+012 345 6789</p>
          </div>
        </div>
      </div>
    </div>
    <div className="row pt-5">
      <div className="col-lg-3 col-md-6 mb-5">
        <a href="index.html" className="navbar-brand">
          <h1 className="m-0 mt-n2 display-4 text-primary text-uppercase">
            Justice
          </h1>
        </a>
        <p>
          Volup amet magna clita tempor. Tempor sea eos vero ipsum. Lorem lorem
          sit sed elitr sed kasd et
        </p>
        <div className="d-flex justify-content-start mt-4">
          <a
            className="btn btn-lg btn-outline-light btn-lg-square mr-2"
            href="#"
          >
            <i className="fab fa-twitter" />
          </a>
          <a
            className="btn btn-lg btn-outline-light btn-lg-square mr-2"
            href="#"
          >
            <i className="fab fa-facebook-f" />
          </a>
          <a
            className="btn btn-lg btn-outline-light btn-lg-square mr-2"
            href="#"
          >
            <i className="fab fa-linkedin-in" />
          </a>
          <a className="btn btn-lg btn-outline-light btn-lg-square" href="#">
            <i className="fab fa-instagram" />
          </a>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 mb-5">
        <h4 className="font-weight-semi-bold text-primary mb-4">
          Popular Links
        </h4>
        <div className="d-flex flex-column justify-content-start">
          <a className="text-white mb-2" href="#">
            <i className="fa fa-angle-right mr-2" />
            Home
          </a>
          <a className="text-white mb-2" href="#">
            <i className="fa fa-angle-right mr-2" />
            About
          </a>
          <a className="text-white mb-2" href="#">
            <i className="fa fa-angle-right mr-2" />
            Services
          </a>
          <a className="text-white mb-2" href="#">
            <i className="fa fa-angle-right mr-2" />
            Attorney
          </a>
          <a className="text-white" href="#">
            <i className="fa fa-angle-right mr-2" />
            Contact
          </a>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 mb-5">
        <h4 className="font-weight-semi-bold text-primary mb-4">Quick Links</h4>
        <div className="d-flex flex-column justify-content-start">
          <a className="text-white mb-2" href="#">
            <i className="fa fa-angle-right mr-2" />
            FAQs
          </a>
          <a className="text-white mb-2" href="#">
            <i className="fa fa-angle-right mr-2" />
            Help
          </a>
          <a className="text-white mb-2" href="#">
            <i className="fa fa-angle-right mr-2" />
            Terms
          </a>
          <a className="text-white mb-2" href="#">
            <i className="fa fa-angle-right mr-2" />
            Privacy
          </a>
          <a className="text-white" href="#">
            <i className="fa fa-angle-right mr-2" />
            Site Map
          </a>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 mb-5">
        <h4 className="font-weight-semi-bold text-primary mb-4">Newsletter</h4>
        <p>
          Rebum labore lorem dolores kasd est, et ipsum amet et at kasd, ipsum
          sea tempor magna tempor. Accu kasd sed ea duo ipsum.
        </p>
        <div className="w-100">
          <div className="input-group">
            <input
              type="text"
              className="form-control border-0"
              style={{ padding: 25 }}
              placeholder="Your Email"
            />
            <div className="input-group-append">
              <button className="btn btn-primary px-4">Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      className="row p-4 mt-5 mx-0"
      style={{ background: "rgba(256, 256, 256, .05)" }}
    >
      <div className="col-md-6 text-center text-md-left mb-3 mb-md-0">
        <p className="m-0 text-white">
          ©{" "}
          <a className="font-weight-bold" href="#">
            Your Site Name
          </a>
          . All Rights Reserved.
        </p>
      </div>
      <div className="col-md-6 text-center text-md-right">
        <p className="m-0 text-white">
          Designed by{" "}
          <a className="font-weight-bold" href="https://htmlcodex.com">
            HTML Codex
          </a>
        </p>
      </div>
    </div>
  </div>
  {/* Footer End */}
  {/* Back to Top */}
  <a href="#" className="btn btn-primary px-3 back-to-top">
    <i className="fa fa-angle-double-up" />
  </a>
</>

  )
}

export default Contact