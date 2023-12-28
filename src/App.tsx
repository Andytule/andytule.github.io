import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Projects from "./pages/Projects/Projects";
import Experiences from "./pages/Experiences/Experiences";
import Contact from "./pages/Contact/Contact";
import SideBar from "./components/SideBar/SideBar";

const App: React.FC = () => (
  <div className="app">
    <Router>
      <SideBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experiences" element={<Experiences />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  </div>
);

export default App;
