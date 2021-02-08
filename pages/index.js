import React from "react";
import Home from "../src/components/Home/Home";
import AboutMe from "../src/components/About/About";
import Contact from "../src/components/Contact/Contact";
import Projects from "../src/components/Projects/Projects";
import Skills from "../src/components/Skills/Skills";
import Footer from "../src/components/Footer/Footer";
import NavBar from "../src/components/NavBar/NavBar";

function bulma() {
	return (
		<div className="App">
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
