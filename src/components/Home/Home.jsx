import React from "react";
import "./Home.css";
import picture from "../../assets/Geded.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

export default function Home() {
  return (
    <>
      <div className="container-fluid bg-main w-100 pt-5 ">
        <div className="row justify-content-center align-items-center pt-5 position-relative">
          <div className="d-flex justify-content-center align-items-center circle overflow-hidden my-0 py-5">
            <img className="shadow" src={picture} alt="" />
          </div>
          <h1 className="py-3 text-center text-light pb-5 ">Ahmed Abdelraheem Rihan</h1>
        </div>
      </div>
    </>
  );
}
