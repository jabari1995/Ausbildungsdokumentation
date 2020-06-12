import React from "react";
import Logo from "./BauerLogo.jpg";
import { Link } from "react-router-dom";

function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <a className="navbar-brand ml-5 " href={props.LogoLink}>
        <img src={Logo ? Logo : ""} alt="logo" style={{ width: "35px" }} />
      </a>
      {props.LogoLink ? (
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span>
            <i className="fas fa-bars" style={{ color: "#ddd" }}>
              {" "}
            </i>
          </span>
        </button>
      ) : (
        ""
      )}

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav m-auto">
          <li className="nav-item active">
            <Link
              className="nav-link text-white text-uppercase ml-5"
              to={props.LogoLink ? props.LogoLink : ""}
            >
              {props ? props.Home : ""}&nbsp; {props ? props.icon : ""}{" "}
              <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link text-white text-uppercase ml-5"
              to="/azubi/weeks"
            >
              {props ? props.Wochen : ""}
            </Link>
          </li>{" "}
          <li className="nav-item">
            <Link
              className="nav-link text-white text-uppercase ml-5"
              to="/azubi/weeks/new"
            >
              {props ? props.Berichtsheft : ""}
            </Link>
          </li>
        </ul>
        {props.logout}
      </div>
    </nav>
  );
}

export default Navbar;

/* <li className="nav-item dropdown">
            <Link
              // className="btn btn-outline-light my-2 my-sm-0"
              className="nav-link text-white text-uppercase ml-5"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              to=""
            >
              Style
            </Link>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <button
                className="dropdown-item"
                onClick={() =>
                  setFarbe("navbar navbar-expand-lg navbar-light bg-secondary")
                }
              >
                Secondary
              </button>
              <button
                className="dropdown-item"
                onClick={() =>
                  setFarbe("navbar navbar-expand-lg navbar-light bg-dark")
                }
              >
                dark
              </button>
              <button
                className="dropdown-item"
                onClick={() =>
                  setFarbe("navbar navbar-expand-lg navbar-light bg-primary")
                }
              >
                primary
              </button>
              <button
                className="dropdown-item"
                onClick={() =>
                  setFarbe("navbar navbar-expand-lg navbar-light bg-warning")
                }
              >
                warning
              </button>
              <button
                className="dropdown-item"
                onClick={() =>
                  setFarbe("navbar navbar-expand-lg navbar-light bg-info")
                }
              >
                info
              </button>
              <button
                className="dropdown-item"
                onClick={() =>
                  setFarbe("navbar navbar-expand-lg navbar-light bg-danger")
                }
              >
                danger
              </button>
              <button
                className="dropdown-item"
                onClick={() =>
                  setFarbe("navbar navbar-expand-lg navbar-light bg-success")
                }
              >
                success
              </button>
            </div>
          </li> */
