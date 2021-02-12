import React from "react";
import Home from "../src/components/Home/Home";
import AboutMe from "../src/components/About/About";
import Contact from "../src/components/Contact/Contact";
import Projects from "../src/components/Projects/Projects";
import Skills from "../src/components/Skills/Skills";
import Footer from "../src/components/Footer/Footer";
import NavBar from "../src/components/NavBar/NavBar";
import Head from "next/head";

function bulma() {
  return (
    <div className="App">
      {/* Meta Seo */}
      <Head>
        <title>Abel Rodriguez Web Developer</title>
        <meta
          name="description"
          content="Desarrollador Web en tecnologías del fronted principalmente React y Node, con 5 meses de experiencia y aprendizaje rápido y en tecnologia del backend como Mongo"
        />
        <meta name="robots" content="index, follow"></meta>
        <meta property="og:image" content="/meta.jpg" />
      </Head>
      <NavBar />
      <Home />
      <AboutMe />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default bulma;
