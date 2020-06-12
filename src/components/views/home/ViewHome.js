import React from "react";
import Login from "../../elements/login/Login";
import Navbar from "../../elements/header/Navbar";
import HomeText from "./HomeText";
import Footer from "../../elements/footer/Footer";

function ViewHome() {
  return (
    <>
      <Navbar />
      <div className="home-banner"></div>
      <div className="contentContainer">
        <div className="container my-container">
          <div className="row justify-content-between my-row">
            <div className="col-md-6 col-sm-6 my-row-Home">
              <HomeText />
            </div>
            <div className="col-md-4 col-sm-6 my-col-Login">
              <Login />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ViewHome;
