import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./Navbar.css";
import { Link ,NavLink,useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const currentPath = location.pathname;
  currentPath.startsWith('/');

  return (
    <nav className="navbar navbar-expand-lg navbar-light mainColor w-100 position-fixed top-0 px-5 z-3">
      <div className="container-fluid px-4 py-2">
        <Link className="navbar-brand text-light fw-bolder fs-4" to="#">
          START FRAMEWORK
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item px-2 fw-bolder">
              <NavLink className={`nav-link ${currentPath === '/' ? 'active' : ''}`} to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item px-2 fw-bolder">
              <NavLink className={`nav-link ${currentPath === '/portfolio' ? 'active' : ''}`} to="/portfolio">
                Portfolio 
              </NavLink>
            </li>
            <li className="nav-item px-2 fw-bolder">
              <NavLink className={`nav-link ${currentPath === '/contact' ? 'active' : ''}`} to="/contact">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
