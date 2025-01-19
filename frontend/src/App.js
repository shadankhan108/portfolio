import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import NodeGraphBackground from './components/NodeGraphBackground';
import MatrixBackground from './components/MatrixBackground';
import DynamicScatterBackground from './components/DynamicScatterBackground';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import { useTheme } from './contexts/ThemeProvider';

const App = () => {
  const [background, setBackground] = useState('scatter');
  const { mode } = useTheme(); // Access theme mode (light/dark)

  const toggleBackground = () => {
    const backgrounds = ['scatter', 'matrix', 'nodeGraph'];
    const currentIndex = backgrounds.indexOf(background);
    const nextIndex = (currentIndex + 1) % backgrounds.length;
    setBackground(backgrounds[nextIndex]);
  };

  const renderBackground = () => {
    switch (background) {
      case 'scatter':
        return <DynamicScatterBackground />;
      case 'matrix':
        return <MatrixBackground />;
      case 'nodeGraph':
        return <NodeGraphBackground />;
      default:
        return <DynamicScatterBackground />;
    }
  };

  return (
    <Router>
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '100vh',
          overflow: 'hidden',
        }}
      >
        {/* Dynamic Background */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: -1, // Ensure background stays behind all content
          }}
        >
          {renderBackground()}
        </div>

        {/* Navbar */}
        <Navbar toggleBackground={toggleBackground} />

        {/* Main Content */}
        <div
          style={{
            position: 'relative',
            zIndex: 1, // Keep content above the background
            paddingTop: '64px', // Offset for Navbar height
          }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
