import React from "react";
import logo from "../assets/img/Logo.png";
import email from "../assets/img/mail.png";
import file from "../assets/img/File.png";
import person from "../assets/img/person.png";
import phone from "../assets/img/Phone.png";

import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <header>
        <nav className="navbar navbar-dark  .text-light navbar-expand-lg">
          <div className="container-fluid ">
            <a className="navbar-bran" href="/">
              <img className="logo" src={logo} alt="" />
            </a>
            <button
              id="button"
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span id="button2" className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse  " id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <a className="nav-link " aria-current="page" href="/">
                  <img src={email} alt="mailto:ericmirandajob@gmail.com" />
                  ericmirandajob@gmail.com
                </a>
                <a className="nav-link" href="/">
                  <img src={file} alt="" />
                  Works
                </a>
                <a className="nav-link" href="/">
                  <img src={phone} alt="" />
                  Contato
                </a>
                <a className="nav-link " href="/">
                  <img src={person} alt="" />
                  Sobre mim
                </a>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
