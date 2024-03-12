import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
      {/* <!-- Navbar Start --> */}
      <div className="container-fluid fixed-top px-0 wow fadeIn" data-wow-delay="0.1s">
                <div className="top-bar row gx-0 align-items-center d-none d-lg-flex">
                    <div className="col-lg-6 px-5 text-start">
                        <small><i className="fa fa-map-marker-alt text-primary me-2"></i>123 Street, New York, USA</small>
                        <small className="ms-4"><i className="fa fa-clock text-primary me-2"></i>9.00 am - 9.00 pm</small>
                    </div>
                    <div className="col-lg-6 px-5 text-end">
                        <small><i className="fa fa-envelope text-primary me-2"></i>info@example.com</small>
                        <small className="ms-4"><i className="fa fa-phone-alt text-primary me-2"></i>+012 345 6789</small>
                    </div>
                </div>

                <nav className="navbar navbar-expand-lg navbar-light py-lg-0 px-lg-5 wow fadeIn" data-wow-delay="0.1s">
                    <a href="index.html" className="navbar-brand ms-4 ms-lg-0">
                        <h1 className="display-5 text-primary m-0">WEB_PR</h1>
                    </a>
                    <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse"
                        data-bs-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <div className="navbar-nav ms-auto p-4 p-lg-0">
                            <Link to="/" className="nav-item nav-link active">Home</Link>
                            <Link to="/about" className="nav-item nav-link">About</Link>
                            <Link to="/service" className="nav-item nav-link">Services</Link>
                            <div className="nav-item dropdown">
                                <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                                <div className="dropdown-menu border-light m-0">
                                    <Link to="/projects" className="dropdown-item">Projects</Link>
                                    <Link to="/features" className="dropdown-item">Features</Link>
                                    <Link to="/member" className="dropdown-item">Team Member</Link>
                                    <Link to="/testimonial" className="dropdown-item">Testimonial</Link>
                                    <Link to="/" className="dropdown-item">404 Page</Link>
                                </div>
                            </div>
                            <Link to="/contact" className="nav-item nav-link">Contact</Link>
                        </div>
                        <div className="d-none d-lg-flex ms-2">
                            <a className="btn btn-light btn-sm-square rounded-circle ms-3" href="">
                                <small className="fab fa-facebook-f text-primary"></small>
                            </a>
                            <a className="btn btn-light btn-sm-square rounded-circle ms-3" href="">
                                <small className="fab fa-twitter text-primary"></small>
                            </a>
                            <a className="btn btn-light btn-sm-square rounded-circle ms-3" href="">
                                <small className="fab fa-linkedin-in text-primary"></small>
                            </a>
                        </div>
                    </div>
                </nav>
            </div>
            
            {/* <!-- Navbar End --> */}

    </>
  )
}

export default Header
