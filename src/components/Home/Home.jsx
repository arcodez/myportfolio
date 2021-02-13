import React from "react";
import { about } from "../../configs";
import TextAnimation from "../Text/TextAnimation";

function Home() {
  return (
    <div id="Home">
      <section className="hero is-large is-fullheight-with-navbar sectionOverride has-text-centered">
        <div style={{ width: "90%" }}>
          <h1 className="title has-text-white">
            {`${about.firstName} ${about.lastName}`}
          </h1>
          <h2 className="subtitle has-text-white">{about.shortDesc}</h2>
          <center>
            <div className="buttons" style={{ display: 'block', margin: 'auto' }}>
              <a className="button is-success is-medium" href="#Projects">
                Projects
              </a>
              <a className="button is-success is-medium" href="#About">
                Resume
              </a>
            </div>
          </center>
        </div>
      </section>
    </div>
  );
}

export default Home;
