/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Scroll from "react-scroll";

const NavBarItems = [
  {
    text: "Home",
  },
  {
    text: "About",
  },
  {
    text: "Projects",
  },
  {
    text: "Skills",
  },
  {
    text: "Contact",
  },
];

function NavBar() {
  const state = {
    hamburgerIsOpen: false,
  };

  return (
    <nav
      className="navbar is-link is-fixed-top"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <a
          role="button"
          className={`navbar-burger ${
            state.hamburgerIsOpen ? "is-active" : ""
          }`}
          aria-label="menu"
          aria-expanded="false"
          onClick={() =>
            setState((state) => ({ hamburgerIsOpen: !state.hamburgerIsOpen }))
          }
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div
        className={`navbar-menu ${state.hamburgerIsOpen ? "is-active" : ""}`}
      >
        <div className="navbar-end">
          {NavBarItems.map((item) => (
            <a
              key={item.text}
              className="navbar-item"
              onClick={() => {
                Scroll.scroller.scrollTo(item.text, {
                  duration: 500,
                  delay: 100,
                  smooth: true,
                  offset: -52,
                });
              }}
            >
              {item.text}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
