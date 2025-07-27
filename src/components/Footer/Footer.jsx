import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "@fortawesome/fontawesome-free/js/all.min.js";
import "./Footer.css";

export default function Footer() {
  return (
    <>
      <div className="d-flex footer position-static bottom-0 flex-column justify-content-center align-items-center text-light w-100">
        <div className="container">
          <div className="row py-5">
            <div className="col-lg-4 py-5 d-flex justify-content-center align-items-center flex-column">
              <h3>LOCATION</h3>
              <p>2215 John Daniel Drive</p>
              <p className="pt-2">Clark, MO 65243</p>
            </div>
            <div className="col-lg-4 py-5 d-flex g-2 justify-content-center align-items-center flex-column">
              <h3>AROUND THE WEB</h3>
              <div className="d-flex justify-content-center align-items-center">
                <a href="https://www.facebook.com/?locale=ar_AR" className="text-light mx-2">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="https://x.com/" className="text-light mx-2">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="https://www.instagram.com/" className="text-light mx-2">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="https://www.linkedin.com/login/ar" className="text-light mx-2">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
            <div className="col-lg-4 py-5 d-flex text-center justify-content-center align-items-center flex-column">
              <h3>ABOUT FREELANCER</h3>
              <p>Freelance is a free to use, licensed Bootstrap theme created by Eng/ Ahmed Barakat</p>
            </div>
          </div>
        </div>
        <div className="copyright d-flex justify-content-center align-items-center text-light w-100 p-4">
          Copyright © Your Website 2021
        </div>
      </div>
    </>
  );
}
