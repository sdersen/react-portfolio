import React from "react";
import "./App.css";
import NotFound from "./pages/NotFound";
import { Router } from "@gatsbyjs/reach-router";
import Home from "./pages/Home";
import SinglePost from "./pages/SinglePost";
import Contact from "./pages/Contact";
import About from "./pages/About";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Home path="/" />
        <SinglePost path="/posts/:slug" />
        <Contact path="/contact" />
        <About path="/about" />
        <NotFound default />
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
