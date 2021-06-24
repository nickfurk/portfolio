import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar";
import TopCarousel from "./components/topCarousel";
import About from "./components/about";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <TopCarousel></TopCarousel>
      <About></About>
    </div>
  );
}

export default App;
