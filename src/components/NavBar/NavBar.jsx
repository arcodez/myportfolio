import React from "react";

function NavBar() {
  return (
      <nav className="navbar is-dark is-fixed-top py-3" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
          <img src="/logo.png" alt="Abel Logo"/>
            <p>Abel Rodriguez </p>
          </a>

          <a
            role="button"
            className="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu is-dark">
          <div className="navbar-end px-5">
            <a className="navbar-item" href="#Home">Home</a>
            <a className="navbar-item" href="#About">About</a>
            <a className="navbar-item" href="#Projects">Projects</a>
            <a className="navbar-item" href="#Skills">Skills</a>
            <a className="navbar-item" href="#Contact">Contact</a>
            <a className="navbar-item">Documentation</a>
          </div>

        </div>
      </nav>
  );
}

export default NavBar;
