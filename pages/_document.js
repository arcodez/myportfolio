import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="es">
        <Head>
          <link rel="stylesheet" href="/css/About.css" />
          <link rel="stylesheet" href="/css/Contact.css" />
          <link rel="stylesheet" href="/css/Footer.css" />
          <link rel="stylesheet" href="/css/Home.css" />
          <link rel="stylesheet" href="/css/Projects.css" />
          <link rel="stylesheet" href="/css/Skills.css" />
          <link rel="stylesheet" href="/css/ContactForm.css" />
          <link rel="stylesheet" href="/css/bulma.min.css"/>
          <script src="/js/navbar.js"></script>
          <script
            defer
            src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"
          ></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
