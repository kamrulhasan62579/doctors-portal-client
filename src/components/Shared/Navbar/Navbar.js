import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
  <div>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <h3>Doctors Clinic</h3>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link me-5 active" to="/home">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link me-5" to="/blog">Blog</Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link me-5 " to="/dentalServices">Dental Services</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link me-5 " to="/dashboard">Dashboard</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link me-5 " to="/login">Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>
       </nav>
     </div>
    );
};

export default Navbar;