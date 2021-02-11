import React from "react";

function NavBar() {
  return (
      <nav className="navbar is-dark is-fixed-top py-5" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="https://bulma.io">
            <img
              src="https://bulma.io/images/bulma-logo.png"
              width="112"
              height="28"
            />
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

            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">More</a>

              <div className="navbar-dropdown">
                <a className="navbar-item">About</a>
                <a className="navbar-item">Jobs</a>
                <a className="navbar-item">Contact</a>
                <hr className="navbar-divider" />
                <a className="navbar-item">Report an issue</a>
              </div>
            </div>
            <a className="navbar-item">Documentation</a>
          </div>


        </div>
      </nav>
  );
}

export default NavBar;
