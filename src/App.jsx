import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./pages/Home/Home";
import About from "./pages/About";
import Project from "./pages/Project";

function App() {
  // Conditionally set the basename based on the environment
  const basename = import.meta.env.VITE_APP_BASENAME || "";

  return (
    <Router basename={basename}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project />} />
      </Routes>
    </Router>
  );
}

export default App;
