import React from "react";
import "./App.css";

import { Router } from "@gatsbyjs/reach-router";
import Home from "./pages/Home";
import SinglePost from "./pages/SinglePost";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Home path="/" />
        <SinglePost path="/posts/:slug" />
        <Contact path="/contact" />
      </Router>
    </div>
  );
}

export default App;
