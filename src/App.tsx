import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Projects from "./pages/Projects/Projects";
import WorkExperiences from "./pages/WorkExperience/WorkExperience";
import Resume from "./pages/Resume/Resume";
import Contact from "./pages/Contact/Contact";
import SideBar from "./components/SideBar/SideBar";

const App: React.FC = () => (
  <div className="app">
    <Router>
      gi
      <SideBar />
      <div className="routes">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/work-experience" element={<WorkExperiences />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  </div>
);

export default App;
