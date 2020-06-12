import React, { useState } from "react";

const Styles = () => {
 
  return (
    <>
      <button
        className="btn btn-outline-light my-2 my-sm-0"
        id="navbarDropdown"
        role="button"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        Style
      </button>
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
    </>
  );
};
