import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar";
import TopCarousel from "./components/topCarousel";
import About from "./components/about";
import TechStack from "./components/techStack";
import Certs from "./components/certs";
import Education from "./components/education";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Connect from "./components/connect";
import Footer from "./components/footer";
import Work from "./components/work";
import Awards from "./components/awards";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      {/* <TopCarousel></TopCarousel> */}
      <About></About>
      <Work></Work>
      <Education></Education>
      <Certs></Certs>
      <Awards></Awards>
      <TechStack></TechStack>
      <Projects></Projects>
      <Footer></Footer>
    </div>
  );
}
export default App;
