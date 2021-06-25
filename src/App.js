import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar";
import TopCarousel from "./components/topCarousel";
import About from "./components/about";
import TechStack from "./components/techStack";
import Certs from "./components/certs";
import Projects from "./components/projects";
import Contact from "./components/contact";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <TopCarousel></TopCarousel>
      <About></About>
      <TechStack></TechStack>
      <Certs></Certs>
      <Projects></Projects>
      <Contact></Contact>
    </div>
  );
}

export default App;
