import React from "react";

function Project() {
  return (
    <>
      <title>Abel Projects</title>
      <link rel="stylesheet" href="assets/css/main.css" />
      <noscript>
        <link rel="stylesheet" href="assets/css/noscript.css" />
      </noscript>
      {/* Main */}
      <div id="main">
        {/* Header */}
        <header id="header" className="has-text-centered">
          <a href="/">
            <h1>Home</h1>
          </a>
          <p>
            Just another fine responsive site template by
            <a href="#">HTML5 UP</a>
          </p>
          <ul className="icons">
            <li>
              <a href="#" className="icon brands fa-twitter">
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a href="#" className="icon brands fa-instagram">
                <span className="label">Instagram</span>
              </a>
            </li>
            <li>
              <a href="#" className="icon brands fa-github">
                <span className="label">Github </span>
              </a>
            </li>
            <li>
              <a href="#" className="icon fa-envelope">
                <span className="label">Email</span>
              </a>
            </li>
          </ul>
        </header>
        {/* Thumbnail */}
        <section id="thumbnails">
          <article>
            <a
              className="thumbnail"
              href="images/fulls/01.jpg"
              data-position="left center"
            >
              <img src="images/thumbs/01.jpg" />
            </a>
            <h2>Diam tempus accumsan</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </article>
          <article>
            <a className="thumbnail" href="images/fulls/02.jpg">
              <img src="images/thumbs/02.jpg" />
            </a>
            <h2>Vivamus convallis libero</h2>
            <p>
              Sed velit lacus, laoreet at venenatis convallis in lorem
              tincidunt.
            </p>
          </article>
          <article>
            <a
              className="thumbnail"
              href="images/fulls/03.jpg"
              data-position="top center"
            >
              <img src="images/thumbs/03.jpg" />
            </a>
            <h2>Nec accumsan enim felis</h2>
            <p>
              Maecenas eleifend tellus ut turpis eleifend, vitae pretium
              faucibus.
            </p>
          </article>
          <article>
            <a className="thumbnail" href="images/fulls/04.jpg">
              <img src="images/thumbs/04.jpg" />
            </a>
            <h2>Donec maximus nisi eget</h2>
            <p>
              Tristique in nulla vel congue. Sed sociis natoque parturient
              nascetur.
            </p>
          </article>
          <article>
            <a
              className="thumbnail"
              href="images/fulls/05.jpg"
              data-position="top center"
            >
              <img src="images/thumbs/05.jpg" />
            </a>
            <h2>Nullam vitae nunc vulputate</h2>
            <p>
              In pellentesque cursus velit id posuere. Donec vehicula nulla.
            </p>
          </article>
          <article>
            <a className="thumbnail" href="images/fulls/06.jpg">
              <img src="images/thumbs/06.jpg" />
            </a>
            <h2>Phasellus magna faucibus</h2>
            <p>
              Nulla dignissim libero maximus tellus varius dictum ut posuere
              magna.
            </p>
          </article>
          <article>
            <a className="thumbnail" href="images/fulls/07.jpg">
              <img src="images/thumbs/07.jpg" />
            </a>
            <h2>Proin quis mauris</h2>
            <p>
              Etiam ultricies, lorem quis efficitur porttitor, facilisis ante
              orci urna.
            </p>
          </article>
          <article>
            <a className="thumbnail" href="images/fulls/08.jpg">
              <img src="images/thumbs/08.jpg" />
            </a>
            <h2>Gravida quis varius enim</h2>
            <p>
              Nunc egestas congue lorem. Nullam dictum placerat ex sapien tortor
              mattis.
            </p>
          </article>
          <article>
            <a className="thumbnail" href="images/fulls/09.jpg">
              <img src="images/thumbs/09.jpg" />
            </a>
            <h2>Morbi eget vitae adipiscing</h2>
            <p>
              In quis vulputate dui. Maecenas metus elit, dictum praesent
              lacinia lacus.
            </p>
          </article>
          <article>
            <a className="thumbnail" href="images/fulls/10.jpg">
              <img src="images/thumbs/10.jpg" />
            </a>
            <h2>Habitant tristique senectus</h2>
            <p>
              Vestibulum ante ipsum primis in faucibus orci luctus ac tincidunt
              dolor.
            </p>
          </article>
          <article>
            <a className="thumbnail" href="images/fulls/11.jpg">
              <img src="images/thumbs/11.jpg" />
            </a>
            <h2>Pharetra ex non faucibus</h2>
            <p>
              Ut sed magna euismod leo laoreet congue. Fusce congue enim
              ultricies.
            </p>
          </article>
          <article>
            <a className="thumbnail" href="images/fulls/12.jpg">
              <img src="images/thumbs/12.jpg" />
            </a>
            <h2>Mattis lorem sodales</h2>
            <p>
              Feugiat auctor leo massa, nec vestibulum nisl erat faucibus,
              rutrum nulla.
            </p>
          </article>
        </section>
        {/* Footer */}
        <footer id="footer">
          <ul className="copyright">
            <li>© Untitled.</li>
            <li>
              Design: <a href="http://html5up.net">HTML5 UP</a>.
            </li>
          </ul>
        </footer>
      </div>
      {/* Scripts */}
      <script src="assets/js/jquery.min.js"></script>
      <script src="assets/js/browser.min.js"></script>
      <script src="assets/js/breakpoints.min.js"></script>
      <script src="assets/js/main.js"></script>
    </>
  );
}

export default Project;
