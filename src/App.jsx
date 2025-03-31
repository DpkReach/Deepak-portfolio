import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Header from "./components/Header";
import About from "./pages/About";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import Contact from "./pages/Contact";
import "./styles.css";
import "./styles/About.css";

const PageContainer = styled.div`
  padding-top: 80px; /* Prevents content from hiding behind fixed header */
  min-height: 100vh;
  background: #0d1117;
  color: white;
`;

function App() {
  return (
    <Router>
      <Header />
      <title>Deepak Adimoolam Portfolio</title>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:projectId" element={<ProjectDetail />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
    </Router>
  );
}

export default App;

