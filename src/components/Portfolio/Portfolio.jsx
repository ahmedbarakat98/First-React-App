import React from "react";
import "./Portfolio.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import car1 from "../../assets/car 1.jpg";
import car2 from "../../assets/car2.jpg";
import car3 from "../../assets/car3.jpg";

export default function Portfolio() {
  return <>
      <div className="container-fluid w-100 pt-5 d-flex flex-column justify-content-center align-items-center">
        <div className="row justify-content-center align-items-center pt-5 position-relative">
          <h1 className="h1 py-3 text-center pt-5 text-color fw-bolder ">
            PORTFOLIO COMPONENT
          </h1>
        </div>
        <div className="row w-100 p-5">

          <div className="col-md-4 mb-4 ">
            <div className="card position-relative overflow-hidden">
              <img src={car1} className="card-img-top" alt="Project 1" />
              <div className="card-body">
                <h5 className="card-title">Lucid Air</h5>
                <p className="card-text">
                  Chevrolet Bolt EV is here today and ready to revolutionize the
                  way you drive electric. It has a long list of impressive
                  characteristics, including some of the most technologically
                  advanced features, stand-out looks and plenty of space.
                </p>
              </div>
              <div className="ad position-absolute bottom-0 end-0 start-0 top-0 bg-dark opacity-75 justify-content-center align-items-center">
                <i className="fa-solid fa-plus font-icon"></i>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4 ">
            <div className="card position-relative overflow-hidden">
              <img src={car2} className="card-img-top" alt="Project 1" />
              <div className="card-body">
                <h5 className="card-title">Lucid Air</h5>
                <p className="card-text">
                  Chevrolet Bolt EV is here today and ready to revolutionize the
                  way you drive electric. It has a long list of impressive
                  characteristics, including some of the most technologically
                  advanced features, stand-out looks and plenty of space.
                </p>
              </div>
              <div className="ad position-absolute bottom-0 end-0 start-0 top-0 bg-dark opacity-75 justify-content-center align-items-center">
                <i className="fa-solid fa-plus font-icon"></i>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4 ">
            <div className="card position-relative overflow-hidden">
              <img src={car3} className="card-img-top" alt="Project 1" />
              <div className="card-body">
                <h5 className="card-title">Lucid Air</h5>
                <p className="card-text">
                  Chevrolet Bolt EV is here today and ready to revolutionize the
                  way you drive electric. It has a long list of impressive
                  characteristics, including some of the most technologically
                  advanced features, stand-out looks and plenty of space.
                </p>
              </div>
              <div className="ad position-absolute bottom-0 end-0 start-0 top-0 bg-dark opacity-75 justify-content-center align-items-center">
                <i className="fa-solid fa-plus font-icon"></i>
              </div>
            </div>
          </div>
          

        </div>
      </div>
    </>
}
