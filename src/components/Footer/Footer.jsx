import React from 'react';
import { about } from '../../configs';

function Footer(){
    return (
      <div id="Footer">
        <div className="iconsContainer">
          <a
            href={about.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="icon is-large">
              <i className="fab fa-github fa-2x colorWhite"></i>
            </span>
          </a>
          <a
            href={about.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="icon is-large">
              <i className="fab fa-linkedin fa-2x colorWhite" ></i>            
            </span>
          </a>
          <a
            href='/resume.pdf'
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="icon is-large">
              <i className="fas fa-file fa-2x colorWhite"></i>
            </span>
          </a>
        </div>
        <button
          className="button is-link scrollToTopBtn"
          href="#Home"
        >
          <span className="icon is-small">
            <i className="fas fa-arrow-up"></i>
          </span>
        </button>
      </div>
    );
}

export default Footer;
